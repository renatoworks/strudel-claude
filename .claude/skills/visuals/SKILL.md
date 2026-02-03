---
name: visuals
description: Add psychedelic visual feedback to Strudel patterns. Use when you want trippy, colorful, or informative visualizations.
allowed-tools: Bash(curl *)
---

# Strudel Visuals

Make your patterns come alive with visual feedback. Always add visuals - music should be seen, not just heard.

---

## Quick Start

```javascript
// Inline visuals (multiple allowed, rendered in code)
note("c a f e")._pianoroll()
note("c a f e")._spiral()
s("bd sd")._scope()

// Background visuals (one at a time, full page)
note("c a f e").pianoroll()
```

**Rule:** Use `_` prefix for inline visuals (can stack multiple), no prefix for background.

---

## Color Your Patterns

Everything starts with `.color()` - it affects highlighting AND visuals.

```javascript
// Single color
note("c a f e").color("cyan")

// Pattern colors (cycles through)
note("c a f e").color("cyan magenta yellow")

// Hex colors
note("c a f e").color("#ff00ff #00ffff #ffff00")

// Neon acid palette
.color("cyan magenta yellow #ff6600")

// Vaporwave
.color("#ff71ce #01cdfe #05ffa1 #b967ff")

// Fire
.color("#ff0000 #ff6600 #ffff00")
```

---

## Pianoroll / Punchcard

Scrolling note visualization. **The bread and butter of live coding visuals.**

```javascript
// Basic
note("c a f e")._pianoroll()

// Full acid mode
note("c2 eb2 f2 g2")
  .color("cyan magenta")
  ._pianoroll({
    smear: 1,           // Notes leave trails (TRIPPY!)
    cycles: 8,          // Show more cycles
    labels: 1,          // Show note names
    active: "#ff00ff",  // Active note color
    inactive: "#00ffff", // Inactive note color
    vertical: 1,        // Vertical mode
    fold: 1,            // Notes fill full width
  })
```

### All Pianoroll Options

| Option | Type | Default | Effect |
|--------|------|---------|--------|
| `smear` | bool | 0 | **Notes leave solid trails** |
| `fold` | bool | 0 | Notes take full width |
| `cycles` | int | 4 | Cycles visible at once |
| `vertical` | bool | 0 | Vertical orientation |
| `labels` | bool | 0 | Show note labels |
| `playhead` | 0-1 | 0.5 | Playhead position |
| `flipTime` | bool | 0 | Reverse scroll direction |
| `flipValues` | bool | 0 | Flip note positions |
| `active` | color | #FFCA28 | Active note color |
| `inactive` | color | #7491D2 | Inactive note color |
| `background` | color | transparent | Background color |
| `playheadColor` | color | white | Playhead line color |
| `fill` | bool | 0 | Fill all notes |
| `fillActive` | bool | 0 | Fill active notes only |
| `stroke` | bool | 0 | Show note borders |
| `hideInactive` | bool | 0 | Only show active notes |
| `colorizeInactive` | bool | 1 | Use pattern color for inactive |
| `autorange` | bool | 0 | Auto-fit note range |
| `minMidi` | int | 10 | Min note displayed |
| `maxMidi` | int | 90 | Max note displayed |

### Trippy Pianoroll Recipes

```javascript
// Smeared neon trails
._pianoroll({ smear: 1, active: "#ff00ff", inactive: "#00ffff" })

// Vertical waterfall
._pianoroll({ vertical: 1, smear: 1, cycles: 16 })

// Minimal active-only
._pianoroll({ hideInactive: 1, fillActive: 1, cycles: 2 })

// Full labels
._pianoroll({ labels: 1, fill: 1, autorange: 1 })
```

---

## Spiral

Circular visualization - **hypnotic and mesmerizing.**

```javascript
// Basic
note("c a f e")._spiral()

// Trippy spiral
note("c a f e")
  .color("#ff6600 #ff00ff #00ffff")
  ._spiral({
    steady: 0.96,       // Less jumpy (0-1)
    logSpiral: 1,       // Logarithmic spiral (COOL!)
    thickness: 4,       // Line thickness
    fade: 1,            // Fade past/future
    stretch: 2,         // Rotations per cycle
  })
```

### All Spiral Options

| Option | Type | Default | Effect |
|--------|------|---------|--------|
| `steady` | 0-1 | 0 | **Smoothness (0.96 = smooth)** |
| `logSpiral` | bool | 0 | **Logarithmic spiral** |
| `fade` | bool | 1 | Fade past/future |
| `stretch` | num | 1 | Rotations per cycle |
| `size` | num | - | Spiral diameter |
| `thickness` | num | - | Line thickness |
| `inset` | num | 3 | Rotations before start |
| `padding` | num | - | Space around spiral |
| `cap` | string | butt | Line ends: butt/round/square |
| `playheadColor` | color | white | Playhead color |
| `playheadLength` | num | 0.02 | Playhead size |
| `activeColor` | color | - | Active segment color |
| `inactiveColor` | color | - | Inactive segment color |
| `colorizeInactive` | bool | 0 | Use pattern colors |

### Trippy Spiral Recipes

```javascript
// Logarithmic hypnosis
._spiral({ logSpiral: 1, steady: 0.96, thickness: 6 })

// Tight fast spiral
._spiral({ stretch: 4, steady: 0.9, fade: 0 })

// Thick colorful
._spiral({ thickness: 8, colorizeInactive: 1, steady: 0.96 })
```

---

## Scope (Oscilloscope)

Real-time waveform visualization - **see your sound.**

```javascript
// Basic
s("sawtooth")._scope()

// Styled scope
s("sawtooth")._scope({
  color: "#00ff00",    // Matrix green
  thickness: 4,        // Thicc lines
  scale: 0.5,          // Zoom in on waveform
})
```

### All Scope Options

| Option | Type | Default | Effect |
|--------|------|---------|--------|
| `color` | color | white | Line color |
| `thickness` | num | 3 | Line thickness |
| `scale` | num | 0.25 | Y-axis zoom |
| `align` | bool | 1 | Align to zero crossing |
| `pos` | 0-1 | - | Y position on screen |
| `trigger` | num | 0 | Alignment amplitude |

### Scope Recipes

```javascript
// Neon green matrix
._scope({ color: "#00ff00", thickness: 4 })

// Hot pink
._scope({ color: "#ff00ff", thickness: 5, scale: 0.6 })

// Subtle background
._scope({ color: "#ffffff33", thickness: 2 })
```

---

## Spectrum (Frequency Analyzer)

See the frequencies - **bass on the left, treble on the right.**

```javascript
// Basic
s("supersaw")._spectrum()

// Styled
s("supersaw")._spectrum({
  thickness: 3,
  speed: 2,           // Scroll speed
  min: -60,           // Min dB
  max: 0,             // Max dB
})
```

---

## Pitchwheel

Pitch circle for visualizing notes within an octave.

```javascript
n("0 .. 12").scale("C:chromatic")._pitchwheel()
```

---

## Combining Visuals

**Stack multiple inline visuals for maximum impact.**

```javascript
setcpm(130/4)

// Bass with smeared pianoroll
$: note("c2 eb2 f2 g2".fast(2))
  .s("sawtooth").lpf(800)
  .color("cyan magenta")
  ._pianoroll({ smear: 1, cycles: 8 })

// Drums with scope
$: s("bd sd hh hh").bank("RolandTR909")
  ._scope({ color: "#00ff00", thickness: 4 })

// Lead with spiral
$: n("0 3 7 10".fast(2)).scale("C:minor").s("square")
  .color("#ff6600 #ff00ff")
  ._spiral({ logSpiral: 1, steady: 0.96 })

// Pad with spectrum
$: chord("<Cm7 Fm7>").voicing().s("supersaw")
  ._spectrum({ thickness: 2 })
```

---

## Acid Visual Presets

### Neon Rave
```javascript
.color("cyan magenta yellow")
._pianoroll({ smear: 1, active: "#ff00ff", inactive: "#00ffff" })
```

### Matrix
```javascript
.color("#00ff00")
._pianoroll({ smear: 1, active: "#00ff00", inactive: "#003300", vertical: 1 })
```

### Vaporwave
```javascript
.color("#ff71ce #01cdfe #05ffa1 #b967ff")
._spiral({ logSpiral: 1, steady: 0.96, thickness: 5 })
```

### Fire
```javascript
.color("#ff0000 #ff6600 #ffff00")
._pianoroll({ smear: 1, active: "#ffff00", inactive: "#ff3300" })
```

### Minimal Techno
```javascript
.color("white")
._pianoroll({ hideInactive: 1, fillActive: 1, cycles: 2 })
```

---

## Pro Tips

1. **Always use `steady: 0.96`** on spirals - makes them smooth
2. **`smear: 1`** is the secret sauce for trippy pianorolls
3. **Match colors to your vibe** - neon for acid, muted for ambient
4. **`logSpiral: 1`** makes spirals way cooler
5. **Combine visuals** - pianoroll + scope + spiral = full experience
6. **Use `.color()` patterns** - colors that change with notes

---

## Philosophy

**If it sounds good, it should look good.**

Visuals aren't decoration - they're part of the performance. Let people see the music breathe.
