/**
 * LIFE PATCH - Contextual Per-Page Help Content
 * Describes "what you can do on this page" in English, Hindi, and Telugu.
 * Rendered by layout.js inside the shared header help modal.
 */

import { getLanguage } from './i18n.js';

const PAGE_HELP = {
  'patient-home': {
    title: { en: 'Patient Dashboard', hi: 'मरीज़ डैशबोर्ड', te: 'రోగి డ్యాష్‌బోర్డ్' },
    points: {
      en: ['See your health summary, next appointment, and active medicines at a glance.', 'Open quick actions: report a symptom, use the Voice Assistant, or trigger Emergency SOS.', 'Review your recent health timeline entries added by you, your ASHA worker, or your doctor.'],
      hi: ['अपना स्वास्थ्य सारांश, अगली अपॉइंटमेंट और चल रही दवाएं एक नज़र में देखें।', 'त्वरित कार्य करें: लक्षण दर्ज करें, वॉयस असिस्टेंट खोलें या आपातकालीन SOS दबाएं।', 'आपके, आशा कार्यकर्ता या डॉक्टर द्वारा जोड़ी गई हालिया स्वास्थ्य एंट्री देखें।'],
      te: ['మీ ఆరోగ్య సారాంశం, తదుపరి అపాయింట్‌మెంట్ మరియు ప్రస్తుత మందులను చూడండి.', 'త్వరిత చర్యలు: లక్షణం నమోదు చేయండి, వాయిస్ అసిస్టెంట్ వాడండి లేదా అత్యవసర SOS నొక్కండి.', 'మీరు, ఆశా కార్యకర్త లేదా డాక్టర్ జోడించిన ఇటీవలి ఆరోగ్య రికార్డులను చూడండి.']
    }
  },
  'patient-records': {
    title: { en: 'Medical Records Timeline', hi: 'चिकित्सा रिकॉर्ड टाइमलाइन', te: 'వైద్య రికార్డుల కాలక్రమం' },
    points: {
      en: ['View your complete longitudinal health history — visits, symptoms, prescriptions and referrals.', 'Add a manual record entry for old paper prescriptions or past hospital visits.', 'Delete an incorrect self-reported entry if needed.'],
      hi: ['अपना पूरा स्वास्थ्य इतिहास देखें — विज़िट, लक्षण, पर्चे और रेफरल।', 'पुरानी कागज़ी पर्चियों या पिछले अस्पताल विज़िट के लिए मैन्युअल रिकॉर्ड जोड़ें।', 'गलत रिकॉर्ड होने पर स्वयं दर्ज एंट्री हटा सकते हैं।'],
      te: ['మీ పూర్తి ఆరోగ్య చరిత్రను చూడండి — విజిట్లు, లక్షణాలు, ప్రిస్క్రిప్షన్లు మరియు రిఫరల్స్.', 'పాత కాగితపు చీటీలు లేదా గత ఆసుపత్రి విజిట్ల కోసం మాన్యువల్ రికార్డు జోడించండి.', 'తప్పుగా నమోదైన ఎంట్రీని అవసరమైతే తొలగించండి.']
    }
  },
  'patient-symptoms': {
    title: { en: 'Report Symptoms (Voice + Text)', hi: 'लक्षण दर्ज करें (आवाज़ + टेक्स्ट)', te: 'లక్షణాలు నమోదు (వాయిస్ + టెక్స్ట్)' },
    points: {
      en: ['Pick your spoken language, tap the big microphone, and describe your symptoms — words stream into the box live.', 'Use a sample phrase for a quick demo, or the small mic icons to dictate into a specific field.', 'Set severity and start date, then save — the report goes straight to your doctor\'s review queue.'],
      hi: ['अपनी बोलने की भाषा चुनें, बड़ा माइक दबाएं और लक्षण बताएं — शब्द लाइव बॉक्स में आते हैं।', 'त्वरित डेमो के लिए सैंपल वाक्य चुनें, या छोटे माइक आइकन से किसी फ़ील्ड में बोलें।', 'गंभीरता और शुरुआत की तारीख चुनें, फिर सहेजें — रिपोर्ट डॉक्टर की समीक्षा कतार में जाती है।'],
      te: ['మాట్లాడే భాషను ఎంచుకుని, పెద్ద మైక్ నొక్కి లక్షణాలు చెప్పండి — మాటలు బాక్స్‌లో ప్రత్యక్షంగా వస్తాయి.', 'త్వరిత డెమో కోసం నమూనా వాక్యం వాడండి, లేదా చిన్న మైక్ ఐకాన్‌లతో నిర్దిష్ట ఫీల్డ్‌లో చెప్పండి.', 'తీవ్రత మరియు ప్రారంభ తేదీ ఎంచుకుని సేవ్ చేయండి — నివేదిక డాక్టర్ రివ్యూ క్యూకు వెళ్తుంది.']
    }
  },
  'patient-voice': {
    title: { en: 'Voice Symptom Assistant', hi: 'वॉयस लक्षण सहायक', te: 'వాయిస్ లక్షణ అసిస్టెంట్' },
    points: {
      en: ['Tap the large microphone and describe your symptoms freely in your own language.', 'Watch the live transcription, edit it if needed, then save directly to your health record.', 'Use the sample phrase chips for an instant demo, or the speaker button to hear your entry read aloud.'],
      hi: ['बड़ा माइक्रोफ़ोन दबाएं और अपनी भाषा में लक्षण बताएं।', 'लाइव ट्रांसक्रिप्शन देखें, ज़रूरत हो तो संपादित करें और स्वास्थ्य रिकॉर्ड में सहेजें।', 'तुरंत डेमो के लिए सैंपल वाक्य चिप्स का उपयोग करें, या स्पीकर से सुनें।'],
      te: ['పెద్ద మైక్రోఫోన్ నొక్కి మీ భాషలో లక్షణాలను చెప్పండి.', 'ప్రత్యక్ష ట్రాన్స్‌క్రిప్షన్ చూసి, అవసరమైతే సవరించి, ఆరోగ్య రికార్డులో సేవ్ చేయండి.', 'తక్షణ డెమో కోసం నమూనా వాక్యాలు ఉపయోగించండి లేదా స్పీకర్ ద్వారా వినండి.']
    }
  },
  'patient-appointments': {
    title: { en: 'Appointments & Tokens', hi: 'अपॉइंटमेंट और टोकन', te: 'అపాయింట్‌మెంట్లు & టోకెన్లు' },
    points: {
      en: ['Book an OPD visit at your PHC, Area Hospital, or District Hospital.', 'Choose a department, date, and time slot — a digital queue token is generated instantly.', 'Your booking also appears in the doctor\'s priority queue so the PHC knows you are coming.'],
      hi: ['अपने PHC, क्षेत्रीय या जिला अस्पताल में OPD विज़िट बुक करें।', 'विभाग, तारीख और समय चुनें — डिजिटल कतार टोकन तुरंत बन जाता है।', 'आपकी बुकिंग डॉक्टर की प्राथमिकता कतार में भी दिखती है, जिससे PHC को पता रहता है।'],
      te: ['మీ PHC, ఏరియా లేదా జిల్లా ఆసుపత్రిలో OPD విజిట్ బుక్ చేయండి.', 'విభాగం, తేదీ మరియు సమయం ఎంచుకోండి — డిజిటల్ క్యూ టోకెన్ వెంటనే తయారవుతుంది.', 'మీ బుకింగ్ డాక్టర్ ప్రాధాన్యతా క్యూలో కూడా కనిపిస్తుంది.']
    }
  },
  'patient-consent': {
    title: { en: 'Consent & Privacy Manager', hi: 'सहमति और गोपनीयता प्रबंधक', te: 'సమ్మతి & గోప్యతా నిర్వహణ' },
    points: {
      en: ['See exactly which doctors and facilities can view your health record (ABDM-style consent).', 'Grant a new provider time-bound access for a consultation or follow-up.', 'Revoke any provider\'s access instantly with one tap — your data stays sovereign.'],
      hi: ['देखें कि कौन से डॉक्टर और अस्पताल आपका रिकॉर्ड देख सकते हैं (ABDM शैली सहमति)।', 'किसी नए डॉक्टर को परामर्श या फॉलो-अप के लिए सीमित समय की पहुंच दें।', 'किसी भी प्रदाता की पहुंच एक टैप से तुरंत रद्द करें — आपका डेटा आपके नियंत्रण में रहता है।'],
      te: ['మీ రికార్డును ఏ డాక్టర్లు, ఆసుపత్రులు చూడగలరో చూడండి (ABDM-శైలి సమ్మతి).', 'కొత్త వైద్యుడికి కన్సల్టేషన్ కోసం నిర్ణీత కాలానికి యాక్సెస్ ఇవ్వండి.', 'ఏ ప్రదాత యాక్సెస్‌నైనా ఒక్క ట్యాప్‌తో వెంటనే రద్దు చేయండి — మీ డేటా మీ అధీనంలో.']
    }
  },
  'patient-emergency': {
    title: { en: 'Emergency SOS', hi: 'आपातकालीन SOS', te: 'అత్యవసర SOS' },
    points: {
      en: ['One tap simulates a 108 ambulance dispatch with your live location and critical allergy flags.', 'Your emergency profile (blood group, conditions) is shared with responders automatically.', 'Demo only — no real ambulance is dispatched.'],
      hi: ['एक टैप से लाइव लोकेशन और एलर्जी जानकारी के साथ 108 एम्बुलेंस डिस्पैच का सिमुलेशन होता है।', 'आपकी आपातकालीन प्रोफ़ाइल (ब्लड ग्रुप, बीमारियां) स्वचालित रूप से साझा होती है।', 'केवल डेमो — वास्तविक एम्बुलेंस नहीं भेजी जाती।'],
      te: ['ఒక్క ట్యాప్‌తో లైవ్ లొకేషన్ మరియు అలర్జీ వివరాలతో 108 అంబులెన్స్ సిమ్యులేషన్ అవుతుంది.', 'మీ అత్యవసర ప్రొఫైల్ (బ్లడ్ గ్రూప్, వ్యాధులు) ఆటోమేటిక్‌గా పంపబడుతుంది.', 'డెమో మాత్రమే — నిజమైన అంబులెన్స్ పంపబడదు.']
    }
  },
  'patient-profile': {
    title: { en: 'Profile & ABHA Card', hi: 'प्रोफ़ाइल और आभा कार्ड', te: 'ప్రొఫైల్ & ఆభా కార్డు' },
    points: {
      en: ['View your digital ABHA health card with your 14-digit health ID.', 'Check personal details, village, blood group and emergency contact.', 'Show this card at the PHC for quick check-in.'],
      hi: ['अपनी 14-अंकीय स्वास्थ्य ID के साथ डिजिटल आभा कार्ड देखें।', 'व्यक्तिगत विवरण, गांव, ब्लड ग्रुप और आपातकालीन संपर्क जांचें।', 'PHC पर त्वरित चेक-इन के लिए यह कार्ड दिखाएं।'],
      te: ['మీ 14-అంకెల హెల్త్ IDతో డిజిటల్ ఆభా కార్డును చూడండి.', 'వ్యక్తిగత వివరాలు, గ్రామం, బ్లడ్ గ్రూప్ మరియు అత్యవసర సంప్రదింపు తనిఖీ చేయండి.', 'PHC వద్ద త్వరిత చెక్-ఇన్ కోసం ఈ కార్డును చూపండి.']
    }
  },
  'doctor-dashboard': {
    title: { en: 'Doctor Dashboard', hi: 'डॉक्टर डैशबोर्ड', te: 'డాక్టర్ డ్యాష్‌బోర్డ్' },
    points: {
      en: ['See today\'s OPD load, pending symptom reviews, and referral status at a glance.', 'Jump into the priority queue or open a patient chart directly.', 'New patient voice reports appear here for clinical review.'],
      hi: ['आज का OPD लोड, लंबित लक्षण समीक्षाएं और रेफरल स्थिति एक नज़र में देखें।', 'प्राथमिकता कतार खोलें या सीधे मरीज़ का चार्ट देखें।', 'मरीज़ों की नई वॉयस रिपोर्ट यहां क्लिनिकल समीक्षा के लिए दिखती है।'],
      te: ['నేటి OPD లోడ్, పెండింగ్ లక్షణ సమీక్షలు మరియు రిఫరల్ స్థితిని చూడండి.', 'ప్రాధాన్యతా క్యూ లేదా రోగి చార్టును నేరుగా తెరవండి.', 'కొత్త రోగి వాయిస్ రిపోర్టులు ఇక్కడ సమీక్ష కోసం కనిపిస్తాయి.']
    }
  },
  'doctor-queue': {
    title: { en: 'OPD Priority Queue', hi: 'OPD प्राथमिकता कतार', te: 'OPD ప్రాధాన్యతా క్యూ' },
    points: {
      en: ['Patients are auto-sorted Emergency → High → Routine; override priority with one click.', 'Add a walk-in patient to the queue directly from this page.', 'Open any patient to review vitals, symptoms, and history before consulting.'],
      hi: ['मरीज़ स्वतः क्रमबद्ध होते हैं: आपातकालीन → उच्च → सामान्य; एक क्लिक से प्राथमिकता बदलें।', 'इस पेज से सीधे वॉक-इन मरीज़ को कतार में जोड़ें।', 'परामर्श से पहले किसी भी मरीज़ के वाइटल्स, लक्षण और इतिहास देखें।'],
      te: ['రోగులు ఆటోమేటిక్‌గా అత్యవసరం → అధిక → సాధారణ క్రమంలో ఉంటారు; ఒకే క్లిక్‌తో ప్రాధాన్యత మార్చండి.', 'ఈ పేజీ నుండే వాక్-ఇన్ రోగిని క్యూలో చేర్చండి.', 'కన్సల్టేషన్ ముందు రోగి వైటల్స్, లక్షణాలు, చరిత్ర చూడండి.']
    }
  },
  'doctor-patients': {
    title: { en: 'Patient List & Records', hi: 'मरीज़ सूची और रिकॉर्ड', te: 'రోగుల జాబితా & రికార్డులు' },
    points: {
      en: ['Browse all registered patients and open their full longitudinal record.', 'Inside a record: review vitals charts, pending symptoms, and generate the grounded AI SOAP summary.', 'Approve or dismiss patient-reported symptoms for clinical verification.'],
      hi: ['सभी पंजीकृत मरीज़ों की सूची देखें और उनका पूरा रिकॉर्ड खोलें।', 'रिकॉर्ड में: वाइटल्स चार्ट, लंबित लक्षण देखें और क्लिनिकल AI SOAP सारांश बनाएं।', 'मरीज़ द्वारा सूचित लक्षणों को सत्यापित करें या खारिज करें।'],
      te: ['నమోదైన అన్ని రోగులను చూసి వారి పూర్తి రికార్డు తెరవండి.', 'రికార్డులో: వైటల్స్ చార్టులు, పెండింగ్ లక్షణాలు చూసి AI SOAP సారాంశం తయారు చేయండి.', 'రోగి నివేదించిన లక్షణాలను ధృవీకరించండి లేదా తీసివేయండి.']
    }
  },
  'doctor-consult': {
    title: { en: 'Consultations', hi: 'परामर्श', te: 'కన్సల్టేషన్లు' },
    points: {
      en: ['Document a live consultation: pick a patient, review their history, and write clinical notes.', 'Use voice dictation for notes in English, Hindi, or Telugu.', 'Saved consultations are added to the patient\'s permanent record.'],
      hi: ['लाइव परामर्श दर्ज करें: मरीज़ चुनें, इतिहास देखें और क्लिनिकल नोट्स लिखें।', 'अंग्रेजी, हिंदी या तेलुगु में वॉयस डिक्टेशन से नोट्स लिखें।', 'सहेजे गए परामर्श मरीज़ के स्थायी रिकॉर्ड में जुड़ जाते हैं।'],
      te: ['ప్రత్యక్ష కన్సల్టేషన్ నమోదు చేయండి: రోగిని ఎంచుకుని, చరిత్ర చూసి నోట్స్ రాయండి.', 'ఇంగ్లీష్, హిందీ లేదా తెలుగులో వాయిస్ డిక్టేషన్ ఉపయోగించండి.', 'సేవ్ చేసిన కన్సల్టేషన్లు రోగి శాశ్వత రికార్డులో చేరతాయి.']
    }
  },
  'doctor-rx': {
    title: { en: 'e-Prescriptions', hi: 'ई-पर्चे', te: 'e-ప్రిస్క్రిప్షన్లు' },
    points: {
      en: ['Issue a digital prescription with medicines, dosage, and duration.', 'The system flags known drug allergies before you finalize.', 'Print or share the prescription slip with the patient instantly.'],
      hi: ['दवाओं, खुराक और अवधि के साथ डिजिटल पर्चा जारी करें।', 'अंतिम करने से पहले सिस्टम दवा-एलर्जी की चेतावनी देता है।', 'पर्चा तुरंत प्रिंट करें या मरीज़ को साझा करें।'],
      te: ['మందులు, మోతాదు మరియు వ్యవధితో డిజిటల్ ప్రిస్క్రిప్షన్ జారీ చేయండి.', 'ఫైనలైజ్ చేయడానికి ముందు సిస్టమ్ మందుల అలర్జీలను హెచ్చరిస్తుంది.', 'ప్రిస్క్రిప్షన్‌ను వెంటనే ప్రింట్ చేయండి లేదా రోగితో షేర్ చేయండి.']
    }
  },
  'doctor-referrals': {
    title: { en: 'Specialist Referrals', hi: 'विशेषज्ञ रेफरल', te: 'స్పెషలిస్ట్ రిఫరల్స్' },
    points: {
      en: ['Refer a patient to a District Hospital specialty (e.g., Cardiology) with the full history attached.', 'Track referral status: pending, accepted, or completed.', 'The receiving facility sees the complete longitudinal record — zero re-entry.'],
      hi: ['पूर्ण इतिहास के साथ मरीज़ को जिला अस्पताल की विशेषज्ञता (जैसे कार्डियोलॉजी) में रेफर करें।', 'रेफरल स्थिति ट्रैक करें: लंबित, स्वीकृत या पूर्ण।', 'प्राप्त करने वाले अस्पताल को पूरा रिकॉर्ड मिलता है — दोबारा एंट्री नहीं।'],
      te: ['పూర్తి చరిత్రతో రోగిని జిల్లా ఆసుపత్రి స్పెషాలిటీకి (ఉదా: కార్డియాలజీ) రిఫర్ చేయండి.', 'రిఫరల్ స్థితిని ట్రాక్ చేయండి: పెండింగ్, ఆమోదం లేదా పూర్తి.', 'స్వీకరించే ఆసుపత్రికి పూర్తి రికార్డు చేరుతుంది — మళ్ళీ ఎంట్రీ అవసరం లేదు.']
    }
  },
  'doctor-followups': {
    title: { en: 'Follow-ups', hi: 'फॉलो-अप', te: 'ఫాలో-అప్‌లు' },
    points: {
      en: ['See patients due for chronic-care follow-up (BP, diabetes review).', 'Schedule a new follow-up appointment directly from this list.', 'Overdue cases are highlighted so nothing slips through.'],
      hi: ['पुरानी बीमारियों की फॉलो-अप आवश्यक मरीज़ों को देखें (बीपी, डायबिटीज समीक्षा)।', 'इसी सूची से नई फॉलो-अप अपॉइंटमेंट शेड्यूल करें।', 'देर से आने वाले मामलों को हाइलाइट किया जाता है।'],
      te: ['దీర్ఘకాలిక దेखరకు ఫాలో-అప్ కావాల్సిన రోగులను చూడండి (BP, డయాబెటిస్).', 'ఈ జాబితా నుండే కొత్త ఫాలో-అప్ అపాయింట్‌మెంట్ షెడ్యూల్ చేయండి.', 'గడువు దాటిన కేసులు హైలైట్ చేయబడతాయి.']
    }
  },
  'worker-dashboard': {
    title: { en: 'ASHA Worker Dashboard', hi: 'आशा कार्यकर्ता डैशबोर्ड', te: 'ఆశా కార్యకర్త డ్యాష్‌బోర్డ్' },
    points: {
      en: ['See your assigned households, high-risk patients, and pending follow-up visits.', 'Check how many records are waiting in the offline sync queue.', 'Jump to a field visit, vitals entry, or assisted citizen login.'],
      hi: ['अपने आवंटित परिवार, उच्च-जोखिम मरीज़ और लंबित विज़िट देखें।', 'ऑफ़लाइन सिंक कतार में कितने रिकॉर्ड प्रतीक्षा कर रहे हैं, जांचें।', 'फील्ड विज़िट, वाइटल्स एंट्री या सहायता लॉगिन पर जाएं।'],
      te: ['మీకు కేటాయించిన కుటుంబాలు, అధిక-ప్రమాద రోగులు, పెండింగ్ విజిట్లను చూడండి.', 'ఆఫ్‌లైన్ సింక్ క్యూలో ఎన్ని రికార్డులు ఉన్నాయో తనిఖీ చేయండి.', 'ఫీల్డ్ విజిట్, వైటల్స్ ఎంట్రీ లేదా సహాయక లాగిన్‌కు వెళ్ళండి.']
    }
  },
  'worker-patients': {
    title: { en: 'Assigned Patient Roster', hi: 'आवंटित मरीज़ सूची', te: 'కేటాయించిన రోగుల జాబితా' },
    points: {
      en: ['View all citizens assigned to your sector with village and risk level.', 'Select a patient to start a field visit or record vitals for them.', 'High-risk cases are marked for priority monitoring.'],
      hi: ['अपने क्षेत्र के सभी नागरिकों को गांव और जोखिम स्तर के साथ देखें।', 'किसी मरीज़ को चुनकर फील्ड विज़िट शुरू करें या वाइटल्स दर्ज करें।', 'उच्च-जोखिम मामलों को प्राथमिकता निगरानी के लिए चिह्नित किया गया है।'],
      te: ['మీ సెక్టార్‌లోని పౌరులందరిని గ్రామం మరియు ప్రమాద స్థాయితో చూడండి.', 'రోగిని ఎంచుకుని ఫీల్డ్ విజిట్ ప్రారంభించండి లేదా వైటల్స్ నమోదు చేయండి.', 'అధిక-ప్రమాద కేసులు ప్రాధాన్యత పర్యవేక్షణ కోసం గుర్తించబడ్డాయి.']
    }
  },
  'worker-assisted': {
    title: { en: 'Assisted Citizen Access', hi: 'सहायता प्राप्त नागरिक लॉगिन', te: 'సహాయక పౌర యాక్సెస్' },
    points: {
      en: ['Help citizens who cannot use a smartphone view their own record.', 'Verbal consent is logged as an audit token for accountability (ABDM-assisted model).', 'All actions taken are recorded under your worker ID.'],
      hi: ['स्मार्टफोन न चला पाने वाले नागरिकों को उनका रिकॉर्ड दिखाने में मदद करें।', 'मौखिक सहमति ऑडिट टोकन के रूप में दर्ज होती है (ABDM-सहायता मॉडल)।', 'आपके द्वारा की गई सभी कार्रवाइयां आपकी वर्कर ID से दर्ज होती हैं।'],
      te: ['స్మార్ట్‌ఫోన్ వాడలేని పౌరులకు వారి రికార్డు చూపించడంలో సహాయపడండి.', 'మౌఖిక సమ్మతి ఆడిట్ టోకెన్‌గా నమోదవుతుంది (ABDM-సహాయక మోడల్).', 'మీరు చేసే ప్రతి చర్య మీ వర్కర్ ID కింద నమోదవుతుంది.']
    }
  },
  'worker-visit': {
    title: { en: 'Household Field Visit', hi: 'घर का दौरा', te: 'ఇంటి సందర్శన' },
    points: {
      en: ['Record a doorstep checkup: BP, blood sugar, pulse, SpO2, temperature.', 'Entries save locally first — they sync to the PHC when network returns.', 'A visit note is added to the patient\'s permanent timeline automatically.'],
      hi: ['घर-घर जांच दर्ज करें: बीपी, शुगर, पल्स, SpO2, तापमान।', 'एंट्री पहले लोकल में सहेजी जाती है — नेटवर्क आने पर PHC को सिंक होती है।', 'विज़िट नोट अपने आप मरीज़ की टाइमलाइन में जुड़ जाता है।'],
      te: ['ఇంటి వద్ద తనిఖీ నమోదు చేయండి: BP, షుగర్, పల్స్, SpO2, ఉష్ణోగ్రత.', 'ఎంట్రీలు ముందు లోకల్‌గా సేవ్ అవుతాయి — నెట్‌వర్క్ వచ్చినప్పుడు PHCకి సింక్ అవుతాయి.', 'విజిట్ నోట్ ఆటోమేటిక్‌గా రోగి టైమ్‌లైన్‌లో చేరుతుంది.']
    }
  },
  'worker-vitals': {
    title: { en: 'Vitals History', hi: 'वाइटल्स इतिहास', te: 'వైటల్స్ చరిత్ర' },
    points: {
      en: ['Review all vitals you have recorded during field visits.', 'Spot abnormal readings (high BP, low SpO2) at a glance.', 'Use this before a follow-up visit to compare trends.'],
      hi: ['फील्ड विज़िट के दौरान दर्ज किए गए सभी वाइटल्स देखें।', 'असामान्य रीडिंग (उच्च बीपी, कम SpO2) तुरंत पहचानें।', 'फॉलो-अप विज़िट से पहले रुझानों की तुलना करें।'],
      te: ['ఫీల్డ్ విజిట్లలో నమోదు చేసిన వైటల్స్ అన్నిటిని చూడండి.', 'అసాధారణ రీడింగ్‌లను (అధిక BP, తక్కువ SpO2) గుర్తించండి.', 'ఫాలో-అప్ విజిట్ ముందు ట్రెండ్‌లను పోల్చండి.']
    }
  },
  'worker-voice': {
    title: { en: 'Voice Entry (Field Mode)', hi: 'वॉयस एंट्री (फील्ड मोड)', te: 'వాయిస్ ఎంట్రీ (ఫీల్డ్ మోడ్)' },
    points: {
      en: ['Record symptoms or notes for a citizen by voice — useful when typing is hard in the field.', 'Select the patient, speak, review the transcript, and save to their record.', 'Works in English, Hindi, and Telugu.'],
      hi: ['किसी नागरिक के लिए आवाज से लक्षण या नोट दर्ज करें — फील्ड में टाइप करना कठिन होने पर उपयोगी।', 'मरीज़ चुनें, बोलें, ट्रांसक्रिप्ट जांचें और रिकॉर्ड में सहेजें।', 'अंग्रेजी, हिंदी और तेलुगु में काम करता है।'],
      te: ['పౌరుడి కోసం వాయిస్ ద్వారా లక్షణాలు లేదా నోట్స్ నమోదు చేయండి — ఫీల్డ్‌లో టైపింగ్ కష్టమైనప్పుడు.', 'రోగిని ఎంచుకుని, మాట్లాడి, ట్రాన్స్‌క్రిప్ట్ చూసి రికార్డులో సేవ్ చేయండి.', 'ఇంగ్లీష్, హిందీ, తెలుగులో పనిచేస్తుంది.']
    }
  },
  'worker-sync': {
    title: { en: 'Offline Sync Queue', hi: 'ऑफ़लाइन सिंक कतार', te: 'ఆఫ్‌లైన్ సింక్ క్యూ' },
    points: {
      en: ['See records captured offline that are waiting to sync to the PHC database.', 'Tap "Sync" to push all pending records — vitals become full patient records.', 'This is the core offline-first feature for zero-connectivity villages.'],
      hi: ['ऑफ़लाइन दर्ज किए गए रिकॉर्ड देखें जो PHC डेटाबेस में सिंक होने की प्रतीक्षा में हैं।', '"सिंक" दबाकर सभी लंबित रिकॉर्ड भेजें — वाइटल्स पूर्ण मरीज़ रिकॉर्ड बन जाते हैं।', 'यह बिना नेटवर्क वाले गांवों के लिए मुख्य ऑफ़लाइन-फर्स्ट सुविधा है।'],
      te: ['ఆఫ్‌లైన్‌గా నమోదైన, PHC డేటాబేస్‌కు సింక్ కావాల్సిన రికార్డులను చూడండి.', '"సింక్" నొక్కి పెండింగ్ రికార్డులన్నీ పంపండి — వైటల్స్ పూర్తి రికార్డులవుతాయి.', 'ఇది నెట్‌వర్క్ లేని గ్రామాల కోసం ప్రధాన ఆఫ్‌లైన్-ఫస్ట్ ఫీచర్.']
    }
  },
  'shared-a11y': {
    title: { en: 'Accessibility Settings', hi: 'पहुंच क्षमता सेटिंग्स', te: 'యాక్సెసిబిలిటీ సెట్టింగ్‌లు' },
    points: {
      en: ['Increase text size for elderly or low-vision users.', 'Enable high-contrast mode for outdoor readability.', 'Turn on reduce-motion to minimize animations.'],
      hi: ['बुज़ुर्ग या कम दृष्टि वाले उपयोगकर्ताओं के लिए टेक्स्ट आकार बढ़ाएं।', 'बाहरी पठनीयता के लिए हाई-कॉन्ट्रास्ट मोड चालू करें।', 'एनिमेशन कम करने के लिए रिड्यूस-मोशन चालू करें।'],
      te: ['వృద్ధులు లేదా తక్కువ చూపు ఉన్నవారికి టెక్స్ట్ సైజు పెంచండి.', 'బయట చదవడానికి హై-కాంట్రాస్ట్ మోడ్ ఆన్ చేయండి.', 'యానిమేషన్లు తగ్గించడానికి రిడ్యూస్-మోషన్ ఆన్ చేయండి.']
    }
  },
  'shared-help': {
    title: { en: 'Help & User Guide', hi: 'मदद और उपयोगकर्ता गाइड', te: 'సహాయం & యూజర్ గైడ్' },
    points: {
      en: ['Read the full platform walkthrough and SIH jury demonstration steps.', 'Every page also has a ? button in the top bar for page-specific help.', 'Use the language selector in the top bar to read this guide in your language.'],
      hi: ['पूरा प्लेटफ़ॉर्म वॉकथ्रू और SIH जूरी डेमो चरण पढ़ें।', 'हर पेज के टॉप बार में ? बटन से उस पेज की विशिष्ट मदद मिलती है।', 'टॉप बार में भाषा चुनकर यह गाइड अपनी भाषा में पढ़ें।'],
      te: ['పూర్తి ప్లాట్‌ఫారమ్ వాక్‌త్రూ మరియు SIH జ్యూరీ డెమో దశలను చదవండి.', 'ప్రతి పేజీ టాప్ బార్‌లో ? బటన్ ఆ పేజీకి ప్రత్యేక సహాయం ఇస్తుంది.', 'టాప్ బార్‌లో భాష ఎంచుకుని ఈ గైడ్‌ను మీ భాషలో చదవండి.']
    }
  },
  'shared-settings': {
    title: { en: 'Settings & Database', hi: 'सेटिंग्स और डेटाबेस', te: 'సెట్టింగ్‌లు & డేటాబేస్' },
    points: {
      en: ['Change the app language and theme (light/dark).', 'Export the full local database to JSON, or restore a previous backup.', 'Reset demo data to the clean seed state before a fresh jury demo.'],
      hi: ['ऐप की भाषा और थीम (लाइट/डार्क) बदलें।', 'पूरा लोकल डेटाबेस JSON में निर्यात करें या पुराना बैकअप पुनर्स्थापित करें।', 'नए जूरी डेमो से पहले डेमो डेटा को क्लीन स्थिति में रीसेट करें।'],
      te: ['యాప్ భాష మరియు థీమ్ (లైట్/డార్క్) మార్చండి.', 'పూర్తి లోకల్ డేటాబేస్‌ను JSONగా ఎగుమతి చేయండి లేదా బ్యాకప్ రీస్టోర్ చేయండి.', 'కొత్త జ్యూరీ డెమో ముందు డెమో డేటాను క్లీన్ స్థితికి రీసెట్ చేయండి.']
    }
  }
};

const FALLBACK = {
  title: { en: 'About This Page', hi: 'इस पेज के बारे में', te: 'ఈ పేజీ గురించి' },
  points: {
    en: ['Use the left sidebar to move between sections.', 'Change language or theme from the top bar.', 'Tap your name in the top-right for profile, role-switch, and sign-out options.'],
    hi: ['बाएं साइडबार से सेक्शन के बीच जाएं।', 'टॉप बार से भाषा या थीम बदलें।', 'प्रोफ़ाइल, रोल बदलने और साइन-आउट के लिए ऊपर दाईं ओर अपने नाम पर टैप करें।'],
    te: ['సెక్షన్ల మధ్య వెళ్ళడానికి ఎడమ సైడ్‌బార్ వాడండి.', 'టాప్ బార్ నుండి భాష లేదా థీమ్ మార్చండి.', 'ప్రొఫైల్, రోల్ మార్పు మరియు సైన్-అవుట్ కోసం కుడి ఎగువన మీ పేరును నొక్కండి.']
  }
};

/**
 * Returns localized help content for a page key.
 * @param {string} pageKey - activePageKey passed to renderLayout()
 * @returns {{title: string, points: string[]}}
 */
export function getPageHelp(pageKey) {
  const lang = getLanguage();
  const entry = PAGE_HELP[pageKey] || FALLBACK;
  return {
    title: entry.title[lang] || entry.title.en,
    points: entry.points[lang] || entry.points.en
  };
}
