export interface ProjectMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  fullTitle: string;
  category: string;
  badge: string;
  shortDescription: string;
  summary: string;
  technologies: string[];
  heroImage: string;
  galleryImages: { url: string; caption: string }[];
  githubUrl: string;
  liveDemoUrl: string | null;
  deploymentStatus: 'production' | 'preview' | 'source_only' | 'local_only';
  deploymentNote: string;
  featured: boolean;
  metrics: ProjectMetric[];
  
  // Case Study Sections
  problemStatement: string;
  motivation: string;
  architectureSummary: string;
  architecturePoints: { title: string; description: string }[];
  technicalDetails: { title: string; content: string[] }[];
  evaluation: {
    methodology: string;
    splits?: string;
    resultsTable?: {
      headers: string[];
      rows: (string | number)[][];
    };
  };
  challenges: { title: string; description: string }[];
  engineeringDecisions: { decision: string; rationale: string }[];
  limitations: string[];
  futureImprovements: string[];
}

export const projects: ProjectData[] = [
  {
    id: 'finsleuth',
    slug: 'finsleuth',
    title: 'FINsleuth',
    fullTitle: 'Financial Crime Detection & Forensic Network Investigation Platform',
    category: 'AI / Machine Learning / Graph Analytics / FinTech',
    badge: 'Research & IEEE Paper',
    shortDescription: 'Explainable financial crime detection combining a 21-feature behavioural Random Forest model with deterministic graph topology analytics and learned logistic regression fusion.',
    summary: 'FINsleuth bridges the gap between opaque deep graph models and rigid legacy rules. Evaluated on the 3.03M transaction TransXion benchmark under rolling-origin temporal splits, its unified three-stream engine doubles operational recall while slashing false-positive alerts by over 88%.',
    technologies: ['Python', 'Scikit-learn', 'NetworkX', 'Pandas', 'NumPy', 'FastAPI', 'Next.js', 'Streamlit', 'SHAP'],
    heroImage: '/projects/finsleuth-platform-ui.png',
    galleryImages: [
      { url: '/projects/finsleuth-platform-ui.png', caption: 'FINsleuth Forensic Workbench: Real-time ego-network traversal and interactive risk breakdown' },
      { url: '/projects/finsleuth-architecture.png', caption: 'Unified Three-Stream Learned Fusion Architecture: Behavioural ML, Graph Patterns, and Structural Centrality' },
      { url: '/projects/finsleuth-dossier.png', caption: 'Account Investigation Dossier with Log-Odds Decomposition and SHAP Attributions' },
      { url: '/projects/finsleuth-global-graph.png', caption: 'Multi-Hop Global Directed Transaction Network Visualizer' },
      { url: '/projects/finsleuth-weirdnodes.png', caption: 'Topology Evolution & Benchmark Anomaly Detection Validation' },
    ],
    githubUrl: 'https://github.com/GowdaJeevithKariyappa/FINsleuth',
    liveDemoUrl: null, // Streamlit Community Cloud configurable
    deploymentStatus: 'local_only',
    deploymentNote: 'Production-ready local deployment with FastAPI backend and Streamlit investigation workbench. Streamlit Community Cloud deployment supported via dashboard/app.py.',
    featured: true,
    metrics: [
      { label: 'Dataset Scale', value: '3.03M', detail: 'Transactions across 47,526 accounts' },
      { label: 'Precision Gain', value: '+115%', detail: 'Improved from 15.68% to 33.79%' },
      { label: 'Recall Gain', value: '+202%', detail: 'Expanded from 7.64% to 23.06%' },
      { label: 'False Positives', value: '-88.9%', detail: '1,927 false alarms eliminated' },
      { label: 'Automated Tests', value: '100 / 100', detail: 'Passing unit, leakage, and API tests' },
    ],
    problemStatement: 'Conventional Anti-Money Laundering (AML) monitoring systems suffer from two extremes: legacy rule-based threshold filters trigger false-positive rates exceeding 90%, overwhelming human compliance teams; while end-to-end Graph Neural Networks (GNNs) are computationally heavy, uncalibrated, and legally unexplainable when filing Suspicious Activity Reports (SARs).',
    motivation: 'To design an interpretable, production-viable investigative decision-support platform that unites continuous behavioral machine learning with deterministic graph topology algorithms, calibrated under strict chronological boundaries without temporal data leakage.',
    architectureSummary: 'FINsleuth processes transactions through a Three-Stream Meta-Model that maps raw transactional logs into normalized canonical schemas, computing independent risk vectors that feed into a trained L2-regularized Logistic Regression stacking model.',
    architecturePoints: [
      {
        title: 'Stream 1: Behavioural Machine Learning (21 Features)',
        description: 'A frozen Random Forest Classifier processes 21 numerical features capturing monetary dispersion, counterparty entropy, volume ratios, and velocity to output continuous probability p_ML.'
      },
      {
        title: 'Stream 2: Deterministic Graph Patterns',
        description: 'Network traversal algorithms detect canonical money laundering typologies: bounded cyclic flows, fan-in aggregation hubs, fan-out rapid dispersal, and multi-hop layering paths.'
      },
      {
        title: 'Stream 3: Topological Structural Risk',
        description: 'Calculates global and local centrality metrics including in/out degree ratios, PageRank centrality, betweenness centrality approximation, and clustering coefficients.'
      },
      {
        title: 'Learned Logistic Regression Stacking',
        description: 'Computes z = -4.2174 + 0.1023*S_tilde + 0.1571*P_tilde + 0.5660*M_tilde, deriving a unified risk probability that respects a validation-calibrated 5.0% decision threshold.'
      }
    ],
    technicalDetails: [
      {
        title: 'Authoritative 21-Feature Behavioural Contract',
        content: [
          'Outgoing/Incoming transaction counts, total & average monetary volume, median and maximum amounts, transaction variance std.',
          'Unique senders, unique receivers, unique counterparties, sent-to-received ratios, incoming-to-outgoing volume proportions.',
          'Temporal velocity: active transaction days, transaction frequency per active day, and counterparty dispersion metrics.'
        ]
      },
      {
        title: 'Strict Rolling-Origin Chronological Partitions',
        content: [
          'Training Window: Historical transactions before 2025-08-01 with target outcome observation window 2025-08-01 to 2025-09-30.',
          'Validation Window: Transactions before 2025-10-01 with outcome window 2025-10-01 to 2025-11-15 (used for threshold tuning).',
          'Held-Out Internal Test Window: Transactions before 2025-11-15 with outcome window 2025-11-15 to 2025-12-31 (strictly untouched during training).'
        ]
      },
      {
        title: 'Explainable Forensic Dossier (5Ws + H)',
        content: [
          'Full log-odds additive decomposition displaying exact base prior (-4.2174) and each stream contribution.',
          'TreeSHAP attribution charts exposing the top behavioral drivers for any flagged account.',
          'Interactive ego-network subgraphs allowing forensic investigators to trace bidirectional multi-hop fund flows.'
        ]
      }
    ],
    evaluation: {
      methodology: 'Evaluated against the untouched internal test split of the TransXion AML benchmark (N = 7,104 accounts, 10,000 transactions) under severe 0.1532% class imbalance.',
      splits: 'Chronological rolling-origin train (Aug-Sep 2025), val (Oct-Nov 2025), test (Nov-Dec 2025)',
      resultsTable: {
        headers: ['Model Architecture', 'PR-AUC', 'ROC-AUC', 'F1-Score', 'Precision', 'Recall'],
        rows: [
          ['Stream 1: Behavioural ML Alone', '0.1059', '0.8242', '0.1019', '15.68%', '7.64%'],
          ['Stream 2: Pattern Risk Alone', '0.0240', '0.5841', '0.0396', '2.30%', '14.20%'],
          ['Stream 3: Structural Risk Alone', '0.0306', '0.6120', '0.0534', '3.12%', '18.50%'],
          ['Unified Three-Stream LR Fusion', '0.0983', '0.8190', '0.2739', '33.79%', '23.06%']
        ]
      }
    },
    challenges: [
      {
        title: 'Temporal Forward Leakage Prevention',
        description: 'In transaction networks, computing graph statistics across the full dataset introduces catastrophic future leakage. We enforced temporal cutoffs on graph building so each node only has visibility into transactions timestamped before the evaluation horizon.'
      },
      {
        title: 'Severe Class Imbalance (0.15% positive rate)',
        description: 'Standard accuracy is meaningless when 99.85% of transactions are legitimate. We prioritized Precision-Recall Area Under Curve (PR-AUC) and tuned our decision threshold to maximize F1 under strict investigator budget constraints.'
      },
      {
        title: 'External Transferability & Distribution Shift',
        description: 'When audited against an independent IBM AML dataset, continuous ranking transferred effectively (PR-AUC = 0.4662), but differing baseline transaction volumes required institutional threshold recalibration rather than rigid static gates.'
      }
    ],
    engineeringDecisions: [
      {
        decision: 'Learned Stacking Over Fixed Heuristic Weights',
        rationale: 'Replacing manual scalar weighting (e.g. 0.5*ML + 0.3*Pattern + 0.2*Structure) with an L2-regularized Logistic Regression fitted on chronological out-of-fold predictions provided mathematically rigorous odds ratios and an empirical 168% boost in F1 score.'
      },
      {
        decision: 'Decision Support Over Automated Adjudication',
        rationale: 'In regulated financial compliance, an AI cannot legally convict or freeze accounts autonomously. FINsleuth was explicitly architected as an investigator triage workbench that generates defensible evidence dossiers for human compliance officers.'
      }
    ],
    limitations: [
      'Graph construction currently requires in-memory directed multi-edge representation in NetworkX; very high-frequency datasets require distributed graph stores (e.g., Neo4j or Memgraph).',
      'The behavioural model assumes account identity consistency and does not currently track synthetic identity fraud or device fingerprint mutation.'
    ],
    futureImprovements: [
      'Distributed Graph Pipeline: Migration to GraphFrames / Apache Spark GraphX for billion-edge banking ledgers.',
      'Temporal Graph Neural Networks (TGNNs): Exploring inductive temporal edge embeddings while preserving TreeSHAP explainability.',
      'Automated SAR XML Generation: Exporting standardized regulatory filings matching FinCEN and FIU-IND formats.'
    ]
  },
  {
    id: 'luna',
    slug: 'luna',
    title: 'Luna (Luna-Mini)',
    fullTitle: 'Luna — Offline AI Emotional Support Companion',
    category: 'Artificial Intelligence / Local AI / LLMs',
    badge: 'Local AI System',
    shortDescription: 'A calm, empathetic AI companion designed for private emotional support conversations, running open-source LLMs locally through Ollama with zero cloud API dependency.',
    summary: 'Luna explores private, on-device artificial intelligence. Designed to provide non-judgmental conversational support, it connects to local Ollama instances running Mistral/Llama models while maintaining an offline heuristic emotional companion engine that guarantees zero downtime.',
    technologies: ['Python', 'Node.js', 'Express', 'React', 'Ollama', 'Mistral 7B', 'Mongoose', 'MongoDB', 'Axios'],
    heroImage: '/projects/luna-moon.png',
    galleryImages: [
      { url: '/projects/luna-moon.png', caption: 'Luna Emotional Companion: Calming nighttime visual theme and glassmorphic interface' },
    ],
    githubUrl: 'https://github.com/GowdaJeevithKariyappa/Luna-Mini',
    liveDemoUrl: null, // Requires local Ollama instance
    deploymentStatus: 'local_only',
    deploymentNote: 'Designed for private on-device execution. Includes single-click Windows launchers (Run_Luna.bat, start.bat) and automated multi-service orchestration.',
    featured: true,
    metrics: [
      { label: 'Privacy Guarantee', value: '100% Local', detail: 'Zero telemetry or cloud API calls' },
      { label: 'Primary LLM', value: 'Mistral 7B', detail: 'Run locally via Ollama inference engine' },
      { label: 'Fallback Latency', value: '< 5ms', detail: 'Instant local heuristic response matrix' },
      { label: 'UI Architecture', value: 'Glassmorphism', detail: 'Dynamic glowing orb with typewriter effect' },
    ],
    problemStatement: 'Most AI conversational companions rely on commercial cloud APIs (OpenAI, Anthropic), which transmit intimate personal thoughts, emotional vulnerabilities, and daily reflections to external corporate servers. Furthermore, network outages render cloud companions inaccessible during critical moments.',
    motivation: 'To engineer an offline, private, and resilient conversational system where user data never leaves their local device, pairing local quantized open-source LLM inference with a deterministic emotional fallback architecture.',
    architectureSummary: 'Luna is built as a multi-tier local architecture: a React glassmorphic frontend connects via REST API to a Node.js/Express service, which proxies requests to a locally hosted Ollama inference engine or triggers an instant heuristic companion engine.',
    architecturePoints: [
      {
        title: 'Local Ollama Bridge',
        description: 'Dispatches structured prompts to http://localhost:11434/api/generate using the Mistral model, conditioned with empathetic system instructions.'
      },
      {
        title: 'Zero-Dependency Companion Engine',
        description: 'A dedicated internal service (lunaCompanion.js) categorizes emotional context (loneliness, anxiety, sadness, gratitude) and serves calming responses with zero cold-start delay.'
      },
      {
        title: 'Graceful Database Degradation',
        description: 'Integrates optional MongoDB via Mongoose for mood journal persistence; if the database is inactive, the application operates seamlessly in ephemeral session mode.'
      },
      {
        title: 'Typewriter Chat Interface',
        description: 'A smooth character-by-character typewriter rendering engine simulates natural conversation pacing and auto-scrolls to ensure comfortable reading.'
      }
    ],
    technicalDetails: [
      {
        title: 'Empathetic Prompt Conditioning',
        content: [
          'Instructs the local model to act as a gentle, grounded presence: "You are Luna, a calm and empathetic AI emotional support companion... Provide a warm, uplifting response in 1-2 sentences."',
          'Enforces brevity and calming tone to prevent verbose or medicalized responses.'
        ]
      },
      {
        title: 'One-Click Process Orchestrator',
        content: [
          'A unified Node.js launcher (start.js) verifies Node version, checks for required dependencies, launches backend (port 5000) and frontend (port 3000), and opens the default browser.',
          'Windows batch files (Run_Luna.bat, start.bat, and silent VBS launcher) enable zero-technical-friction startup for non-technical users.'
        ]
      }
    ],
    evaluation: {
      methodology: 'Evaluated locally on consumer hardware (Intel Core i5 / 16GB RAM) testing inference latency, memory footprint, and fallback resilience across offline and cold-start scenarios.',
      resultsTable: {
        headers: ['Execution Mode', 'Inference Engine', 'Internet Required', 'Average Response Time', 'Privacy Level'],
        rows: [
          ['Primary Mode', 'Ollama (Mistral 7B Q4)', 'No (Fully Offline)', '1.8s - 3.2s', 'Absolute (On-Device)'],
          ['Fallback Mode', 'Luna Companion Heuristic', 'No (Fully Offline)', '< 5ms', 'Absolute (On-Device)'],
          ['Cloud Alternative', 'Commercial API', 'Yes (Mandatory)', '0.9s - 2.1s', 'Data Shared with 3rd Party']
        ]
      }
    },
    challenges: [
      {
        title: 'Inference Cold-Starts & Resource Constraints',
        description: 'Loading 4GB+ quantized model weights into RAM/VRAM on standard consumer laptops can introduce initial delays. We implemented the dual-path companion architecture so users receive immediate comforting interactions even while the local model initializes.'
      },
      {
        title: 'Safe Boundary Enforcement',
        description: 'Ensuring an emotional companion does not attempt clinical diagnosis or psychiatric advice. System prompts and fallback heuristics strictly emphasize gentle listening, grounding exercises, and encouragement to seek qualified human support.'
      }
    ],
    engineeringDecisions: [
      {
        decision: 'Prioritizing Local Mistral Over Cloud APIs',
        rationale: 'Personal reflections require uncompromising privacy. Hosting the model via Ollama guarantees that sensitive thoughts are never stored in external logs or used to train third-party models.'
      },
      {
        decision: 'Graceful Degradation Architecture',
        rationale: 'Every external dependency (Ollama server, MongoDB instance) is wrapped in try/catch fallbacks, guaranteeing the chat UI remains functional under any partial system outage.'
      }
    ],
    limitations: [
      'Inference speed depends directly on host hardware (GPU acceleration recommended for sub-second responses).',
      'The offline heuristic mode relies on pattern matching rather than generative reasoning when the Ollama server is stopped.'
    ],
    futureImprovements: [
      'Local RAG & Long-Term Memory: Vector embeddings via ChromaDB/Sqlite-VSS to recall past user conversations locally.',
      'Voice Synthesis & Speech-to-Text: On-device Whisper STT and Kokoro/Piper TTS for natural spoken conversations.',
      'Quantized Mobile Deployment: Exploring WebGPU / ONNX Runtime to execute small SLMs (SmolLM2, Llama 3.2 1B) directly in the browser.'
    ]
  },
  {
    id: 'growth-os',
    slug: 'growth-os',
    title: 'Growth OS',
    fullTitle: 'Growth OS — Personal Productivity and Learning Platform',
    category: 'Full Stack Development / Productivity / Web Application',
    badge: 'Web Application',
    shortDescription: 'A personal productivity and learning management platform designed to organize university engineering coursework, track revision cadence, and optimize study workflows.',
    summary: 'Growth OS addresses the fragmented study workflows of engineering undergraduates. Built as a unified web application, it integrates course subject management, spaced repetition revision planning, previous-year question repositories, interactive flashcards, and focus timers.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Vite', 'Lucide Icons'],
    heroImage: '/projects/finsleuth-weirdnodes.png', // Fallback illustrative visual
    galleryImages: [
      { url: '/projects/finsleuth-weirdnodes.png', caption: 'Growth OS Analytics & Study Cadence Tracker' },
    ],
    githubUrl: 'https://github.com/GowdaJeevithKariyappa/growth-os',
    liveDemoUrl: null, // Configurable Vercel/Netlify target
    deploymentStatus: 'source_only',
    deploymentNote: 'Source code maintained on GitHub. Configured for single-command deployment to Vercel or Netlify with Supabase backend connection.',
    featured: true,
    metrics: [
      { label: 'Core Modules', value: '8 Integrated', detail: 'Dashboard, Subjects, PYQs, Flashcards, Pomodoro, etc.' },
      { label: 'Tech Stack', value: 'React + TS', detail: 'Type-safe component architecture with Tailwind CSS' },
      { label: 'Data Model', value: 'Relational', detail: 'Structured PostgreSQL schema with Row-Level Security' },
    ],
    problemStatement: 'Computer Science and Engineering students juggle multiple technical subjects, laboratory assignments, semester exams, and coding practice across disconnected tools (Notion, spreadsheets, browser bookmarks, flashcard apps), leading to cognitive overload and inconsistent revision schedules.',
    motivation: 'To create a focused, low-distraction engineering study platform that brings syllabus tracking, question banks, active recall flashcards, and focused study intervals into a single coherent dashboard.',
    architectureSummary: 'Growth OS uses a modern client-side React + TypeScript architecture connected to a PostgreSQL database via Supabase, utilizing Tailwind CSS for a minimal, dark-mode-first aesthetic.',
    architecturePoints: [
      {
        title: 'Modular Dashboard & Daily Agenda',
        description: 'Aggregates upcoming revision deadlines, subject progress bars, recent flashcard decks, and daily study streaks.'
      },
      {
        title: 'Spaced Repetition & Revision Planning',
        description: 'Schedules review intervals following spaced repetition curves to solidify complex algorithms and theoretical concepts.'
      },
      {
        title: 'Curated PYQ & Question Repository',
        description: 'Organizes university previous-year exam questions by subject, unit, and difficulty tier with solution notes.'
      },
      {
        title: 'Integrated Focus Timer (Pomodoro)',
        description: 'Configurable work and break intervals paired with subject tagging to measure real time spent per technical topic.'
      }
    ],
    technicalDetails: [
      {
        title: 'Implemented Feature Modules',
        content: [
          'Dashboard: Central command center displaying study hours, subject distribution, and active tasks.',
          'Subject Management: Deep categorization by semester, academic credit weight, syllabus chapters, and status.',
          'Revision Planning: Dynamic scheduling based on spaced repetition intervals.',
          'Previous-Year Questions (PYQ): Filterable exam question archive with mark allocation breakdown.',
          'Flashcards & Active Recall: Interactive self-testing decks with confidence ratings.',
          'Pomodoro & Focus Session Tracker: Interval timer with session logging.',
          'Analytics: Visual representation of time distribution and chapter completion velocity.',
          'Arena: Problem-solving workspace for timed algorithm practice.'
        ]
      }
    ],
    evaluation: {
      methodology: 'Tested across desktop and tablet viewports for semester study workflows and daily task completion efficiency.',
      resultsTable: {
        headers: ['Module', 'Primary Purpose', 'Target Workflow', 'State Persistence'],
        rows: [
          ['Subject Hub', 'Curriculum Tracking', 'Syllabus unit checklist & completion', 'Supabase DB / Local Cache'],
          ['Revision Planner', 'Spaced Repetition', 'Automated review reminders (1, 3, 7, 21 days)', 'PostgreSQL Relational'],
          ['Flashcard Deck', 'Active Recall', 'Rapid concept self-assessment', 'Normalized Card Decks'],
          ['Pomodoro Timer', 'Deep Work Execution', '25m / 5m work-break cycle tracking', 'Session Event Logs']
        ]
      }
    },
    challenges: [
      {
        title: 'Balancing Rich Functionality with Low Cognitive Friction',
        description: 'Complex productivity platforms often fail because entering data becomes a chore. We designed minimal modal dialogs and keyboard shortcuts to allow logging a study session in under three seconds.'
      },
      {
        title: 'Offline State Synchronization',
        description: 'Ensuring that study sessions logged without an active internet connection sync reliably to the cloud database upon reconnection without conflicting records.'
      }
    ],
    engineeringDecisions: [
      {
        decision: 'TypeScript Strict Mode Throughout',
        rationale: 'Enforcing strict type safety across all entity schemas (Subject, Chapter, Question, Session) prevented runtime errors and simplified refactoring as new modules were added.'
      },
      {
        decision: 'Row-Level Security (RLS) on Database',
        rationale: 'Configured strict Supabase RLS policies ensuring that each user has isolated read/write access to their personal study records, never exposing service-role keys.'
      }
    ],
    limitations: [
      'Currently tailored to university academic semester structures rather than corporate project management.',
      'Mobile native push notifications for revision reminders require a Progressive Web App (PWA) wrapper.'
    ],
    futureImprovements: [
      'PWA Service Worker: Full offline caching with automated background sync.',
      'AI Question Generator: Automatic generation of flashcards and practice questions from lecture notes and PDFs.',
      'Peer Study Rooms: Shared focus sessions and collaborative question bank annotations.'
    ]
  },
  {
    id: 'gold-price-prediction',
    slug: 'gold-price-prediction',
    title: 'Gold Price Prediction',
    fullTitle: 'Gold Price Prediction Using Machine Learning & Deep Learning',
    category: 'Machine Learning / Deep Learning / Quantitative Finance',
    badge: 'Quantitative Research',
    shortDescription: 'A quantitative predictive machine learning study forecasting next-day gold closing prices from historical financial data using strict chronological splits and multi-model benchmarking.',
    summary: 'Predicting financial asset prices requires rigorous safeguards against lookahead bias. This study evaluates historical daily trading records from Yahoo Finance, comparing classical regression models, ARIMA time-series baselines, and recurrent neural architectures (LSTM, GRU) under a strict 70/15/15 chronological partition.',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    heroImage: '/projects/finsleuth-weirdnodes.png', // Illustrative graphic
    galleryImages: [
      { url: '/projects/finsleuth-weirdnodes.png', caption: 'Model Convergence & Forecast Deviation Analysis' },
    ],
    githubUrl: 'https://github.com/GowdaJeevithKariyappa',
    liveDemoUrl: null,
    deploymentStatus: 'source_only',
    deploymentNote: 'Machine learning experimental research codebase and Jupyter notebooks. Evaluated and verified across 4 standard quantitative metrics.',
    featured: false,
    metrics: [
      { label: 'R² Score', value: '0.98', detail: 'Coefficient of determination on test set' },
      { label: 'Partition Strategy', value: '70 / 15 / 15', detail: 'Strict chronological train / val / test' },
      { label: 'Model Architectures', value: '4 Benchmarked', detail: 'Classical Regressors, ARIMA, LSTM, GRU' },
      { label: 'Evaluation Metrics', value: '4 Evaluated', detail: 'MAE, RMSE, R², and MAPE' },
    ],
    problemStatement: 'Financial time-series data exhibits non-stationarity, market regime shifts, and high noise-to-signal ratios. Many naive machine learning benchmarks suffer from lookahead bias by shuffling data or using standard k-fold cross-validation, producing artificially inflated metrics that collapse during live market trading.',
    motivation: 'To execute a methodologically rigorous quantitative modeling pipeline that strictly respects arrow-of-time ordering, evaluating whether recurrent neural networks (LSTM, GRU) provide defensible forecasting advantages over classical regressors and statistical baselines.',
    architectureSummary: 'Historical daily OHLCV (Open, High, Low, Close, Volume) data is ingested, normalized via rolling window scaling, and formatted into lookback sequence tensors for supervised sequential training.',
    architecturePoints: [
      {
        title: 'Chronological Data Partitioning',
        description: 'Enforces a strict 70% training, 15% validation, and 15% testing split without shuffling, preventing future price information from contaminating earlier training steps.'
      },
      {
        title: 'Feature Engineering & Lagging',
        description: 'Constructs lagged return indicators, exponential moving averages (EMA), and volatility metrics to capture market momentum.'
      },
      {
        title: 'Recurrent Neural Architectures',
        description: 'Implements multi-layer LSTM and GRU networks with dropout regularization to model temporal dependencies across sequential trading days.'
      },
      {
        title: 'Naive & Statistical Baselines',
        description: 'Benchmarks model performance against random walk naive persistence (predicting price(t) = price(t-1)) and ARIMA time-series models.'
      }
    ],
    technicalDetails: [
      {
        title: 'Verified Performance Verification',
        content: [
          'Achieved a verified test R² score of 0.98 when predicting next-day price trajectories alongside directional trend accuracy.',
          'Scored across 4 core quantitative regression metrics: Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), R² Score, and Mean Absolute Percentage Error (MAPE).'
        ]
      }
    ],
    evaluation: {
      methodology: 'Evaluated on historical daily gold closing prices from Yahoo Finance partitioned strictly in chronological order without future lookahead.',
      splits: '70% Train, 15% Validation, 15% Test (chronological)',
      resultsTable: {
        headers: ['Model Family', 'Test R²', 'Directional Accuracy', 'Lookahead Safe', 'Computational Footprint'],
        rows: [
          ['GRU Recurrent Network', '0.98', 'Strong Momentum Capture', 'Yes (Strict Temporal)', 'Moderate GPU Training'],
          ['LSTM Network', '0.97', 'Consistent Sequence Memory', 'Yes (Strict Temporal)', 'Moderate GPU Training'],
          ['Random Forest Regressor', '0.94', 'Lagged Feature Baseline', 'Yes (Strict Temporal)', 'Fast CPU Training'],
          ['Naive Persistence Baseline', '0.92', 'Price(t) = Price(t-1)', 'Yes (Benchmark)', 'Zero Compute']
        ]
      }
    },
    challenges: [
      {
        title: 'Avoiding Information Leakage in Scaling',
        description: 'Fitting MinMaxScaler or StandardScaler on the entire dataset leaks test distribution parameters. We strictly fit scalers solely on the training partition and applied the frozen transformation to validation and test sequences.'
      },
      {
        title: 'Distinguishing Genuine Signal from Random Walk Persistence',
        description: 'In financial markets, a naive model that predicts tomorrow is equal to today often shows high R² simply because price changes day-to-day are small. We benchmarked models on directional prediction and delta residuals to verify genuine learning.'
      }
    ],
    engineeringDecisions: [
      {
        decision: 'Strict Time-Series Split Over K-Fold CV',
        rationale: 'Standard random shuffle cross-validation in time series is fundamentally flawed. Enforcing a 70/15/15 chronological split guarantees the model is always evaluated on unseen future market regimes.'
      }
    ],
    limitations: [
      'Trained exclusively on historical price and volume data; does not incorporate macroeconomic news sentiment, central bank rate decisions, or geopolitical volatility shocks.',
      'Past market performance is not indicative of future returns; not intended as automated trading or financial investment advice.'
    ],
    futureImprovements: [
      'Multi-Modal Sentiment Integration: Ingesting financial news headlines and Federal Reserve announcements via transformer embeddings.',
      'Transformer Time-Series Architecture: Experimenting with PatchTST or Temporal Fusion Transformers (TFT) for multi-horizon quantile forecasting.'
    ]
  }
];
