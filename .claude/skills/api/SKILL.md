---
name: api
description: Control the Strudel REPL via REST APIs. Use when you need to push code, start/stop playback, or check status.
allowed-tools: Bash(curl *)
---

# Strudel API

Talk to the REPL at `http://localhost:3000`.

---

## Endpoints

| Endpoint | Method | What it does |
|----------|--------|--------------|
| `/api/code` | POST | Push new code |
| `/api/code` | GET | Read current code |
| `/api/play` | POST | Start playback |
| `/api/stop` | POST | Stop playback |
| `/api/status` | GET | Get current state |
| `/api/events` | GET | SSE stream (real-time updates) |

**Real-time sync:** The browser connects to `/api/events` via Server-Sent Events. When you push code or trigger play/stop, the browser updates automatically.

---

## Push Code

```bash
curl -X POST http://localhost:3000/api/code \
  -H "Content-Type: application/json" \
  -d '{"code": "YOUR_CODE_HERE"}'
```

## JSON Escaping Rules (CRITICAL)

The API uses `JSON.parse()`. Invalid escape sequences will cause **500 errors**.

**Valid JSON escapes (these work):**
| Escape | Meaning |
|--------|---------|
| `\"` | Double quote |
| `\\` | Backslash |
| `\n` | Newline |
| `\t` | Tab |
| `\r` | Carriage return |
| `\/` | Forward slash |

**Invalid escapes (these BREAK the API):**
- `\x`, `\a`, `\s`, `\d`, `\w`, or any backslash + letter not in the table above
- Unescaped backslashes

**Examples:**

```bash
# ✅ GOOD - properly escaped
curl -X POST http://localhost:3000/api/code \
  -H "Content-Type: application/json" \
  -d '{"code": "$: s(\"bd sd hh hh\")"}'

# ❌ BAD - \s is not a valid JSON escape
curl -X POST http://localhost:3000/api/code \
  -H "Content-Type: application/json" \
  -d '{"code": "$: s(\"bd\sd\")"}'
```

**Rule of thumb:** If you need a literal backslash in the code, escape it as `\\`

---

## Play / Stop

```bash
curl -X POST http://localhost:3000/api/play
curl -X POST http://localhost:3000/api/stop
```

---

## Typical Flow

1. Push code
2. Play

That's it. The REPL handles the rest.

---

## Multi-line Example

```bash
curl -X POST http://localhost:3000/api/code \
  -H "Content-Type: application/json" \
  -d '{"code": "setcpm(130/4)\n\n$: s(\"bd*4, hh*8\").bank(\"RolandTR909\")\n\n$: note(\"<c2 g1 ab1 bb1>\").s(\"sawtooth\").lpf(400)"}'
```
