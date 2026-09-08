import React from 'react'
import { soundManager } from '../../utils/soundEffects'
import {
  FaTimes,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaCheckCircle,
  FaExternalLinkAlt
} from 'react-icons/fa'

export default function ReadingViewModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="reading-view-modal-backdrop" onClick={onClose}>
      <div className="reading-view-container-card" onClick={(e) => e.stopPropagation()}>
        {/* Sticky Top Bar */}
        <div className="reading-view-topbar">
          <div className="rv-top-left">
            <h2 className="rv-top-title">The complete dossier.</h2>
            <div className="rv-top-sub">
              Zain El Omar JALLED · Data Science Engineer | ML Engineering | MLOps
            </div>
          </div>
          <div className="rv-top-right">
            <a
              href="/Zain_el_omar_JALLED.pdf"
              download="Zain_el_omar_JALLED.pdf"
              className="rv-download-cv-btn"
            >
              <FaDownload /> Download Official CV
            </a>
            <button
              className="rv-close-btn"
              onClick={() => {
                soundManager.playSoftClick()
                onClose()
              }}
              title="Close reading view"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Scrollable Spreads Feed */}
        <div className="reading-view-scroll-body">
          {/* ================= SPREAD 1: THE SUBJECT ================= */}
          <div className="rv-spread-wrapper">
            <div className="rv-page left-page">
              <div className="page-header-strip">
                <span className="hdr-code">OJ-001 / PERSONNEL RECORD</span>
                <span className="hdr-tag">PUBLIC RELEASE</span>
              </div>
              <div className="subject-id-subhead">SUBJECT IDENTIFICATION</div>
              <h2 className="subject-editorial-title">
                Zain El Omar<br />
                <span className="serif-italic">JALLED.</span>
              </h2>

              <div className="subject-photo-meta-grid">
                <div className="photo-tape-frame">
                  <div className="tape-strip top-tape" />
                  <img src="/profile.jpg" alt="Zain El Omar JALLED" className="subject-portrait-img" />
                  <div className="tape-strip btm-tape" />
                  <span className="photo-caption">SUBJECT / OJ-001</span>
                </div>

                <div className="subject-meta-fields">
                  <div className="meta-field">
                    <label>DESIGNATION</label>
                    <div className="meta-val highlight">Data Science Engineer</div>
                    <div className="meta-sub">ML Engineering | MLOps</div>
                  </div>
                  <div className="meta-field">
                    <label>BASE OF OPERATIONS</label>
                    <div className="meta-val">Tunisia</div>
                    <div className="meta-sub">Available Worldwide / Remote</div>
                  </div>
                  <div className="meta-field">
                    <label>STATUS</label>
                    <div className="meta-val status-avail">Available for PFE / Hire</div>
                  </div>
                  <div className="meta-field">
                    <label>CURRICULUM VITAE</label>
                    <a
                      href="/Zain_el_omar_JALLED.pdf"
                      download="Zain_el_omar_JALLED.pdf"
                      className="dossier-inline-link"
                    >
                      Download PDF Dossier <FaDownload className="link-icon" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="subject-creed-quote">
                An engineer's logic.<br />
                A builder's obsession.
              </div>

              <div className="stamp-box declassified-stamp">
                DECLASSIFIED
              </div>

              <div className="page-footer-strip">
                <span>ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE</span>
                <span className="page-num">01</span>
              </div>
            </div>

            <div className="rv-page right-page">
              <div className="page-header-strip">
                <span className="hdr-code">OJ-001 / SUBJECT ASSESSMENT</span>
                <span className="hdr-tag">PUBLIC RELEASE</span>
              </div>
              <div className="subject-id-subhead">THE ENGINEER BEHIND THE SYSTEMS</div>
              <h2 className="subject-editorial-title">
                Curiosity.<br />
                <span className="serif-italic">Then code.</span>
              </h2>
              <h3 className="section-motto">
                Building intelligent systems that thrive in production.
              </h3>
              <p className="dossier-body-text">
                Final-year Data Science engineering student at <strong>ESPRIT</strong> with a solid foundation
                in software engineering from <strong>ISET Rades</strong>. Hands-on experience architecting
                LLM-powered autonomous agents, enterprise RAG systems, machine learning pipelines, and containerized microservices.
              </p>
              <p className="dossier-body-text">
                Skilled across Python, LangChain, LangGraph, FastAPI, Docker, and MLflow, coupled with battle-tested
                production experience in mobile architecture and infrastructure telemetry monitoring.
              </p>
              <div className="dossier-callout-box">
                <div className="callout-label">KNOWN FOR</div>
                <div className="callout-heading">End-to-end ownership.</div>
                <div className="callout-text">
                  Practical AI. Autonomous agent workflows. Production-grade MLOps rigor that connects machine learning models to real-world infrastructure.
                </div>
              </div>
              <div className="dossier-sub-section">
                <div className="sub-section-title">Beyond the terminal</div>
                <p className="sub-section-desc">
                  A passion for exploring frontier generative AI, optimizing edge inference, and designing resilient distributed data pipelines that turn raw data into actionable decisions.
                </p>
              </div>
              <div className="stamp-box field-tested-stamp">
                FIELD TESTED
              </div>
              <div className="page-footer-strip">
                <span>ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE</span>
                <span className="page-num">02</span>
              </div>
            </div>
          </div>

          {/* ================= SPREAD 2: SERVICE RECORD & TOOLKIT ================= */}
          <div className="rv-spread-wrapper">
            <div className="rv-page left-page">
              <div className="page-header-strip">
                <span className="hdr-code">OJ-001 / SERVICE HISTORY</span>
                <span className="hdr-tag">PUBLIC RELEASE</span>
              </div>
              <div className="subject-id-subhead">A RECORD OF BUILDING & SHIPPING</div>
              <h2 className="subject-editorial-title">
                In the <span className="serif-italic">field.</span>
              </h2>

              <div className="service-records-list">
                <div className="service-entry">
                  <div className="service-header-row">
                    <span className="service-date">JUL – SEPT 2026</span>
                    <span className="badge-onsite">ON-SITE</span>
                  </div>
                  <div className="service-role">Infrastructure Monitoring Intern</div>
                  <div className="service-company">Delice Danone · Tunisia</div>
                  <ul className="service-bullets">
                    <li>Built an end-to-end Zabbix 7.0 / Hyper-V monitoring pipeline using Docker and PostgreSQL with VM auto-discovery (LLD).</li>
                    <li>Implemented custom PowerShell UserParameters, PSK encryption, SLA triggers, and alerting dashboards.</li>
                    <li>Developed a Python metrics collector pulling live Zabbix API telemetry into SQLite for infrastructure anomaly detection.</li>
                  </ul>
                </div>

                <div className="service-entry">
                  <div className="service-header-row">
                    <span className="service-date">DEC 2025 – PRESENT</span>
                    <span className="badge-remote">REMOTE</span>
                  </div>
                  <div className="service-role">Mobile Developer (Part-time)</div>
                  <div className="service-company">Kinko Booking · Tunisia</div>
                  <ul className="service-bullets">
                    <li>Developed and maintained production mobile features in Flutter applying clean architecture.</li>
                    <li>Integrated Firebase Cloud Messaging, GoRouter navigation, and RESTful API data flows.</li>
                    <li>Contributed via Git CI/CD, supporting automated testing and release pipelines.</li>
                  </ul>
                </div>

                <div className="service-entry">
                  <div className="service-header-row">
                    <span className="service-date">JUN – AUG 2025</span>
                    <span className="badge-onsite">ON-SITE</span>
                  </div>
                  <div className="service-role">Data Engineering Intern</div>
                  <div className="service-company">Proservices Training Company · Ariana, Tunisia</div>
                  <ul className="service-bullets">
                    <li>Designed PostgreSQL analytics backend capturing engagement metrics for 100+ active users with optimized indexing.</li>
                    <li>Built scalable RESTful services using NestJS and MVVM architecture.</li>
                  </ul>
                </div>
              </div>

              <div className="page-footer-strip">
                <span>ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE</span>
                <span className="page-num">03</span>
              </div>
            </div>

            <div className="rv-page right-page">
              <div className="page-header-strip">
                <span className="hdr-code">OJ-001 / TECHNICAL CAPABILITIES</span>
                <span className="hdr-tag">PUBLIC RELEASE</span>
              </div>
              <div className="subject-id-subhead">TOOLS OF THE TRADE</div>
              <h2 className="subject-editorial-title">
                The <span className="serif-italic">toolkit.</span>
              </h2>

              <div className="toolkit-categories">
                <div className="toolkit-block">
                  <div className="tk-number">01 / AI & AGENTS</div>
                  <div className="tk-title">Autonomous Reasoning & Grounded RAG</div>
                  <div className="tk-pills">
                    <span>Python</span>
                    <span>LangChain</span>
                    <span>LangGraph</span>
                    <span>RAG</span>
                    <span>Autonomous Agents</span>
                    <span>pgvector</span>
                    <span>Prompt Engineering</span>
                  </div>
                </div>

                <div className="toolkit-block">
                  <div className="tk-number">02 / MACHINE LEARNING & DL</div>
                  <div className="tk-title">Modeling, Transfer Learning & Vision</div>
                  <div className="tk-pills">
                    <span>PyTorch</span>
                    <span>TensorFlow</span>
                    <span>Scikit-learn</span>
                    <span>MobileNetV2</span>
                    <span>SMOTE</span>
                    <span>Stable Diffusion</span>
                  </div>
                </div>

                <div className="toolkit-block">
                  <div className="tk-number">03 / MLOPS & INFRASTRUCTURE</div>
                  <div className="tk-title">Observability, Containers & CI/CD</div>
                  <div className="tk-pills">
                    <span>MLflow</span>
                    <span>Docker</span>
                    <span>Docker Compose</span>
                    <span>Nginx</span>
                    <span>CI/CD</span>
                    <span>Zabbix 7.0</span>
                    <span>Elasticsearch</span>
                    <span>Kibana</span>
                  </div>
                </div>

                <div className="toolkit-block">
                  <div className="tk-number">04 / DATA & SYSTEMS</div>
                  <div className="tk-title">Pipelines, Storage & Cloud Services</div>
                  <div className="tk-pills">
                    <span>PostgreSQL</span>
                    <span>MongoDB</span>
                    <span>Oracle SQL</span>
                    <span>SQLite</span>
                    <span>Sentinel-2 GEE</span>
                    <span>FastAPI</span>
                    <span>Linux</span>
                  </div>
                </div>
              </div>

              <div className="academic-record-box">
                <div className="academic-title">ACADEMIC RECORD</div>
                <div className="academic-item">
                  <strong>Engineering Degree in Computer Science – Data Science</strong>
                  <span>ESPRIT · 2024 – Present</span>
                </div>
                <div className="academic-item">
                  <strong>Bachelor Degree in Information Technology</strong>
                  <span>ISET Rades · 2021 – 2024</span>
                </div>
              </div>

              <div className="page-footer-strip">
                <span>ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE</span>
                <span className="page-num">04</span>
              </div>
            </div>
          </div>

          {/* ================= SPREAD 3: INTERNHUNTER AI ================= */}
          <div className="rv-spread-wrapper">
            <div className="rv-page left-page">
              <div className="page-header-strip">
                <span className="hdr-code">OJ-001 / OPERATION 01</span>
                <span className="hdr-tag">PUBLIC RELEASE</span>
              </div>
              <div className="subject-id-subhead">AUTONOMOUS DISCOVERY AGENT / PERSONAL PROJECT</div>
              <h2 className="project-editorial-title">
                InternHunter AI<span className="title-dot">.</span>
              </h2>
              <div className="project-tagline">
                From hours of manual searching to automated multi-step discovery.
              </div>

              <div className="project-preview-card">
                <div className="preview-top-bar">
                  <span className="p-dot red" />
                  <span className="p-dot yellow" />
                  <span className="p-dot green" />
                  <span className="preview-title">workflow_graph.py — LangGraph Engine</span>
                </div>
                <div className="preview-terminal-content">
                  <div className="term-line"><span className="term-kw">graph</span> = StateGraph(AgentState)</div>
                  <div className="term-line"><span className="term-kw">graph</span>.add_node(<span className="term-str">"web_search"</span>, search_platforms)</div>
                  <div className="term-line"><span className="term-kw">graph</span>.add_node(<span className="term-str">"semantic_rank"</span>, chroma_matcher)</div>
                  <div className="term-line"><span className="term-kw">graph</span>.add_node(<span className="term-str">"report"</span>, dispatch_notion_telegram)</div>
                  <div className="term-line-status">
                    <span className="term-green">✓</span> Discovery Cycle: 5 platforms checked · 14 opportunities matched
                  </div>
                </div>
              </div>

              <div className="project-summary-box">
                An autonomous discovery agent that continuously monitors European & French job platforms,
                evaluates job requirements against semantic resume vectors, and dispatches structured alerts.
              </div>

              <div className="project-tech-badges">
                <span>Python</span>
                <span>LangGraph</span>
                <span>Groq / Llama 3</span>
                <span>ChromaDB</span>
                <span>PostgreSQL</span>
                <span>Notion API</span>
                <span>Telegram</span>
              </div>

              <a
                href="https://github.com/omarJ10"
                target="_blank"
                rel="noopener noreferrer"
                className="project-github-link"
              >
                Inspect Repository on GitHub <FaExternalLinkAlt className="ext-icon" />
              </a>

              <div className="page-footer-strip">
                <span>ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE</span>
                <span className="page-num">05</span>
              </div>
            </div>

            <div className="rv-page right-page">
              <div className="page-header-strip">
                <span className="hdr-code">OJ-001 / TECHNICAL BRIEF</span>
                <span className="hdr-tag">PUBLIC RELEASE</span>
              </div>
              <div className="subject-id-subhead">CASE FILE 01 / INTERNHUNTER AI</div>
              <h2 className="subject-editorial-title">
                Inside the <span className="serif-italic">operation.</span>
              </h2>

              <div className="brief-section">
                <div className="brief-h">The problem</div>
                <p className="brief-p">
                  Navigating fragmented hiring platforms across Europe consumes over 2 hours daily,
                  riddled with noisy keyword searches, manual status logging, and delayed applications.
                </p>
              </div>

              <div className="brief-section">
                <div className="brief-h">Architectural Innovations</div>
                <ul className="brief-list">
                  <li>
                    <strong>Stateful Multi-step Graph:</strong> Built with LangGraph, featuring conditional branching, state checkpoints, and recovery mechanisms across search and parsing stages.
                  </li>
                  <li>
                    <strong>Sub-second LLM Reasoning:</strong> Powered by Groq-accelerated Llama 3 for structured extraction, job criteria grading, and personalized fit justification.
                  </li>
                  <li>
                    <strong>Vector Similarity Matching:</strong> ChromaDB embedding retrieval compares job descriptions against candidate skills and preferences.
                  </li>
                  <li>
                    <strong>Automated Dispatch & Storage:</strong> Synchronizes new discoveries into PostgreSQL, pushes actionable alerts to Telegram, and organizes application status in Notion.
                  </li>
                </ul>
              </div>

              <div className="dossier-callout-box highlight-box">
                <div className="callout-label">PROVEN OUTCOME</div>
                <div className="callout-heading">95% reduction in search time.</div>
                <div className="callout-text">
                  Reduced manual search time from 2+ hours daily to near-zero by automating continuous discovery across 5+ platforms.
                </div>
              </div>

              <div className="stamp-box verified-stamp">
                VERIFIED AGENT
              </div>

              <div className="page-footer-strip">
                <span>ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE</span>
                <span className="page-num">06</span>
              </div>
            </div>
          </div>

          {/* ================= SPREAD 4: AGRISMART ================= */}
          <div className="rv-spread-wrapper">
            <div className="rv-page left-page">
              <div className="page-header-strip">
                <span className="hdr-code">OJ-001 / OPERATION 02</span>
                <span className="hdr-tag">PUBLIC RELEASE</span>
              </div>
              <div className="subject-id-subhead">SOLUTION ARCHITECT / TEAM OF 6</div>
              <h2 className="project-editorial-title">
                AgriSmart<span className="title-dot">.</span>
              </h2>
              <div className="project-tagline">
                AI-powered precision agriculture platform with edge vision & RAG.
              </div>

              <div className="project-preview-card">
                <div className="preview-top-bar">
                  <span className="p-dot red" />
                  <span className="p-dot yellow" />
                  <span className="p-dot green" />
                  <span className="preview-title">architecture_services.yml — AgriSmart</span>
                </div>
                <div className="preview-terminal-content">
                  <div className="term-line"><span className="term-kw">services:</span> [irrigation_rag, crop_vision, satellite_gee, auth, gateway, telemetry]</div>
                  <div className="term-line"><span className="term-kw">model:</span> MobileNetV2-Int8-TFLite (87,000+ images)</div>
                  <div className="term-line"><span className="term-kw">vector_store:</span> pgvector (PostgreSQL 16)</div>
                  <div className="term-line-status">
                    <span className="term-green">✓</span> Edge Inference Latency: 2.1s (offline) · Nginx Gateway 200 OK
                  </div>
                </div>
              </div>

              <div className="project-summary-box">
                A distributed agricultural microservice platform featuring an offline mobile crop disease detector,
                a grounded RAG irrigation advisor, and satellite geospatial analytics.
              </div>

              <div className="project-tech-badges">
                <span>6x FastAPI</span>
                <span>MobileNetV2 TFLite</span>
                <span>LangChain</span>
                <span>pgvector</span>
                <span>Sentinel-2</span>
                <span>Docker</span>
                <span>Nginx</span>
              </div>

              <a
                href="https://github.com/omarJ10"
                target="_blank"
                rel="noopener noreferrer"
                className="project-github-link"
              >
                Inspect Microservices Repository <FaExternalLinkAlt className="ext-icon" />
              </a>

              <div className="page-footer-strip">
                <span>ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE</span>
                <span className="page-num">07</span>
              </div>
            </div>

            <div className="rv-page right-page">
              <div className="page-header-strip">
                <span className="hdr-code">OJ-001 / TECHNICAL BRIEF</span>
                <span className="hdr-tag">PUBLIC RELEASE</span>
              </div>
              <div className="subject-id-subhead">CASE FILE 02 / AGRISMART</div>
              <h2 className="subject-editorial-title">
                Inside the <span className="serif-italic">operation.</span>
              </h2>

              <div className="brief-section">
                <div className="brief-h">The problem</div>
                <p className="brief-p">
                  Farmers in remote areas suffer from unpredictable water availability and crop disease outbreaks
                  without reliable high-bandwidth internet connectivity.
                </p>
              </div>

              <div className="brief-section">
                <div className="brief-h">Solution Architecture & Contributions</div>
                <ul className="brief-list">
                  <li>
                    <strong>Microservice Mesh:</strong> Architected 6 decoupled FastAPI services, unified with Nginx reverse proxy and orchestrated with Docker Compose.
                  </li>
                  <li>
                    <strong>Grounded RAG Assistant:</strong> LangChain pipeline with pgvector embedding store and Llama 3 to answer agronomic queries grounded in scientific soil & irrigation data.
                  </li>
                  <li>
                    <strong>On-Device Edge Vision:</strong> Quantized MobileNetV2 into TFLite Int8 trained on 87K+ disease images, achieving sub-3s inference completely offline on mobile devices.
                  </li>
                  <li>
                    <strong>Geospatial Crop Analytics:</strong> Integrated Sentinel-2 imagery via Google Earth Engine API for vegetative health index (NDVI) monitoring.
                  </li>
                </ul>
              </div>

              <div className="dossier-callout-box highlight-box">
                <div className="callout-label">SCALE & LEADERSHIP</div>
                <div className="callout-heading">Sub-3s offline inference.</div>
                <div className="callout-text">
                  Led onboarding and architectural guidelines for a team of 6 engineers while delivering sub-3s offline disease detection on 87K+ images.
                </div>
              </div>

              <div className="stamp-box field-tested-stamp">
                FIELD DEPLOYED
              </div>

              <div className="page-footer-strip">
                <span>ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE</span>
                <span className="page-num">08</span>
              </div>
            </div>
          </div>

          {/* ================= SPREAD 5: END-TO-END MLOPS ================= */}
          <div className="rv-spread-wrapper">
            <div className="rv-page left-page">
              <div className="page-header-strip">
                <span className="hdr-code">OJ-001 / OPERATION 03</span>
                <span className="hdr-tag">PUBLIC RELEASE</span>
              </div>
              <div className="subject-id-subhead">PRODUCTION MACHINE LEARNING / CLASSIFICATION</div>
              <h2 className="project-editorial-title">
                End-to-End MLOps<span className="title-dot">.</span>
              </h2>
              <div className="project-tagline">
                Drug classification pipeline with MLflow tracking and ELK observability.
              </div>

              <div className="project-preview-card">
                <div className="preview-top-bar">
                  <span className="p-dot red" />
                  <span className="p-dot yellow" />
                  <span className="p-dot green" />
                  <span className="preview-title">mlflow_experiment_run.log — Production</span>
                </div>
                <div className="preview-terminal-content">
                  <div className="term-line"><span className="term-kw">model:</span> RandomForestClassifier(n_estimators=200)</div>
                  <div className="term-line"><span className="term-kw">sampling:</span> SMOTE(ratio=balanced, k_neighbors=5)</div>
                  <div className="term-line"><span className="term-kw">telemetry:</span> Elasticsearch + Kibana daemon active</div>
                  <div className="term-line-status">
                    <span className="term-green">✓</span> Metrics: F1-Score: 0.89 · Inference Latency: 74ms · Status: SERVING
                  </div>
                </div>
              </div>

              <div className="project-summary-box">
                An enterprise machine learning pipeline featuring balanced training on imbalanced medical datasets,
                automated artifact versioning, low-latency REST serving, and live infrastructure telemetry.
              </div>

              <div className="project-tech-badges">
                <span>Scikit-Learn</span>
                <span>SMOTE</span>
                <span>MLflow</span>
                <span>FastAPI</span>
                <span>Docker Compose</span>
                <span>Elasticsearch</span>
                <span>Kibana</span>
              </div>

              <a
                href="https://github.com/omarJ10"
                target="_blank"
                rel="noopener noreferrer"
                className="project-github-link"
              >
                Inspect MLOps Pipeline Repository <FaExternalLinkAlt className="ext-icon" />
              </a>

              <div className="page-footer-strip">
                <span>ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE</span>
                <span className="page-num">09</span>
              </div>
            </div>

            <div className="rv-page right-page">
              <div className="page-header-strip">
                <span className="hdr-code">OJ-001 / TECHNICAL BRIEF</span>
                <span className="hdr-tag">PUBLIC RELEASE</span>
              </div>
              <div className="subject-id-subhead">CASE FILE 03 / MLOPS DRUG CLASSIFIER</div>
              <h2 className="subject-editorial-title">
                Inside the <span className="serif-italic">operation.</span>
              </h2>

              <div className="brief-section">
                <div className="brief-h">The problem</div>
                <p className="brief-p">
                  Real-world medical datasets suffer from extreme class imbalances. In addition, production models
                  often suffer silent degradation without centralized logging, experiment lineage, and performance telemetry.
                </p>
              </div>

              <div className="brief-section">
                <div className="brief-h">Engineering Implementation</div>
                <ul className="brief-list">
                  <li>
                    <strong>Imbalanced Learning:</strong> Integrated Synthetic Minority Over-sampling Technique (SMOTE) with a Random Forest ensemble, boosting minority class recall and achieving a <strong>0.89 F1-score</strong>.
                  </li>
                  <li>
                    <strong>Experiment Registry:</strong> Managed hyperparameter tuning, model artifacts, and evaluation metrics through an MLflow tracking server.
                  </li>
                  <li>
                    <strong>Microsecond-scale Serving:</strong> Built a lightweight FastAPI microservice delivering inference responses under 100ms.
                  </li>
                  <li>
                    <strong>Production Observability:</strong> Containerized the ML inference service and wired logs into Elasticsearch and Kibana for real-time monitoring of inference volume and drift.
                  </li>
                </ul>
              </div>

              <div className="dossier-callout-box highlight-box">
                <div className="callout-label">METRIC HIGHLIGHT</div>
                <div className="callout-heading">0.89 F1 · Sub-100ms Latency.</div>
                <div className="callout-text">
                  Containerized stack with automated monitoring, ensuring reproducible experiments and continuous model health observability.
                </div>
              </div>

              <div className="stamp-box declassified-stamp">
                VERIFIED MLOPS
              </div>

              <div className="page-footer-strip">
                <span>ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE</span>
                <span className="page-num">10</span>
              </div>
            </div>
          </div>

          {/* ================= SPREAD 6: CERTIFICATIONS ================= */}
          <div className="rv-spread-wrapper">
            <div className="rv-page left-page">
              <div className="page-header-strip">
                <span className="hdr-code">OJ-001 / ACCREDITATIONS</span>
                <span className="hdr-tag">PUBLIC RELEASE</span>
              </div>
              <div className="subject-id-subhead">OFFICIAL CREDENTIALS & CERTIFICATIONS</div>
              <h2 className="subject-editorial-title">
                NVIDIA <span className="serif-italic">Deep Learning.</span>
              </h2>

              <div className="cert-cards-container">
                <div className="cert-card-vintage">
                  <div className="cert-badge-row">
                    <span className="cert-issuer">NVIDIA DEEP LEARNING INSTITUTE</span>
                    <span className="cert-date">APR 2026</span>
                  </div>
                  <div className="cert-title">Applications of AI for Anomaly Detection</div>
                  <div className="cert-topics">
                    Autoencoders · Anomaly Scoring · Network Intrusion Detection · Threshold Calibration
                  </div>
                  <div className="cert-verified-stamp">
                    <FaCheckCircle className="chk-icon" /> VERIFIED CREDENTIAL
                  </div>
                </div>

                <div className="cert-card-vintage">
                  <div className="cert-badge-row">
                    <span className="cert-issuer">NVIDIA DEEP LEARNING INSTITUTE</span>
                    <span className="cert-date">FEB 2026</span>
                  </div>
                  <div className="cert-title">Fundamentals of Deep Learning</div>
                  <div className="cert-topics">
                    Convolutional Neural Networks (CNNs) · Transfer Learning · GPU-Accelerated Training
                  </div>
                  <div className="cert-verified-stamp">
                    <FaCheckCircle className="chk-icon" /> VERIFIED CREDENTIAL
                  </div>
                </div>
              </div>

              <div className="cert-note-box">
                Certified in GPU-accelerated neural network architectures, anomaly modeling,
                and production model deployment workflows by NVIDIA.
              </div>

              <div className="page-footer-strip">
                <span>ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE</span>
                <span className="page-num">11</span>
              </div>
            </div>

            <div className="rv-page right-page">
              <div className="page-header-strip">
                <span className="hdr-code">OJ-001 / ACADEMIC BACKGROUND</span>
                <span className="hdr-tag">PUBLIC RELEASE</span>
              </div>
              <div className="subject-id-subhead">HIGHER EDUCATION & DEGREES</div>
              <h2 className="subject-editorial-title">
                Academic <span className="serif-italic">record.</span>
              </h2>

              <div className="education-timeline-vintage">
                <div className="edu-entry">
                  <div className="edu-years">2024 – PRESENT</div>
                  <div className="edu-degree">Engineering Degree in Computer Science – Data Science</div>
                  <div className="edu-school">Ecole Supérieure Privée d'Ingénierie et de Technologies (ESPRIT)</div>
                  <p className="edu-desc">
                    Specialized in AI & Autonomous Agents, Machine Learning Pipelines, High-Performance Computing,
                    Distributed Systems, and Cloud-Native MLOps.
                  </p>
                </div>

                <div className="edu-entry">
                  <div className="edu-years">2021 – 2024</div>
                  <div className="edu-degree">Bachelor Degree in Information Technology</div>
                  <div className="edu-school">Higher Institute of Technological Studies of Rades (ISET Rades)</div>
                  <p className="edu-desc">
                    Foundational curriculum covering algorithms, data structures, relational database systems,
                    software architecture, and network security.
                  </p>
                </div>
              </div>

              <div className="dossier-callout-box">
                <div className="callout-label">GOAL & AVAILABILITY</div>
                <div className="callout-heading">PFE Internship & Engineering.</div>
                <div className="callout-text">
                  Seeking an impactful graduation project (PFE) or full-time position in Data Science, Machine Learning Engineering, or MLOps starting in 2026.
                </div>
              </div>

              <div className="page-footer-strip">
                <span>ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE</span>
                <span className="page-num">12</span>
              </div>
            </div>
          </div>

          {/* ================= SPREAD 7: OPEN A CHANNEL ================= */}
          <div className="rv-spread-wrapper">
            <div className="rv-page left-page">
              <div className="page-header-strip">
                <span className="hdr-code">OJ-001 / DIRECT CHANNELS</span>
                <span className="hdr-tag">PUBLIC RELEASE</span>
              </div>
              <div className="subject-id-subhead">COMMUNICATION DISPATCH</div>
              <h2 className="subject-editorial-title">
                Establish <span className="serif-italic">contact.</span>
              </h2>

              <p className="dossier-body-text">
                Available for technical inquiries, PFE opportunities, research collaborations,
                or discussions on autonomous agents and MLOps infrastructure.
              </p>

              <div className="contact-channels-grid">
                <a href="mailto:omar.jalled@esprit.tn" className="contact-channel-item">
                  <div className="ch-icon-wrap"><FaEnvelope /></div>
                  <div className="ch-info">
                    <span className="ch-label">ACADEMIC / OFFICIAL EMAIL</span>
                    <span className="ch-val">omar.jalled@esprit.tn</span>
                  </div>
                </a>

                <a href="mailto:jalledomar2001@gmail.com" className="contact-channel-item">
                  <div className="ch-icon-wrap"><FaEnvelope /></div>
                  <div className="ch-info">
                    <span className="ch-label">PERSONAL EMAIL</span>
                    <span className="ch-val">jalledomar2001@gmail.com</span>
                  </div>
                </a>

                <a href="tel:+21629763231" className="contact-channel-item">
                  <div className="ch-icon-wrap"><FaPhoneAlt /></div>
                  <div className="ch-info">
                    <span className="ch-label">TELEPHONE / WHATSAPP</span>
                    <span className="ch-val">+216 29 763 231</span>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/omar-jalled"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item"
                >
                  <div className="ch-icon-wrap"><FaLinkedin /></div>
                  <div className="ch-info">
                    <span className="ch-label">LINKEDIN PROFILE</span>
                    <span className="ch-val">linkedin.com/in/omar-jalled</span>
                  </div>
                </a>

                <a
                  href="https://github.com/omarJ10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item"
                >
                  <div className="ch-icon-wrap"><FaGithub /></div>
                  <div className="ch-info">
                    <span className="ch-label">GITHUB REPOSITORIES</span>
                    <span className="ch-val">github.com/omarJ10</span>
                  </div>
                </a>
              </div>

              <div className="cv-download-prominent">
                <a
                  href="/Zain_el_omar_JALLED.pdf"
                  download="Zain_el_omar_JALLED.pdf"
                  className="cv-download-btn-full"
                >
                  <FaDownload /> DOWNLOAD OFFICIAL RESUME (PDF)
                </a>
              </div>

              <div className="page-footer-strip">
                <span>ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE</span>
                <span className="page-num">13</span>
              </div>
            </div>

            <div className="rv-page right-page">
              <div className="page-header-strip">
                <span className="hdr-code">OJ-001 / TRANSMISSION CONSOLE</span>
                <span className="hdr-tag">PUBLIC RELEASE</span>
              </div>
              <div className="subject-id-subhead">ENCRYPTED TELEMETRY DISPATCH</div>
              <h2 className="subject-editorial-title">
                Direct <span className="serif-italic">dispatch.</span>
              </h2>

              <p className="dossier-body-text">
                For rapid correspondence, send an encrypted transmission directly to Zain El Omar JALLED.
              </p>

              <div className="dossier-callout-box">
                <div className="callout-label">RESPONSE PROTOCOL</div>
                <div className="callout-heading">24-hour turnaround.</div>
                <div className="callout-text">
                  Direct transmissions are routed directly to mobile telemetry and reviewed daily.
                </div>
              </div>

              <div className="stamp-box field-tested-stamp">
                CHANNEL READY
              </div>

              <div className="page-footer-strip">
                <span>ZAIN EL OMAR JALLED · INTELLIGENT SYSTEMS ARCHIVE</span>
                <span className="page-num">14</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="rv-bottom-bar">
          <span>ARCHIVE OJ-001 · CLASSIFIED PERSONNEL DOSSIER</span>
          <a
            href="/Zain_el_omar_JALLED.pdf"
            download="Zain_el_omar_JALLED.pdf"
            className="rv-bottom-download-link"
          >
            <FaDownload /> Download Complete CV PDF
          </a>
        </div>
      </div>
    </div>
  )
}
