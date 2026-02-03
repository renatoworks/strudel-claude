/**
 * =============================================================================
 * WAV ENCODER
 * =============================================================================
 *
 * Pure JavaScript WAV file encoder.
 * Converts raw audio samples (Float32Array) to a downloadable WAV blob.
 *
 * WAV Format Reference:
 * - RIFF header (12 bytes)
 * - fmt chunk (24 bytes)
 * - data chunk (8 bytes + audio data)
 */

/**
 * Encode audio samples to a WAV blob.
 *
 * @param samples - Array of Float32Array channels (mono or stereo)
 * @param sampleRate - Audio sample rate (e.g., 44100, 48000)
 * @returns WAV file as a Blob
 */
export function encodeWAV(samples: Float32Array[], sampleRate: number): Blob {
  const numChannels = samples.length
  const numSamples = samples[0]?.length ?? 0
  const bytesPerSample = 2 // 16-bit audio
  const blockAlign = numChannels * bytesPerSample
  const byteRate = sampleRate * blockAlign
  const dataSize = numSamples * blockAlign

  // Total file size: 44 bytes header + audio data
  const buffer = new ArrayBuffer(44 + dataSize)
  const view = new DataView(buffer)

  // Write string helper
  const writeString = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i))
    }
  }

  // RIFF header
  writeString(0, 'RIFF')
  view.setUint32(4, 36 + dataSize, true) // File size - 8
  writeString(8, 'WAVE')

  // fmt chunk
  writeString(12, 'fmt ')
  view.setUint32(16, 16, true) // Chunk size
  view.setUint16(20, 1, true) // Audio format (1 = PCM)
  view.setUint16(22, numChannels, true)
  view.setUint32(24, sampleRate, true)
  view.setUint32(28, byteRate, true)
  view.setUint16(32, blockAlign, true)
  view.setUint16(34, bytesPerSample * 8, true) // Bits per sample

  // data chunk
  writeString(36, 'data')
  view.setUint32(40, dataSize, true)

  // Write interleaved audio samples
  let offset = 44
  for (let i = 0; i < numSamples; i++) {
    for (let ch = 0; ch < numChannels; ch++) {
      // Clamp and convert float [-1, 1] to int16
      const sample = Math.max(-1, Math.min(1, samples[ch][i]))
      const int16 = sample < 0 ? sample * 0x8000 : sample * 0x7fff
      view.setInt16(offset, int16, true)
      offset += 2
    }
  }

  return new Blob([buffer], { type: 'audio/wav' })
}

/**
 * Trigger a file download in the browser.
 *
 * @param blob - File blob to download
 * @param filename - Name for the downloaded file
 */
export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

/**
 * Generate a timestamped filename for recordings.
 *
 * @returns Filename like "strudel-recording-2024-01-15-143052.wav"
 */
export function generateRecordingFilename(): string {
  const now = new Date()
  const timestamp = now
    .toISOString()
    .replace(/[T:]/g, '-')
    .replace(/\..+/, '')
  return `strudel-recording-${timestamp}.wav`
}
