/**
 * LIFE PATCH - Database Engine (IndexedDB Native Implementation)
 * Zero external dependency, 100% offline-ready, handles 17 stores.
 */

const DB_NAME = 'LifePatchDB';
const DB_VERSION = 1;

const STORES = [
  { name: 'patients', keyPath: 'id', indexes: ['healthId', 'phone', 'village', 'riskLevel'] },
  { name: 'medicalRecords', keyPath: 'id', indexes: ['patientId', 'type', 'date'] },
  { name: 'symptoms', keyPath: 'id', indexes: ['patientId', 'status', 'createdAt'] },
  { name: 'vitals', keyPath: 'id', indexes: ['patientId', 'recordedAt'] },
  { name: 'prescriptions', keyPath: 'id', indexes: ['patientId', 'doctorId', 'status'] },
  { name: 'labReports', keyPath: 'id', indexes: ['patientId', 'date', 'status'] },
  { name: 'visits', keyPath: 'id', indexes: ['patientId', 'facility', 'visitDate'] },
  { name: 'referrals', keyPath: 'id', indexes: ['patientId', 'status', 'priority'] },
  { name: 'appointments', keyPath: 'id', indexes: ['patientId', 'facility', 'date', 'status'] },
  { name: 'queue', keyPath: 'id', indexes: ['patientId', 'priority', 'status', 'queueNumber'] },
  { name: 'consentRequests', keyPath: 'id', indexes: ['patientId', 'requesterId', 'status'] },
  { name: 'users', keyPath: 'id', indexes: ['role', 'username'] },
  { name: 'voiceNotes', keyPath: 'id', indexes: ['patientId', 'createdAt'] },
  { name: 'documents', keyPath: 'id', indexes: ['patientId', 'source', 'status'] },
  { name: 'notifications', keyPath: 'id', indexes: ['recipientId', 'read', 'createdAt'] },
  { name: 'offlineQueue', keyPath: 'id', indexes: ['entityType', 'synced', 'createdAt'] },
  { name: 'appSettings', keyPath: 'key' },
  { name: 'auditLogs', keyPath: 'id', indexes: ['timestamp', 'userId', 'action'] }
];

let dbInstance = null;

export async function openDB() {
  if (dbInstance) return dbInstance;

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      STORES.forEach(storeInfo => {
        if (!db.objectStoreNames.contains(storeInfo.name)) {
          const store = db.createObjectStore(storeInfo.name, { keyPath: storeInfo.keyPath });
          if (storeInfo.indexes) {
            storeInfo.indexes.forEach(idx => {
              store.createIndex(idx, idx, { unique: false });
            });
          }
        }
      });
    };

    request.onsuccess = (event) => {
      dbInstance = event.target.result;
      resolve(dbInstance);
    };

    request.onerror = (event) => {
      console.error('IndexedDB open error:', event.target.error);
      reject(event.target.error);
    };
  });
}

export async function getAll(storeName) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, 'readonly');
    const store = transaction.objectStore(storeName);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
}

export async function getById(storeName, key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, 'readonly');
    const store = transaction.objectStore(storeName);
    const request = store.get(key);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
}

export async function put(storeName, value) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, 'readwrite');
    const store = transaction.objectStore(storeName);
    const request = store.put(value);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function remove(storeName, key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, 'readwrite');
    const store = transaction.objectStore(storeName);
    const request = store.delete(key);
    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(request.error);
  });
}

export async function clearStore(storeName) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, 'readwrite');
    const store = transaction.objectStore(storeName);
    const request = store.clear();
    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(request.error);
  });
}

export async function queryByIndex(storeName, indexName, value) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, 'readonly');
    const store = transaction.objectStore(storeName);
    const index = store.index(indexName);
    const request = index.getAll(value);
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
}
