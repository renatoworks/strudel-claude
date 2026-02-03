---
name: funeral-for-the-damned
description: Slow, crushing doom metal. Funeral march tempo, walls of fuzz, the abyss calls.
tempo: 0.28 cps (~67 BPM)
key: A minor
duration: ~7.5 minutes
---

# Track 2: Funeral for the Damned

```javascript
// TRACK 2: FUNERAL FOR THE DAMNED
// slow. crushing. inevitable.
setcps(0.28)

// === DRUMS - funeral march ===
let kick = s("bd ~ ~ ~ bd ~ ~ ~").gain(0.95).distort(0.4).room(0.4)
let snare = s("~ ~ ~ ~ ~ ~ sd ~").gain(0.8).room(0.5).distort(0.3)
let hat = s("~ ~ oh ~ ~ ~ oh ~").gain(0.3).room(0.4)
let tomFill = s("~ ~ ~ ~ ~ ~ [lt mt] ht").gain(0.5).room(0.4)
let doomKit = stack(kick, snare, hat)
let fullKit = stack(kick, snare, hat, tomFill)

// === BASS - earth shaking ===
let bass = note("a0 ~ ~ ~ a0 ~ ~ [a0 b0]").s("sawtooth").lpf(120).gain(0.65).distort(0.5)
let bassDrone = note("a0").s("sawtooth").lpf(100).gain(0.5).room(0.3)
let bassWalk = note("a0 ~ c1 ~ d1 ~ e1 ~ a0 ~ ~ ~ g0 ~ ~ ~").s("sawtooth").lpf(150).gain(0.6).distort(0.4)

// === GUITARS - walls of fuzz ===
let doomRiff = note("<[a1,e2,a2] ~ ~ ~ [a1,e2,a2] ~ ~ [g1,d2,g2]> <[a1,e2,a2] ~ [c2,g2,c3] ~ [d2,a2,d3] ~ ~ ~>").s("gm_distortion_guitar").gain(0.6).room(0.4).distort(0.4)
let doomChord = note("<[a1,e2,a2] [a1,e2,a2] [g1,d2,g2] [g1,d2,g2]>").s("gm_overdriven_guitar").gain(0.55).room(0.5)
let cleanHaunt = note("<[a3,e4] ~ [c4,g4] ~ [d4,a4] ~ [e4,b4] ~>").s("gm_electric_guitar_clean").gain(0.25).room(0.7).delay(0.3).delayfeedback(0.5)
let feedback = note("a3").s("sawtooth").lpf(2000).gain(0.12).room(0.8).distort(0.6).vib(2).vibmod(0.5)

// === LEAD - wailing from the void ===
let leadSlow = n("<0 ~ ~ ~ 3 ~ ~ ~> <5 ~ ~ ~ 3 ~ 0 ~>").scale("A1:minor").s("gm_distortion_guitar").gain(0.5).room(0.5).vib(4).vibmod(0.5)
let leadCry = n("7 ~ ~ 5 ~ ~ 3 ~ ~ ~ 0 ~ ~ ~ ~ ~").scale("A2:minor").s("gm_overdriven_guitar").gain(0.55).room(0.6).vib(5).vibmod(0.6).delay(0.2)

// === ATMOSPHERE - the abyss ===
let drone = note("[a1,e2]").s("gm_pad_metallic").gain(0.15).room(0.9).attack(2).release(4)
let darkPad = note("<[a1,c2,e2] [a1,c2,e2] [g1,b1,d2] [g1,b1,d2]>").s("gm_pad_sweep").gain(0.12).room(0.95).attack(1.5).release(3)
let noise = s("white").lpf(200).gain(0.06).room(0.9)
let bell = note("<a4 ~ ~ ~ e4 ~ ~ ~>").s("gm_tubular_bells").gain(0.15).room(0.8).delay(0.4)

// === FUNERAL FOR THE DAMNED ===
arrange(
  // RISING FROM THE GRAVE
  [4, stack(noise, drone)],
  [4, stack(noise, drone, bassDrone.gain(0.3).lpf(60))],
  [4, stack(drone, bassDrone, feedback.gain(0.08))],
  [4, stack(drone, bassDrone, kick.gain(0.5), feedback)],

  // THE RIFF DESCENDS
  [8, stack(doomKit, bass, doomRiff.lpf(800), drone)],
  [8, stack(doomKit, bass, doomRiff, darkPad)],

  // VERSE - crushing weight
  [8, stack(doomKit, bass, doomChord, leadSlow, darkPad)],
  [8, stack(fullKit, bassWalk, doomChord, leadSlow, drone)],

  // CHORUS - the void speaks
  [8, stack(fullKit, bass, doomRiff, leadCry, darkPad)],
  [8, stack(fullKit, bass, doomRiff, leadCry, cleanHaunt.gain(0.15), bell)],

  // BREAKDOWN - time stops
  [4, stack(bassDrone, drone.gain(0.25), noise)],
  [4, stack(kick.slow(2), bassDrone, drone, feedback.gain(0.2))],

  // VERSE 2 - heavier
  [8, stack(fullKit, bassWalk, doomChord, leadSlow.add(12), darkPad)],
  [8, stack(fullKit, bassWalk, doomRiff, leadCry, drone)],

  // CHORUS 2 - deeper into hell
  [8, stack(fullKit, bass, doomRiff, doomChord.gain(0.4), leadCry, bell)],
  [8, stack(fullKit, bass, doomRiff, leadCry, cleanHaunt, darkPad)],

  // OUTRO - eternal doom
  [4, stack(doomKit, bass.slow(2), doomChord.slow(2), drone)],
  [4, stack(kick.slow(2), bassDrone, drone.gain(0.3), feedback)],
  [4, stack(drone.room(1), darkPad.room(1), bell.slow(2))],
  [4, drone.room(1).gain(0.2)],
)
```

## Structure

| Section | Cycles | Description |
|---------|--------|-------------|
| RISING FROM THE GRAVE | 16 | Drone and feedback emerge |
| THE RIFF DESCENDS | 16 | Doom riff enters like a monolith |
| VERSE | 16 | Crushing weight, slow lead |
| CHORUS | 16 | The void speaks, bells toll |
| BREAKDOWN | 8 | Time stops, just drone |
| VERSE 2 | 16 | Heavier, lead up an octave |
| CHORUS 2 | 16 | Deeper into hell |
| OUTRO | 16 | Eternal doom, fade to drone |

**Total:** ~128 cycles = ~7.5 minutes
