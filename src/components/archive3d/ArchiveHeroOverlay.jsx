import React from 'react'
import { soundManager } from '../../utils/soundEffects'

export default function ArchiveHeroOverlay({ viewState, onStateChange }) {
  if (viewState === 'dossier_open') return null

  const handleOpenArchive = () => {
    soundManager.playDrawerSlide(true)
    onStateChange('cabinet')
  }

  const handleTakeDossier = () => {
    soundManager.playPaperTurn()
    onStateChange('desk_folder')
  }

  const handleOpenFile = () => {
    soundManager.playDossierOpen()
    onStateChange('dossier_open')
  }

  return (
    <div className="archive-hero-overlay">
      <div className="hero-content-panel">
        {viewState === 'overview' && (
          <>
            <div className="hero-dept-tag">
              <span className="plus-sym">+</span> DEPARTMENT OF INTELLIGENT SYSTEMS & MLOPS
            </div>
            <h1 className="hero-main-title">
              Zain El Omar<br />
              <span className="hero-title-sub">JALLED.</span><br />
              <span className="hero-title-italic">Data Science & ML.</span>
            </h1>
            <p className="hero-description">
              Some work deserves a closer look.<br />
              Engineering autonomous LLM agents, scalable RAG architectures, and resilient MLOps pipelines.<br />
              The evidence is inside.
            </p>
            <div className="hero-cta-wrap">
              <button className="archive-action-btn" onClick={handleOpenArchive}>
                <span>OPEN THE ARCHIVE</span>
                <span className="btn-arrow">↗</span>
              </button>
            </div>
            <div className="hero-meta-strip">
              <span className="meta-item">FILE NO. OJ-001</span>
              <span className="meta-sep">/</span>
              <span className="meta-item">AI & AGENTS</span>
              <span className="meta-sep">/</span>
              <span className="meta-item">MLOPS</span>
              <span className="meta-sep">/</span>
              <span className="meta-item">DATA SCIENCE</span>
            </div>
            <div className="hero-room-badge">
              <span className="badge-num">01</span>
              <div className="badge-details">
                <span className="badge-title">THE ARCHIVE ROOM</span>
                <span className="badge-sub">LOOK AROUND. FOLLOW YOUR CURIOSITY.</span>
              </div>
            </div>
          </>
        )}

        {viewState === 'cabinet' && (
          <div className="hero-step-fade">
            <div className="hero-dept-tag">
              PERSONNEL RECORD / OJ-001
            </div>
            <h1 className="hero-main-title">
              You found the<br />
              <span className="hero-title-italic">file.</span>
            </h1>
            <p className="hero-description">
              One engineer. A portfolio of autonomous agents, on-device vision, and high-throughput production infrastructure.
            </p>
            <div className="hero-cta-wrap">
              <button className="archive-action-btn" onClick={handleTakeDossier}>
                <span>TAKE THE DOSSIER</span>
                <span className="btn-arrow">↗</span>
              </button>
              <button
                className="archive-back-btn"
                onClick={() => {
                  soundManager.playDrawerSlide(false)
                  onStateChange('overview')
                }}
              >
                ← STEP BACK
              </button>
            </div>
          </div>
        )}

        {viewState === 'desk_folder' && (
          <div className="hero-step-fade">
            <div className="hero-dept-tag">
              CLEARED FOR PUBLIC ACCESS
            </div>
            <h1 className="hero-main-title">
              A closer<br />
              <span className="hero-title-italic">look.</span>
            </h1>
            <p className="hero-description">
              Go on. Open the folder. The work speaks for itself.
            </p>
            <div className="hero-cta-wrap">
              <button className="archive-action-btn pulse-glow" onClick={handleOpenFile}>
                <span>OPEN THE FILE</span>
                <span className="btn-arrow">↗</span>
              </button>
              <button
                className="archive-back-btn"
                onClick={() => {
                  soundManager.playDrawerSlide(true)
                  onStateChange('cabinet')
                }}
              >
                ← RETURN TO CABINET
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom status footer */}
      <footer className="archive-footer-bar">
        <div className="footer-status-left">
          <span className="live-dot" />
          <span>
            {viewState === 'overview' && 'ARCHIVE ONLINE / AWAITING YOUR CURIOSITY'}
            {viewState === 'cabinet' && 'CABINET ACCESSED / PERSONNEL DRAWER UNLOCKED'}
            {viewState === 'desk_folder' && 'DOSSIER RETRIEVED / INSPECTION READY'}
          </span>
        </div>
        <div className="footer-status-center">
          CLICK TO EXPLORE · DRAG TO LOOK · CLICK LAMP TO TOGGLE LIGHT
        </div>
        <div className="footer-status-right">
          <span>36.80° N / 10.18° E</span>
          <span className="geo-code">TN</span>
        </div>
      </footer>
    </div>
  )
}
