/**
 * LIFE PATCH - Multilingual Localization System
 * Complete enterprise translation coverage for English (en), Hindi (hi), and Telugu (te).
 */

import { getSetting, setSetting } from '../db/api.js';
import { renderIcons } from './icons.js';

export const TRANSLATIONS = {
  en: {
    // Brand & App
    appName: 'LIFE PATCH',
    appTagline: 'Continuous Health Record for Rural & Public Healthcare',
    demoMode: 'DEMO POC',
    connected: 'Connected to PHC',
    offline: 'Offline Mode (Local Storage)',
    login: 'Sign In',
    signInPersona: 'Sign In / Demo Access',

    // Landing Page Nav
    navPortals: 'Portals',
    navPipeline: 'Continuity Flow',
    navFeatures: 'Features',
    navMetrics: 'Specs & Performance',
    navJuryGuide: 'Jury Guide',
    heroBadge: 'Smart India Hackathon 2026 • Problem Statement SIH26133',
    heroTitle1: 'One Continuous Health Record.',
    heroTitle2: 'Every Village. Every Citizen.',
    heroSubtitle: 'Bridging rural citizens, frontline ASHA workers, Primary Health Centres (PHCs), and specialist referral hospitals into an integrated, voice-enabled, consent-governed digital health ecosystem — with 100% offline-first resilience.',
    heroCtaLaunch: 'Launch Live Demo Portals',
    heroCtaPipeline: 'Explore Continuity Pipeline',

    // Trust strip
    trustIndexedDb: '100% Client-Side IndexedDB',
    trustAbdm: 'ABDM & ABHA Compliant',
    trustVoiceAi: 'Multilingual Voice AI',
    trustOffline: 'Zero-Connectivity Offline First',

    // Portal Section
    portalsHeading: 'Select an Interactive Workspace',
    portalsSubheading: 'Explore tailored digital tools engineered for each stakeholder in the public healthcare continuum.',
    patientBadge: 'Citizen Portal',
    patientWorkspaceTitle: 'Patient Portal',
    patientWorkspaceDesc: 'Empowering rural citizens with voice-guided health logging, sovereign consent, and emergency assistance.',
    patientFeature1: 'Multilingual voice symptom recording (Hindi, Telugu, English)',
    patientFeature2: 'Lifetime longitudinal medical timeline & prescriptions',
    patientFeature3: 'Digital ABHA Health Card with QR check-in',
    patientFeature4: '108 Emergency SOS with live GPS telemetry',
    enterPatientBtn: 'Enter Patient Workspace',

    doctorBadge: 'PHC Medical Officer',
    doctorWorkspaceTitle: 'Doctor Workspace',
    doctorWorkspaceDesc: 'Equipping PHC physicians with human-in-the-loop triage, AI summaries, and digital prescriptions.',
    doctorFeature1: 'Automated OPD priority queue with doctor override',
    doctorFeature2: 'Grounded Clinical AI SOAP documentation assistant',
    doctorFeature3: 'e-Prescriptions with drug-allergy safety validation',
    doctorFeature4: 'District hospital cardiology & specialist referral routing',
    enterDoctorBtn: 'Enter Doctor Workspace',

    workerBadge: 'Frontline Health',
    workerWorkspaceTitle: 'ASHA Health Worker',
    workerWorkspaceDesc: 'Enabling frontline community health workers with offline field checkups and assisted access.',
    workerFeature1: 'Household field vitals entry (BP, Sugar, SpO2, Pulse)',
    workerFeature2: 'Assisted citizen login with verbal consent audit token',
    workerFeature3: 'Offline queue recording with 1-click background sync',
    workerFeature4: 'High-risk household monitoring & follow-up rosters',
    enterWorkerBtn: 'Enter ASHA Workspace',

    // Pipeline Section
    pipelineHeading: 'Continuity of Care Pipeline (SIH Architecture)',
    pipelineSubheading: 'How medical intelligence flows seamlessly from rural doorstep to specialist tertiary hospitals without data fragmentation or loss of patient consent.',
    pipelineFhirTag: 'FHIR & ABDM Compliant Data Exchange',
    step1Title: '1. Patient / Home',
    step1Desc: 'Voice symptom entry in local dialect, instant 108 SOS trigger, and sovereign consent approvals.',
    step1Tag: 'Speech-to-Text Input',
    step2Title: '2. ASHA Field Visit',
    step2Desc: 'Offline vitals check (BP, SpO2, Sugar), paper slip OCR scan, and assisted verbal consent logging.',
    step2Tag: 'Offline IndexedDB Queue',
    step3Title: '3. PHC Medical Officer',
    step3Desc: 'Triage priority ranking, grounded AI SOAP clinical summary, electronic Rx, and e-consultation.',
    step3Tag: 'Grounded Clinical AI',
    step4Title: '4. District Hospital',
    step4Desc: 'Instant secondary referral intake with complete longitudinal historical EHR and zero data re-entry.',
    step4Tag: 'Longitudinal Referral',

    // Metrics
    metric1Val: '< 35ms',
    metric1Label: 'Local Query Latency',
    metric1Sub: 'Zero-server client-side indexed queries',
    metric2Val: '17 Stores',
    metric2Label: 'IndexedDB Schema',
    metric2Sub: 'Full offline persistence across refreshes',
    metric3Val: '3 Dialects',
    metric3Label: 'Speech-to-Text AI',
    metric3Sub: 'Native Hindi, Telugu, and English support',
    metric4Val: '100%',
    metric4Label: 'Offline Resilience',
    metric4Sub: 'PWA Service Worker offline caching',

    // Feature Pillars
    pillarsHeading: "Engineered for India's Public Healthcare Reality",
    pillar1Title: 'Voice-First Accessibility',
    pillar1Desc: 'Overcomes rural literacy barriers through native speech recognition in regional Indian languages with automatic speech synthesis read-aloud.',
    pillar2Title: 'Offline-First IndexedDB',
    pillar2Desc: 'Functions seamlessly in remote forest and rural tribal belts with zero mobile connectivity. Background synchronization pushes records when network returns.',
    pillar3Title: 'Grounded Clinical AI',
    pillar3Desc: 'Human-in-the-loop medical AI summarizes complex longitudinal vitals and symptoms into structured SOAP notes without replacing licensed clinical judgment.',
    pillar4Title: 'ABDM & ABHA Integration',
    pillar4Desc: 'Standardized 14-digit ABHA citizen identifier linkage with patient-controlled consent revocation for complete data sovereignty.',
    pillar5Title: '108 Emergency Telemetry',
    pillar5Desc: 'One-tap SOS broadcasts live GPS coordinates and critical allergy flags directly to emergency response ambulances and PHC dispatchers.',
    pillar6Title: 'Paper Record OCR Scan',
    pillar6Desc: 'Transforms physical prescription slips and legacy hospital discharge cards into structured, queryable electronic health records.',

    // Evaluator Tour
    juryTourHeading: 'SIH Evaluator & Jury Quick-Start Tour',
    juryTourDesc: 'To test the complete cross-role feedback loop: Log a symptom in the Patient Voice Assistant → Observe priority queue elevation in the Doctor Workspace → Sign an e-prescription → Record household vitals in the ASHA Workspace → Sync offline queue.',
    openRoleSwitcher: 'Open 1-Click Role Switcher',
    inspectDb: 'Inspect / Export IndexedDB',
    readJuryDocs: 'Read Full Jury Documentation',

    // Roles & Core Labels
    patient: 'Patient',
    doctor: 'Doctor',
    worker: 'ASHA Worker',
    rolePatientDesc: 'Access health records, speak symptoms, view prescriptions and book visits.',
    roleDoctorDesc: 'Review patient queue, clinical records, prescribe medicines and issue referrals.',
    roleWorkerDesc: 'Field vitals recording, assisted citizen access, and offline data sync.',

    // Navigation
    home: 'Home',
    myHealth: 'My Health',
    medicalRecords: 'Medical Records',
    symptoms: 'Symptoms',
    voiceAssistant: 'Voice Assistant',
    appointments: 'Appointments',
    emergency: 'Emergency SOS',
    consentPrivacy: 'Consent & Privacy',
    profile: 'Profile',
    priorityQueue: 'Priority Queue',
    patients: 'Patients',
    patientRecord: 'Patient Record',
    consultations: 'Consultations',
    prescriptions: 'Prescriptions',
    referrals: 'Referrals',
    followups: 'Follow-ups',
    assistedAccess: 'Assisted Access',
    fieldVisit: 'Field Visit',
    vitals: 'Vitals Entry',
    voiceEntry: 'Voice Entry',
    offlineQueue: 'Offline Queue',
    sync: 'Sync Data',
    settings: 'Settings',
    accessibility: 'Accessibility',
    help: 'Help & Guide',
    logout: 'Switch Role / Logout',
    backToDashboard: 'Back to Dashboard',
    pageHelp: 'What can I do on this page?',
    pageHelpSubtitle: 'Quick guide for this screen',
    fullGuide: 'Full User Guide',
    gotIt: 'Got It',

    // Common Actions
    save: 'Save',
    cancel: 'Cancel',
    edit: 'Edit',
    delete: 'Delete',
    view: 'View',
    share: 'Share',
    bookVisit: 'Book PHC Visit',
    talkToDoctor: 'Talk to Doctor',
    tellHowYouFeel: 'Tell Us How You Feel',
    speak: 'Tap to Speak',
    listening: 'Listening... Speak clearly',
    stopRecording: 'Stop Recording',
    readAloud: 'Read Aloud',
    exportData: 'Export Local Data',
    importData: 'Import Local Data',
    resetDemoData: 'Reset Demo Data',
    syncNow: 'Sync All Records',

    // Status Badges & Priorities
    emergencyPri: 'Emergency',
    highPri: 'High Priority',
    mediumPri: 'Medium',
    routinePri: 'Routine',
    unverified: 'Unverified (Patient Reported)',
    verified: 'Clinically Verified',
    active: 'Active',
    pending: 'Pending',
    completed: 'Completed',

    // Patient Dashboard
    goodMorning: 'Good morning',
    goodAfternoon: 'Good afternoon',
    goodEvening: 'Good evening',
    welcomeGreeting: 'Welcome',
    healthAtAGlance: 'Your health at a glance',
    nextAppointment: 'Next Appointment',
    medicinesActive: 'Active Medicines',
    followUpDue: 'Follow-up Due',
    recentTimeline: 'Recent Health Timeline',
    noRecordsYet: 'No medical records found yet.',

    // Voice Screen
    voiceInstruction: 'Press the microphone and describe your symptoms in your own words.',
    weHeard: 'We heard:',
    confirmAndSave: 'Save to Health Record',

    // AI Disclaimer
    aiAssistantTitle: 'Clinical AI Assistant (Demo)',
    aiDisclaimerNotice: 'AI-assisted summarisation for clinician review. Final medical decisions remain with the doctor.',
    generateSummary: 'Generate Clinical Summary',

    // Emergency
    emergencyHeader: 'EMERGENCY MEDICAL ASSISTANCE',
    emergencyPrompt: 'If you are experiencing severe chest pain, breathing difficulty, or trauma, press the button below.',
    callEmergency: '🚨 REQUEST EMERGENCY HELP',
    simulatedNotice: 'DEMO MODE — This screen simulates emergency dispatch. No actual ambulance is dispatched.'
  },

  hi: {
    // Brand & App
    appName: 'लाइफ पैच (LIFE PATCH)',
    appTagline: 'ग्रामीण और सार्वजनिक स्वास्थ्य के लिए निरंतर स्वास्थ्य रिकॉर्ड',
    demoMode: 'डेमो मोड',
    connected: 'पीएचसी से जुड़ा हुआ है',
    offline: 'ऑफ़लाइन मोड (स्थानीय संग्रहण)',
    login: 'लॉग इन करें',
    signInPersona: 'डेमो लॉगिन / प्रोफाइल चुनें',

    // Landing Page Nav
    navPortals: 'पोर्टल',
    navPipeline: 'स्वास्थ्य प्रवाह',
    navFeatures: 'विशेषताएं',
    navMetrics: 'क्षमता और प्रदर्शन',
    navJuryGuide: 'मूल्यांकन गाइड',
    heroBadge: 'स्मार्ट इंडिया हैकाथॉन 2026 • समस्या SIH26133',
    heroTitle1: 'एक निरंतर स्वास्थ्य रिकॉर्ड।',
    heroTitle2: 'हर गाँव। हर नागरिक।',
    heroSubtitle: 'ग्रामीण नागरिकों, आशा कार्यकर्ताओं, प्राथमिक स्वास्थ्य केंद्रों (PHC) और विशेषज्ञ अस्पतालों को आवाज-सक्षम, सहमति-नियंत्रित डिजिटल स्वास्थ्य रिकॉर्ड से जोड़ना — शत-प्रतिशत ऑफ़लाइन क्षमता के साथ।',
    heroCtaLaunch: 'लाइव डेमो पोर्टल खोलें',
    heroCtaPipeline: 'स्वास्थ्य प्रवाह देखें',

    // Trust strip
    trustIndexedDb: '100% क्लाइंट-साइड IndexedDB',
    trustAbdm: 'ABDM एवं ABHA अनुरूप',
    trustVoiceAi: 'बहुभाषी वॉयस एआई',
    trustOffline: 'बिना इंटरनेट ऑफ़लाइन कार्य',

    // Portal Section
    portalsHeading: 'एक इंटरैक्टिव पोर्टल चुनें',
    portalsSubheading: 'सार्वजनिक स्वास्थ्य प्रणाली के प्रत्येक हितधारक के लिए विशेष रूप से डिज़ाइन किए गए डिजिटल उपकरण।',
    patientBadge: 'नागरिक पोर्टल',
    patientWorkspaceTitle: 'मरीज़ पोर्टल (Patient)',
    patientWorkspaceDesc: 'ग्रामीण नागरिकों को आवाज द्वारा लक्षण दर्ज करने, सहमति नियंत्रण और आपातकालीन सहायता प्रदान करता है।',
    patientFeature1: 'हिंदी, तेलुगु और अंग्रेजी में आवाज द्वारा लक्षण रिकॉर्डिंग',
    patientFeature2: 'आजीवन स्वास्थ्य टाइमलाइन और दवाइयों की पर्चियां',
    patientFeature3: 'क्यूआर कोड सहित डिजिटल आभा (ABHA) स्वास्थ्य कार्ड',
    patientFeature4: 'लाइव जीपीएस लोकेशन सहित 108 आपातकालीन एसओएस',
    enterPatientBtn: 'मरीज़ पोर्टल खोलें',

    doctorBadge: 'पीएचसी चिकित्सा अधिकारी',
    doctorWorkspaceTitle: 'डॉक्टर वर्कस्पेस (Doctor)',
    doctorWorkspaceDesc: 'चिकित्सकों को स्वचालित प्राथमिकता कतार, एआई सारांश और डिजिटल पर्चे प्रदान करता है।',
    doctorFeature1: 'डॉक्टर नियंत्रण युक्त स्वचालित ओपीडी प्राथमिकता कतार',
    doctorFeature2: 'सत्यापित क्लिनिकल एआई SOAP दस्तावेज़ सहायक',
    doctorFeature3: 'दवा-एलर्जी सुरक्षा जांच युक्त ई-पर्चा (e-Rx)',
    doctorFeature4: 'जिला अस्पताल कार्डियोलॉजी एवं विशेषज्ञ रेफरल',
    enterDoctorBtn: 'डॉक्टर वर्कस्पेस खोलें',

    workerBadge: 'आशा कार्यकर्ता',
    workerWorkspaceTitle: 'आशा कार्यकर्ता पोर्टल (ASHA)',
    workerWorkspaceDesc: 'सामुदायिक स्वास्थ्य कार्यकर्ताओं को घर-घर जाकर ऑफ़लाइन जांच और नागरिक सहायता में सक्षम बनाता है।',
    workerFeature1: 'घर-घर वाइटल्स माप (बीपी, शुगर, ऑक्सीजन SpO2, पल्स)',
    workerFeature2: 'मौखिक सहमति ऑडिट टोकन सहित नागरिक सहायता लॉगिन',
    workerFeature3: '1-क्लिक बैकग्राउंड सिंक युक्त ऑफ़लाइन डेटा कतार',
    workerFeature4: 'उच्च जोखिम वाले परिवारों की निगरानी एवं फॉलो-अप',
    enterWorkerBtn: 'आशा वर्कस्पेस खोलें',

    // Pipeline Section
    pipelineHeading: 'निरंतर स्वास्थ्य देखभाल प्रवाह (SIH आर्किटेक्चर)',
    pipelineSubheading: 'ग्रामीण घर से लेकर विशेषज्ञ अस्पताल तक बिना किसी डेटा हानि और पूर्ण सहमति के साथ स्वास्थ्य जानकारी का प्रवाह।',
    pipelineFhirTag: 'FHIR एवं ABDM अनुरूप डेटा साझाकरण',
    step1Title: '1. मरीज़ / घर',
    step1Desc: 'स्थानीय भाषा में बोलकर लक्षण दर्ज करना, 108 एसओएस आपातकालीन संकेत और डेटा सहमति।',
    step1Tag: 'स्पीच-टू-टेक्स्ट इनपुट',
    step2Title: '2. आशा कार्यकर्ता का दौरा',
    step2Desc: 'ऑफ़लाइन वाइटल्स जांच (बीपी, शुगर), पुरानी पर्ची ओसीआर स्कैन और मौखिक सहमति।',
    step2Tag: 'ऑफ़लाइन IndexedDB कतार',
    step3Title: '3. पीएचसी डॉक्टर',
    step3Desc: 'ओपीडी प्राथमिकता निर्धारण, क्लिनिकल एआई SOAP सारांश, डिजिटल पर्चा और परामर्श।',
    step3Tag: 'क्लिनिकल एआई सहायक',
    step4Title: '4. जिला अस्पताल',
    step4Desc: 'पूर्ण आजीवन स्वास्थ्य इतिहास के साथ विशेषज्ञ रेफरल और तुरंत उपचार।',
    step4Tag: 'डिजिटल रेफरल ट्रांसफर',

    // Metrics
    metric1Val: '< 35ms',
    metric1Label: 'लोकल डेटा स्पीड',
    metric1Sub: 'बिना सर्वर के त्वरित क्लाइंट क्वेरी',
    metric2Val: '17 स्टोर्स',
    metric2Label: 'IndexedDB स्कीमा',
    metric2Sub: 'ब्राउज़र में पूर्ण ऑफ़लाइन डेटा सुरक्षा',
    metric3Val: '3 भाषाएं',
    metric3Label: 'वॉयस एआई समर्थन',
    metric3Sub: 'हिंदी, तेलुगु और अंग्रेजी में पूर्ण कार्य',
    metric4Val: '100%',
    metric4Label: 'ऑफ़लाइन रेजिलिएंस',
    metric4Sub: 'पीडब्ल्यूए सर्विस वर्कर ऑफ़लाइन कैशिंग',

    // Feature Pillars
    pillarsHeading: 'भारत की ग्रामीण सार्वजनिक स्वास्थ्य आवश्यकताओं के अनुरूप निर्मित',
    pillar1Title: 'आवाज-प्रथम पहुंच (Voice AI)',
    pillar1Desc: 'क्षेत्रीय भारतीय भाषाओं में आवाज पहचान के माध्यम से ग्रामीण निरक्षरता की बाधा को दूर करता है।',
    pillar2Title: 'ऑफ़लाइन-प्रथम IndexedDB',
    pillar2Desc: 'इंटरनेट रहित सुदूर जंगलों और आदिवासी क्षेत्रों में भी बिना रुकावट काम करता है। नेटवर्क मिलने पर स्वतः सिंक होता है।',
    pillar3Title: 'क्लिनिकल एआई सहायक',
    pillar3Desc: 'डॉक्टर के निर्णय में सहायता हेतु जटिल स्वास्थ्य डेटा को संरचित SOAP नोट्स में बदलता है।',
    pillar4Title: 'ABDM और आभा (ABHA) जुड़ाव',
    pillar4Desc: '14-अंकीय आभा पहचान संख्या और मरीज़-नियंत्रित डेटा सहमति प्रबंधन।',
    pillar5Title: '108 आपातकालीन टेलीमेट्री',
    pillar5Desc: 'एक टैप से लाइव जीपीएस और एलर्जी संबंधी जानकारी सीधे 108 एम्बुलेंस और अस्पताल को प्रेषित।',
    pillar6Title: 'कागज़ी पर्ची ओसीआर स्कैन',
    pillar6Desc: 'पुरानी कागज़ी पर्चियों और अस्पताल कार्ड को डिजिटल स्वास्थ्य रिकॉर्ड में बदलता है।',

    // Evaluator Tour
    juryTourHeading: 'मूल्यांकनकर्ता एवं जूरी के लिए त्वरित टूर',
    juryTourDesc: 'संपूर्ण क्रॉस-रोल प्रवाह का परीक्षण करने के लिए: मरीज़ वॉयस असिस्टेंट में लक्षण बोलें → डॉक्टर वर्कस्पेस में कतार देखें → ई-पर्चा जारी करें → आशा वर्कस्पेस में वाइटल्स दर्ज करें → ऑफ़लाइन सिंक करें।',
    openRoleSwitcher: '1-क्लिक रोल स्विचर खोलें',
    inspectDb: 'IndexedDB डेटा देखें / निर्यात करें',
    readJuryDocs: 'पूर्ण जूरी दस्तावेज़ पढ़ें',

    // Roles
    patient: 'मरीज़ (Patient)',
    doctor: 'डॉक्टर (Doctor)',
    worker: 'आशा कार्यकर्ता (ASHA Worker)',
    rolePatientDesc: 'स्वास्थ्य रिकॉर्ड देखें, लक्षण बोलकर बताएं, दवाएं देखें और अपॉइंटमेंट लें।',
    roleDoctorDesc: 'मरीज़ कतार देखें, नैदानिक रिकॉर्ड जांचें, दवा लिखें और रेफरल जारी करें।',
    roleWorkerDesc: 'फ़ील्ड वाइटल्स रिकॉर्डिंग, नागरिक सहायता और ऑफ़लाइन डेटा सिंक।',

    // Navigation
    home: 'होम',
    myHealth: 'मेरा स्वास्थ्य',
    medicalRecords: 'स्वास्थ्य रिकॉर्ड',
    symptoms: 'लक्षण (Symptoms)',
    voiceAssistant: 'आवाज सहायक (Voice)',
    appointments: 'अपॉइंटमेंट',
    emergency: 'आपातकालीन सहायता (SOS)',
    consentPrivacy: 'सहमति और गोपनीयता',
    profile: 'प्रोफ़ाइल',
    priorityQueue: 'प्राथमिकता कतार (Queue)',
    patients: 'मरीज़ सूची',
    patientRecord: 'मरीज़ का रिकॉर्ड',
    consultations: 'परामर्श',
    prescriptions: 'नुस्खा / दवाएं (Rx)',
    referrals: 'रेफरल (Referrals)',
    followups: 'फॉलो-अप',
    assistedAccess: 'सहायता प्राप्त लॉगिन',
    fieldVisit: 'घर का दौरा (Field Visit)',
    vitals: 'वाइटल्स माप',
    voiceEntry: 'आवाज़ प्रविष्टि',
    offlineQueue: 'ऑफ़लाइन कतार',
    sync: 'डेटा सिंक करें',
    settings: 'सेटिंग्स',
    accessibility: 'पहुंच क्षमता (Accessibility)',
    help: 'मदद और गाइड',
    logout: 'लॉगआउट / भूमिका बदलें',
    backToDashboard: 'डैशबोर्ड पर वापस जाएं',
    pageHelp: 'इस पेज पर क्या कर सकते हैं?',
    pageHelpSubtitle: 'इस स्क्रीन की त्वरित गाइड',
    fullGuide: 'पूरी मदद गाइड',
    gotIt: 'समझ गया',

    // Common Actions
    save: 'सुरक्षित करें (Save)',
    cancel: 'रद्द करें (Cancel)',
    edit: 'बदलें (Edit)',
    delete: 'हटाएं (Delete)',
    view: 'देखें (View)',
    share: 'साझा करें (Share)',
    bookVisit: 'पीएचसी विजिट बुक करें',
    talkToDoctor: 'डॉक्टर से बात करें',
    tellHowYouFeel: 'बताएं आप कैसा महसूस कर रहे हैं',
    speak: 'बोलने के लिए दबाएं',
    listening: 'सुन रहे हैं... कृपया स्पष्ट बोलें',
    stopRecording: 'रिकॉर्डिंग रोकें',
    readAloud: 'बोलकर सुनाएं',
    exportData: 'डेटा निर्यात करें (Export)',
    importData: 'डेटा आयात करें (Import)',
    resetDemoData: 'डेमो डेटा रीसेट करें',
    syncNow: 'सभी रिकॉर्ड सिंक करें',

    // Status Badges & Priorities
    emergencyPri: 'आपातकालीन (Emergency)',
    highPri: 'उच्च प्राथमिकता (High)',
    mediumPri: 'मध्यम (Medium)',
    routinePri: 'सामान्य (Routine)',
    unverified: 'मरीज़ द्वारा सूचित (समीक्षा लंबित)',
    verified: 'डॉक्टर द्वारा सत्यापित',
    active: 'सक्रिय',
    pending: 'लंबित',
    completed: 'पूर्ण',

    // Patient Dashboard
    goodMorning: 'सुप्रभात',
    goodAfternoon: 'शुभ दोपहर',
    goodEvening: 'शुभ संध्या',
    welcomeGreeting: 'नमस्ते',
    healthAtAGlance: 'आपकी स्वास्थ्य स्थिति',
    nextAppointment: 'अगली मुलाकात',
    medicinesActive: 'चल रही दवाएं',
    followUpDue: 'फॉलो-अप देय',
    recentTimeline: 'हालिया स्वास्थ्य टाइमलाइन',
    noRecordsYet: 'अभी कोई रिकॉर्ड नहीं है।',

    // Voice Screen
    voiceInstruction: 'माइक दबाएं और अपनी भाषा में बताएं कि आपको क्या तकलीफ़ है।',
    weHeard: 'हमने यह सुना:',
    confirmAndSave: 'स्वास्थ्य रिकॉर्ड में जोड़ें',

    // AI Disclaimer
    aiAssistantTitle: 'क्लिनिकल एआई सहायक (डेमो)',
    aiDisclaimerNotice: 'डॉक्टर की सहायता के लिए सारांश। अंतिम चिकित्सा निर्णय केवल डॉक्टर द्वारा लिया जाता है।',
    generateSummary: 'क्लिनिकल सारांश बनाएं',

    // Emergency
    emergencyHeader: 'आपातकालीन चिकित्सा सहायता',
    emergencyPrompt: 'यदि आपको सीने में तेज़ दर्द, सांस लेने में तकलीफ़ या गंभीर चोट है, तो नीचे का बटन दबाएं।',
    callEmergency: '🚨 आपातकालीन सहायता मांगें',
    simulatedNotice: 'डेमो मोड — यह स्क्रीन आपातकालीन प्रक्रिया दर्शाती है। कोई वास्तविक एम्बुलेंस नहीं भेजी जाती।'
  },

  te: {
    // Brand & App
    appName: 'లైఫ్ ప్యాచ్ (LIFE PATCH)',
    appTagline: 'గ్రామీణ మరియు ప్రజా ఆరోగ్యం కోసం నిరంతర ఆరోగ్య రికార్డు',
    demoMode: 'డెమో మోడ్',
    connected: 'PHC కి అనుసంధానించబడింది',
    offline: 'ఆఫ్‌లైన్ మోడ్ (స్థానిక నిల్వ)',
    login: 'లాగిన్ చేయండి',
    signInPersona: 'డెమో లాగిన్ / ప్రొఫైల్ ఎంచుకోండి',

    // Landing Page Nav
    navPortals: 'పోర్టల్స్',
    navPipeline: 'ఆరోగ్య ప్రవాహం',
    navFeatures: 'ఫీచర్లు',
    navMetrics: 'సామర్థ్యం & పనితీరు',
    navJuryGuide: 'జ్యూరీ గైడ్',
    heroBadge: 'స్మార్ట్ ఇండియా హ్యాకథాన్ 2026 • సమస్య SIH26133',
    heroTitle1: 'ఒకే నిరంతర ఆరోగ్య రికార్డు.',
    heroTitle2: 'ప్రతి గ్రామం. ప్రతి పౌరుడు.',
    heroSubtitle: 'గ్రామీణ పౌరులు, ఆశా కార్యకర్తలు, ప్రాథమిక ఆరోగ్య కేంద్రాలు (PHC) మరియు రిఫరల్ ఆసుపత్రులను వాయిస్-ఆధారిత, సమ్మతి-నియంత్రిత డిజిటల్ ఆరోగ్య రికార్డుతో అనుసంధానించడం — 100% ఆఫ్‌లైన్ సామర్థ్యంతో.',
    heroCtaLaunch: 'లైవ్ డెమో పోర్టల్స్ తెరవండి',
    heroCtaPipeline: 'ఆరోగ్య ప్రవాహాన్ని చూడండి',

    // Trust strip
    trustIndexedDb: '100% క్లయింట్-సైడ్ IndexedDB',
    trustAbdm: 'ABDM మరియు ABHA అనుకూలమైనది',
    trustVoiceAi: 'బహుభాషా వాయిస్ AI',
    trustOffline: 'ఇంటర్నెట్ లేకపోయినా ఆఫ్‌లైన్ పనితీరు',

    // Portal Section
    portalsHeading: 'ఇంటరాక్టివ్ వర్క్‌స్పేస్‌ను ఎంచుకోండి',
    portalsSubheading: 'ప్రజారోగ్య వ్యవస్థలోని ప్రతి ఒక్కరి కోసం ప్రత్యేకంగా రూపొందించబడిన డిజిటల్ సాధనాలు.',
    patientBadge: 'పౌరుల పోర్టల్',
    patientWorkspaceTitle: 'రోగుల పోర్టల్ (Patient)',
    patientWorkspaceDesc: 'గ్రామీణ పౌరులకు వాయిస్ ద్వారా లక్షణాలు నమోదు చేసుకోవడం, గోప్యత నియంత్రణ మరియు అత్యవసర సహాయం అందిస్తుంది.',
    patientFeature1: 'తెలుగు, హిందీ మరియు ఇంగ్లీష్‌లో వాయిస్ ద్వారా లక్షణాల నమోదు',
    patientFeature2: 'జీవితకాల ఆరోగ్య కాలక్రమం మరియు మందుల చీటీలు',
    patientFeature3: 'QR కోడ్‌తో డిజిటల్ ఆభా (ABHA) హెల్త్ కార్డ్',
    patientFeature4: 'లైవ్ GPS లొకేషన్‌తో 108 అత్యవసర SOS సహాయం',
    enterPatientBtn: 'రోగుల పోర్టల్ తెరవండి',

    doctorBadge: 'PHC వైద్యాధికారి',
    doctorWorkspaceTitle: 'డాక్టర్ వర్క్‌స్పేస్ (Doctor)',
    doctorWorkspaceDesc: 'వైద్యులకు రోగుల ప్రాధాన్యతా క్యూ, AI సారాంశాలు మరియు డిజిటల్ ప్రిస్క్రిప్షన్‌లను అందిస్తుంది.',
    doctorFeature1: 'డాక్టర్ నియంత్రణతో కూడిన ఆటోమేటెడ్ OPD ప్రాధాన్యతా క్యూ',
    doctorFeature2: 'ప్రామాణిక క్లినికల్ AI SOAP డాక్యుమెంటేషన్ అసిస్టెంట్',
    doctorFeature3: 'మందుల అలర్జీ భద్రతా తనిఖీతో e-ప్రిస్క్రిప్షన్',
    doctorFeature4: 'జిల్లా ఆసుపత్రి కార్డియాలజీ & స్పెషలిస్ట్ రిఫరల్స్',
    enterDoctorBtn: 'డాక్టర్ వర్క్‌స్పేస్ తెరవండి',

    workerBadge: 'ఆశా కార్యకర్త',
    workerWorkspaceTitle: 'ఆశా కార్యకర్త పోర్టల్ (ASHA)',
    workerWorkspaceDesc: 'గ్రామీణ ఆరోగ్య కార్యకర్తలకు ఇంటి వద్దనే ఆఫ్‌లైన్ తనిఖీలు మరియు పౌర సహాయాన్ని అందిస్తుంది.',
    workerFeature1: 'ఇంటి వద్ద వైటల్స్ నమోదు (BP, షుగర్, ఆక్సిజన్ SpO2, పల్స్)',
    workerFeature2: 'మౌఖిక సమ్మతి ఆడిట్ టోకెన్‌తో సహాయక లాగిన్',
    workerFeature3: '1-క్లిక్ బ్యాక్‌గ్రౌండ్ సింక్‌తో ఆఫ్‌లైన్ డేటా క్యూ',
    workerFeature4: 'అధిక ప్రమాదం ఉన్న కుటుంబాల పర్యవేక్షణ',
    enterWorkerBtn: 'ఆశా వర్క్‌స్పేస్ తెరవండి',

    // Pipeline Section
    pipelineHeading: 'నిరంతర సంరక్షణ ప్రవాహం (SIH ఆర్కిటెక్చర్)',
    pipelineSubheading: 'గ్రామీణ ఇంటి నుండి స్పెషలిస్ట్ ఆసుపత్రి వరకు ఎలాంటి డేటా నష్టం లేకుండా సమాచార ప్రవాహం.',
    pipelineFhirTag: 'FHIR & ABDM ప్రమాణాల డేటా మార్పిడి',
    step1Title: '1. రోగి / ఇల్లు',
    step1Desc: 'స్థానిక భాషలో మాట్లాడి లక్షణాలు నమోదు చేయడం, 108 SOS మరియు డేటా సమ్మతి.',
    step1Tag: 'స్పీచ్-టు-టెక్స్ట్ ఇన్‌పుట్',
    step2Title: '2. ఆశా కార్యకర్త సందర్శన',
    step2Desc: 'ఆఫ్‌లైన్ వైటల్స్ తనిఖీ (BP, షుగర్), పాత చీటీల OCR స్కాన్ మరియు మౌఖిక సమ్మతి.',
    step2Tag: 'ఆఫ్‌లైన్ IndexedDB క్యూ',
    step3Title: '3. PHC డాక్టర్',
    step3Desc: 'ప్రాధాన్యత నిర్ధారణ, క్లినికల్ AI SOAP సారాంశం, డిజిటల్ చీటీ మరియు కన్సల్టేషన్.',
    step3Tag: 'క్లినికల్ AI అసిస్టెంట్',
    step4Title: '4. జిల్లా ఆసుపత్రి',
    step4Desc: 'పూర్తి ఆరోగ్య రికార్డులతో స్పెషలిస్ట్ రిఫరల్ మరియు తక్షణ చికిత్స.',
    step4Tag: 'డిజిటల్ రిఫరల్ బదిలీ',

    // Metrics
    metric1Val: '< 35ms',
    metric1Label: 'లోకల్ డేటా వేగం',
    metric1Sub: 'సర్వర్ అవసరం లేని శీఘ్ర క్లయింట్ క్వెరీలు',
    metric2Val: '17 స్టోర్లు',
    metric2Label: 'IndexedDB స్కీమా',
    metric2Sub: 'బ్రౌజర్‌లో పూర్తి ఆఫ్‌లైన్ డేటా భద్రత',
    metric3Val: '3 భాషలు',
    metric3Label: 'వాయిస్ AI మద్దతు',
    metric3Sub: 'తెలుగు, హిందీ మరియు ఇంగ్లీష్‌లో పూర్తి పనితీరు',
    metric4Val: '100%',
    metric4Label: 'ఆఫ్‌లైన్ రెసిలెన్స్',
    metric4Sub: 'PWA సర్వీస్ వర్కర్ ఆఫ్‌లైన్ క్యాచింగ్',

    // Feature Pillars
    pillarsHeading: 'భారతీయ ప్రజా ఆరోగ్య అవసరాలకు అనుగుణంగా రూపొందించబడింది',
    pillar1Title: 'వాయిస్-ఫస్ట్ యాక్సెసిబిలిటీ (Voice AI)',
    pillar1Desc: 'ప్రాంతీయ భారతీయ భాషలలో వాయిస్ రికగ్నిషన్ ద్వారా గ్రామీణ నిరక్షరాస్యత అడ్డంకులను అధిగమిస్తుంది.',
    pillar2Title: 'ఆఫ్‌లైన్-ఫస్ట్ IndexedDB',
    pillar2Desc: 'ఇంటర్నెట్ లేని మారుమూల అటవీ మరియు గిరిజన ప్రాంతాల్లో కూడా నిరంతరాయంగా పనిచేస్తుంది.',
    pillar3Title: 'క్లినికల్ AI అసిస్టెంట్',
    pillar3Desc: 'వైద్యుల నిర్ణయాలకు సహాయంగా సంక్లిష్ట ఆరోగ్య డేటాను నిర్మాణాత్మక SOAP నోట్స్‌గా మారుస్తుంది.',
    pillar4Title: 'ABDM మరియు ఆభా (ABHA) లింకేజ్',
    pillar4Desc: '14-అంకెల ఆభా గుర్తింపు సంఖ్య మరియు రోగి-నియంత్రిత డేటా గోప్యతా నిర్వహణ.',
    pillar5Title: '108 అత్యవసర టెలిమెట్రీ',
    pillar5Desc: 'ఒకే ట్యాప్‌తో లైవ్ GPS మరియు అలర్జీ వివరాలు నేరుగా 108 అంబులెన్స్‌కు చేరుతాయి.',
    pillar6Title: 'పాత కాగితపు రికార్డుల OCR స్కాన్',
    pillar6Desc: 'పాత కాగితపు ప్రిస్క్రిప్షన్‌లను డిజిటల్ ఆరోగ్య రికార్డులుగా మారుస్తుంది.',

    // Evaluator Tour
    juryTourHeading: 'మూల్యాంకనం & జ్యూరీ కోసం త్వరిత గైడ్',
    juryTourDesc: 'మొత్తం ప్రక్రియను పరీక్షించడానికి: రోగుల వాయిస్ అసిస్టెంట్‌లో మాట్లాడండి → డాక్టర్ వద్ద క్యూ చూడండి → e-ప్రిస్క్రిప్షన్ ఇవ్వండి → ఆశా వర్క్‌స్పేస్‌లో వైటల్స్ నమోదు చేయండి → ఆఫ్‌లైన్ సింక్ చేయండి.',
    openRoleSwitcher: '1-క్లిక్ రోల్ స్విచర్ తెరవండి',
    inspectDb: 'IndexedDB డేటాను చూడండి / ఎగుమతి చేయండి',
    readJuryDocs: 'పూర్తి జ్యూరీ డాక్యుమెంటేషన్ చదవండి',

    // Roles
    patient: 'రోగి (Patient)',
    doctor: 'వైద్యులు (Doctor)',
    worker: 'ఆశా కార్యకర్త (ASHA Worker)',
    rolePatientDesc: 'ఆరోగ్య రికార్డులు చూడండి, మాట్లాడి లక్షణాలు చెప్పండి, మందుల వివరాలు మరియు అపాయింట్‌మెంట్లు.',
    roleDoctorDesc: 'రోగుల క్యూ చూడండి, వైద్య రికార్డులు పరిశీలించండి, మందులు ప్రిస్క్రైబ్ చేయండి మరియు రిఫరల్స్ ఇవ్వండి.',
    roleWorkerDesc: 'ఫీల్డ్ వైటల్స్ నమోదు, పౌరుల సహాయం మరియు ఆఫ్‌లైన్ డేటా సింక్.',

    // Navigation
    home: 'హోమ్',
    myHealth: 'నా ఆరోగ్యం',
    medicalRecords: 'వైద్య రికార్డులు',
    symptoms: 'లక్షణాలు (Symptoms)',
    voiceAssistant: 'వాయిస్ అసిస్టెంట్ (Voice)',
    appointments: 'అపాయింట్‌మెంట్లు',
    emergency: 'అత్యవసర సహాయం (SOS)',
    consentPrivacy: 'సమ్మతి & గోప్యత (Consent)',
    profile: 'ప్రొఫైల్',
    priorityQueue: 'ప్రాధాన్యతా క్యూ (Queue)',
    patients: 'రోగుల జాబితా',
    patientRecord: 'రోగి పూర్తి రికార్డు',
    consultations: 'కన్సల్టేషన్లు',
    prescriptions: 'మందుల చీటి (Prescriptions)',
    referrals: 'రిఫరల్స్ (Referrals)',
    followups: 'ఫాలో-అప్‌లు',
    assistedAccess: 'సహాయక లాగిన్',
    fieldVisit: 'ఇంటి సందర్శన (Field Visit)',
    vitals: 'వైటల్స్ కొలతలు',
    voiceEntry: 'వాయిస్ ఎంట్రీ',
    offlineQueue: 'ఆఫ్‌లైన్ క్యూ',
    sync: 'డేటా సింక్ చేయండి',
    settings: 'సెట్టింగ్‌లు',
    accessibility: 'యాక్సెసిబిలిటీ (సౌలభ్యం)',
    help: 'సహాయం & గైడ్',
    logout: 'లాగౌట్ / పాత్ర మార్చండి',
    backToDashboard: 'డ్యాష్‌బోర్డ్‌కు తిరిగి వెళ్ళండి',
    pageHelp: 'ఈ పేజీలో ఏమి చేయవచ్చు?',
    pageHelpSubtitle: 'ఈ స్క్రీన్ కోసం త్వరిత గైడ్',
    fullGuide: 'పూర్తి యూజర్ గైడ్',
    gotIt: 'అర్థమైంది',

    // Common Actions
    save: 'భద్రపరచు (Save)',
    cancel: 'రద్దు చేయి (Cancel)',
    edit: 'సవరించు (Edit)',
    delete: 'తొలగించు (Delete)',
    view: 'చూడండి (View)',
    share: 'భాగస్వామ్యం (Share)',
    bookVisit: 'PHC సందర్శన బుక్ చేయండి',
    talkToDoctor: 'డాక్టర్‌తో మాట్లాడండి',
    tellHowYouFeel: 'మీ ఆరోగ్యం ఎలా ఉందో చెప్పండి',
    speak: 'మాట్లాడటానికి నొక్కండి',
    listening: 'వింటున్నాము... దయచేసి స్పష్టంగా మాట్లాడండి',
    stopRecording: 'రికార్డింగ్ ఆపండి',
    readAloud: 'వాయిస్ ద్వారా చదివి వినిపించండి',
    exportData: 'డేటా ఎగుమతి చేయండి (Export)',
    importData: 'డేటా దిగుమతి చేయండి (Import)',
    resetDemoData: 'డెమో డేటా రీసెట్ చేయండి',
    syncNow: 'అన్ని రికార్డులను సింక్ చేయండి',

    // Status Badges & Priorities
    emergencyPri: 'అత్యవసరం (Emergency)',
    highPri: 'అధిక ప్రాధాన్యత (High)',
    mediumPri: 'మధ్యస్థం (Medium)',
    routinePri: 'సాధారణం (Routine)',
    unverified: 'రోగి తెలిపిన సమాచారం (సమీక్ష పెండింగ్)',
    verified: 'డాక్టర్ ధృవీకరించినది',
    active: 'యాక్టివ్',
    pending: 'పెండింగ్',
    completed: 'పూర్తయింది',

    // Patient Dashboard
    goodMorning: 'శుభోదయం',
    goodAfternoon: 'శుభ మధ్యాహ్నం',
    goodEvening: 'శుభ సాయంత్రం',
    welcomeGreeting: 'స్వాగతం',
    healthAtAGlance: 'మీ ఆరోగ్య స్థితి సంగ్రహం',
    nextAppointment: 'తదుపరి అపాయింట్‌మెంట్',
    medicinesActive: 'ప్రస్తుత మందులు',
    followUpDue: 'ఫాలో-అప్ సమయం',
    recentTimeline: 'ఇటీవలి ఆరోగ్య కాలక్రమం',
    noRecordsYet: 'ఇంకా ఎలాంటి రికార్డులు నమోదు కాలేదు.',

    // Voice Screen
    voiceInstruction: 'మైక్ బటన్ నొక్కి మీ లక్షణాలను మీ సొంత మాటల్లో చెప్పండి.',
    weHeard: 'మేము విన్నది:',
    confirmAndSave: 'ఆరోగ్య రికార్డులో భద్రపరచు',

    // AI Disclaimer
    aiAssistantTitle: 'క్లినికల్ AI అసిస్టెంట్ (డెమో)',
    aiDisclaimerNotice: 'డాక్టర్ సమీక్ష కోసం మాత్రమే రూపొందించబడిన సారాంశం. అంతిమ వైద్య నిర్ణయం డాక్టర్‌దే.',
    generateSummary: 'క్లినికల్ సారాంశం తయారుచేయి',

    // Emergency
    emergencyHeader: 'అత్యవసర వైద్య సహాయం',
    emergencyPrompt: 'మీకు తీవ్రమైన గుండెనొప్పి, శ్వాస తీసుకోవడంలో ఇబ్బంది లేదా గాయాలు ఉంటే వెంటనే క్రింది బటన్ నొక్కండి.',
    callEmergency: '🚨 అత్యవసర సహాయం కోరండి',
    simulatedNotice: 'డెమో మోడ్ — ఇది అత్యవసర ప్రక్రియను ప్రదర్శించడానికి మాత్రమే. నిజమైన అంబులెన్స్ పంపబడదు.'
  }
};

let currentLang = 'en';

export async function initI18n() {
  const savedLang = await getSetting('language', 'en');
  currentLang = ['en', 'hi', 'te'].includes(savedLang) ? savedLang : 'en';
  applyLanguage(currentLang);
}

export function t(key) {
  if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
    return TRANSLATIONS[currentLang][key];
  }
  return TRANSLATIONS['en'][key] || key;
}

export async function setLanguage(lang) {
  if (!['en', 'hi', 'te'].includes(lang)) return;
  currentLang = lang;
  await setSetting('language', lang);
  applyLanguage(lang);
}

export function getLanguage() {
  return currentLang;
}

export function getTimeGreetingKey() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'goodMorning';
  if (hour >= 12 && hour < 17) return 'goodAfternoon';
  return 'goodEvening';
}

export function getTimeGreeting() {
  return t(getTimeGreetingKey());
}

export function applyLanguage(lang) {
  document.documentElement.lang = lang;

  // Apply Regional Typography enhancements
  if (lang === 'hi' || lang === 'te') {
    document.body.classList.add('lang-indic');
  } else {
    document.body.classList.remove('lang-indic');
  }

  // Translate all elements with data-i18n attribute (textContent)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    let key = el.getAttribute('data-i18n');
    if (key === 'timeGreeting' || key === 'goodMorning') {
      key = getTimeGreetingKey();
    }
    const translation = t(key);
    if (el.tagName === 'INPUT' && (el.type === 'button' || el.type === 'submit')) {
      el.value = translation;
    } else if (el.placeholder !== undefined && el.getAttribute('data-i18n-attr') === 'placeholder') {
      el.placeholder = translation;
    } else {
      el.textContent = translation;
    }
  });

  // Translate elements with data-i18n-html (preserves inner tags or formatting)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = t(key);
  });

  // Update language switcher dropdowns across all elements
  document.querySelectorAll('.lang-select').forEach(sel => {
    sel.value = lang;
  });

  // Re-render any icons inside translated elements
  renderIcons();
}
