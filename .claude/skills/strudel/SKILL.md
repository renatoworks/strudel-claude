---
name: strudel
description: Create music with Strudel live coding syntax. Use when the user asks to play a song, make music, create beats, patterns, or sounds.
allowed-tools: Bash(curl *), Bash(say *)
---

# Strudel Reference

Quick reference for Strudel syntax. Not exhaustive - experiment and discover.

---

## The Basics

Everything happens in **cycles** (≈2 seconds by default).

```javascript
$: s("bd")           // One kick per cycle
$: s("bd*4")         // Four kicks per cycle
$: s("bd sd bd sd")  // Sequence: kick-snare-kick-snare
$: s("bd*4, hh*8")   // Layers: kick AND hats together
```

---

## Mini-Notation Cheatsheet

| Symbol | Meaning | Example |
|--------|---------|---------|
| `*n` | Repeat n times | `hh*4` |
| `/n` | Slow down n times | `[c d e f]/2` |
| `[ ]` | Group (subdivide) | `[bd sd] hh` |
| `< >` | Alternate each cycle | `<bd sd cp>` |
| `,` | Play in parallel (stack) | `bd, hh*2` |
| `~` or `-` | Rest (silence) | `bd ~ sd ~` |
| `?` | 50% chance to play | `hh*8?` |
| `(n,m)` | Euclidean rhythm | `bd(3,8)` |
| `@n` | Elongate (weight) | `c@3 e` |
| `!n` | Replicate | `bd!3 sd` |
| `\|` | Random choice | `bd \| sd \| cp` |
| `:n` | Sample number | `hh:2` |

---

## Sounds

**Basic Drums:** `bd` `sd` `hh` `cp` `oh` `rim` `lt` `mt` `ht` `cr` `rd` `cb`

**Drum Banks (classic):** `.bank("RolandTR909")` `.bank("RolandTR808")` `.bank("RolandTR707")`

### Drum Machines Catalog

Use with sample pattern: `s("tr808_bd tr808_sd tr808_hh")` or with `:n` for variations: `s("tr808_bd:0 tr808_bd:5")`

**ROLAND (The Classics)**
| Machine | Sound | Vibe |
|---------|-------|------|
| `tr808` | 25 kicks, 25 snares, 5 toms each | THE hip-hop/electro sound |
| `tr909` | 4 kicks, 16 snares, 9 toms each | THE house/techno sound |
| `tr707` | 2 kicks, 2 snares | Clean 80s digital |
| `tr606` | 1 each | Acid house companion |
| `tr626` | 2 kicks, 3 snares, 8 percs | Latin percussion |
| `tr505` | 1 each, 3 percs | Budget 80s |
| `tr727` | 10 percs, 2 shakers | Latin percussion only |
| `mc303` | 16 kicks, 26 snares, 39 percs | Groovebox monster |
| `r8` | 7 kicks, 12 snares, 8 percs | Pro 90s workstation |
| `d110` | 3 snares, 3 percs | LA Synthesis module |
| `d70` | 4 kicks, 5 snares | 90s workstation |
| `system100` | 15 kicks, 21 snares, 19 percs | Modular analog |
| `sh09` | 43 kicks | Synth bass drums |

**LINN (The Originals)**
| Machine | Sound | Vibe |
|---------|-------|------|
| `linndrum` | 1 kick, 3 snares, 3 hats, 6 percs | Prince, 80s pop legend |
| `lm1` / `linnlm1` | 4 kicks, 1 snare, 3 percs | First real drum machine |
| `lm2` / `linnlm2` | 4 kicks, 4 snares | LM-1 successor |
| `linn9000` / `9000` | 2 crashes, 2 toms each, 3 percs | Sampling pioneer |
| `linn` / `akailinn` | Full kit | Akai recreation |

**OBERHEIM**
| Machine | Sound | Vibe |
|---------|-------|------|
| `dmx` / `oberheimdmx` | 3 kicks, 3 snares | New Order, early hip-hop |

**E-MU**
| Machine | Sound | Vibe |
|---------|-------|------|
| `sp12` / `emusp12` | 14 kicks, 21 snares, 6 toms each | Sampling legend |
| `drumulator` / `emudrumulator` | 1 each | Budget classic |
| `emumodular` | 2 kicks, 2 percs | Modular weirdness |

**YAMAHA**
| Machine | Sound | Vibe |
|---------|-------|------|
| `rm50` / `yamaharm50` | 103 kicks, 108 snares, 56 percs | MASSIVE library |
| `ry30` / `yamahary30` | 13 kicks, 21 snares, 13 percs | AWM synthesis |
| `rx5` / `yamaharx5` | 2 kicks, 3 snares, FX | FM drums |
| `rx21` / `yamaharx21` | 1 each | Budget FM |
| `tg33` / `yamahatg33` | 4 kicks, 5 snares, 12 percs | Vector synthesis |

**KORG**
| Machine | Sound | Vibe |
|---------|-------|------|
| `m1` / `korgm1` | 3 kicks, 4 snares, 16 misc, 7 percs | Workstation king |
| `minipops` / `korgminipops` | 7 kicks, 13 snares | Vintage analog |
| `kpr77` / `korgkpr77` | 1 each | Preset rhythm |
| `kr55` / `korgkr55` | 1 each, 2 percs | Analog preset |
| `ddm110` / `korgddm110` | 1 kick, 2 toms each | Digital |
| `poly800` / `korgpoly800` | 4 kicks | Synth kicks |
| `t3` / `korgt3` | 5 kicks, 5 snares, 4 percs | Workstation |
| `krz` / `korgkrz` | 2 snares, 2 FX | Trinity/Triton |

**BOSS**
| Machine | Sound | Vibe |
|---------|-------|------|
| `dr110` / `bossdr110` | 1 each | Compact analog |
| `dr220` / `bossdr220` | Full kit + perc | Digital 80s |
| `dr55` / `bossdr55` | 2 kicks, 8 snares, 2 hats | Dr. Rhythm |
| `dr550` / `bossdr550` | 5 kicks, 6 snares, 11 percs | Pro 90s |

**ALESIS**
| Machine | Sound | Vibe |
|---------|-------|------|
| `hr16` / `alesishr16` | 1 each, 8 percs, 3 shakers | 80s digital |
| `sr16` / `alesissr16` | 13 kicks, 12 snares, 7 percs | Studio staple |

**SEQUENTIAL CIRCUITS**
| Machine | Sound | Vibe |
|---------|-------|------|
| `circuitsdrumtracks` | 1 each | Early digital |
| `circuitstom` | 2 hi toms | Tom module |

**AKAI**
| Machine | Sound | Vibe |
|---------|-------|------|
| `mpc60` / `akaimpc60` | 2 kicks, 3 snares, 5 percs | Hip-hop legend |
| `mpc1000` | 5 kicks, 4 snares | Modern MPC |
| `xr10` / `akaixr10` | 10 kicks, 10 snares, 15 percs | XR series |

**CASIO**
| Machine | Sound | Vibe |
|---------|-------|------|
| `rz1` / `casiorz1` | 1 each, 2 rides | Sampling keyboard |
| `sk1` / `casiosk1` | 1 each | Toy sampling |
| `vl1` / `casiovl1` | 1 each | VL-Tone |

**SIMMONS**
| Machine | Sound | Vibe |
|---------|-------|------|
| `sds5` / `simmonssds5` | 12 kicks, 21 snares, 7 rims | Electronic drum pads |
| `sds400` / `simmonssds400` | 3 snares, 8 mid toms, 6 lo toms | Tom heaven |

**OTHER GEMS**
| Machine | Sound | Vibe |
|---------|-------|------|
| `spacedrum` / `viscospacedrum` | 11 kicks, 6 hats, 7 hi toms | Weird analog |
| `dpm48` / `sakatadpm48` | 3 kicks, 2 snares, 2 percs | Sakata |
| `compurhythm78` | 8 percs, 4 misc | Roland CR-78 |
| `compurhythm1000` | Full kit, 3 percs | Roland CR-1000 |
| `compurhythm8000` | Full kit, 2 percs | Roland CR-8000 |
| `mfb512` | 1 each | German analog |
| `sergemodular` | 5 percs | Serge modular |
| `mridangam_*` | South Indian percussion | `dhi`, `dhin`, `ka`, `ta`, `thom`, etc. |

**Sample Counts Key:** Numbers in parentheses indicate variations available via `:n`

```javascript
// Classic 808 kit
s("tr808_bd tr808_sd:3 tr808_hh*2 tr808_oh").gain(0.8)

// Mix machines for unique kits
s("tr909_bd linndrum_sd tr808_hh dmx_cp")

// Explore variations
s("tr808_bd:<0 5 10 15 20>") // cycle through 808 kick variations

// Lo-fi with SP-12
s("sp12_bd sp12_sd:5 sp12_hh").lpf(2000).room(0.4)

// Yamaha RM50 has EVERYTHING
s("rm50_bd:50 rm50_sd:30 rm50_perc:20")
```

### Synthesizers

**Basic Waveforms:**
| Sound | Alias | Description |
|-------|-------|-------------|
| `sine` | `sin` | Pure tone, smooth |
| `triangle` | `tri` | Soft, flute-like |
| `sawtooth` | `saw` | Bright, buzzy - classic synth |
| `square` | `sqr` | Hollow, clarinet-like |
| `supersaw` | - | Detuned saws - huge pads |
| `pulse` | - | Variable width square |

**Noise Sources:**
| Sound | Character |
|-------|-----------|
| `white` | Full spectrum hiss |
| `pink` | Warmer, less harsh |
| `brown` | Deep rumble |

**Z-Oscillators (aliased/lo-fi):**
`z_sine` `z_sawtooth` `z_square` `z_triangle` `z_tan` `z_noise`

**Other Synths:**
| Sound | Description |
|-------|-------------|
| `zzfx` | ZzFX game audio synth |
| `bytebeat` | Algorithmic 8-bit |
| `crackle` | Vinyl crackle noise |

### Wavetables

```javascript
// Wavetable synthesis
s("wt_digital:2").note("c3 e3 g3 c4")
```

| Wavetable | Variations | Vibe |
|-----------|------------|------|
| `wt_digital` | 5 | Digital textures |
| `wt_digital_bad_day` | 1 | Moody digital |
| `wt_digital_basique` | 1 | Simple digital |
| `wt_digital_crickets` | 1 | Insect-like |
| `wt_digital_curses` | 1 | Harsh digital |
| `wt_digital_echoes` | 1 | Spacey |
| `wt_vgame` | 11 | Video game sounds |

### GM Instruments (General MIDI)

All have multiple velocity layers (number in parentheses). Use `:n` for variations.

**Pianos (Keys):**
| Sound | Layers | Character |
|-------|--------|-----------|
| `gm_piano` | 32 | Acoustic grand |
| `gm_epiano1` | 11 | Rhodes-style |
| `gm_epiano2` | 9 | DX7-style |
| `gm_harpsichord` | 8 | Baroque |
| `gm_clavinet` | 4 | Funky |

**Chromatic Percussion:**
| Sound | Layers |
|-------|--------|
| `gm_celesta` | 6 |
| `gm_glockenspiel` | 5 |
| `gm_music_box` | 5 |
| `gm_vibraphone` | 6 |
| `gm_marimba` | 7 |
| `gm_xylophone` | 6 |
| `gm_tubular_bells` | 6 |
| `gm_dulcimer` | 5 |

*Organs:* `gm_drawbar_organ` `gm_percussive_organ` `gm_rock_organ` `gm_church_organ` `gm_reed_organ` `gm_accordion` `gm_harmonica` `gm_bandoneon`

*Guitars:* `gm_acoustic_guitar_nylon` `gm_acoustic_guitar_steel` `gm_electric_guitar_jazz` `gm_electric_guitar_clean` `gm_electric_guitar_muted` `gm_overdriven_guitar` `gm_distortion_guitar` `gm_guitar_harmonics`

*Bass:* `gm_acoustic_bass` `gm_electric_bass_finger` `gm_electric_bass_pick` `gm_fretless_bass` `gm_slap_bass_1` `gm_slap_bass_2` `gm_synth_bass_1` `gm_synth_bass_2`

*Strings:* `gm_violin` `gm_viola` `gm_cello` `gm_contrabass` `gm_tremolo_strings` `gm_pizzicato_strings` `gm_orchestral_harp` `gm_timpani`

*Ensemble:* `gm_string_ensemble_1` `gm_string_ensemble_2` `gm_synth_strings_1` `gm_synth_strings_2` `gm_choir_aahs` `gm_voice_oohs` `gm_synth_choir` `gm_orchestra_hit`

*Brass:* `gm_trumpet` `gm_trombone` `gm_tuba` `gm_muted_trumpet` `gm_french_horn` `gm_brass_section` `gm_synth_brass_1` `gm_synth_brass_2`

*Reeds:* `gm_soprano_sax` `gm_alto_sax` `gm_tenor_sax` `gm_baritone_sax` `gm_oboe` `gm_english_horn` `gm_bassoon` `gm_clarinet`

*Pipes:* `gm_piccolo` `gm_flute` `gm_recorder` `gm_pan_flute` `gm_blown_bottle` `gm_shakuhachi` `gm_whistle` `gm_ocarina`

*Synth Leads:* `gm_lead_1_square` `gm_lead_2_sawtooth` `gm_lead_3_calliope` `gm_lead_4_chiff` `gm_lead_5_charang` `gm_lead_6_voice` `gm_lead_7_fifths` `gm_lead_8_bass_lead`

*Synth Pads:* `gm_pad_new_age` `gm_pad_warm` `gm_pad_poly` `gm_pad_choir` `gm_pad_bowed` `gm_pad_metallic` `gm_pad_halo` `gm_pad_sweep`

*Synth FX:* `gm_fx_rain` `gm_fx_soundtrack` `gm_fx_crystal` `gm_fx_atmosphere` `gm_fx_brightness` `gm_fx_goblins` `gm_fx_echoes` `gm_fx_sci_fi`

*Ethnic:* `gm_sitar` `gm_banjo` `gm_shamisen` `gm_koto` `gm_kalimba` `gm_bagpipe` `gm_fiddle` `gm_shanai`

*Percussive:* `gm_tinkle_bell` `gm_agogo` `gm_steel_drums` `gm_woodblock` `gm_taiko_drum` `gm_melodic_tom` `gm_synth_drum` `gm_reverse_cymbal`

*Sound FX:* `gm_guitar_fret_noise` `gm_breath_noise` `gm_seashore` `gm_bird_tweet` `gm_telephone` `gm_helicopter` `gm_applause` `gm_gunshot`

```javascript
// Switch between sounds (space = alternate)
note("c d e f").sound("piano gm_electric_guitar_muted")

// Stack sounds (comma = layer together)
note("c d e f").sound("piano, gm_electric_guitar_muted")

// FM Synthesis
.fm(4)            // FM modulation index
.fmh(2)           // FM harmonicity ratio

// Vibrato
.vib(4)           // Vibrato speed (hz)
.vibmod(0.5)      // Vibrato depth (semitones)
```

### Samples Catalog

High-quality multi-sampled instruments. Numbers show available variations.

**Pianos & Keys:**
| Sample | Variations | Character |
|--------|------------|-----------|
| `piano` | 29 | Acoustic grand |
| `piano1` | 22 | Alternative piano |
| `steinway` | 42 | Concert grand |
| `fmpiano` | 22 | FM synthesis piano |
| `kawai` | 37 | Kawai grand |
| `clavisynth` | 19 | Clavinet-style synth |

**Strings & Harps:**
| Sample | Variations |
|--------|------------|
| `folkharp` | 29 |
| `harp` | 23 |
| `psaltery_bow` | 11 |
| `psaltery_pluck` | 11 |
| `psaltery_spiccato` | 11 |
| `strumstick` | 19 |

**Mallet Instruments:**
| Sample | Variations | Character |
|--------|------------|-----------|
| `kalimba` | 11 | Thumb piano |
| `kalimba2` - `kalimba5` | 14-25 | More kalimbas |
| `marimba` | 10 | Wooden bars |
| `glockenspiel` | 7 | Metal bells |
| `vibraphone` | 11 | Jazz vibes |
| `vibraphone_bowed` | 6 | Bowed vibes |
| `vibraphone_soft` | 11 | Soft mallets |
| `xylophone_hard_ff` | 8 | Hard mallets loud |
| `xylophone_soft_pp` | 8 | Soft mallets quiet |
| `balafon` | 6 | African xylophone |
| `balafon_hard` / `_soft` | 6 | Articulation variants |
| `tubularbells` | 9 | Orchestral chimes |
| `tubularbells2` | 11 | Alternative |
| `handbells` | 3 | Hand bells |
| `handchimes` | 19 | Wind chimes |
| `belltree` | 6 | Bell tree |
| `wineglass` | 4 | Rubbed glass |

**Wind Instruments:**
| Sample | Variations |
|--------|------------|
| `recorder_soprano_sus` | 13 |
| `recorder_soprano_stacc` | 12 |
| `recorder_alto_sus` | 12 |
| `recorder_alto_vib` | 12 |
| `recorder_tenor_sus` | 13 |
| `recorder_bass_sus` | 12 |
| `ocarina` | 11 |
| `ocarina_small` | 10 |
| `ocarina_vib` | 10 |
| `harmonica` | 9 |
| `harmonica_soft` | 10 |
| `harmonica_vib` | 10 |
| `sax` | 23 |
| `sax_stacc` | 23 |
| `sax_vib` | 19 |
| `saxello` | 8 |
| `super64` | 13 (chromatic harmonica) |

**Organs:**
| Sample | Variations |
|--------|------------|
| `organ_4inch` | 27 |
| `organ_8inch` | 27 |
| `organ_full` | 27 |
| `pipeorgan_loud` | 21 |
| `pipeorgan_quiet` | 21 |
| `pipeorgan_loud_pedal` | 11 |
| `pipeorgan_quiet_pedal` | 11 |

**Percussion - Pitched:**
| Sample | Variations |
|--------|------------|
| `timpani` | 30 |
| `timpani_roll` | 10 |
| `timpani2` | 204 (!) |
| `slitdrum` | 6 |

**Percussion - Drums:**
| Sample | Variations |
|--------|------------|
| `bassdrum1` | 8 |
| `bassdrum2` | 30 |
| `snare_hi` | 8 |
| `snare_low` | 20 |
| `snare_modern` | 72 |
| `snare_rim` | 4 |
| `tom_stick` | 8 |
| `tom_mallet` | 8 |
| `tom_rim` | 6 |
| `tom2_stick` / `mallet` / `rim` | 6-8 |
| `hihat` | 15 |
| `clap` | 10 |
| `jazz` | 8 (jazz kit) |

**Percussion - World:**
| Sample | Variations | Origin |
|--------|------------|--------|
| `bongo` | 28 | Latin |
| `conga` | 34 | Latin |
| `cajon` | 18 | Flamenco |
| `darbuka` | 20 | Middle Eastern |
| `framedrum` | 18 | World |
| `tambourine` | 7 | Universal |
| `tambourine2` | 7 | Alternative |
| `agogo` | 5 | Brazilian |
| `shaker_large` | 6 | Universal |
| `shaker_small` | 16 | Universal |
| `cabasa` | 6 | Latin |
| `cowbell` | 13 | Universal |
| `clave` | 6 | Latin |
| `guiro` | 5 | Latin |

**Percussion - Metals:**
| Sample | Variations |
|--------|------------|
| `sus_cymbal` | 25 |
| `sus_cymbal2` | 23 |
| `clash` | 10 |
| `clash2` | 5 |
| `triangles` | 37 |
| `fingercymbal` | 1 |
| `gong` | 7 |
| `gong2` | 6 |
| `sleighbells` | 6 |
| `anvil` | 9 |
| `metal` | 10 |
| `brakedrum` | 17 |

**Percussion - Wood & Effects:**
| Sample | Variations |
|--------|------------|
| `woodblock` | 10 |
| `marktrees` | 6 |
| `ratchet` | 8 |
| `slapstick` | 5 |
| `vibraslap` | 4 |
| `flexatone` | 8 |
| `oceandrum` | 3 |

**Asian Instruments:**
| Sample | Variations | Origin |
|--------|------------|--------|
| `dantranh` | 17 | Vietnamese zither |
| `dantranh_tremolo` | 16 | With tremolo |
| `dantranh_vibrato` | 16 | With vibrato |
| `didgeridoo` | 12 | Australian |

**Sound Effects:**
| Sample | Variations |
|--------|------------|
| `space` | 18 |
| `siren` | 5 |
| `trainwhistle` | 6 |
| `ballwhistle` | 2 |
| `wind` | 10 |
| `crow` | 4 |
| `insect` | 3 |
| `casio` | 3 |
| `east` | 9 |
| `num` | 21 |
| `numbers` | 9 |

```javascript
// Multi-sampled piano
s("steinway").note("c3 e3 g3 c4")

// World percussion
s("conga:5 conga:12 bongo:3 bongo:8").gain(0.7)

// Vietnamese zither with tremolo
s("dantranh_tremolo:8").note("c4 e4 g4")

// Mix sample types
s("timpani:5, sus_cymbal:10").note("c2")
```

---

## Notes

```javascript
note("c4 e4 g4")                 // Letter notation
n("0 2 4 7").scale("C:minor")    // Scale degrees
chord("<Cm7 Fm7>").voicing()     // Chords
```

---

## Scales

Use `n()` with `.scale()` - any number will sound good in the scale.

**Common scales:**
- `C:major` - happy, bright
- `A:minor` - sad, emotional
- `D:dorian` - jazzy, soulful
- `G:mixolydian` - bluesy, groovy
- `A:minor:pentatonic` - safe, universal
- `F:major:pentatonic` - bright, easy

**With octave:** `A2:minor` (starts at A2)

**Automate scales:**
```javascript
n("0 2 4 7").scale("<C:major D:mixolydian>/4")
```

---

## Sampler Controls

```javascript
.speed(2)         // Playback speed (negative = reverse)
.begin(0.25)      // Start point (0-1)
.end(0.75)        // End point (0-1)
.clip(0.5)        // Duration multiplier
.cut(1)           // Cut group (stops others in same group)
.loopAt(4)        // Fit sample to n cycles
.fit()            // Fit sample to event duration

// Slicing
.chop(8)          // Chop into n pieces
.slice(8, "0 1 2 3 4 5 6 7")  // Slice and reorder
.splice(8, "0 1 2 3")         // Like slice, speed-adjusted
```

---

## Envelopes

```javascript
// Amplitude ADSR
.attack(0.1)      // Attack time (seconds)
.decay(0.2)       // Decay time
.sustain(0.5)     // Sustain level (0-1)
.release(0.3)     // Release time

// Filter envelope (add to lpf)
.lpenv(4)         // Envelope depth
.lpa(0.1)         // Filter attack
.lpd(0.2)         // Filter decay

// Pitch envelope
.penv(12)         // Pitch envelope depth (semitones)
```

---

## Effects

```javascript
// Filters
.lpf(800)         // Low-pass filter
.hpf(200)         // High-pass filter
.lpq(10)          // Resonance
.vowel("a e i o") // Vowel filter

// Space
.room(0.5)        // Reverb amount
.size(4)          // Reverb size
.delay(0.5)       // Delay amount
.delaytime(0.25)  // Delay time
.delayfb(0.5)     // Delay feedback

// Dynamics
.gain(0.8)        // Volume
.pan(0.5)         // Stereo position
.distort(0.2)     // Distortion
.shape(0.3)       // Waveshaping
.crush(4)         // Bit crush
```

---

## Signals (Continuous Patterns)

```javascript
// Waveforms (0-1)
sine              // Smooth oscillation
saw               // Ramp up
tri               // Triangle
square            // Square wave
cosine            // Cosine

// Random
rand              // Random 0-1
perlin            // Smooth random
irand(8)          // Random integer 0-7

// Modifiers
.range(200, 2000) // Scale to range
.slow(8)          // Slow the signal

// Example: filter sweep
.lpf(sine.range(200, 2000).slow(8))
```

---

## Pattern Functions

```javascript
// Time
.fast(2)          // Double speed
.slow(2)          // Half speed
.early(0.25)      // Shift earlier
.late(0.25)       // Shift later

// Structure
.rev()            // Reverse
.palindrome()     // Forward then backward
.iter(4)          // Shift start each cycle
.ply(2)           // Repeat each event

// Layering
.off(1/8, x=>x.add(7))    // Offset copy + transform
.layer(x=>x.add(7))       // Layer with transform
.superimpose(rev)         // Add reversed copy
.jux(rev)                 // Stereo: L=normal, R=reversed

// Conditional
.every(4, fast(2))        // Every nth cycle
.sometimes(rev)           // 50% chance
.often(fast(2))           // 75% chance
.rarely(rev)              // 25% chance
.struct("x ~ x ~")        // Apply rhythmic structure
.mask("1 0 1 1")          // Silence where 0

// Randomness
.degrade()                // Remove 50% randomly
.degradeBy(0.3)           // Remove 30% randomly
choose("bd", "sd", "cp")  // Pick one randomly
```

---

## Tempo & Duration

```javascript
setcpm(130/4)     // 130 BPM (4/4 time)
setcpm(180/3)     // 180 BPM waltz (3/4 time)
setcps(0.5)       // 0.5 cycles per second (= 120 BPM)
```

### Duration Math

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

Sum your `arrange()` entries to hit the target.

---

## Chord Voicing & Progressions

```javascript
// Define a progression (angle brackets = one chord per cycle)
let prog = "<Cm7 Fm7 Abmaj7 G7>"

// Basic chord with voicing
chord(prog).voicing().s("piano")

// .anchor() sets the root octave for voicings
chord(prog).anchor("C3").voicing()     // Bass register
chord(prog).anchor("C5").voicing()     // High register

// Dynamic anchors (changes over time)
chord(prog).anchor("<C3@8 C4@4>").voicing()

// .ply(n) repeats each chord n times per cycle
// Great for waltz (3) or house (4) feels
chord(prog).ply(3).gain("0.8 0.3 0.4")  // Waltz: strong-weak-weak
chord(prog).ply(4).gain("1 0.5 0.7 0.5") // House groove

// .arp() arpeggiate through chord tones by index
chord(prog).voicing().arp("0 1 2 3")     // Root, 2nd, 3rd, 4th
chord(prog).voicing().arp("0 2 4 7")     // Wider intervals
chord(prog).ply(6).voicing().arp("0 1 2 3 5 7").rev()  // Descending

// Add octave jumps to arpeggios
chord(prog).voicing().arp("0 1 2 3".add("[12 |0|0]*4"))

// Extract just the root for bass
chord(prog).anchor("C2").voicing().arp("0")
```

---

## Sidechain Ducking

```javascript
// Make elements duck (lower volume) when another orbit plays
.duckorbit(1)      // Duck when orbit 1 plays
.duckdepth(0.3)    // How much to duck (0-1)

// Classic house sidechain: chords pump with kick
let kick = s("bd").orbit(1)
let chords = chord("<Cm7 Fm7>").voicing()
  .duckorbit(1).duckdepth(0.4)
  .s("piano")

stack(kick, chords)
```

---

## Timeline Arrangements

When user asks to **"arrange"**, **"create a track"**, **"make a song"**, or specifies a duration → use `arrange()`.

```javascript
arrange(
  [4, intro],
  [8, build],
  [8, drop],
  [4, outro],
)
```

**See `/arrange` skill for full reference with duration math and genre examples.**

---

## Probabilistic Variations

```javascript
// .sometimesBy(probability, transform)
.sometimesBy(0.3, x => x.crush(4))   // 30% chance bitcrush
.sometimesBy(0.5, x => x.rev())      // 50% chance reverse

// Create variation helper functions
const degrade = (x, freq = 0.5) => x
  .sometimesBy(freq, x => x.clip("0.5|0.75"))
  .sometimesBy(freq, x => x.ply("2|3"))

// Use in arrangements
arrange(
  [8, degrade(arpeggio)],
  [8, degrade(arpeggio, 0.25)],  // Less degradation
)
```

---

## Transposition

```javascript
.trans(12)    // Up one octave (12 semitones)
.trans(-5)    // Down a fourth
.trans(3)     // Up a minor third (key change!)

// Dramatic ending: transpose up
arrange(
  [8, melody],
  [8, melody.trans(3)],  // Key change!
  [4, melody.trans(3).room(1)],
)
```

---

## Genre → Instrument Guide

| Genre | Drums | Bass | Keys/Pads | Lead/Melody |
|-------|-------|------|-----------|-------------|
| **House** | tr909 | `sawtooth` | `gm_pad_warm`, `gm_epiano1` | `supersaw` |
| **Techno** | tr808, tr909 | `sawtooth`, `square` | `gm_pad_metallic` | `gm_lead_2_sawtooth` |
| **Jazz** | tr707 (brushes) | `gm_acoustic_bass` | `gm_epiano1`, `piano` | `gm_tenor_sax`, `gm_trumpet` |
| **Ambient** | minimal/none | `gm_contrabass` | `gm_pad_warm`, `gm_pad_halo` | `kalimba`, `gm_flute` |
| **Metal** | tr909 (fast) | `gm_distortion_guitar` | `gm_overdriven_guitar` | `gm_guitar_harmonics` |
| **Synthwave** | tr808 | `sawtooth`, `gm_synth_bass_1` | `gm_pad_warm` | `supersaw`, `gm_lead_2_sawtooth` |
| **Lo-fi** | vinyl drums | `gm_acoustic_bass` | `gm_epiano1`, `piano` | `gm_vibraphone`, `kalimba` |
| **Orchestral** | `gm_timpani` | `gm_contrabass`, `gm_bassoon` | `gm_string_ensemble_1` | `gm_violin`, `gm_flute`, `gm_french_horn` |
| **Latin** | congas, bongos | `gm_acoustic_bass` | `piano` | `gm_trumpet`, `gm_alto_sax` |
| **Funk** | tr808 | `gm_slap_bass_1` | `gm_clavinet`, `gm_epiano1` | `gm_trumpet`, `gm_tenor_sax` |

---

## Method Syntax (IMPORTANT)

**All methods need parentheses.** Even methods with no arguments.

```javascript
// ✅ CORRECT
.rev()
.palindrome()
.degrade()

// ❌ WRONG - will cause errors
.rev
.palindrome
.degrade
```

### Higher-Order Functions

Functions like `jux`, `sometimes`, `every`, `off` take a **function** as argument, not a method reference.

```javascript
// ✅ CORRECT - arrow function
.jux(x => x.rev())
.sometimes(x => x.speed(-1))
.every(4, x => x.fast(2))
.off(0.125, x => x.add(7))

// ❌ WRONG - won't work
.jux(rev)
.sometimes(speed(-1))
.every(4, fast(2))
```

### Chaining After Higher-Order Functions

```javascript
// ✅ CORRECT
s("bd sd").sometimes(x => x.crush(4)).room(0.3)

// ✅ CORRECT - multi-transform
s("bd sd").jux(x => x.rev().speed(0.5))
```

---

## Common Mistakes to Avoid

1. **Don't forget parentheses on methods** - `.rev()` not `.rev`. All methods need `()`.
2. **Don't pass method names to higher-order functions** - Use arrow functions: `.jux(x => x.rev())` not `.jux(rev)`.
3. **Don't over-simplify rhythms** - `"bd*4, ~ sd ~ sd, hh*8"` is a full groove. Don't reduce it to just `"bd"`.
4. **Don't use invalid sound names** - Stick to documented sounds (drums, GM instruments, synths).
5. **Don't forget `setcpm()`** - Patterns need tempo to play correctly.
6. **Don't create empty patterns** - Always include musical content.
7. **Don't ignore layers** - Use `stack()` to build rich, full arrangements.
8. **Don't fight the cycle** - Work with the timing, not against it.

---

## Philosophy

**Texture first. Melody emerges. Drums are the reward.**

Stay in key. Variations, not new ideas. Let it breathe.

Use `.scale()` to stay cohesive.

Experiment freely. Trust your ears.

---

## Visual Feedback

Add visuals to your patterns. Use `_` prefix for inline (in-code) visuals, without prefix for background.

```javascript
// Pianoroll / Punchcard - scrolling note visualization
note("c a f e")._punchcard()
note("c a f e")._pianoroll()

// Options: cycles, labels, vertical, active/inactive colors
._pianoroll({ labels: 1, cycles: 8 })

// Spiral - circular visualization
note("c a f e")._spiral({ steady: 0.96 })

// Scope - oscilloscope (time domain)
s("sawtooth")._scope()

// Spectrum - frequency analyzer
s("sawtooth")._spectrum()

// Pitchwheel - pitch circle visualization
n("0 .. 12").scale("C:chromatic")._pitchwheel()
```

**Mini-notation highlighting** happens automatically with `"double quotes"` or `` `backticks` ``.

```javascript
// Color the highlights
note("c a f e").color("cyan magenta")
```

---

## Learn More

This is just the surface. Experiment. Break things. Happy accidents are the best discoveries.
