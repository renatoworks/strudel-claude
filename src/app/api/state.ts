/**
 * =============================================================================
 * SHARED APPLICATION STATE WITH EVENT EMITTER
 * =============================================================================
 *
 * In-memory state for the Strudel REPL with Server-Sent Events support.
 * State changes are broadcast to all connected clients.
 */

import { DEFAULT_CODE } from '@/lib/constants'

export type AppState = {
  code: string
  isPlaying: boolean
}

type Listener = (state: AppState) => void

/**
 * Simple event emitter for broadcasting state changes.
 */
class StateEmitter {
  private listeners: Set<Listener> = new Set()

  private _state: AppState = {
    code: DEFAULT_CODE,
    isPlaying: false,
  }

  get state(): AppState {
    return this._state
  }

  get code(): string {
    return this._state.code
  }

  set code(value: string) {
    this._state.code = value
    this.emit()
  }

  get isPlaying(): boolean {
    return this._state.isPlaying
  }

  set isPlaying(value: boolean) {
    this._state.isPlaying = value
    this.emit()
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  private emit(): void {
    this.listeners.forEach(listener => listener(this._state))
  }
}

export const state = new StateEmitter()
