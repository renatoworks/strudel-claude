---
name: loveland-sunrise
description: Melodic house transcendence. Last set at Loveland, the sun is rising and we are crying.
tempo: 0.48 cps (~115 BPM)
key: C minor
duration: ~3.5 minutes
---

# Track 1: Loveland Sunrise

```javascript
// SOLOMUN - LAST SET AT LOVELAND - THE SUN IS RISING AND WE ARE CRYING
setcps(0.48)

// === THE ELEMENTS OF TRANSCENDENCE ===

// Deep rolling bass - the heartbeat
let bass = note("<c2 c2 ab1 bb1>").s("sawtooth").lpf(180).lpq(4).gain(0.6).room(0.15).attack(0.01).decay(0.2).sustain(0.7)
let bassArp = note("c2 ~ c2 ~ c2 ~ [c2 eb2] ~").s("sawtooth").lpf(200).gain(0.55).room(0.1)

// 909 - that hypnotic groove
let kick = s("bd*4").bank("RolandTR909").gain(0.85)
let hat = s("hh*8").bank("RolandTR909").gain("0.35 0.2 0.3 0.2 0.35 0.2 0.3 0.25")
let oh = s("~ ~ ~ oh").bank("RolandTR909").gain(0.3)
let clap = s("~ cp ~ cp").bank("RolandTR909").gain(0.5).room(0.4)
let rim = s("~ [rim?] ~ [rim?] ~ [rim?] ~ rim").bank("RolandTR909").gain(0.25)
let perc = s("~ ~ cb ~").bank("RolandTR909").gain(0.2).delay(0.3).delaytime(0.375).delayfeedback(0.4)

// Emotional chords - make them cry
let chords = chord("<Cm Cm Ab Bb>").voicing().s("gm_pad_warm").gain(0.3).attack(0.3).release(1.5).room(0.6).size(0.8).lpf(1200)
let chordsBright = chord("<Cm Cm Ab Bb>").voicing().s("supersaw").gain(0.25).attack(0.1).release(0.8).room(0.5).lpf(sine.range(800, 3000).slow(16))

// The arpeggio - hypnotic and relentless
let arp = n("0 4 7 11 14 11 7 4").scale("C3:minor").s("triangle").gain(0.35).lpf(sine.range(600, 2500).slow(8)).room(0.5).delay(0.25).delaytime(0.1875).delayfeedback(0.5)
let arpHigh = n("<0 3 7 10> <7 10 14 17>/2").scale("C4:minor").s("sine").gain(0.3).room(0.6).delay(0.3).delayfeedback(0.45)

// The melody - sunrise through tears
let melody = n("<[~ 7 ~ 4] [~ 11 ~ 7] [~ 14 11 ~] [10 ~ 7 ~]>").scale("C4:minor").s("gm_pad_choir").gain(0.25).attack(0.2).release(1).room(0.7).delay(0.2)
let lead = n("<[14 ~ 11 ~] [~ 10 ~ 7] [11 ~ ~ 14] [~ 7 10 ~]>").scale("C4:minor").s("supersaw").gain(0.35).lpf(2000).room(0.5).attack(0.05).release(0.5).vib(4).vibmod(0.15)

// Atmosphere - we are floating
let pad = chord("<Cm7 Abmaj7>").voicing().s("gm_pad_sweep").gain(0.15).attack(2).release(4).room(0.9).size(0.95).lpf(800)
let air = s("white").lpf(400).gain(0.04).room(1)
let vocal = n("<0 ~ 7 ~ 4 ~ 10 ~>/2").scale("C4:minor").s("gm_voice_oohs").gain(0.2).room(0.7).attack(0.3).release(1.5)

// === THE JOURNEY - 96 CYCLES OF LOVELAND ===
arrange(
  // 4AM - The groove begins
  [4, stack(kick, air)],
  [4, stack(kick, hat.lpf(2000), air)],
  [4, stack(kick, hat, bassArp.lpf(100))],
  [4, stack(kick, hat, clap, bassArp.lpf(150), rim)],

  // The bass opens up - bodies moving
  [8, stack(kick, hat, clap, oh, bass, rim)],
  [8, stack(kick, hat, clap, oh, bass, perc, pad.lpf(400))],

  // First emotional wave - the chords enter
  [8, stack(kick, hat, clap, bass, chords.lpf(600), arp.lpf(800))],
  [8, stack(kick, hat, clap, oh, bass, chords, arp, perc)],

  // BREAKDOWN - hands in the air, eyes closed
  [4, stack(hat.gain(0.15), chords, arp.slow(2), pad)],
  [4, stack(chords.gain(0.4), arp, melody, pad, air)],
  [4, stack(chords, melody, arpHigh, pad.lpf(1200), vocal)],

  // THE DROP - everyone loses their minds
  [8, stack(kick, hat, clap, oh, bass, chords, arp, melody, perc)],
  [8, stack(kick, hat, clap, oh, bass, chordsBright, arp, lead, rim)],

  // Peak emotion - the sun is rising
  [8, stack(kick, hat, clap, oh, bass, chordsBright, arpHigh, lead, vocal.gain(0.15), perc)],

  // Second breakdown - tears flowing
  [4, stack(bass.slow(2), chords.room(1), melody.slow(2), pad)],
  [4, stack(kick.slow(2), chords, arpHigh.slow(2), vocal, pad)],

  // FINAL WAVE - this is it, the last song
  [8, stack(kick, hat, clap, oh, bass, chordsBright, arp, lead, melody.gain(0.2))],
  [8, stack(kick, hat, clap, oh, bass, chordsBright.gain(0.35), arpHigh, lead, vocal, perc)],

  // Sunrise outro - the magic fades but stays with you forever
  [4, stack(kick, hat.gain(0.2), bass.lpf(120), chords, pad)],
  [4, stack(kick.mask("1 1 1 0"), chords.room(1), pad, vocal)],
  [4, stack(chords.room(1), pad, arpHigh.slow(2).room(1))],
  [4, pad.room(1).gain(0.3)],
)
```

## Structure

| Section | Cycles | Description |
|---------|--------|-------------|
| 4AM | 16 | The groove begins, kick and hats |
| BASS OPENS | 16 | Bodies moving, 909 in the pocket |
| FIRST WAVE | 16 | Chords enter, arp hypnotizes |
| BREAKDOWN | 12 | Hands in the air, eyes closed |
| THE DROP | 16 | Everyone loses their minds |
| PEAK | 8 | The sun is rising |
| TEARS | 8 | Second breakdown, tears flowing |
| FINAL WAVE | 16 | This is it, the last song |
| SUNRISE | 16 | The magic fades but stays forever |

**Total:** ~96 cycles = ~3.5 minutes
