import React from 'react'
import { soundManager } from '../../utils/soundEffects'

export default function FileIndexModal({
  isOpen,
  onClose,
  onSelectChapter,
  onOpenReadingView
}) {
  if (!isOpen) return null

  const chapters = [
    { id: 'subject', number: '01', title: 'The subject', desc: 'Personnel record, assessment, and core creed' },
    { id: 'service', number: '02', title: 'Service record & toolkit', desc: 'Delice Danone, Kinko, Proservices, and skills' },
    { id: 'internhunter', number: '03', title: 'InternHunter AI', desc: 'Autonomous LangGraph discovery agent' },
    { id: 'agrismart', number: '04', title: 'AgriSmart Platform', desc: 'Edge vision, 6 FastAPI services & RAG' },
    { id: 'mlops', number: '05', title: 'End-to-End MLOps Pipeline', desc: 'SMOTE classification, MLflow & ELK telemetry' },
    { id: 'certifications', number: '06', title: 'Certifications & degrees', desc: 'NVIDIA credentials and ESPRIT/ISET degrees' },
    { id: 'contact', number: '07', title: 'Open a channel', desc: 'Direct communications, email, phone & message form' }
  ]

  return (
    <div className="archive-modal-backdrop" onClick={onClose}>
      <div className="file-index-card" onClick={(e) => e.stopPropagation()}>
        <div className="index-card-header">
          <div className="index-card-tag">ARCHIVE OJ-001 / DIRECTORY</div>
          <button
            className="index-close-btn"
            onClick={() => {
              soundManager.playSoftClick()
              onClose()
            }}
            aria-label="Close directory"
          >
            ✕
          </button>
        </div>

        <h2 className="index-card-title">Follow the evidence.</h2>
        <p className="index-card-sub">Choose a chapter to open the dossier.</p>

        <div className="index-chapters-list">
          {chapters.map((ch) => (
            <button
              key={ch.id}
              className="index-chapter-row"
              onClick={() => {
                soundManager.playPaperTurn()
                onSelectChapter(ch.id)
                onClose()
              }}
            >
              <div className="row-left">
                <span className="row-num">{ch.number}</span>
                <div className="row-texts">
                  <span className="row-title">{ch.title}</span>
                  <span className="row-desc">{ch.desc}</span>
                </div>
              </div>
              <span className="row-arrow">↗</span>
            </button>
          ))}
        </div>

        <div className="index-card-footer">
          <button
            className="open-full-reading-link"
            onClick={() => {
              soundManager.playSoftClick()
              onClose()
              onOpenReadingView()
            }}
          >
            Open the complete reading view ↗
          </button>
        </div>
      </div>
    </div>
  )
}
