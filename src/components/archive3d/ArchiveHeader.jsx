import React from 'react'
import { soundManager } from '../../utils/soundEffects'

export default function ArchiveHeader({
  soundEnabled,
  setSoundEnabled,
  motionEnabled,
  setMotionEnabled,
  onOpenFileIndex,
  onOpenReadingView
}) {
  const toggleSound = () => {
    const next = soundManager.toggle()
    setSoundEnabled(next)
    if (next) soundManager.playSoftClick()
  }

  const toggleMotion = () => {
    setMotionEnabled(prev => !prev)
    soundManager.playSoftClick()
  }

  return (
    <header className="archive-header">
      <div className="header-left">
        <div className="monogram-badge" title="Zain El Omar JALLED Archive">
          <span className="monogram-letters">zj</span>
        </div>
        <div className="header-identity">
          <div className="identity-name">Zain El Omar JALLED</div>
          <div className="identity-dept">Independent ML & Systems Archive</div>
        </div>
      </div>

      <div className="header-right">
        <div className="header-status-pill">
          <span className="status-blip" />
          <span className="status-label">VISITOR ACCESS</span>
        </div>

        <button
          className="header-ctrl-btn"
          onClick={toggleSound}
          title={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
        >
          SOUND <span className="ctrl-state">{soundEnabled ? 'ON' : 'OFF'}</span>
        </button>

        <button
          className="header-ctrl-btn"
          onClick={toggleMotion}
          title={motionEnabled ? 'Disable motion drift' : 'Enable motion drift'}
        >
          MOTION <span className="ctrl-state">{motionEnabled ? 'ON' : 'OFF'}</span>
        </button>

        <button
          className="header-ctrl-btn"
          onClick={() => {
            soundManager.playSoftClick()
            onOpenReadingView()
          }}
          title="Open full text reading view"
        >
          READING VIEW ↗
        </button>

        <button
          className="header-index-btn"
          onClick={() => {
            soundManager.playSoftClick()
            onOpenFileIndex()
          }}
        >
          <span>FILE INDEX</span>
          <span className="index-icon">☰</span>
        </button>
      </div>
    </header>
  )
}
