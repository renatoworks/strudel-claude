---
name: boiler-room
description: UK garage euphoria. Chopped vocals, supersaw stabs, strangers becoming family on the dancefloor.
tempo: 0.52 cps (~125 BPM)
key: G major
duration: ~4 minutes
---

# Track 1: Boiler Room

```javascript
// FRED AGAIN.. - BOILER ROOM LONDON - THE FULL EXPERIENCE
// strangers becoming family on the dancefloor
setcps(0.52)

// === VOCALS - every voice memo from your best nights ===
let vox = n("0 ~ 4 ~ ~ 7 ~ 4").scale("G3:major").s("gm_voice_oohs").gain(0.4).room(0.5)
let voxChop = n("7 7 [7 4] ~ 4 4 [4 0] ~").scale("G3:major").s("gm_choir_aahs").gain(0.38).room(0.6).delay(0.15)
let voxHigh = n("11 ~ 9 ~ ~ 7 ~ 4").scale("G4:major").s("gm_voice_oohs").gain(0.32).room(0.7)
let voxStutter = n("4 4 4 4 7 7 0 0").scale("G3:major").s("gm_choir_aahs").gain(0.42).clip(0.1).room(0.5)
let voxDeep = n("0 ~ ~ 0 ~ ~ 4 ~").scale("G2:major").s("gm_voice_oohs").gain(0.25).room(0.6)
let choir = n("<0 4 7 11>").scale("G3:major").s("gm_synth_choir").gain(0.2).attack(0.3).release(1.5).room(0.8)

// === UK GARAGE DRUMS - that 2step bounce ===
let kick = s("bd ~ ~ bd ~ ~ bd ~").gain(0.92)
let snare = s("~ ~ sd ~ ~ ~ sd ~").gain(0.82).room(0.45)
let hat = s("hh*8").gain("0.42 0.22 0.38 0.25 0.42 0.22 0.38 0.28")
let oh = s("~ ~ ~ ~ ~ ~ ~ oh").gain(0.25).room(0.4)
let perc = s("~ cp ~ ~ ~ cp ~ ~").gain(0.42).room(0.5).delay(0.12)
let rim = s("~ rim ~ rim ~ rim ~ rim").gain(0.22)
let shaker = s("shaker*16").gain(0.12)
let garage = stack(kick, snare, hat)
let fullKit = stack(kick, snare, hat, oh, perc, rim)
let maxKit = stack(kick, snare, hat, oh, perc, rim, shaker)

// === SUPERSAWS - pure euphoria ===
let stab = note("<[g3,b3,d4] [g3,b3,d4] [c4,e4,g4] [d4,a4]>").s("supersaw").gain(0.42).struct("~ x ~ ~ ~ x ~ x").room(0.4).lpf(3200)
let stabBig = note("<[g3,b3,d4] [g3,b3,d4] [c4,e4,g4] [d4,a4]>").s("supersaw").gain(0.58).room(0.5).lpf(5000)
let stabMassive = note("<[g3,b3,d4,g4] [g3,b3,d4,g4] [c4,e4,g4,c5] [d4,a4,d5]>").s("supersaw").gain(0.62).room(0.55).lpf(6000)
let chords = note("<[g3,b3,d4] [g3,b3,d4] [c4,e4,g4] [d4,a4]>").s("gm_pad_warm").gain(0.28).room(0.6).attack(0.2).release(1.2)

// === ARPS - hypnotic and rolling ===
let arp = n("0 2 4 7 9 7 4 2").scale("G3:major").s("triangle").gain(0.32).lpf(sine.range(800,4000).slow(8)).room(0.4).delay(0.2)
let arpHigh = n("4 7 9 11 9 7 4 2").scale("G4:major").s("sine").gain(0.28).room(0.5).delay(0.25)
let arpFast = n("0 2 4 7 9 11 9 7").scale("G3:major").s("triangle").fast(2).gain(0.25).lpf(3000).room(0.4).delay(0.15)

// === BASS - the weight that moves you ===
let bass = note("g1 ~ ~ g1 ~ ~ g1 ~").s("sawtooth").lpf(220).gain(0.58)
let bassHard = note("g1 ~ g1 ~ g1 ~ g1 [g1 a1]").s("sawtooth").lpf(250).gain(0.6)
let subBass = note("g1 ~ g1 ~ c2 ~ d2 ~").s("sine").gain(0.52).lpf(80)

// === ATMOSPHERE - floating above it all ===
let pad = note("[g2,b2,d3]").s("gm_pad_sweep").gain(0.18).room(0.9).attack(1.5).release(3)
let padBig = note("[g2,b2,d3,g3]").s("gm_pad_halo").gain(0.15).room(0.95).attack(2).release(4)
let riser = s("white").lpf(sine.range(200,4000).slow(16)).gain(0.07)
let air = s("white").lpf(500).gain(0.04).room(1)

// === THE FULL BOILER ROOM EXPERIENCE - 120 CYCLES ===
arrange(
  // THE INTRO - a voice in the darkness
  [4, stack(vox.room(0.8), air)],
  [4, stack(vox, voxDeep, pad, air)],
  [4, stack(vox, voxChop.gain(0.2), hat.gain(0.12), pad)],
  [4, stack(vox, voxChop, hat.gain(0.2), kick.gain(0.5), pad)],

  // THE BUILD - it's coming
  [4, stack(kick, hat, vox, chords.lpf(600))],
  [4, stack(garage, vox, voxChop, chords.lpf(900))],
  [8, stack(garage, bass, vox, voxChop, chords, arp.lpf(1200))],

  // PRE-DROP - the stutter
  [4, stack(hat, voxStutter, stab.lpf(1500), riser)],
  [4, stack(voxStutter.fast(2), stab, arp, choir.gain(0.15), riser.gain(0.12))],

  // DROP 1 - THE ROOM EXPLODES
  [8, stack(fullKit, bass, stabBig, arp, voxChop, choir)],
  [8, stack(fullKit, bass, stabBig, arpHigh, vox, voxHigh, choir)],

  // BREAKDOWN 1 - hands in the air
  [4, stack(hat.gain(0.12), chords, vox.slow(2), padBig)],
  [4, stack(chords.gain(0.4), arpHigh.slow(2), voxDeep, padBig, air)],

  // BUILD 2 - bigger this time
  [4, stack(kick.gain(0.6), hat, chords, voxStutter, riser)],
  [4, stack(voxStutter.fast(2), stab.lpf(2500), arp, arpFast.gain(0.15), riser.gain(0.15))],

  // DROP 2 - STRANGERS HUGGING
  [8, stack(fullKit, bass, subBass, stabBig, arp, voxChop, voxHigh)],
  [8, stack(maxKit, bassHard, subBass, stabBig, arpHigh, vox, voxStutter.gain(0.3), choir)],

  // BREAKDOWN 2 - tears flowing
  [4, stack(bass.slow(2).lpf(100), chords.room(1), vox.slow(2), padBig)],
  [4, stack(kick.slow(2), chords, arpHigh.slow(2), voxDeep, choir.gain(0.25), padBig)],

  // FINAL BUILD - THIS IS IT
  [4, stack(hat, voxStutter, stab.lpf(2000), arpFast.gain(0.2), riser)],
  [4, stack(voxStutter.fast(2), stabBig.lpf(3500), arp, arpHigh, riser.gain(0.2))],

  // THE FINAL DROP - MAXIMUM EUPHORIA
  [8, stack(maxKit, bassHard, subBass, stabMassive, arp, arpHigh, vox, voxChop)],
  [8, stack(maxKit, bassHard, subBass, stabMassive, arp, arpHigh, vox, voxHigh, voxChop.gain(0.3), choir)],

  // PEAK - THIS IS WHY WE CAME
  [8, stack(maxKit, bassHard, subBass, stabMassive, arp, arpFast, arpHigh, vox, voxHigh, voxChop, choir)],

  // THE COMEDOWN - but the feeling stays
  [4, stack(garage, bass.lpf(150), chords, vox, padBig)],
  [4, stack(kick, hat.gain(0.2), chords, voxChop.slow(2), padBig)],
  [4, stack(vox, voxDeep, chords.room(1), padBig, air)],
  [4, stack(padBig.room(1).gain(0.3), choir.slow(2).room(1), air)],
)
```

## Structure

| Section | Cycles | Description |
|---------|--------|-------------|
| INTRO | 16 | Voice in the darkness, pads fade in |
| BUILD | 16 | Drums creep in, it's coming |
| PRE-DROP | 8 | The stutter, the riser |
| DROP 1 | 16 | THE ROOM EXPLODES |
| BREAKDOWN 1 | 8 | Hands in the air |
| BUILD 2 | 8 | Bigger this time |
| DROP 2 | 16 | STRANGERS HUGGING |
| BREAKDOWN 2 | 8 | Tears flowing |
| FINAL BUILD | 8 | THIS IS IT |
| FINAL DROP | 16 | MAXIMUM EUPHORIA |
| PEAK | 8 | Everything at once |
| COMEDOWN | 16 | The feeling stays |

**Total:** ~120 cycles = ~4 minutes
