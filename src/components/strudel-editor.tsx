/**
 * =============================================================================
 * STRUDEL EDITOR COMPONENT
 * =============================================================================
 *
 * Full-screen Strudel editor with floating playback controls.
 */

'use client'

import { useStrudel } from '@/hooks/use-strudel'
import { useAudioRecorder, formatDuration } from '@/hooks/use-audio-recorder'
import { DEFAULT_CODE } from '@/lib/constants'
import { Play, Square, RefreshCw, Circle, Download, Trash2 } from 'lucide-react'

export function StrudelEditor() {
  const { loaded, isPlaying, editorRef, play, stop } = useStrudel()
  const {
    isRecording,
    duration,
    recordedUrl,
    startRecording,
    stopRecording,
    downloadRecording,
    dismissRecording,
  } = useAudioRecorder(() => null)

  if (!loaded) {
    return <div className="h-screen bg-background" />
  }

  const handleRecordClick = () => {
    if (isRecording) {
      stopRecording()
    } else {
      startRecording()
    }
  }

  return (
    <div className="h-screen w-screen flex flex-col bg-background relative">
      {/* Editor */}
      <div className="editor-container">
        {/* @ts-expect-error - strudel-editor is a custom web component */}
        <strudel-editor ref={editorRef} code={DEFAULT_CODE} lineWrapping />
      </div>

      {/* Recording Preview Toast */}
      {recordedUrl && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 flex flex-col gap-3 bg-card/95 backdrop-blur-lg rounded-xl p-4 shadow-2xl border border-border/50 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <audio src={recordedUrl} controls className="h-10 w-72" />
          <div className="flex gap-2">
            <button
              onClick={dismissRecording}
              className="flex-1 h-9 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center justify-center gap-2 transition-colors text-sm font-medium"
            >
              <Trash2 className="size-4" />
              Discard
            </button>
            <button
              onClick={downloadRecording}
              className="flex-1 h-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-sm font-medium"
            >
              <Download className="size-4" />
              Download
            </button>
          </div>
        </div>
      )}

      {/* Floating Controls */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-card/90 backdrop-blur-lg rounded-full px-2 py-2 shadow-2xl border border-border/50">
        {/* Record Button */}
        <button
          onClick={handleRecordClick}
          className={`h-10 rounded-full flex items-center justify-center gap-2 transition-all ${
            isRecording
              ? 'bg-red-500 text-white px-4 animate-pulse'
              : 'w-10 text-muted-foreground hover:text-red-500 hover:bg-red-500/10'
          }`}
        >
          {isRecording ? (
            <>
              <Square className="size-3 fill-current" />
              <span className="text-sm font-medium">{formatDuration(duration)}</span>
            </>
          ) : (
            <Circle className="size-4 fill-current text-red-500" />
          )}
        </button>

        {/* Play/Stop Button */}
        <button
          onClick={isPlaying ? stop : play}
          className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-105 transition-transform"
        >
          {isPlaying ? <Square className="size-5 fill-current" /> : <Play className="size-5 ml-0.5 fill-current" />}
        </button>

        {/* Refresh Button */}
        <button
          onClick={play}
          className="w-10 h-10 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 flex items-center justify-center transition-colors"
        >
          <RefreshCw className="size-4" />
        </button>
      </div>
    </div>
  )
}
