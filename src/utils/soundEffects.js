// Procedural Web Audio Sound Synthesizer
// Provides tactile, atmospheric sound effects without requiring external audio assets.

let audioCtx = null

function getAudioContext() {
  if (typeof window === 'undefined') return null
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext
    if (AudioContextClass) {
      audioCtx = new AudioContextClass()
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {})
  }
  return audioCtx
}

export const soundManager = {
  enabled: true,

  toggle() {
    this.enabled = !this.enabled
    return this.enabled
  },

  // Vintage mechanical rocker/toggle switch click (lamp on/off)
  playLampClick(isOn = true) {
    if (!this.enabled) return
    const ctx = getAudioContext()
    if (!ctx) return

    const now = ctx.currentTime
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    const filter = ctx.createBiquadFilter()

    osc.type = isOn ? 'triangle' : 'sine'
    osc.frequency.setValueAtTime(isOn ? 1800 : 1200, now)
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.04)

    filter.type = 'bandpass'
    filter.frequency.setValueAtTime(isOn ? 2200 : 1600, now)
    filter.Q.setValueAtTime(3.5, now)

    gain.gain.setValueAtTime(0.4, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045)

    osc.connect(filter)
    filter.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 0.05)

    // Secondary subtle mechanical click bounce
    setTimeout(() => {
      if (!this.enabled || !audioCtx) return
      const t = audioCtx.currentTime
      const o2 = audioCtx.createOscillator()
      const g2 = audioCtx.createGain()
      o2.type = 'square'
      o2.frequency.setValueAtTime(240, t)
      o2.frequency.exponentialRampToValueAtTime(60, t + 0.025)
      g2.gain.setValueAtTime(0.18, t)
      g2.gain.exponentialRampToValueAtTime(0.001, t + 0.025)
      o2.connect(g2)
      g2.connect(audioCtx.destination)
      o2.start(t)
      o2.stop(t + 0.03)
    }, 28)
  },

  // Metal archive drawer rolling slide & stop
  playDrawerSlide(isOpen = true) {
    if (!this.enabled) return
    const ctx = getAudioContext()
    if (!ctx) return

    const now = ctx.currentTime
    const bufferSize = ctx.sampleRate * 0.45
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.28))
    }

    const noise = ctx.createBufferSource()
    noise.buffer = buffer

    const filter = ctx.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.setValueAtTime(isOpen ? 450 : 700, now)
    filter.frequency.exponentialRampToValueAtTime(isOpen ? 750 : 350, now + 0.4)
    filter.Q.setValueAtTime(2.2, now)

    const gain = ctx.createGain()
    gain.gain.setValueAtTime(0.001, now)
    gain.gain.linearRampToValueAtTime(0.28, now + 0.08)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.44)

    noise.connect(filter)
    filter.connect(gain)
    gain.connect(ctx.destination)

    noise.start(now)

    // Metal clunk at stop
    setTimeout(() => {
      if (!this.enabled || !audioCtx) return
      const t = audioCtx.currentTime
      const o = audioCtx.createOscillator()
      const g = audioCtx.createGain()
      o.type = 'triangle'
      o.frequency.setValueAtTime(140, t)
      o.frequency.exponentialRampToValueAtTime(30, t + 0.08)
      g.gain.setValueAtTime(0.3, t)
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.08)
      o.connect(g)
      g.connect(audioCtx.destination)
      o.start(t)
      o.stop(t + 0.09)
    }, 380)
  },

  // Manila paper rustle / page turn
  playPaperTurn() {
    if (!this.enabled) return
    const ctx = getAudioContext()
    if (!ctx) return

    const now = ctx.currentTime
    const duration = 0.22
    const bufferSize = Math.floor(ctx.sampleRate * duration)
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.sin((i / bufferSize) * Math.PI)
    }

    const noise = ctx.createBufferSource()
    noise.buffer = buffer

    const filter = ctx.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.setValueAtTime(1100, now)
    filter.frequency.linearRampToValueAtTime(1600, now + duration)
    filter.Q.setValueAtTime(1.8, now)

    const gain = ctx.createGain()
    gain.gain.setValueAtTime(0.18, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration)

    noise.connect(filter)
    filter.connect(gain)
    gain.connect(ctx.destination)

    noise.start(now)
  },

  // Dossier folder open / close
  playDossierOpen() {
    if (!this.enabled) return
    this.playPaperTurn()
    const ctx = getAudioContext()
    if (!ctx) return

    const now = ctx.currentTime
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'sine'
    osc.frequency.setValueAtTime(95, now)
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.15)

    gain.gain.setValueAtTime(0.25, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 0.16)
  },

  // Subtle terminal / typewriter button tick
  playSoftClick() {
    if (!this.enabled) return
    const ctx = getAudioContext()
    if (!ctx) return

    const now = ctx.currentTime
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'triangle'
    osc.frequency.setValueAtTime(900, now)
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.015)

    gain.gain.setValueAtTime(0.1, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.015)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 0.02)
  }
}
