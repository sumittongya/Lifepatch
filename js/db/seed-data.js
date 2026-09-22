/**
 * LIFE PATCH - Synthetic Seed Dataset
 * Designed for SIH 2026 Public Healthcare Demonstration
 * Realistic, fully synthetic Indian rural/PHC clinical scenarios.
 */

export const SEED_PATIENTS = [
  {
    id: 'pat-1',
    healthId: 'LP-10234',
    abhaNumber: '91-4820-9182-3841',
    name: 'Lakshmi Devi',
    age: 52,
    gender: 'Female',
    phone: '+91 98480 12345',
    village: 'Kondapur, Ranga Reddy',
    bloodGroup: 'B+',
    emergencyContact: 'Ravi (Son) - 98480 54321',
    chronicConditions: ['Type 2 Diabetes', 'Hypertension'],
    allergies: ['Penicillin'],
    riskLevel: 'High',
    avatarText: 'LD',
    createdAt: '2026-01-10T08:30:00Z'
  },
  {
    id: 'pat-2',
    healthId: 'LP-10235',
    abhaNumber: '91-3829-1029-4721',
    name: 'Ramesh Naik',
    age: 44,
    gender: 'Male',
    phone: '+91 97012 34567',
    village: 'Shankarpally, Ranga Reddy',
    bloodGroup: 'O+',
    emergencyContact: 'Sunita (Wife) - 97012 76543',
    chronicConditions: ['Chronic Lumbar Strain'],
    allergies: ['None known'],
    riskLevel: 'Medium',
    avatarText: 'RN',
    createdAt: '2026-02-14T09:15:00Z'
  },
  {
    id: 'pat-3',
    healthId: 'LP-10236',
    abhaNumber: '91-5612-9901-2311',
    name: 'Fatima Bee',
    age: 28,
    gender: 'Female',
    phone: '+91 94401 22334',
    village: 'Kondapur, Ranga Reddy',
    bloodGroup: 'A+',
    emergencyContact: 'Mohammed (Husband) - 94401 55667',
    chronicConditions: ['Gestational Monitoring (Trimester 2)'],
    allergies: ['Sulfa drugs'],
    riskLevel: 'Routine',
    avatarText: 'FB',
    createdAt: '2026-04-02T11:00:00Z'
  },
  {
    id: 'pat-4',
    healthId: 'LP-10237',
    abhaNumber: '91-7781-3412-8921',
    name: 'Aarav Sharma',
    age: 7,
    gender: 'Male',
    phone: '+91 96520 88990',
    village: 'Mokila, Ranga Reddy',
    bloodGroup: 'O-',
    emergencyContact: 'Pooja (Mother) - 96520 88990',
    chronicConditions: ['Mild Childhood Asthma'],
    allergies: ['Dust / Pollen'],
    riskLevel: 'Medium',
    avatarText: 'AS',
    createdAt: '2026-05-18T14:20:00Z'
  }
];

export const SEED_VITALS = [
  {
    id: 'vit-1',
    patientId: 'pat-1',
    bpSystolic: 148,
    bpDiastolic: 92,
    heartRate: 84,
    temperature: 98.4,
    spo2: 98,
    bloodSugarRandom: 182,
    recordedBy: 'ASHA Sunita (Field Visit)',
    facility: 'Kondapur Household #42',
    recordedAt: '2026-09-18T10:15:00Z'
  },
  {
    id: 'vit-2',
    patientId: 'pat-2',
    bpSystolic: 122,
    bpDiastolic: 80,
    heartRate: 72,
    temperature: 98.6,
    spo2: 99,
    bloodSugarRandom: 104,
    recordedBy: 'Staff Nurse Rekha',
    facility: 'PHC Kondapur',
    recordedAt: '2026-09-15T09:30:00Z'
  }
];

export const SEED_SYMPTOMS = [
  {
    id: 'sym-1',
    patientId: 'pat-1',
    symptomName: 'Dizziness and occasional palpitations',
    startedAt: '2026-09-17',
    severity: 'Moderate',
    notes: 'Feeling lightheaded when getting up in the morning. Sensation of rapid heartbeat.',
    source: 'Patient Reported (Voice)',
    status: 'Pending Doctor Review',
    reviewedBy: null,
    createdAt: '2026-09-18T08:00:00Z'
  },
  {
    id: 'sym-2',
    patientId: 'pat-2',
    symptomName: 'Lower back stiffness and pain radiating to right thigh',
    startedAt: '2026-09-10',
    severity: 'Moderate',
    notes: 'Aggravated after agricultural lifting work.',
    source: 'Patient Reported (App)',
    status: 'Reviewed',
    reviewedBy: 'Dr. Rao (PHC Kondapur)',
    createdAt: '2026-09-12T11:20:00Z'
  }
];

export const SEED_MEDICAL_RECORDS = [
  {
    id: 'rec-1',
    patientId: 'pat-1',
    type: 'symptom',
    title: 'Dizziness and palpitations',
    facility: 'Patient Self-Report',
    doctor: 'Awaiting Review',
    date: '2026-09-18',
    year: '2026',
    summary: 'Patient reported moderate dizziness upon waking up. Blood pressure elevated at field check.',
    status: 'Unreviewed'
  },
  {
    id: 'rec-2',
    patientId: 'pat-1',
    type: 'lab',
    title: 'Lipid Profile & HbA1c Report',
    facility: 'District Referral Lab, Chevella',
    doctor: 'Dr. S. K. Gupta (Pathologist)',
    date: '2026-08-12',
    year: '2026',
    summary: 'HbA1c: 7.8% (Elevated), Total Cholesterol: 215 mg/dL, Triglycerides: 190 mg/dL.',
    status: 'Verified'
  },
  {
    id: 'rec-3',
    patientId: 'pat-1',
    type: 'visit',
    title: 'PHC Chronic Care Follow-up',
    facility: 'PHC Kondapur',
    doctor: 'Dr. Ananya Rao',
    date: '2026-05-11',
    year: '2026',
    summary: 'Hypertension stable on Amlodipine 5mg. Advised reduced salt intake and 30 min daily walking.',
    status: 'Completed'
  },
  {
    id: 'rec-4',
    patientId: 'pat-1',
    type: 'ocr',
    title: 'Historical Discharge Card (2025)',
    facility: 'Area Hospital Shankarpally',
    doctor: 'Dr. B. Reddy',
    date: '2025-11-20',
    year: '2025',
    summary: 'Digitized from physical slip. Admitted for acute gastroenteritis, rehydrated and discharged in stable condition.',
    status: 'Historical Record (OCR Verified)'
  }
];

export const SEED_PRESCRIPTIONS = [
  {
    id: 'rx-1',
    patientId: 'pat-1',
    doctorId: 'doc-1',
    doctorName: 'Dr. Ananya Rao',
    facility: 'PHC Kondapur',
    date: '2026-05-11',
    status: 'Active',
    items: [
      { medicine: 'Metformin Hydrochloride', dosage: '500 mg', frequency: 'Twice daily (1-0-1)', duration: '90 Days', instructions: 'After meals with water' },
      { medicine: 'Amlodipine Besylate', dosage: '5 mg', frequency: 'Once daily in morning (1-0-0)', duration: '90 Days', instructions: 'Before breakfast' }
    ]
  }
];

export const SEED_REFERRALS = [
  {
    id: 'ref-1',
    patientId: 'pat-1',
    fromFacility: 'PHC Kondapur',
    toFacility: 'District Hospital Chevella (Cardiology)',
    specialty: 'Cardiology',
    reason: 'Evaluation of episodic palpitations & persistent borderline hypertension in diabetic patient',
    priority: 'High',
    status: 'Pending Specialist Visit',
    referralDate: '2026-09-18',
    referredBy: 'Dr. Ananya Rao'
  }
];

export const SEED_APPOINTMENTS = [
  {
    id: 'apt-1',
    patientId: 'pat-1',
    patientName: 'Lakshmi Devi',
    facility: 'PHC Kondapur',
    department: 'General Outpatient (OPD)',
    date: '2026-09-21',
    timeSlot: '10:30 AM',
    tokenNumber: 'A-104',
    status: 'Confirmed',
    type: 'Regular Follow-up'
  },
  {
    id: 'apt-2',
    patientId: 'pat-2',
    patientName: 'Ramesh Naik',
    facility: 'PHC Kondapur',
    department: 'Physiotherapy & Ortho Clinic',
    date: '2026-09-22',
    timeSlot: '11:15 AM',
    tokenNumber: 'B-202',
    status: 'Confirmed',
    type: 'Back Pain Review'
  }
];

export const SEED_QUEUE = [
  {
    id: 'q-1',
    queueNumber: 'A-101',
    patientId: 'pat-1',
    patientName: 'Lakshmi Devi',
    ageGender: '52 F',
    chiefComplaint: 'Dizziness & Palpitations',
    priority: 'High',
    waitTime: '20 min',
    status: 'Waiting',
    arrivedAt: '10:05 AM'
  },
  {
    id: 'q-2',
    queueNumber: 'A-102',
    patientId: 'pat-2',
    patientName: 'Ramesh Naik',
    ageGender: '44 M',
    chiefComplaint: 'Lumbar pain review',
    priority: 'Medium',
    waitTime: '35 min',
    status: 'Waiting',
    arrivedAt: '09:50 AM'
  },
  {
    id: 'q-3',
    queueNumber: 'A-103',
    patientId: 'pat-3',
    patientName: 'Fatima Bee',
    ageGender: '28 F',
    chiefComplaint: 'Antenatal ANC Check #2',
    priority: 'Routine',
    waitTime: '10 min',
    status: 'Waiting',
    arrivedAt: '10:15 AM'
  },
  {
    id: 'q-4',
    queueNumber: 'A-104',
    patientId: 'pat-4',
    patientName: 'Aarav Sharma',
    ageGender: '7 M',
    chiefComplaint: 'Nocturnal cough and wheezing',
    priority: 'High',
    waitTime: '5 min',
    status: 'Waiting',
    arrivedAt: '10:20 AM'
  }
];

export const SEED_CONSENT_REQUESTS = [
  {
    id: 'con-1',
    patientId: 'pat-1',
    requesterName: 'Dr. Ananya Rao',
    requesterRole: 'Medical Officer',
    facility: 'PHC Kondapur',
    purpose: 'Continuity of chronic disease management and OPD triage',
    grantedPermissions: ['Medical History', 'Lab Reports', 'Prescriptions', 'Vitals'],
    status: 'Active',
    grantedAt: '2026-05-10T10:00:00Z',
    validUntil: '2027-05-10T10:00:00Z'
  },
  {
    id: 'con-2',
    patientId: 'pat-1',
    requesterName: 'Dr. M. S. Varma',
    requesterRole: 'Consultant Cardiologist',
    facility: 'District Hospital Chevella',
    purpose: 'Cardiology Referral Evaluation and diagnostic review',
    grantedPermissions: ['Medical History', 'Lab Reports', 'Symptoms'],
    status: 'Active',
    grantedAt: '2026-09-18T11:30:00Z',
    validUntil: '2026-10-18T11:30:00Z'
  }
];

export const SEED_USERS = [
  {
    id: 'usr-pat-1',
    role: 'patient',
    username: 'LP-10234',
    name: 'Lakshmi Devi',
    linkedPatientId: 'pat-1',
    phone: '9848012345'
  },
  {
    id: 'usr-doc-1',
    role: 'doctor',
    username: 'DOC-7842',
    name: 'Dr. Ananya Rao, MBBS, MD',
    facility: 'PHC Kondapur',
    department: 'Primary Care'
  },
  {
    id: 'usr-hw-1',
    role: 'worker',
    username: 'HW-9021',
    name: 'Sunita Bai',
    roleTitle: 'ASHA Community Health Worker',
    village: 'Kondapur Village Sector 3'
  }
];

export const SEED_SETTINGS = [
  { key: 'language', value: 'en' },
  { key: 'theme', value: 'light' },
  { key: 'textSize', value: 'normal' },
  { key: 'contrast', value: 'normal' },
  { key: 'reduceMotion', value: false },
  { key: 'voiceAssistance', value: false }
];
