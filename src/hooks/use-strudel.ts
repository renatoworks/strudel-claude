/**
 * =============================================================================
 * USE STRUDEL HOOK
 * =============================================================================
 *
 * A custom React hook that manages the Strudel REPL lifecycle.
 * Handles script loading, playback state, editor control, and real-time
 * sync with the server via Server-Sent Events.
 *
 * USAGE:
 * ```tsx
 * const { loaded, isPlaying, editorRef, play, stop } = useStrudel()
 * ```
 *
 * RETURNS:
 * - loaded: boolean     - Whether the Strudel script has loaded
 * - isPlaying: boolean  - Whether audio is currently playing
 * - editorRef: ref      - Ref to attach to the strudel-editor element
 * - play: () => void    - Start/update playback
 * - stop: () => void    - Stop playback
 */

import { useEffect, useState, useRef, useCallback } from 'react'

/** CDN URL for the Strudel REPL web component */
const STRUDEL_CDN = 'https://unpkg.com/@strudel/repl@latest'

type ServerState = {
  code: string
  isPlaying: boolean
}

/**
 * Custom hook for managing the Strudel REPL.
 */
export function useStrudel() {
  const [loaded, setLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const editorRef = useRef<HTMLElement>(null)

  // Track last known server state to detect changes
  const lastServerStateRef = useRef<ServerState | null>(null)

  // Callback ref for when playback stops (used by audio recorder)
  const onStopCallbackRef = useRef<(() => void) | null>(null)

  /**
   * Load the Strudel script on mount.
   * The script registers the <strudel-editor> web component globally.
   */
  useEffect(() => {
    const script = document.createElement('script')
    script.src = STRUDEL_CDN
    script.onload = () => setLoaded(true)
    document.head.appendChild(script)
  }, [])

  /**
   * Get the editor instance from the ref.
   */
  const getEditor = useCallback(() => {
    const el = editorRef.current as any
    return el?.editor
  }, [])

  /**
   * Start or update playback.
   * Evaluates the current code in the editor.
   */
  const play = useCallback(async () => {
    const editor = getEditor()
    if (editor) {
      await editor.evaluate()
      setIsPlaying(true)
    }
  }, [getEditor])

  /**
   * Stop all audio playback.
   * Also calls the onStopCallback if registered (used by audio recorder).
   */
  const stop = useCallback(() => {
    const editor = getEditor()
    if (editor) {
      editor.stop()
      setIsPlaying(false)
      // Notify any registered callback (e.g., audio recorder)
      if (onStopCallbackRef.current) {
        onStopCallbackRef.current()
      }
    }
  }, [getEditor])

  /**
   * Register a callback to be called when playback stops.
   * Used by the audio recorder to auto-stop recording.
   */
  const setOnStopCallback = useCallback((callback: (() => void) | null) => {
    onStopCallbackRef.current = callback
  }, [])

  /**
   * Subscribe to Server-Sent Events for real-time state sync.
   * When the server state changes (via API), update the editor accordingly.
   */
  useEffect(() => {
    if (!loaded) return

    const eventSource = new EventSource('/api/events')

    eventSource.onmessage = (event) => {
      const newState: ServerState = JSON.parse(event.data)
      const lastState = lastServerStateRef.current
      const codeChanged = lastState && newState.code !== lastState.code
      const playStateChanged = lastState && newState.isPlaying !== lastState.isPlaying

      // Update code if changed
      if (codeChanged) {
        const editor = getEditor()
        if (editor) {
          editor.setCode(newState.code)
        }
      }

      // Evaluate if:
      // 1. Code changed AND server says we should be playing, OR
      // 2. Play state just changed to true
      if ((codeChanged && newState.isPlaying) || (playStateChanged && newState.isPlaying)) {
        play()
      } else if (playStateChanged && !newState.isPlaying) {
        stop()
      }

      lastServerStateRef.current = newState
    }

    eventSource.onerror = () => {
      // Reconnect on error after a delay
      eventSource.close()
      setTimeout(() => {
        // Effect will re-run and create new connection
      }, 1000)
    }

    return () => {
      eventSource.close()
    }
  }, [loaded, getEditor, play, stop])

  return {
    loaded,
    isPlaying,
    editorRef,
    play,
    stop,
    getEditor,
    setOnStopCallback,
  }
}
