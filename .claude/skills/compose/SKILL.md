---
name: compose
description: Create full arranged tracks with timeline structure. Use when user asks to "compose", "create a track", "make a song", or specifies a duration.
allowed-tools: Bash(curl *)
requires: strudel
---

# Compose - Full Track Compositions

**Requires:** `/strudel` skill for syntax (notes, sounds, effects, patterns)

Use `arrange()` to create complete tracks with intro, build, drop, breakdown, outro.

---

## IMPORTANT: Examples Are Inspiration Only

The genre examples below show **what's possible**, not what to copy.

Every track you create should be **unique**:
- Different chord progressions
- Different rhythms and patterns
- Different instrument choices
- Different arrangement structures
- Your own weird ideas

Study the techniques, then make something **new**.

---

## The Formula

```
cps = BPM / 60 / 4
cycles = minutes × 60 × cps
```

| Duration | 90 BPM | 110 BPM | 120 BPM | 128 BPM | 140 BPM | 160 BPM | 174 BPM |
|----------|--------|---------|---------|---------|---------|---------|---------|
| cps      | 0.375  | 0.458   | 0.5     | 0.533   | 0.583   | 0.667   | 0.725   |
| 2 min    | 45     | 55      | 60      | 64      | 70      | 80      | 87      |
| 5 min    | 112    | 137     | 150     | 160     | 175     | 200     | 217     |
| 10 min   | 225    | 275     | 300     | 320     | 350     | 400     | 435     |

---

## The Pattern

1. **Define your elements** - bass, drums, chords, leads, atmosphere
2. **Calculate total cycles** for target duration
3. **Build the arrangement** - distribute cycles across sections
4. **Use `stack()`** to layer elements in each section
5. **Present it** - show the journey with the output format below

---

## Output Format - The Presentation

After creating a track, **ALWAYS** present it with personality:

### 1. The Title
Creative, evocative, with emojis that match the vibe:
```
🎸 BASEMENT SHOW - FEEDBACK AND FURY 🎸
🌙 LATE NIGHT FREQUENCIES 🌙
🚨 SHIBUYA BASEMENT - 4AM - THEY'RE LOOKING FOR US 🚨
🎉 WAREHOUSE PARTY - NO PHONES 🎉
```

### 2. The Hook
One line that captures the feeling:
```
quiet... quiet... LOUD. quiet... LOUD. DESTROY.
3AM. Candles lit. Feeling every emotion.
You descend the stairs. The bass hits your chest. Everyone's eyes are black.
120 CYCLES OF PURE EMOTION
```

### 3. The Journey Table
Show the arrangement as a story - what happens when:

| Moment | Cycles | What's Happening |
|--------|--------|------------------|
| INTRO | 8 | Feedback hums... clean arpeggios |
| VERSE 1 | 16 | 🌑 Quiet - clean guitar, soft drums |
| PRE-CHORUS | 8 | Tension... distortion creeping in |
| CHORUS | 16 | 💥 EXPLODE - power chords, crash cymbal |
| BREAKDOWN | 8 | Double-time chaos → silence → feedback |
| SOLO | 16 | 🔥 Raw screaming lead |
| FINAL CHORUS | 16 | 💛 MAXIMUM - everything at once |
| OUTRO | 12 | Destroy everything... fade to feedback |

Use emojis to mark the emotional peaks: 💥 🔥 💛 🌑 😭 🚨 💊 👁️ ✨

### 4. The Arsenal
List what makes this track special:
```
The formula:
- F minor - the saddest key
- F5 → Bb5 → Ab5 - power chord progression
- Clean verse → Distorted chorus - classic dynamics
- Contrasting drums - quiet kit vs explode kit
- Feedback always lurking in the background

The sound:
- Distorted kicks punching through walls
- 303 acid in E Phrygian (dark scale)
- 32nd hi-hats like a racing heartbeat
- Sirens sweeping in the distance

The arsenal:
- 6 vocal layers (oohs, aahs, choir, stutter, deep)
- Full UK garage kit with shakers
- 3 levels of supersaw (stab → big → MASSIVE)
- Halo pads floating above it all
```

### 5. The Closer
End with a memorable line that matches the vibe:
```
The bass hits your chest before you see the stage. 💀
3AM. Candles lit. Feeling every emotion. 🌙
We might get arrested but this moment is forever. 💊
You're not leaving this room the same person. 🎨
```

### Full Example

```
🌧️ MIDNIGHT RAMEN SHOP - SHIBUYA 🍜

Rain outside, warm inside, 3am thoughts.

112 CYCLES OF LATE NIGHT CONTEMPLATION

| Moment | Cycles | The Vibe |
|--------|--------|----------|
| RAIN | 4 | Just rain... setting the scene |
| WARMTH | 4 | Pad fades in through the steam |
| KEYS ARRIVE | 8 | 🎹 Dusty electric piano through the window |
| SETTLING IN | 8 | Vinyl crackle joins... you're home |
| BEAT DROPS | 8 | 🥢 Gentle kick... hats like chopsticks |
| FULL GROOVE | 8 | Snare joins... head nodding |
| KOTO ENTERS | 8 | 🎎 Something unexpected... beautiful |
| MUSIC BOX | 8 | ✨ High keys sparkle above |
| BREAKDOWN | 8 | 🌧️ Rain gets louder... flute whispers |
| RETURN | 16 | Everything together... the full moment |
| PEAK | 12 | 💜 All layers... maximum coziness |
| FADE | 16 | 🌙 Elements leave one by one... just rain |

The ingredients:
- Gb minor - melancholic but warm
- gm_epiano1 - that dusty Rhodes sound
- gm_koto + gm_shakuhachi - Japanese 3am energy
- gm_music_box - childhood nostalgia
- Rain (filtered white noise) - always present
- Crunchy drums with shape(0.2) - SP-404 vibes

The rain never stops. Neither do your thoughts. 🍜
```

---

## Examples

### METAL (~2 min @ 140 BPM = 64 cycles)

```javascript
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

  // FIRST DROP
  [8, stack(kick, snare, hats, bass, chug, powerchords, industrial)],

  // RIFF ENTERS
  [8, stack(kick, snare, hats, bass, chug, riff, industrial)],

  // BREAKDOWN
  [2, stack(chug.slow(2).lpf(400), noise)],
  [2, stack(chug.fast(2).distort(0.9), kick)],
  [4, stack(bass.fast(2), kick.fast(2), industrial.fast(2))],

  // SOLO SECTION
  [8, stack(kick, snare, hats, bass, chug, solo, pad)],
  [4, stack(blast, bass.fast(2), solo, harmonics)],

  // FINAL DROP
  [8, stack(blast, bass, chug.distort(0.9), powerchords, riff, industrial)],

  // OUTRO
  [4, stack(pad.room(1), harmonics.slow(2), noise)],
)
```

---

### MELODIC TECHNO (~3.3 min @ 115 BPM = 96 cycles)

```javascript
setcps(0.48)

// === ELEMENTS ===

// Deep rolling bass
let bass = note("<c2 c2 ab1 bb1>").s("sawtooth").lpf(180).lpq(4).gain(0.6).room(0.15).attack(0.01).decay(0.2).sustain(0.7)
let bassArp = note("c2 ~ c2 ~ c2 ~ [c2 eb2] ~").s("sawtooth").lpf(200).gain(0.55).room(0.1)

// 909 groove
let kick = s("bd*4").bank("RolandTR909").gain(0.85)
let hat = s("hh*8").bank("RolandTR909").gain("0.35 0.2 0.3 0.2 0.35 0.2 0.3 0.25")
let oh = s("~ ~ ~ oh").bank("RolandTR909").gain(0.3)
let clap = s("~ cp ~ cp").bank("RolandTR909").gain(0.5).room(0.4)
let rim = s("~ [rim?] ~ [rim?] ~ [rim?] ~ rim").bank("RolandTR909").gain(0.25)
let perc = s("~ ~ cb ~").bank("RolandTR909").gain(0.2).delay(0.3).delaytime(0.375).delayfeedback(0.4)

// Emotional chords
let chords = chord("<Cm Cm Ab Bb>").voicing().s("gm_pad_warm").gain(0.3).attack(0.3).release(1.5).room(0.6).size(0.8).lpf(1200)
let chordsBright = chord("<Cm Cm Ab Bb>").voicing().s("supersaw").gain(0.25).attack(0.1).release(0.8).room(0.5).lpf(sine.range(800, 3000).slow(16))

// Hypnotic arpeggio
let arp = n("0 4 7 11 14 11 7 4").scale("C3:minor").s("triangle").gain(0.35).lpf(sine.range(600, 2500).slow(8)).room(0.5).delay(0.25).delaytime(0.1875).delayfeedback(0.5)
let arpHigh = n("<0 3 7 10> <7 10 14 17>/2").scale("C4:minor").s("sine").gain(0.3).room(0.6).delay(0.3).delayfeedback(0.45)

// Melody
let melody = n("<[~ 7 ~ 4] [~ 11 ~ 7] [~ 14 11 ~] [10 ~ 7 ~]>").scale("C4:minor").s("gm_pad_choir").gain(0.25).attack(0.2).release(1).room(0.7).delay(0.2)
let lead = n("<[14 ~ 11 ~] [~ 10 ~ 7] [11 ~ ~ 14] [~ 7 10 ~]>").scale("C4:minor").s("supersaw").gain(0.35).lpf(2000).room(0.5).attack(0.05).release(0.5).vib(4).vibmod(0.15)

// Atmosphere
let pad = chord("<Cm7 Abmaj7>").voicing().s("gm_pad_sweep").gain(0.15).attack(2).release(4).room(0.9).size(0.95).lpf(800)
let air = s("white").lpf(400).gain(0.04).room(1)
let vocal = n("<0 ~ 7 ~ 4 ~ 10 ~>/2").scale("C4:minor").s("gm_voice_oohs").gain(0.2).room(0.7).attack(0.3).release(1.5)

// === THE ARRANGEMENT ===
arrange(
  // Groove begins
  [4, stack(kick, air)],
  [4, stack(kick, hat.lpf(2000), air)],
  [4, stack(kick, hat, bassArp.lpf(100))],
  [4, stack(kick, hat, clap, bassArp.lpf(150), rim)],

  // Bass opens up
  [8, stack(kick, hat, clap, oh, bass, rim)],
  [8, stack(kick, hat, clap, oh, bass, perc, pad.lpf(400))],

  // Chords enter
  [8, stack(kick, hat, clap, bass, chords.lpf(600), arp.lpf(800))],
  [8, stack(kick, hat, clap, oh, bass, chords, arp, perc)],

  // BREAKDOWN
  [4, stack(hat.gain(0.15), chords, arp.slow(2), pad)],
  [4, stack(chords.gain(0.4), arp, melody, pad, air)],
  [4, stack(chords, melody, arpHigh, pad.lpf(1200), vocal)],

  // THE DROP
  [8, stack(kick, hat, clap, oh, bass, chords, arp, melody, perc)],
  [8, stack(kick, hat, clap, oh, bass, chordsBright, arp, lead, rim)],

  // Peak
  [8, stack(kick, hat, clap, oh, bass, chordsBright, arpHigh, lead, vocal.gain(0.15), perc)],

  // Second breakdown
  [4, stack(bass.slow(2), chords.room(1), melody.slow(2), pad)],
  [4, stack(kick.slow(2), chords, arpHigh.slow(2), vocal, pad)],

  // FINAL WAVE
  [8, stack(kick, hat, clap, oh, bass, chordsBright, arp, lead, melody.gain(0.2))],
  [8, stack(kick, hat, clap, oh, bass, chordsBright.gain(0.35), arpHigh, lead, vocal, perc)],

  // Outro
  [4, stack(kick, hat.gain(0.2), bass.lpf(120), chords, pad)],
  [4, stack(kick.mask("1 1 1 0"), chords.room(1), pad, vocal)],
  [4, stack(chords.room(1), pad, arpHigh.slow(2).room(1))],
  [4, pad.room(1).gain(0.3)],
)
```

---

### UK GARAGE (~3.8 min @ 125 BPM = 120 cycles)

```javascript
setcps(0.52)

// === VOCALS ===
let vox = n("0 ~ 4 ~ ~ 7 ~ 4").scale("G3:major").s("gm_voice_oohs").gain(0.4).room(0.5)
let voxChop = n("7 7 [7 4] ~ 4 4 [4 0] ~").scale("G3:major").s("gm_choir_aahs").gain(0.38).room(0.6).delay(0.15)
let voxHigh = n("11 ~ 9 ~ ~ 7 ~ 4").scale("G4:major").s("gm_voice_oohs").gain(0.32).room(0.7)
let voxStutter = n("4 4 4 4 7 7 0 0").scale("G3:major").s("gm_choir_aahs").gain(0.42).clip(0.1).room(0.5)
let voxDeep = n("0 ~ ~ 0 ~ ~ 4 ~").scale("G2:major").s("gm_voice_oohs").gain(0.25).room(0.6)
let choir = n("<0 4 7 11>").scale("G3:major").s("gm_synth_choir").gain(0.2).attack(0.3).release(1.5).room(0.8)

// === UK GARAGE DRUMS ===
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

// === SUPERSAWS ===
let stab = note("<[g3,b3,d4] [g3,b3,d4] [c4,e4,g4] [d4,a4]>").s("supersaw").gain(0.42).struct("~ x ~ ~ ~ x ~ x").room(0.4).lpf(3200)
let stabBig = note("<[g3,b3,d4] [g3,b3,d4] [c4,e4,g4] [d4,a4]>").s("supersaw").gain(0.58).room(0.5).lpf(5000)
let stabMassive = note("<[g3,b3,d4,g4] [g3,b3,d4,g4] [c4,e4,g4,c5] [d4,a4,d5]>").s("supersaw").gain(0.62).room(0.55).lpf(6000)
let chords = note("<[g3,b3,d4] [g3,b3,d4] [c4,e4,g4] [d4,a4]>").s("gm_pad_warm").gain(0.28).room(0.6).attack(0.2).release(1.2)

// === ARPS ===
let arp = n("0 2 4 7 9 7 4 2").scale("G3:major").s("triangle").gain(0.32).lpf(sine.range(800,4000).slow(8)).room(0.4).delay(0.2)
let arpHigh = n("4 7 9 11 9 7 4 2").scale("G4:major").s("sine").gain(0.28).room(0.5).delay(0.25)
let arpFast = n("0 2 4 7 9 11 9 7").scale("G3:major").s("triangle").fast(2).gain(0.25).lpf(3000).room(0.4).delay(0.15)

// === BASS ===
let bass = note("g1 ~ ~ g1 ~ ~ g1 ~").s("sawtooth").lpf(220).gain(0.58)
let bassHard = note("g1 ~ g1 ~ g1 ~ g1 [g1 a1]").s("sawtooth").lpf(250).gain(0.6)
let subBass = note("g1 ~ g1 ~ c2 ~ d2 ~").s("sine").gain(0.52).lpf(80)

// === ATMOSPHERE ===
let pad = note("[g2,b2,d3]").s("gm_pad_sweep").gain(0.18).room(0.9).attack(1.5).release(3)
let padBig = note("[g2,b2,d3,g3]").s("gm_pad_halo").gain(0.15).room(0.95).attack(2).release(4)
let riser = s("white").lpf(sine.range(200,4000).slow(16)).gain(0.07)
let air = s("white").lpf(500).gain(0.04).room(1)

// === THE ARRANGEMENT ===
arrange(
  // INTRO
  [4, stack(vox.room(0.8), air)],
  [4, stack(vox, voxDeep, pad, air)],
  [4, stack(vox, voxChop.gain(0.2), hat.gain(0.12), pad)],
  [4, stack(vox, voxChop, hat.gain(0.2), kick.gain(0.5), pad)],

  // BUILD
  [4, stack(kick, hat, vox, chords.lpf(600))],
  [4, stack(garage, vox, voxChop, chords.lpf(900))],
  [8, stack(garage, bass, vox, voxChop, chords, arp.lpf(1200))],

  // PRE-DROP
  [4, stack(hat, voxStutter, stab.lpf(1500), riser)],
  [4, stack(voxStutter.fast(2), stab, arp, choir.gain(0.15), riser.gain(0.12))],

  // DROP 1
  [8, stack(fullKit, bass, stabBig, arp, voxChop, choir)],
  [8, stack(fullKit, bass, stabBig, arpHigh, vox, voxHigh, choir)],

  // BREAKDOWN 1
  [4, stack(hat.gain(0.12), chords, vox.slow(2), padBig)],
  [4, stack(chords.gain(0.4), arpHigh.slow(2), voxDeep, padBig, air)],

  // BUILD 2
  [4, stack(kick.gain(0.6), hat, chords, voxStutter, riser)],
  [4, stack(voxStutter.fast(2), stab.lpf(2500), arp, arpFast.gain(0.15), riser.gain(0.15))],

  // DROP 2
  [8, stack(fullKit, bass, subBass, stabBig, arp, voxChop, voxHigh)],
  [8, stack(maxKit, bassHard, subBass, stabBig, arpHigh, vox, voxStutter.gain(0.3), choir)],

  // BREAKDOWN 2
  [4, stack(bass.slow(2).lpf(100), chords.room(1), vox.slow(2), padBig)],
  [4, stack(kick.slow(2), chords, arpHigh.slow(2), voxDeep, choir.gain(0.25), padBig)],

  // FINAL BUILD
  [4, stack(hat, voxStutter, stab.lpf(2000), arpFast.gain(0.2), riser)],
  [4, stack(voxStutter.fast(2), stabBig.lpf(3500), arp, arpHigh, riser.gain(0.2))],

  // FINAL DROP
  [8, stack(maxKit, bassHard, subBass, stabMassive, arp, arpHigh, vox, voxChop)],
  [8, stack(maxKit, bassHard, subBass, stabMassive, arp, arpHigh, vox, voxHigh, voxChop.gain(0.3), choir)],

  // PEAK
  [8, stack(maxKit, bassHard, subBass, stabMassive, arp, arpFast, arpHigh, vox, voxHigh, voxChop, choir)],

  // OUTRO
  [4, stack(garage, bass.lpf(150), chords, vox, padBig)],
  [4, stack(kick, hat.gain(0.2), chords, voxChop.slow(2), padBig)],
  [4, stack(vox, voxDeep, chords.room(1), padBig, air)],
  [4, stack(padBig.room(1).gain(0.3), choir.slow(2).room(1), air)],
)
```

---

### LO-FI (~5 min @ 90 BPM = 112 cycles)

```javascript
setcps(0.375)  // 90 BPM

// === ELEMENTS ===

// Dusty keys - not your typical lo-fi chords
let keys = note("<[gb3,bb3,db4] [ab3,c4,eb4] [f3,ab3,c4] [gb3,bb3,eb4]>")
  .s("gm_epiano1").gain(0.45).lpf(1800).room(0.4)
  .color("#ff6b6b")

let keysHigh = note("<[gb4,bb4] ~ [ab4,c5] ~ [f4,ab4] ~ [gb4,bb4] ~>")
  .s("gm_music_box").gain(0.25).room(0.6).delay(0.3).delayfb(0.4)
  .color("#ffd93d")

// Warm bass - simple but deep
let bass = note("<gb2 ~ ~ gb2 ~ ab2 ~ ~> <ab2 ~ ~ ab2 ~ f2 ~ ~>")
  .s("gm_acoustic_bass").gain(0.55).lpf(400)
  .color("#6bcb77")

// Crunchy drums - that dusty SP-404 vibe
let kick = s("bd ~ ~ bd ~ ~ bd ~").gain(0.8).lpf(800).shape(0.2).color("#4d96ff")
let snare = s("~ ~ sd ~ ~ ~ sd ~").gain(0.6).room(0.5).lpf(3000).color("#ff922b")
let hat = s("hh*8").gain("0.3 0.15 0.25 0.2 0.3 0.12 0.28 0.18").lpf(4000).color("#adb5bd")
let vinyl = s("white").lpf(300).gain(0.03)

// The secret sauce - koto and shakuhachi for that 3am vibe
let koto = n("<0 ~ 3 ~ 5 ~ 3 ~>/2").scale("Gb3:minor:pentatonic")
  .s("gm_koto").gain(0.3).room(0.5).delay(0.25).delayfb(0.35)
  .color("#e599f7")

let flute = n("<~ 5 ~ 3 ~ 0 ~ ~>/4").scale("Gb4:minor:pentatonic")
  .s("gm_shakuhachi").gain(0.2).room(0.7).lpf(2500)
  .color("#66d9e8")

// Rain and atmosphere
let rain = s("white").lpf(600).hpf(200).gain(0.04).room(0.8)
let pad = note("[gb2,db3,ab3]").s("gm_pad_warm").gain(0.12).attack(2).release(4).room(0.9)
  .color("#845ef7")

// === THE ARRANGEMENT - 112 cycles = ~5 min ===
arrange(
  // Rain starts falling
  [4, stack(rain)],
  [4, stack(rain, pad.lpf(400))],

  // Keys fade in through the window
  [8, stack(rain, pad, keys.lpf(800).gain(0.25))],
  [8, stack(rain, pad, keys, vinyl)],

  // Beat drops soft
  [8, stack(kick, hat.lpf(2000), keys, bass.gain(0.3), vinyl, rain.gain(0.02))],
  [8, stack(kick, snare, hat, keys, bass, vinyl)],

  // Koto enters - something different
  [8, stack(kick, snare, hat, keys, bass, koto, vinyl)],
  [8, stack(kick, snare, hat, keys, keysHigh, bass, koto, vinyl)],

  // Breakdown - rain gets louder
  [4, stack(pad, keys.slow(2), rain.gain(0.06), flute)],
  [4, stack(pad, keysHigh.slow(2), koto.slow(2), rain.gain(0.05))],

  // Back in - full vibe
  [8, stack(kick, snare, hat, keys, keysHigh, bass, koto, vinyl)],
  [8, stack(kick, snare, hat, keys, keysHigh, bass, koto, flute.gain(0.15), vinyl)],

  // Peak - all together
  [12, stack(kick, snare, hat, keys, keysHigh, bass, koto, flute, pad.gain(0.08), vinyl)],

  // Outro - the rain continues
  [4, stack(kick.gain(0.5), hat.lpf(1500).gain(0.15), keys, bass.lpf(200), rain)],
  [4, stack(keys.lpf(1000), pad, koto.slow(2), rain)],
  [4, stack(pad, rain.gain(0.06))],
  [4, rain.gain(0.04)],
)._pianoroll({ labels: 1, fold: 0 })
```

---

### SYNTHWAVE (~4.5 min @ 108 BPM = 120 cycles)

```javascript
setcps(0.45)

// === THE PULSE - that iconic throbbing bass ===
let pulse = note("c2*8").s("sawtooth").lpf(sine.range(200,800).slow(4)).lpq(8).gain("0.6 0.4 0.5 0.4 0.6 0.4 0.5 0.45").room(0.2)
let pulseBig = note("c2*8").s("sawtooth").lpf(sine.range(300,1200).slow(8)).lpq(12).gain("0.7 0.45 0.55 0.45 0.7 0.45 0.55 0.5").room(0.3).distort(0.1)
let subPulse = note("c1*4").s("sine").gain(0.5)

// === ARPEGGIOS - that running synth ===
let arp = n("0 3 7 12 15 12 7 3").scale("C2:minor").s("square").lpf(sine.range(600,3000).slow(16)).gain(0.35).room(0.4).delay(0.2).delaytime(0.125).delayfeedback(0.4)
let arpHigh = n("0 3 7 12 15 19 15 12").scale("C3:minor").s("sawtooth").lpf(2500).gain(0.3).room(0.5).delay(0.25).delayfeedback(0.5)
let arpFast = n("0 3 7 10 12 10 7 3").scale("C3:minor").fast(2).s("triangle").lpf(sine.range(1000,4000).slow(8)).gain(0.25).room(0.4).delay(0.15)

// === PADS - dark atmosphere ===
let pad = note("<[c3,eb3,g3] [c3,eb3,g3] [ab2,c3,eb3] [bb2,d3,f3]>").s("sawtooth").lpf(800).attack(0.5).release(2).gain(0.25).room(0.8).size(0.9)
let padDark = note("[c2,g2,c3]").s("sawtooth").lpf(400).attack(1).release(3).gain(0.2).room(0.9).size(0.95)
let padMassive = note("<[c3,eb3,g3,c4] [c3,eb3,g3,c4] [ab2,c3,eb3,ab3] [bb2,d3,f3,bb3]>").s("supersaw").lpf(sine.range(1000,4000).slow(16)).attack(0.3).release(1.5).gain(0.4).room(0.6)

// === LEAD - that haunting melody ===
let lead = n("<[~ 7 ~ 5] [3 ~ 0 ~] [~ 7 ~ 10] [8 ~ 7 ~]>").scale("C4:minor").s("sawtooth").lpf(2000).gain(0.4).room(0.6).delay(0.3).delayfeedback(0.45).vib(5).vibmod(0.2)
let leadHigh = n("<[12 ~ 10 ~] [~ 8 ~ 7] [10 ~ 12 ~] [~ 15 12 ~]>").scale("C4:minor").s("square").lpf(3000).gain(0.35).room(0.7).delay(0.25)

// === 80s DRUMS ===
let kick = s("bd*4").gain(0.85).shape(0.2)
let snare = s("~ sd ~ sd").gain(0.75).room(0.5).size(0.8)
let snareGated = s("~ sd ~ sd").gain(0.8).room(0.6).size(0.9).shape(0.15)
let hat = s("hh*8").gain("0.35 0.2 0.3 0.2 0.35 0.2 0.3 0.25")
let hatOpen = s("~ ~ ~ ~ ~ ~ ~ oh").gain(0.25).room(0.4)
let tom = s("~ ~ ~ ~ ~ ~ [mt lt] ~").gain(0.5).room(0.5)
let clap = s("~ [cp?] ~ cp").gain(0.4).room(0.6)
let drums = stack(kick, snare, hat)
let drumsFull = stack(kick, snareGated, hat, hatOpen, clap)
let drumsMax = stack(kick, snareGated, hat, hatOpen, tom, clap)

// === ATMOSPHERE ===
let noise = s("white").lpf(300).gain(0.03).room(1)
let riser = s("white").lpf(sine.range(100,6000).slow(8)).gain(0.08)
let hit = note("c2").s("gm_orchestra_hit").gain(0.6).room(0.7)
let strings = note("<[c3,g3] [eb3,bb3] [ab2,eb3] [bb2,f3]>").s("gm_string_ensemble_1").gain(0.2).attack(0.4).release(1.5).room(0.7)

// === THE ARRANGEMENT ===
arrange(
  // INTRO - darkness awakens
  [4, stack(noise, padDark.lpf(200))],
  [4, stack(noise, padDark, pulse.lpf(150).gain(0.2))],
  [4, stack(noise, padDark, pulse.lpf(300).gain(0.3), arp.lpf(400).gain(0.1))],
  [4, stack(padDark, pulse.lpf(500), arp.lpf(800).gain(0.2))],

  // THE PULSE BUILDS
  [4, stack(pulse, arp, pad.lpf(400))],
  [4, stack(pulse, arp, pad.lpf(600), hat.gain(0.15))],
  [8, stack(pulse, arp, pad, hat.gain(0.25), kick.gain(0.5))],

  // DRUMS ENTER
  [8, stack(drums, pulse, arp, pad)],
  [8, stack(drums, pulse, arp, arpHigh.gain(0.15), pad, strings.gain(0.1))],

  // PRE-DROP - tension
  [4, stack(hat, pulse.fast(2), arp, riser)],
  [4, stack(pulse.fast(2), arpFast, padMassive.lpf(1500), riser.gain(0.12))],

  // DROP 1 - the upside down opens
  [2, stack(hit, padMassive)],
  [6, stack(drumsFull, pulseBig, subPulse, arp, arpHigh, padMassive, lead)],
  [8, stack(drumsFull, pulseBig, subPulse, arp, arpHigh, padMassive, lead, strings)],

  // BREAKDOWN - into the void
  [4, stack(pulse.slow(2).lpf(300), pad.room(1), noise)],
  [4, stack(pulse.lpf(400), pad, arp.slow(2).lpf(600), leadHigh.slow(2).room(0.9))],

  // BUILD 2 - it's coming back
  [4, stack(kick.gain(0.6), pulse, arp, padMassive.lpf(800), riser)],
  [4, stack(kick, hat, pulse.fast(2), arpFast, padMassive.lpf(1500), riser.gain(0.15))],

  // DROP 2 - FULL POWER
  [2, stack(hit, padMassive.gain(0.5))],
  [6, stack(drumsMax, pulseBig, subPulse, arp, arpHigh, padMassive, lead, leadHigh.gain(0.25))],
  [8, stack(drumsMax, pulseBig, subPulse, arp, arpHigh, arpFast.gain(0.2), padMassive, lead, strings)],

  // PEAK - maximum 80s
  [8, stack(drumsMax, pulseBig, subPulse, arp, arpHigh, arpFast, padMassive, lead, leadHigh, strings)],

  // OUTRO - the gate closes
  [4, stack(drums, pulse, arp, pad, strings)],
  [4, stack(kick, pulse.lpf(400), pad, leadHigh.slow(2))],
  [4, stack(pulse.slow(2).lpf(200), padDark, noise)],
  [4, stack(padDark.room(1), noise)],
)._pianoroll({ cycles: 16 })
```

---

## Learn From These, Don't Copy

What to take from the examples:
- **Structure**: How to organize elements into variables
- **Layering**: How `stack()` builds complexity
- **Pacing**: How cycle counts create tension and release
- **Movement**: How filter/gain automation keeps it alive
- **Contrast**: How breakdowns make drops hit harder

What to change **every time**:
- Chord progressions - find your own harmony
- Rhythms - your own groove
- Instruments - mix unexpected sounds
- BPM - match the vibe you want
- Arrangement - your own journey

---

## Key Techniques

- **Layered drum kits**: Build `garage`, `fullKit`, `maxKit` variables for easy stacking
- **Filter automation**: `.lpf(sine.range(800, 4000).slow(8))` for movement
- **Gradual reveals**: Open filters, add gain, introduce elements over phases
- **Breakdowns**: Strip to atmosphere, build tension with risers
- **Stutter effects**: `.clip(0.1)`, `.fast(2)` on vocals for builds
- **Room for emotion**: `.room(0.8+)` on pads and vocals during breakdowns
- **Key changes**: `.trans(3)` to shift everything up a minor third
