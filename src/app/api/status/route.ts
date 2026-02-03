/**
 * =============================================================================
 * STATUS API ENDPOINT
 * =============================================================================
 *
 * A read-only endpoint to check the current state of the REPL.
 *
 * ENDPOINT:
 *   GET /api/status  - Get current code and playing status
 *
 * USE CASE:
 * Useful for external tools that want to poll the current state
 * without modifying anything. Functionally identical to GET /api/code.
 */

import { NextResponse } from 'next/server'
import { state } from '../state'

/**
 * GET /api/status
 *
 * Returns the current application state.
 *
 * RESPONSE:
 * ```json
 * {
 *   "code": "// Current Strudel code...",
 *   "isPlaying": false
 * }
 * ```
 */
export async function GET() {
  return NextResponse.json({
    code: state.code,
    isPlaying: state.isPlaying,
  })
}
