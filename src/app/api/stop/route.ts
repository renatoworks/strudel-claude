/**
 * =============================================================================
 * STOP API ENDPOINT
 * =============================================================================
 *
 * Signals that playback should stop.
 * Change is broadcast to all connected SSE clients.
 *
 * ENDPOINT:
 *   POST /api/stop - Set the playing state to false
 */

import { NextResponse } from 'next/server'
import { state } from '../state'

/**
 * POST /api/stop
 *
 * Sets isPlaying to false and broadcasts to connected clients.
 */
export async function POST() {
  state.isPlaying = false
  return NextResponse.json({ isPlaying: state.isPlaying })
}
