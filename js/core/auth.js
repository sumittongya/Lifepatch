/**
 * LIFE PATCH - Session and Authentication State
 * Designed for seamless demo role switching.
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
  // Default session is Patient (Lakshmi Devi)
  return {
    role: 'patient',
    userId: 'usr-pat-1',
    patientId: 'pat-1',
    name: 'Lakshmi Devi',
    identifier: 'LP-10234'
  };
}

export function setSession(role, userId, patientId, name, identifier) {
  const session = { role, userId, patientId, name, identifier };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
}

export function loginAs(role) {
  if (role === 'doctor') {
    setSession('doctor', 'usr-doc-1', null, 'Dr. Ananya Rao', 'DOC-7842');
    window.location.href = getBasePath() + 'doctor/dashboard.html';
  } else if (role === 'worker') {
    setSession('worker', 'usr-hw-1', null, 'Sunita Bai (ASHA)', 'HW-9021');
    window.location.href = getBasePath() + 'worker/dashboard.html';
  } else {
    setSession('patient', 'usr-pat-1', 'pat-1', 'Lakshmi Devi', 'LP-10234');
    window.location.href = getBasePath() + 'patient/dashboard.html';
  }
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
  window.location.href = getBasePath() + 'login.html';
}

export function getBasePath() {
  const path = window.location.pathname;
  if (path.includes('/patient/') || path.includes('/doctor/') || path.includes('/worker/') || path.includes('/shared/')) {
    return '../';
  }
  return './';
}
