import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { soundManager } from '../../utils/soundEffects'

export default function ArchiveCanvas({
  viewState, // 'overview' | 'cabinet' | 'desk_folder' | 'dossier_open'
  onStateChange,
  lampOn,
  setLampOn,
  motionEnabled = true
}) {
  const mountRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const rendererRef = useRef(null)
  const frameIdRef = useRef(null)

  // Interactive meshes refs
  const lampGroupRef = useRef(null)
  const lampLightRef = useRef(null)
  const lampBulbRef = useRef(null)
  const lampShadeRef = useRef(null)
  const deskSpotLightRef = useRef(null)
  const drawerGroupRef = useRef(null)
  const deskFolderMeshRef = useRef(null)
  const dustParticlesRef = useRef(null)

  // Camera targets for smooth cinematic lerp
  const currentCamPos = useRef(new THREE.Vector3(-2.8, 2.3, 3.8))
  const targetCamPos = useRef(new THREE.Vector3(-2.8, 2.3, 3.8))
  const currentLookAt = useRef(new THREE.Vector3(0.35, 0.9, -0.4))
  const targetLookAt = useRef(new THREE.Vector3(0.35, 0.9, -0.4))

  // Drawer animation
  const drawerZCurrent = useRef(0)
  const drawerZTarget = useRef(0)

  // Desk folder animation
  const folderYCurrent = useRef(-1)
  const folderYTarget = useRef(-1)

  // Mouse parallax
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })
  const raycasterRef = useRef(new THREE.Raycaster())
  const mouseCoordRef = useRef(new THREE.Vector2(-999, -999))

  // Update target positions based on viewState
  useEffect(() => {
    if (viewState === 'overview') {
      targetCamPos.current.set(-2.8, 2.3, 3.8)
      targetLookAt.current.set(0.35, 0.9, -0.4)
      drawerZTarget.current = 0
      folderYTarget.current = -1
    } else if (viewState === 'cabinet') {
      targetCamPos.current.set(0.4, 1.7, 2.0)
      targetLookAt.current.set(1.15, 1.35, -0.3)
      drawerZTarget.current = 0.85
      folderYTarget.current = -1
    } else if (viewState === 'desk_folder') {
      targetCamPos.current.set(-0.25, 2.2, 1.45)
      targetLookAt.current.set(-0.18, 0.85, 0.05)
      drawerZTarget.current = 0
      folderYTarget.current = 0.885 // On desk mat
    } else if (viewState === 'dossier_open') {
      targetCamPos.current.set(-0.15, 2.05, 0.95)
      targetLookAt.current.set(-0.15, 0.85, 0.22)
      drawerZTarget.current = 0
      folderYTarget.current = -1 // Replaced by HTML 2-page spread overlay
    }
  }, [viewState])

  // React to lamp toggle
  useEffect(() => {
    if (lampLightRef.current && lampBulbRef.current && lampShadeRef.current) {
      if (lampOn) {
        lampLightRef.current.intensity = 1.3
        if (deskSpotLightRef.current) deskSpotLightRef.current.intensity = 0.9
        lampBulbRef.current.material.emissive.setHex(0xffea9f)
        lampBulbRef.current.material.emissiveIntensity = 1.6
        lampShadeRef.current.material.emissive.setHex(0x1b5c2a)
        lampShadeRef.current.material.emissiveIntensity = 0.45
      } else {
        lampLightRef.current.intensity = 0.0
        if (deskSpotLightRef.current) deskSpotLightRef.current.intensity = 0.0
        lampBulbRef.current.material.emissive.setHex(0x111111)
        lampBulbRef.current.material.emissiveIntensity = 0.0
        lampShadeRef.current.material.emissive.setHex(0x051a0b)
        lampShadeRef.current.material.emissiveIntensity = 0.05
      }
    }
  }, [lampOn])

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const width = container.clientWidth
    const height = container.clientHeight

    // --- Scene Setup ---
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0a0f0c)
    scene.fog = new THREE.FogExp2(0x0a0f0c, 0.12)
    sceneRef.current = scene

    // --- Camera Setup ---
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 30)
    camera.position.copy(currentCamPos.current)
    camera.lookAt(currentLookAt.current)
    cameraRef.current = camera

    // --- Renderer Setup ---
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.15
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // --- Lighting ---
    // Soft overhead industrial archive ambient light
    const ambientLight = new THREE.AmbientLight(0x283830, 0.9)
    scene.add(ambientLight)

    // Key ceiling light from above left
    const keyLight = new THREE.DirectionalLight(0xa5c2b0, 0.75)
    keyLight.position.set(-3.5, 5.0, 2.5)
    keyLight.castShadow = true
    keyLight.shadow.mapSize.width = 1024
    keyLight.shadow.mapSize.height = 1024
    keyLight.shadow.camera.near = 1
    keyLight.shadow.camera.far = 12
    keyLight.shadow.bias = -0.0005
    scene.add(keyLight)

    // Soft cool fill light from right
    const fillLight = new THREE.DirectionalLight(0x3d5c48, 0.35)
    fillLight.position.set(4, 3, -1)
    scene.add(fillLight)

    // --- Materials Palette ---
    const wallMaterial = new THREE.MeshStandardMaterial({
      color: 0x141b16,
      roughness: 0.85,
      metalness: 0.1
    })

    const woodDeskMaterial = new THREE.MeshStandardMaterial({
      color: 0x322419,
      roughness: 0.65,
      metalness: 0.08
    })

    const metalCabinetMaterial = new THREE.MeshStandardMaterial({
      color: 0x222e25,
      roughness: 0.55,
      metalness: 0.45
    })

    const brassMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4a853,
      roughness: 0.28,
      metalness: 0.88
    })

    const deskMatMaterial = new THREE.MeshStandardMaterial({
      color: 0x1b3827,
      roughness: 0.7,
      metalness: 0.05
    })

    const paperMaterial = new THREE.MeshStandardMaterial({
      color: 0xe5d8be,
      roughness: 0.88,
      metalness: 0.02
    })

    // --- Floor with Grid / Tiles ---
    const floorGeo = new THREE.PlaneGeometry(16, 16)
    const floorCanvas = document.createElement('canvas')
    floorCanvas.width = 512
    floorCanvas.height = 512
    const fctx = floorCanvas.getContext('2d')
    fctx.fillStyle = '#111713'
    fctx.fillRect(0, 0, 512, 512)
    fctx.strokeStyle = 'rgba(40, 55, 45, 0.4)'
    fctx.lineWidth = 2
    for (let i = 0; i <= 512; i += 64) {
      fctx.beginPath()
      fctx.moveTo(i, 0)
      fctx.lineTo(i, 512)
      fctx.stroke()
      fctx.beginPath()
      fctx.moveTo(0, i)
      fctx.lineTo(512, i)
      fctx.stroke()
    }
    const floorTexture = new THREE.CanvasTexture(floorCanvas)
    floorTexture.wrapS = THREE.RepeatWrapping
    floorTexture.wrapT = THREE.RepeatWrapping
    floorTexture.repeat.set(4, 4)

    const floorMat = new THREE.MeshStandardMaterial({
      map: floorTexture,
      roughness: 0.6,
      metalness: 0.2
    })
    const floorMesh = new THREE.Mesh(floorGeo, floorMat)
    floorMesh.rotation.x = -Math.PI / 2
    floorMesh.receiveShadow = true
    scene.add(floorMesh)

    // --- Walls ---
    // Back wall
    const backWall = new THREE.Mesh(new THREE.PlaneGeometry(16, 7), wallMaterial)
    backWall.position.set(0, 3.5, -2.5)
    backWall.receiveShadow = true
    scene.add(backWall)

    // Left wall
    const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(14, 7), wallMaterial)
    leftWall.position.set(-6.5, 3.5, 1.5)
    leftWall.rotation.y = Math.PI / 2
    leftWall.receiveShadow = true
    scene.add(leftWall)

    // Wainscoting trim on back wall
    const trimGeo = new THREE.BoxGeometry(16, 0.08, 0.08)
    const trimMesh = new THREE.Mesh(trimGeo, woodDeskMaterial)
    trimMesh.position.set(0, 1.8, -2.46)
    scene.add(trimMesh)

    // Archive Wall Plaque / Sign
    const plaqueCanvas = document.createElement('canvas')
    plaqueCanvas.width = 512
    plaqueCanvas.height = 128
    const pctx = plaqueCanvas.getContext('2d')
    pctx.fillStyle = '#16231b'
    pctx.fillRect(0, 0, 512, 128)
    pctx.strokeStyle = '#c49a45'
    pctx.lineWidth = 4
    pctx.strokeRect(6, 6, 500, 116)
    pctx.fillStyle = '#e8d4a5'
    pctx.font = 'bold 36px "Space Mono", monospace'
    pctx.textAlign = 'center'
    pctx.fillText('ARCHIVE / 001', 256, 52)
    pctx.font = '16px "Space Mono", monospace'
    pctx.fillStyle = '#9cb8a5'
    pctx.fillText('DEPARTMENT OF AUTONOMOUS SYSTEMS & MLOPS', 256, 92)

    const plaqueTex = new THREE.CanvasTexture(plaqueCanvas)
    const plaqueMat = new THREE.MeshStandardMaterial({ map: plaqueTex, roughness: 0.5, metalness: 0.3 })
    const plaqueMesh = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.6, 0.04), plaqueMat)
    plaqueMesh.position.set(1.15, 2.75, -2.46)
    scene.add(plaqueMesh)

    // Secondary stencil plaque
    const secPlaqueCanvas = document.createElement('canvas')
    secPlaqueCanvas.width = 380
    secPlaqueCanvas.height = 70
    const spctx = secPlaqueCanvas.getContext('2d')
    spctx.fillStyle = '#111713'
    spctx.fillRect(0, 0, 380, 70)
    spctx.strokeStyle = '#3d5244'
    spctx.strokeRect(4, 4, 372, 62)
    spctx.fillStyle = '#82a890'
    spctx.font = 'bold 15px "Space Mono", monospace'
    spctx.textAlign = 'center'
    spctx.fillText('AUTHORIZED CLEARANCE ONLY', 190, 32)
    spctx.font = '11px "Space Mono", monospace'
    spctx.fillStyle = '#5c7866'
    spctx.fillText('ALL REASONING WORK LEAVES A TRACE', 190, 52)
    const secPlaqueTex = new THREE.CanvasTexture(secPlaqueCanvas)
    const secPlaqueMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 0.3, 0.02),
      new THREE.MeshStandardMaterial({ map: secPlaqueTex, roughness: 0.6 })
    )
    secPlaqueMesh.position.set(-0.6, 2.2, -2.47)
    scene.add(secPlaqueMesh)

    // --- Filing Cabinet (Right Side) ---
    const cabinetGroup = new THREE.Group()
    cabinetGroup.position.set(1.15, 0, -0.2)

    // Cabinet outer frame
    const cabWidth = 1.05
    const cabHeight = 2.1
    const cabDepth = 1.2
    const cabFrame = new THREE.Mesh(
      new THREE.BoxGeometry(cabWidth, cabHeight, cabDepth),
      metalCabinetMaterial
    )
    cabFrame.position.set(0, cabHeight / 2, 0)
    cabFrame.castShadow = true
    cabFrame.receiveShadow = true
    cabinetGroup.add(cabFrame)

    // 4 Drawers
    const drawerHeight = 0.44
    const drawerGap = 0.06
    const drawerMeshes = []

    // Helper to generate drawer label canvas texture
    const makeLabelTex = (title, sub) => {
      const c = document.createElement('canvas')
      c.width = 256
      c.height = 72
      const ctx = c.getContext('2d')
      ctx.fillStyle = '#eadeca'
      ctx.fillRect(0, 0, 256, 72)
      ctx.fillStyle = '#222'
      ctx.font = 'bold 20px "Space Mono", monospace'
      ctx.textAlign = 'center'
      ctx.fillText(title, 128, 34)
      ctx.font = '10px "Space Mono", monospace'
      ctx.fillStyle = '#555'
      ctx.fillText(sub, 128, 56)
      return new THREE.CanvasTexture(c)
    }

    const drawerData = [
      { title: 'SYSTEM LOGS', sub: 'SECTION 01 / PIPELINES' },
      { title: 'ZAIN EL OMAR JALLED', sub: 'FILE NO. OJ-001 / DOSSIER' },
      { title: 'AI ARCHIVE', sub: 'SECTION 03 / AGENTS & RAG' },
      { title: 'FIELD TELEMETRY', sub: 'SECTION 04 / METRICS' }
    ]

    for (let i = 0; i < 4; i++) {
      const dY = 0.32 + i * (drawerHeight + drawerGap)
      const dGroup = new THREE.Group()
      dGroup.position.set(0, dY, cabDepth / 2)

      // Drawer front
      const dFront = new THREE.Mesh(
        new THREE.BoxGeometry(cabWidth - 0.08, drawerHeight, 0.06),
        metalCabinetMaterial
      )
      dFront.castShadow = true
      dGroup.add(dFront)

      // Brass label frame
      const lblFrame = new THREE.Mesh(
        new THREE.BoxGeometry(0.55, 0.22, 0.04),
        brassMaterial
      )
      lblFrame.position.set(0, 0.04, 0.035)
      dGroup.add(lblFrame)

      // Label card
      const lblCardMat = new THREE.MeshBasicMaterial({
        map: makeLabelTex(drawerData[3 - i].title, drawerData[3 - i].sub)
      })
      const lblCard = new THREE.Mesh(new THREE.PlaneGeometry(0.48, 0.16), lblCardMat)
      lblCard.position.set(0, 0.04, 0.058)
      dGroup.add(lblCard)

      // Brass handle
      const handle = new THREE.Mesh(
        new THREE.BoxGeometry(0.34, 0.05, 0.06),
        brassMaterial
      )
      handle.position.set(0, -0.11, 0.05)
      handle.castShadow = true
      dGroup.add(handle)

      // If this is Drawer index 2 (counting from top: index 2 is OMAR JALLED), make it sliding
      if (i === 2) {
        // Add internal folders
        const innerBox = new THREE.Mesh(
          new THREE.BoxGeometry(cabWidth - 0.14, drawerHeight - 0.08, cabDepth - 0.15),
          new THREE.MeshStandardMaterial({ color: 0x1b241e, roughness: 0.8 })
        )
        innerBox.position.set(0, 0, -(cabDepth - 0.15) / 2)
        dGroup.add(innerBox)

        // Hanging tab folders inside drawer
        const folderColors = [0xdfcbb0, 0xd0ba9b, 0xc4ab8a, 0xe2d4c0, 0xd6c2a6]
        for (let f = 0; f < 8; f++) {
          const fMesh = new THREE.Mesh(
            new THREE.BoxGeometry(cabWidth - 0.22, 0.32, 0.02),
            new THREE.MeshStandardMaterial({ color: folderColors[f % folderColors.length], roughness: 0.85 })
          )
          fMesh.position.set(0, 0.06, -0.15 - f * 0.1)
          fMesh.rotation.x = -0.08 + Math.random() * 0.04
          dGroup.add(fMesh)

          // Folder tab
          const tabMesh = new THREE.Mesh(
            new THREE.BoxGeometry(0.18, 0.06, 0.02),
            new THREE.MeshStandardMaterial({ color: 0xebdcc7, roughness: 0.85 })
          )
          tabMesh.position.set(-0.25 + (f % 3) * 0.25, 0.24, -0.15 - f * 0.1)
          dGroup.add(tabMesh)
        }

        dGroup.name = 'interactive_drawer'
        drawerGroupRef.current = dGroup
      }

      cabinetGroup.add(dGroup)
      drawerMeshes.push(dGroup)
    }

    scene.add(cabinetGroup)

    // Secondary smaller cabinet (Left/Rear corner)
    const smallCab = new THREE.Mesh(
      new THREE.BoxGeometry(0.85, 1.6, 0.9),
      metalCabinetMaterial
    )
    smallCab.position.set(-0.6, 0.8, -1.8)
    smallCab.castShadow = true
    scene.add(smallCab)

    // --- Wooden Desk (Center / Left) ---
    const deskGroup = new THREE.Group()
    deskGroup.position.set(-0.45, 0, 0.35)

    // Tabletop
    const deskTopW = 2.4
    const deskTopH = 0.09
    const deskTopD = 1.3
    const deskTop = new THREE.Mesh(
      new THREE.BoxGeometry(deskTopW, deskTopH, deskTopD),
      woodDeskMaterial
    )
    deskTop.position.set(0, 0.82, 0)
    deskTop.castShadow = true
    deskTop.receiveShadow = true
    deskGroup.add(deskTop)

    // Desk Legs
    const legGeo = new THREE.BoxGeometry(0.08, 0.82, 0.08)
    const legOffsets = [
      [-deskTopW / 2 + 0.1, 0.41, -deskTopD / 2 + 0.1],
      [deskTopW / 2 - 0.1, 0.41, -deskTopD / 2 + 0.1],
      [-deskTopW / 2 + 0.1, 0.41, deskTopD / 2 - 0.1],
      [deskTopW / 2 - 0.1, 0.41, deskTopD / 2 - 0.1]
    ]
    legOffsets.forEach(pos => {
      const leg = new THREE.Mesh(legGeo, woodDeskMaterial)
      leg.position.set(...pos)
      leg.castShadow = true
      deskGroup.add(leg)

      // Brass foot cap
      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.06, 0.09), brassMaterial)
      foot.position.set(pos[0], 0.03, pos[2])
      deskGroup.add(foot)
    })

    // Green Leather Desk Blotter / Mat
    const matW = 1.6
    const matD = 0.95
    const deskMat = new THREE.Mesh(
      new THREE.BoxGeometry(matW, 0.015, matD),
      deskMatMaterial
    )
    deskMat.position.set(-0.05, 0.87, 0.02)
    deskMat.receiveShadow = true
    deskGroup.add(deskMat)

    // Gold stitch border on blotter
    const matBorder = new THREE.Mesh(
      new THREE.BoxGeometry(matW + 0.02, 0.01, matD + 0.02),
      brassMaterial
    )
    matBorder.position.set(-0.05, 0.865, 0.02)
    deskGroup.add(matBorder)

    // Ceramic Coffee Mug
    const mugGroup = new THREE.Group()
    mugGroup.position.set(-0.72, 0.87, -0.28)

    const mugMat = new THREE.MeshStandardMaterial({ color: 0xded8ce, roughness: 0.35 })
    const mugBody = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.065, 0.13, 24), mugMat)
    mugBody.position.y = 0.065
    mugBody.castShadow = true
    mugGroup.add(mugBody)

    // Dark liquid surface
    const coffeeMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.065, 0.065, 0.01, 24),
      new THREE.MeshStandardMaterial({ color: 0x18100c, roughness: 0.15, metalness: 0.2 })
    )
    coffeeMesh.position.y = 0.12
    mugGroup.add(coffeeMesh)

    // Mug handle
    const handleGeo = new THREE.TorusGeometry(0.04, 0.012, 12, 24, Math.PI)
    const mugHandle = new THREE.Mesh(handleGeo, mugMat)
    mugHandle.rotation.z = -Math.PI / 2
    mugHandle.position.set(-0.075, 0.065, 0)
    mugGroup.add(mugHandle)
    deskGroup.add(mugGroup)

    // Wooden pencil & brass ruler
    const pencil = new THREE.Mesh(
      new THREE.CylinderGeometry(0.008, 0.008, 0.28, 12),
      new THREE.MeshStandardMaterial({ color: 0xc49a45, roughness: 0.5 })
    )
    pencil.rotation.z = Math.PI / 2.1
    pencil.rotation.y = 0.4
    pencil.position.set(-0.25, 0.885, 0.42)
    deskGroup.add(pencil)

    // Desk card / note
    const noteCanvas = document.createElement('canvas')
    noteCanvas.width = 256
    noteCanvas.height = 96
    const nctx = noteCanvas.getContext('2d')
    nctx.fillStyle = '#f5efe0'
    nctx.fillRect(0, 0, 256, 96)
    nctx.fillStyle = '#222'
    nctx.font = 'bold 16px "Space Mono", monospace'
    nctx.textAlign = 'center'
    nctx.fillText('MAKE IT WORK.', 128, 38)
    nctx.font = '12px "Space Mono", monospace'
    nctx.fillStyle = '#555'
    nctx.fillText('THEN MAKE IT SCALE.', 128, 62)
    const noteTex = new THREE.CanvasTexture(noteCanvas)
    const noteMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(0.24, 0.1),
      new THREE.MeshStandardMaterial({ map: noteTex, roughness: 0.9 })
    )
    noteMesh.rotation.x = -Math.PI / 2
    noteMesh.rotation.z = -0.15
    noteMesh.position.set(-0.55, 0.88, 0.18)
    deskGroup.add(noteMesh)

    // 3D Manila Dossier Folder (Resting on desk when taking dossier)
    const folderGroup = new THREE.Group()
    folderGroup.position.set(0.02, -1, 0.05) // Hidden below initially

    const folderCoverCanvas = document.createElement('canvas')
    folderCoverCanvas.width = 1024
    folderCoverCanvas.height = 1360
    const fcv = folderCoverCanvas.getContext('2d')
    
    // Rich manila kraft folder background
    fcv.fillStyle = '#cfba96'
    fcv.fillRect(0, 0, 1024, 1360)
    
    // Outer and inner border
    fcv.strokeStyle = '#4a3722'
    fcv.lineWidth = 6
    fcv.strokeRect(32, 32, 960, 1296)
    fcv.strokeStyle = '#735b3e'
    fcv.lineWidth = 2
    fcv.strokeRect(44, 44, 936, 1272)

    // Department Header
    fcv.fillStyle = '#111111'
    fcv.font = 'bold 26px "Space Mono", monospace'
    fcv.fillText('DEPARTMENT OF INTELLIGENT SYSTEMS & MLOPS', 70, 110)
    fcv.font = 'bold 20px "Space Mono", monospace'
    fcv.fillStyle = '#222222'
    fcv.fillText('DOSSIER NO: OJ-001 / CLEARANCE LEVEL 3', 70, 150)

    // Declassified Stamp
    fcv.strokeStyle = '#8a1818'
    fcv.lineWidth = 6
    fcv.strokeRect(70, 210, 360, 80)
    fcv.fillStyle = '#8a1818'
    fcv.font = 'bold 42px "Space Mono", monospace'
    fcv.fillText('DECLASSIFIED', 95, 268)

    // Full Name in deep rich black
    fcv.fillStyle = '#000000'
    fcv.font = 'bold 76px "Newsreader", "Playfair Display", Georgia, serif'
    fcv.fillText('Zain El Omar', 70, 440)
    fcv.font = 'bold 84px "Newsreader", "Playfair Display", Georgia, serif'
    fcv.fillText('JALLED', 70, 530)

    // Designation
    fcv.font = 'bold 28px "Space Mono", monospace'
    fcv.fillStyle = '#111111'
    fcv.fillText('DATA SCIENCE & ML ENGINEER', 70, 600)

    // Specs
    fcv.font = 'bold 24px "Space Mono", monospace'
    fcv.fillStyle = '#1a1a1a'
    fcv.fillText('AUTONOMOUS AGENTS · RAG · MLOPS', 70, 710)
    fcv.fillText('BASE OF OPERATIONS: TUNISIA', 70, 755)
    fcv.fillText('STATUS: AVAILABLE FOR PFE / ENGINEERING', 70, 800)

    // Separator Line
    fcv.fillStyle = '#000000'
    fcv.fillRect(70, 870, 884, 5)

    // Instruction Prompt
    fcv.fillStyle = '#143820'
    fcv.font = 'bold 26px "Space Mono", monospace'
    fcv.fillText('CLICK TO OPEN FULL DOSSIER RECORD ↗', 70, 960)

    const folderTex = new THREE.CanvasTexture(folderCoverCanvas)
    const folderMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.68, 0.012, 0.92),
      new THREE.MeshStandardMaterial({ map: folderTex, roughness: 0.98, metalness: 0.0 })
    )
    folderMesh.castShadow = true
    folderMesh.receiveShadow = true
    folderMesh.name = 'interactive_folder'
    folderGroup.add(folderMesh)

    // Folder tab sticking out
    const fTab = new THREE.Mesh(
      new THREE.BoxGeometry(0.24, 0.01, 0.08),
      new THREE.MeshStandardMaterial({ color: 0xdfcbb0, roughness: 0.95 })
    )
    fTab.position.set(0.18, 0.001, -0.48)
    folderGroup.add(fTab)

    deskGroup.add(folderGroup)
    deskFolderMeshRef.current = folderGroup

    // --- Vintage Emerald Banker's Desk Lamp ---
    const lampGroup = new THREE.Group()
    lampGroup.position.set(0.58, 0.87, -0.22)
    lampGroup.name = 'interactive_lamp'
    lampGroupRef.current = lampGroup

    // Brass stepped base
    const lampBase = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.04, 32), brassMaterial)
    lampBase.position.y = 0.02
    lampBase.castShadow = true
    lampGroup.add(lampBase)

    // Brass curved stem / arm
    const stemGeo = new THREE.CylinderGeometry(0.016, 0.016, 0.44, 16)
    const lampStem = new THREE.Mesh(stemGeo, brassMaterial)
    lampStem.position.set(0, 0.24, 0)
    lampStem.castShadow = true
    lampGroup.add(lampStem)

    // Curved neck connecting to shade
    const neckMesh = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.06, 0.16), brassMaterial)
    neckMesh.position.set(0, 0.45, 0.07)
    neckMesh.rotation.x = 0.4
    lampGroup.add(neckMesh)

    // Emerald Green Glass Shade (Semi-cylindrical half-pipe)
    const shadeGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.34, 32, 1, false, 0, Math.PI)
    const shadeMat = new THREE.MeshStandardMaterial({
      color: 0x083818,
      emissive: 0x1b5c2a,
      emissiveIntensity: 0.45,
      roughness: 0.35,
      metalness: 0.1,
      side: THREE.DoubleSide
    })
    const shadeMesh = new THREE.Mesh(shadeGeo, shadeMat)
    shadeMesh.rotation.z = Math.PI / 2
    shadeMesh.rotation.y = Math.PI
    shadeMesh.position.set(0, 0.45, 0.14)
    shadeMesh.castShadow = true
    shadeMesh.name = 'interactive_lamp_shade'
    lampGroup.add(shadeMesh)
    lampShadeRef.current = shadeMesh

    // Interior bulb
    const bulbGeo = new THREE.SphereGeometry(0.035, 16, 16)
    const bulbMat = new THREE.MeshStandardMaterial({
      color: 0xfff6d0,
      emissive: 0xffea9f,
      emissiveIntensity: 1.6,
      roughness: 0.1
    })
    const bulbMesh = new THREE.Mesh(bulbGeo, bulbMat)
    bulbMesh.position.set(0, 0.44, 0.14)
    lampGroup.add(bulbMesh)
    lampBulbRef.current = bulbMesh

    // Warm PointLight casting warm illumination on desk
    const lampPointLight = new THREE.PointLight(0xffb259, 1.3, 5.5, 1.8)
    lampPointLight.position.set(0, 0.42, 0.14)
    lampPointLight.castShadow = true
    lampPointLight.shadow.mapSize.width = 1024
    lampPointLight.shadow.mapSize.height = 1024
    lampPointLight.shadow.bias = -0.001
    lampGroup.add(lampPointLight)
    lampLightRef.current = lampPointLight

    // Focused SpotLight pointing directly down onto the blotter
    const deskSpotLight = new THREE.SpotLight(0xffc278, 0.9, 4.0, Math.PI / 3.2, 0.45, 1.5)
    deskSpotLight.position.set(0, 0.44, 0.14)
    deskSpotLight.target.position.set(-0.4, -0.87, 0.2)
    deskSpotLight.castShadow = true
    lampGroup.add(deskSpotLight)
    lampGroup.add(deskSpotLight.target)
    deskSpotLightRef.current = deskSpotLight

    // Pull chain with brass bead
    const chainMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 0.14, 8), brassMaterial)
    chainMesh.position.set(0.08, 0.35, 0.14)
    lampGroup.add(chainMesh)
    const beadMesh = new THREE.Mesh(new THREE.SphereGeometry(0.012, 8, 8), brassMaterial)
    beadMesh.position.set(0.08, 0.27, 0.14)
    lampGroup.add(beadMesh)

    deskGroup.add(lampGroup)
    scene.add(deskGroup)

    // --- Floating Atmospheric Dust Motes ---
    const dustCount = 100
    const dustGeo = new THREE.BufferGeometry()
    const dustPositions = new Float32Array(dustCount * 3)
    for (let i = 0; i < dustCount; i++) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 3.5
      dustPositions[i * 3 + 1] = 0.85 + Math.random() * 2.2
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 2.5
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3))
    const dustMat = new THREE.PointsMaterial({
      color: 0xffdf99,
      size: 0.022,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    })
    const dustParticles = new THREE.Points(dustGeo, dustMat)
    scene.add(dustParticles)
    dustParticlesRef.current = dustParticles

    // --- Mouse Move & Hover Raycasting ---
    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1)

      mouseCoordRef.current.set(nx, ny)

      if (motionEnabled) {
        mouseRef.current.targetX = nx * 0.35
        mouseRef.current.targetY = ny * 0.25
      }

      // Check hover for interactive cursor
      if (cameraRef.current && sceneRef.current) {
        raycasterRef.current.setFromCamera(mouseCoordRef.current, cameraRef.current)
        const intersects = raycasterRef.current.intersectObjects(sceneRef.current.children, true)
        let isClickable = false
        for (let hit of intersects) {
          let cur = hit.object
          while (cur) {
            if (
              cur.name === 'interactive_lamp' ||
              cur.name === 'interactive_lamp_shade' ||
              cur.name === 'interactive_drawer' ||
              cur.name === 'interactive_folder'
            ) {
              isClickable = true
              break
            }
            cur = cur.parent
          }
          if (isClickable) break
        }
        container.style.cursor = isClickable ? 'pointer' : 'default'
      }
    }

    // --- Click Raycasting ---
    const onClick = (e) => {
      if (!cameraRef.current || !sceneRef.current) return
      const rect = container.getBoundingClientRect()
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
      const mouseVec = new THREE.Vector2(nx, ny)

      raycasterRef.current.setFromCamera(mouseVec, cameraRef.current)
      const intersects = raycasterRef.current.intersectObjects(sceneRef.current.children, true)

      for (let hit of intersects) {
        let cur = hit.object
        while (cur) {
          if (cur.name === 'interactive_lamp' || cur.name === 'interactive_lamp_shade') {
            setLampOn(prev => {
              const next = !prev
              soundManager.playLampClick(next)
              return next
            })
            return
          }
          if (cur.name === 'interactive_drawer') {
            if (viewState === 'overview') {
              soundManager.playDrawerSlide(true)
              onStateChange('cabinet')
            } else if (viewState === 'cabinet') {
              soundManager.playPaperTurn()
              onStateChange('desk_folder')
            }
            return
          }
          if (cur.name === 'interactive_folder') {
            soundManager.playDossierOpen()
            onStateChange('dossier_open')
            return
          }
          cur = cur.parent
        }
      }
    }

    container.addEventListener('mousemove', onMouseMove)
    container.addEventListener('click', onClick)

    // --- Window Resize ---
    const onResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return
      const w = container.clientWidth
      const h = container.clientHeight
      cameraRef.current.aspect = w / h
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    // --- Animation Loop ---
    let clock = new THREE.Clock()

    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate)
      const delta = clock.getDelta()
      const elapsedTime = clock.getElapsedTime()

      // Smooth mouse parallax lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05

      // Smooth Camera Position & LookAt Lerp
      const lerpSpeed = 0.045
      currentCamPos.current.lerp(targetCamPos.current, lerpSpeed)
      currentLookAt.current.lerp(targetLookAt.current, lerpSpeed)

      camera.position.x = currentCamPos.current.x + (motionEnabled ? mouseRef.current.x * 0.4 : 0)
      camera.position.y = currentCamPos.current.y + (motionEnabled ? mouseRef.current.y * 0.25 : 0)
      camera.position.z = currentCamPos.current.z

      const lookTarget = new THREE.Vector3(
        currentLookAt.current.x + (motionEnabled ? mouseRef.current.x * 0.15 : 0),
        currentLookAt.current.y + (motionEnabled ? mouseRef.current.y * 0.15 : 0),
        currentLookAt.current.z
      )
      camera.lookAt(lookTarget)

      // Smooth Drawer slide animation
      if (drawerGroupRef.current) {
        drawerZCurrent.current += (drawerZTarget.current - drawerZCurrent.current) * 0.06
        drawerGroupRef.current.position.z = cabDepth / 2 + drawerZCurrent.current
      }

      // Smooth Desk Folder position animation
      if (deskFolderMeshRef.current) {
        folderYCurrent.current += (folderYTarget.current - folderYCurrent.current) * 0.08
        deskFolderMeshRef.current.position.y = folderYCurrent.current
      }

      // Floating dust particles animation
      if (dustParticlesRef.current) {
        const positions = dustParticlesRef.current.geometry.attributes.position.array
        for (let i = 0; i < dustCount; i++) {
          positions[i * 3 + 1] -= delta * 0.04
          if (positions[i * 3 + 1] < 0.85) {
            positions[i * 3 + 1] = 2.8
          }
          positions[i * 3] += Math.sin(elapsedTime * 0.4 + i) * 0.0006
        }
        dustParticlesRef.current.geometry.attributes.position.needsUpdate = true
      }

      renderer.render(scene, camera)
    }

    animate()

    // --- Cleanup ---
    return () => {
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current)
      container.removeEventListener('mousemove', onMouseMove)
      container.removeEventListener('click', onClick)
      window.removeEventListener('resize', onResize)
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [motionEnabled])

  return <div ref={mountRef} className="archive-canvas-container" />
}
