---
name: rip-and-tear
description: Fast, aggressive DOOM metal. Face-melting solos, blast beats, maximum carnage.
tempo: 0.55 cps (~132 BPM)
key: E minor
duration: ~2 minutes
---

# Track 1: Rip and Tear

```javascript
// DOOM - THE NASTIEST ARRANGEMENT
setcps(0.55)

// === ELEMENTS ===

// Bass from hell
let bass = n("0 0 [0 3] 0 0 0 [0 5] 0").s("sawtooth").note("<e1 e1 d1 a0>").lpf(200).lpq(8).distort(0.8).gain(0.6).room(0.2)

// Drums
let kick = s("bd*2").distort(0.5).gain(0.9)
let snare = s("[~ sd:3]*2").distort(0.4).room(0.3).gain(0.85)
let hats = s("hh*8").gain("0.4 0.2 0.3 0.2").room(0.2)
let blast = s("bd*8, [~ sd:3]*4, hh*16").distort(0.5).gain(0.8)

// Guitars
let chug = note("e2*8").s("gm_electric_guitar_muted").gain("0.5 0.3 0.4 0.3 0.5 0.3 0.4 0.3").lpf(1500)
let powerchords = note("<[e2,b2,e3] ~ ~ ~ [d2,a2,d3] ~ [a1,e2,a2] ~>").s("gm_overdriven_guitar").gain(0.6).room(0.3)
let riff = note("e3 e3 [e3 g3] e3 d3 e3 [a3 g3] e3").s("gm_distortion_guitar").gain(0.7).room(0.25)

// The solo
let solo = n("<[0 2 4 7 9 11 14 16] [16 14 11 9 7 4 2 0] [0 4 7 11 14 11 7 4] [2 5 9 12 14 17 19 21]>").scale("E2:minor:pentatonic").s("gm_distortion_guitar").gain(0.85).room(0.4).delay(0.15).vib(6).vibmod(0.3)
let harmonics = n("[14 16 19 21]").scale("E4:minor:pentatonic").s("gm_guitar_harmonics").gain(0.7).room(0.5).delay(0.3)

// Atmosphere
let pad = note("<e2 d2 a1 b1>").s("gm_pad_metallic").attack(0.5).release(2).lpf(500).gain(0.2).room(0.8).size(0.9)
let noise = s("white").lpf(300).gain(0.1).room(0.9)
let industrial = s("metal:2*4").gain(0.2).speed("1 1.5 0.75 2").pan(rand).delay(0.3)

// === THE ARRANGEMENT ===
arrange(
  // INTRO - tension building
  [4, stack(noise, pad.lpf(200))],
  [4, stack(noise, pad, chug.lpf(400).gain(0.2))],

  // DRUMS ENTER
  [4, stack(kick, hats.lpf(1000), chug.lpf(600), pad)],
  [4, stack(kick, snare, hats, chug, bass.lpf(100))],

  // FIRST DROP - HERE IT COMES
  [8, stack(kick, snare, hats, bass, chug, powerchords, industrial)],

  // RIFF ENTERS
  [8, stack(kick, snare, hats, bass, chug, riff, industrial)],

  // BREAKDOWN - get nasty
  [2, stack(chug.slow(2).lpf(400), noise)],
  [2, stack(chug.fast(2).distort(0.9), kick)],
  [4, stack(bass.fast(2), kick.fast(2), industrial.fast(2))],

  // SOLO SECTION - FACE MELTER
  [8, stack(kick, snare, hats, bass, chug, solo, pad)],
  [4, stack(blast, bass.fast(2), solo, harmonics)],

  // FINAL DROP - MAXIMUM CARNAGE
  [8, stack(blast, bass, chug.distort(0.9), powerchords, riff, industrial)],

  // OUTRO - fade to hell
  [4, stack(pad.room(1), harmonics.slow(2), noise)],
)
```

## Structure

| Section | Cycles | Description |
|---------|--------|-------------|
| INTRO | 8 | Tension building - noise and pad |
| DRUMS ENTER | 8 | Kick and hats build |
| FIRST DROP | 8 | Full groove with power chords |
| RIFF | 8 | Lead guitar riff takes over |
| BREAKDOWN | 8 | Slow → fast chaos |
| SOLO | 12 | Face-melting solo + blast beats |
| FINAL DROP | 8 | Maximum carnage |
| OUTRO | 4 | Fade to hell |

**Total:** ~64 cycles = ~2 minutes
