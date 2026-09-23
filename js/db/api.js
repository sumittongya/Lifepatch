/**
 * LIFE PATCH - High Level Database API
 * Bridges UI components with IndexedDB.
 */

import * as db from './database.js';
import * as seed from './seed-data.js';

export async function initDatabase(forceReset = false) {
  try {
    const existingPatients = await db.getAll('patients');
    if (existingPatients.length === 0 || forceReset) {
      if (forceReset) {
        const storeNames = [
          'patients', 'medicalRecords', 'symptoms', 'vitals',
          'prescriptions', 'labReports', 'visits', 'referrals',
          'appointments', 'queue', 'consentRequests', 'users',
          'voiceNotes', 'documents', 'notifications', 'offlineQueue',
          'appSettings', 'auditLogs'
        ];
        for (const s of storeNames) {
          await db.clearStore(s);
        }
      }

      for (const p of seed.SEED_PATIENTS) await db.put('patients', p);
      for (const v of seed.SEED_VITALS) await db.put('vitals', v);
      for (const s of seed.SEED_SYMPTOMS) await db.put('symptoms', s);
      for (const r of seed.SEED_MEDICAL_RECORDS) await db.put('medicalRecords', r);
      for (const rx of seed.SEED_PRESCRIPTIONS) await db.put('prescriptions', rx);
      for (const ref of seed.SEED_REFERRALS) await db.put('referrals', ref);
      for (const apt of seed.SEED_APPOINTMENTS) await db.put('appointments', apt);
      for (const q of seed.SEED_QUEUE) await db.put('queue', q);
      for (const con of seed.SEED_CONSENT_REQUESTS) await db.put('consentRequests', con);
      for (const u of seed.SEED_USERS) await db.put('users', u);
      for (const st of seed.SEED_SETTINGS) await db.put('appSettings', st);

      await logAudit('System', 'INITIALIZE_SEED_DATA', 'Database populated with initial demo dataset.');
    }
  } catch (err) {
    console.error('Error initializing database:', err);
  }
}

// Audit Logger
export async function logAudit(userId, action, details) {
  const entry = {
    id: 'aud-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
    timestamp: new Date().toISOString(),
    userId: userId || 'Guest',
    action: action,
    details: details
  };
  await db.put('auditLogs', entry);
}

export async function getAuditLogs() {
  const logs = await db.getAll('auditLogs');
  return logs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
}

// Patients API
export async function getPatients() {
  return await db.getAll('patients');
}

export async function getPatientById(id) {
  return await db.getById('patients', id);
}

export async function addPatient(patientData) {
  const id = patientData.id || 'pat-' + Date.now();
  const newPatient = {
    ...patientData,
    id,
    createdAt: patientData.createdAt || new Date().toISOString()
  };
  await db.put('patients', newPatient);
  await logAudit(patientData.createdBy || 'User', 'CREATE_PATIENT', `Created patient ${newPatient.name} (${newPatient.healthId})`);
  return newPatient;
}

export async function updatePatient(patient) {
  await db.put('patients', patient);
  await logAudit('User', 'UPDATE_PATIENT', `Updated patient details for ${patient.name}`);
  return patient;
}

// Symptoms API
export async function getSymptomsByPatient(patientId) {
  const all = await db.getAll('symptoms');
  return all.filter(s => s.patientId === patientId).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

export async function addSymptom(symptomData) {
  const id = 'sym-' + Date.now();
  const newSym = {
    ...symptomData,
    id,
    createdAt: new Date().toISOString(),
    status: symptomData.status || 'Pending Doctor Review'
  };
  await db.put('symptoms', newSym);

  // Also add to longitudinal medical records
  const recId = 'rec-' + Date.now();
  const record = {
    id: recId,
    patientId: symptomData.patientId,
    type: 'symptom',
    title: symptomData.symptomName,
    facility: symptomData.source || 'Patient Self-Report',
    doctor: 'Awaiting Clinical Review',
    date: symptomData.startedAt || new Date().toISOString().split('T')[0],
    year: new Date().getFullYear().toString(),
    summary: symptomData.notes || symptomData.symptomName,
    status: 'Unreviewed'
  };
  await db.put('medicalRecords', record);

  await logAudit(symptomData.reportedBy || 'Patient', 'REPORT_SYMPTOM', `Reported symptom: ${newSym.symptomName}`);
  return newSym;
}

export async function updateSymptomStatus(symptomId, status, reviewedBy) {
  const sym = await db.getById('symptoms', symptomId);
  if (sym) {
    sym.status = status;
    sym.reviewedBy = reviewedBy;
    await db.put('symptoms', sym);
    await logAudit(reviewedBy || 'Doctor', 'REVIEW_SYMPTOM', `Marked symptom ${sym.symptomName} as ${status}`);
  }
}

// Vitals API
export async function getVitalsByPatient(patientId) {
  const all = await db.getAll('vitals');
  return all.filter(v => v.patientId === patientId).sort((a, b) => new Date(b.recordedAt) - new Date(a.recordedAt));
}

export async function addVital(vitalData) {
  const id = 'vit-' + Date.now();
  const newVital = {
    ...vitalData,
    id,
    recordedAt: vitalData.recordedAt || new Date().toISOString()
  };
  await db.put('vitals', newVital);
  await logAudit(vitalData.recordedBy || 'Health Worker', 'RECORD_VITALS', `Recorded vitals: BP ${vitalData.bpSystolic}/${vitalData.bpDiastolic}, Sugar ${vitalData.bloodSugarRandom || 'N/A'}`);
  return newVital;
}

// Plural alias used by field-visit workflow
export async function addVitals(vitalData) {
  return addVital(vitalData);
}

// Medical Records API
export async function getMedicalRecords(patientId) {
  const all = await db.getAll('medicalRecords');
  return all.filter(r => r.patientId === patientId).sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function addMedicalRecord(recordData) {
  const id = 'rec-' + Date.now();
  const newRecord = {
    ...recordData,
    id,
    date: recordData.date || new Date().toISOString().split('T')[0],
    year: (recordData.date ? new Date(recordData.date) : new Date()).getFullYear().toString()
  };
  await db.put('medicalRecords', newRecord);
  await logAudit(recordData.createdBy || 'Doctor', 'ADD_RECORD', `Added medical record: ${newRecord.title}`);
  return newRecord;
}

export async function deleteMedicalRecord(id) {
  await db.remove('medicalRecords', id);
  await logAudit('User', 'DELETE_RECORD', `Deleted medical record ${id}`);
}

// Prescriptions API
export async function getPrescriptionsByPatient(patientId) {
  const all = await db.getAll('prescriptions');
  return all.filter(p => p.patientId === patientId).sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function addPrescription(rxData) {
  const id = 'rx-' + Date.now();
  const newRx = {
    ...rxData,
    id,
    date: rxData.date || new Date().toISOString().split('T')[0],
    status: 'Active'
  };
  await db.put('prescriptions', newRx);
  await logAudit(rxData.doctorName || 'Doctor', 'ISSUE_PRESCRIPTION', `Issued Rx with ${newRx.items.length} items`);
  return newRx;
}

// Referrals API
export async function getReferralsByPatient(patientId) {
  const all = await db.getAll('referrals');
  return all.filter(r => r.patientId === patientId).sort((a, b) => new Date(b.referralDate) - new Date(a.referralDate));
}

export async function getAllReferrals() {
  const all = await db.getAll('referrals');
  return all.sort((a, b) => new Date(b.referralDate) - new Date(a.referralDate));
}

export async function addReferral(refData) {
  const id = 'ref-' + Date.now();
  const newRef = {
    ...refData,
    id,
    referralDate: refData.referralDate || new Date().toISOString().split('T')[0],
    status: refData.status || 'Pending Specialist Visit'
  };
  await db.put('referrals', newRef);
  await logAudit(refData.referredBy || 'Doctor', 'CREATE_REFERRAL', `Referral created for ${refData.specialty} to ${refData.toFacility}`);
  return newRef;
}

// Appointments API
export async function getAppointments(patientId = null) {
  const all = await db.getAll('appointments');
  if (patientId) {
    return all.filter(a => a.patientId === patientId).sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  return all.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function addAppointment(aptData) {
  const id = 'apt-' + Date.now();
  const newApt = {
    ...aptData,
    id,
    tokenNumber: aptData.tokenNumber || 'A-' + (100 + Math.floor(Math.random() * 900)),
    status: 'Confirmed'
  };
  await db.put('appointments', newApt);
  await logAudit(aptData.bookedBy || 'Patient', 'BOOK_APPOINTMENT', `Booked appointment at ${newApt.facility} for ${newApt.date}`);
  return newApt;
}

// Queue API
export async function addToQueue(queueData) {
  const id = 'que-' + Date.now();
  const newEntry = {
    ...queueData,
    id,
    status: queueData.status || 'Waiting',
    priority: queueData.priority || 'Routine',
    createdAt: new Date().toISOString()
  };
  await db.put('queue', newEntry);
  await logAudit(queueData.addedBy || 'System', 'ADD_TO_QUEUE', `Added ${newEntry.patientName || 'patient'} to OPD queue`);
  return newEntry;
}

export async function getQueue() {
  const all = await db.getAll('queue');
  const priorityOrder = { 'Emergency': 1, 'High': 2, 'Medium': 3, 'Routine': 4 };
  return all.sort((a, b) => (priorityOrder[a.priority] || 5) - (priorityOrder[b.priority] || 5));
}

export async function updateQueuePriority(queueId, newPriority, doctorName) {
  const item = await db.getById('queue', queueId);
  if (item) {
    const oldPriority = item.priority;
    item.priority = newPriority;
    await db.put('queue', item);
    await logAudit(doctorName || 'Doctor', 'UPDATE_QUEUE_PRIORITY', `Changed ${item.patientName} priority: ${oldPriority} -> ${newPriority}`);
  }
}

// Consent API
export async function addConsentRequest(consentData) {
  const id = 'con-' + Date.now();
  const newConsent = {
    ...consentData,
    id,
    status: consentData.status || 'Active',
    createdAt: consentData.createdAt || new Date().toISOString()
  };
  await db.put('consentRequests', newConsent);
  await logAudit('Patient', 'GRANT_CONSENT', `Granted record access to ${newConsent.requesterName}`);
  return newConsent;
}

export async function getConsentRequests(patientId) {
  const all = await db.getAll('consentRequests');
  return all.filter(c => c.patientId === patientId);
}

export async function updateConsentStatus(id, newStatus) {
  const item = await db.getById('consentRequests', id);
  if (item) {
    item.status = newStatus;
    await db.put('consentRequests', item);
    await logAudit('Patient', 'UPDATE_CONSENT', `${newStatus} consent for ${item.requesterName}`);
  }
}

// Offline Queue API
export async function getOfflineQueue() {
  return await db.getAll('offlineQueue');
}

export async function addOfflineItem(item) {
  const id = 'off-' + Date.now();
  const entry = {
    ...item,
    id,
    synced: false,
    createdAt: new Date().toISOString()
  };
  await db.put('offlineQueue', entry);
  await logAudit('Health Worker', 'SAVE_OFFLINE_RECORD', `Saved ${item.entityType} offline for ${item.patientName || 'patient'}`);
  return entry;
}

export async function syncOfflineQueue() {
  const items = await db.getAll('offlineQueue');
  const count = items.length;
  for (const item of items) {
    if (item.entityType === 'field_visit') {
      await addVital(item.data.vitals);
      if (item.data.symptom) {
        await addSymptom(item.data.symptom);
      }
    }
  }
  await db.clearStore('offlineQueue');
  await logAudit('Health Worker', 'SYNC_OFFLINE_RECORDS', `Synced ${count} offline records to central PHC database`);
  return count;
}

// Full database reset back to clean seed state
export async function resetDatabase() {
  await initDatabase(true);
  await logAudit('System', 'RESET_DATABASE', 'Local IndexedDB reset to initial demo dataset.');
}

// Export / Import API
export async function exportDatabaseJSON() {
  const exportData = {};
  const storeNames = [
    'patients', 'medicalRecords', 'symptoms', 'vitals',
    'prescriptions', 'labReports', 'visits', 'referrals',
    'appointments', 'queue', 'consentRequests', 'users',
    'voiceNotes', 'documents', 'notifications', 'offlineQueue',
    'appSettings', 'auditLogs'
  ];
  for (const s of storeNames) {
    exportData[s] = await db.getAll(s);
  }
  return JSON.stringify(exportData, null, 2);
}

export async function importDatabaseJSON(jsonString) {
  const data = JSON.parse(jsonString);
  for (const [storeName, records] of Object.entries(data)) {
    await db.clearStore(storeName);
    for (const item of records) {
      await db.put(storeName, item);
    }
  }
  await logAudit('System', 'IMPORT_DATA', 'Database restored from JSON backup.');
}

// App Settings
export async function getSetting(key, defaultValue = null) {
  const res = await db.getById('appSettings', key);
  return res ? res.value : defaultValue;
}

export async function setSetting(key, value) {
  await db.put('appSettings', { key, value });
}
