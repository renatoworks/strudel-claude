/**
 * =============================================================================
 * CODE API ENDPOINT
 * =============================================================================
 *
 * Handles reading and updating the Strudel code stored on the server.
 * Changes are automatically broadcast to connected clients via SSE.
 *
 * ENDPOINTS:
 *   GET  /api/code  - Retrieve the current code and playing status
 *   POST /api/code  - Update the stored code
 */

import { NextResponse } from 'next/server'
import { state } from '../state'

/**
 * GET /api/code
 *
 * Returns the current Strudel code and playing status.
 */
export async function GET() {
  return NextResponse.json({
    code: state.code,
    isPlaying: state.isPlaying,
  })
}

/**
 * POST /api/code
 *
 * Updates the stored Strudel code.
 * Change is broadcast to all connected SSE clients.
 */
export async function POST(request: Request) {
  const body = await request.json()

  if (body.code !== undefined) {
    state.code = body.code
  }

  return NextResponse.json({
    code: state.code,
    isPlaying: state.isPlaying,
  })
}
