import React, { useState, useEffect } from 'react'
import ArchiveCanvas from './components/archive3d/ArchiveCanvas'
import ArchiveHeader from './components/archive3d/ArchiveHeader'
import ArchiveHeroOverlay from './components/archive3d/ArchiveHeroOverlay'
import DossierSpread from './components/archive3d/DossierSpread'
import FileIndexModal from './components/archive3d/FileIndexModal'
import ReadingViewModal from './components/archive3d/ReadingViewModal'
import { soundManager } from './utils/soundEffects'
import './components/archive3d/ArchiveArchive.css'

export default function App() {
  // Navigation states: 'overview' | 'cabinet' | 'desk_folder' | 'dossier_open'
  const [viewState, setViewState] = useState('overview')
  const [activeTab, setActiveTab] = useState('subject')
  const [lampOn, setLampOn] = useState(true)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [motionEnabled, setMotionEnabled] = useState(true)
  const [fileIndexOpen, setFileIndexOpen] = useState(false)
  const [readingViewOpen, setReadingViewOpen] = useState(false)

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (readingViewOpen) {
          setReadingViewOpen(false)
          soundManager.playSoftClick()
        } else if (fileIndexOpen) {
          setFileIndexOpen(false)
          soundManager.playSoftClick()
        } else if (viewState === 'dossier_open') {
          setViewState('desk_folder')
          soundManager.playDossierOpen()
        } else if (viewState === 'desk_folder') {
          setViewState('cabinet')
          soundManager.playDrawerSlide(true)
        } else if (viewState === 'cabinet') {
          setViewState('overview')
          soundManager.playDrawerSlide(false)
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [readingViewOpen, fileIndexOpen, viewState])

  const handleSelectChapter = (chapterId) => {
    setActiveTab(chapterId)
    setViewState('dossier_open')
  }

  return (
    <div className="archive-app-root">
      {/* 3D Three.js Archive Room */}
      <ArchiveCanvas
        viewState={viewState}
        onStateChange={setViewState}
        lampOn={lampOn}
        setLampOn={setLampOn}
        motionEnabled={motionEnabled}
      />

      {/* Atmospheric Vignette Overlay */}
      <div className="archive-vignette" />

      {/* Top Header Bar */}
      <ArchiveHeader
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        motionEnabled={motionEnabled}
        setMotionEnabled={setMotionEnabled}
        onOpenFileIndex={() => setFileIndexOpen(true)}
        onOpenReadingView={() => setReadingViewOpen(true)}
      />

      {/* Hero & Intermediate Cinematic UI Overlays */}
      <ArchiveHeroOverlay
        viewState={viewState}
        onStateChange={setViewState}
      />

      {/* 2-Page Spread Dossier on Desk */}
      {viewState === 'dossier_open' && (
        <DossierSpread
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onCloseDossier={() => setViewState('desk_folder')}
          onOpenReadingView={() => setReadingViewOpen(true)}
        />
      )}

      {/* Directory / File Index Modal */}
      <FileIndexModal
        isOpen={fileIndexOpen}
        onClose={() => setFileIndexOpen(false)}
        onSelectChapter={handleSelectChapter}
        onOpenReadingView={() => setReadingViewOpen(true)}
      />

      {/* Full Document Reading View Modal */}
      <ReadingViewModal
        isOpen={readingViewOpen}
        onClose={() => setReadingViewOpen(false)}
      />
    </div>
  )
}
