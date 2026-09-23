/**
 * LIFE PATCH - Session and Authentication State Engine
 * Enterprise Session & Role Management
 */

const SESSION_KEY = 'life_patch_session';

export function getSession() {
  const stored = localStorage.getItem(SESSION_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error('Failed to parse session:', e);
    }
  }
  return null;
}

export function setSession(role, userId, patientId, name, identifier) {
  const session = { role, userId, patientId, name, identifier, loginTime: new Date().toISOString() };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
}

export function loginAs(role) {
  const basePath = getBasePath();
  if (role === 'doctor') {
    setSession('doctor', 'usr-doc-1', null, 'Dr. Ananya Rao', 'DOC-7842');
    window.location.href = basePath + 'doctor/dashboard.html';
  } else if (role === 'worker') {
    setSession('worker', 'usr-hw-1', null, 'Sunita Bai (ASHA)', 'HW-9021');
    window.location.href = basePath + 'worker/dashboard.html';
  } else {
    setSession('patient', 'usr-pat-1', 'pat-1', 'Lakshmi Devi', 'LP-10234');
    window.location.href = basePath + 'patient/dashboard.html';
  }
}

export function getDashboardUrl(role = '') {
  const basePath = getBasePath();
  if (role === 'doctor') return basePath + 'doctor/dashboard.html';
  if (role === 'worker') return basePath + 'worker/dashboard.html';
  return basePath + 'patient/dashboard.html';
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
  window.location.href = getBasePath() + 'index.html';
}

export function getBasePath() {
  const path = window.location.pathname;
  if (path.includes('/patient/') || path.includes('/doctor/') || path.includes('/worker/') || path.includes('/shared/')) {
    return '../';
  }
  return './';
}
