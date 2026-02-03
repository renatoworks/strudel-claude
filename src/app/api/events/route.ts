/**
 * =============================================================================
 * EVENTS API ENDPOINT (Server-Sent Events)
 * =============================================================================
 *
 * Streams state changes to connected clients in real-time.
 *
 * ENDPOINT:
 *   GET /api/events - Opens an SSE stream
 *
 * EVENTS:
 *   - state: Fired when code or isPlaying changes
 *     data: { code: string, isPlaying: boolean }
 */

import { state } from '../state'

export const dynamic = 'force-dynamic'

export async function GET() {
  const encoder = new TextEncoder()
  let unsubscribe: (() => void) | null = null
  let isClosed = false

  const stream = new ReadableStream({
    start(controller) {
      // Send initial state
      const initial = `data: ${JSON.stringify(state.state)}\n\n`
      controller.enqueue(encoder.encode(initial))

      // Subscribe to state changes
      unsubscribe = state.subscribe((newState) => {
        if (isClosed) return
        try {
          const message = `data: ${JSON.stringify(newState)}\n\n`
          controller.enqueue(encoder.encode(message))
        } catch {
          // Controller closed, clean up
          isClosed = true
          if (unsubscribe) unsubscribe()
        }
      })
    },
    cancel() {
      // Called when client disconnects
      isClosed = true
      if (unsubscribe) unsubscribe()
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  })
}
