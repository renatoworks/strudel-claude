/**
 * =============================================================================
 * PLAY API ENDPOINT
 * =============================================================================
 *
 * Signals that playback should start.
 * Change is broadcast to all connected SSE clients.
 *
 * ENDPOINT:
 *   POST /api/play - Set the playing state to true
 */

import { NextResponse } from 'next/server'
import { state } from '../state'

/**
 * POST /api/play
 *
 * Sets isPlaying to true and broadcasts to connected clients.
 */
export async function POST() {
  state.isPlaying = true
  return NextResponse.json({ isPlaying: state.isPlaying })
}
