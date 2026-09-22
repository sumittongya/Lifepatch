/**
 * LIFE PATCH - Shared Layout Component Renderer
 * Dynamically mounts Header, Sidebar, Mobile Nav, Toasts, and Modals
 * Integrated with crisp Lucide vector icons
 */

import { getSession, logout, getBasePath } from './auth.js';
import { t, setLanguage, getLanguage } from './i18n.js';
import { toggleTheme, getTheme, applyTheme } from './theme.js';
import { renderIcons, icon } from './icons.js';

export function renderLayout(activePageKey = '') {
  const session = getSession();
  const basePath = getBasePath();
  const currentLang = getLanguage();

  // Role icon helper
  const roleIcon = session.role === 'doctor' ? icon('stethoscope') : session.role === 'worker' ? icon('heart-handshake') : icon('user');

  // Render Top Header
  const headerContainer = document.getElementById('header-mount');
  if (headerContainer) {
    headerContainer.innerHTML = `
      <header class="top-header">
        <div class="header-left">
          <button class="mobile-menu-btn" id="mobile-menu-toggle" aria-label="Toggle navigation menu">
            ${icon('menu')}
          </button>
          <a href="${basePath}index.html" class="header-brand">
            <span style="color:var(--primary-blue); display:flex; align-items:center;">${icon('activity', '', 22)}</span>
            <span>LIFE PATCH</span>
            <span class="brand-badge" data-i18n="demoMode">${t('demoMode')}</span>
          </a>
        </div>
        <div class="header-right">
          <!-- Role Indicator -->
          <div class="role-badge ${session.role}">
            <span>${roleIcon}</span>
            <span>${session.name}</span>
          </div>

          <!-- Language Selector -->
          <select class="form-control lang-select" style="width:auto; padding:0.25rem 0.5rem; height:34px; font-size:0.8rem;" aria-label="Select Language">
            <option value="en" ${currentLang === 'en' ? 'selected' : ''}>English</option>
            <option value="hi" ${currentLang === 'hi' ? 'selected' : ''}>हिन्दी</option>
            <option value="te" ${currentLang === 'te' ? 'selected' : ''}>తెలుగు</option>
          </select>

          <!-- Theme Toggle -->
          <button class="btn btn-outline btn-icon theme-toggle-btn" title="Toggle Theme" style="height:34px; width:34px;">
            ${icon('moon', '', 16)}
          </button>

          <!-- Settings -->
          <a href="${basePath}shared/settings.html" class="btn btn-outline btn-icon" title="Settings" style="height:34px; width:34px;">
            ${icon('settings', '', 16)}
          </a>

          <!-- Logout / Switch Role -->
          <button id="logout-btn" class="btn btn-outline" style="height:34px; padding:0 0.75rem; font-size:0.8rem;" title="Switch Role">
            ${icon('arrow-left-right', '', 14)} <span>Role</span>
          </button>
        </div>
      </header>
    `;
  }

  // Render Role Sidebar
  const sidebarContainer = document.getElementById('sidebar-mount');
  if (sidebarContainer) {
    let navItemsHtml = '';

    if (session.role === 'patient') {
      navItemsHtml = `
        <div class="nav-section-title" data-i18n="patient">${t('patient')}</div>
        <a href="${basePath}patient/dashboard.html" class="nav-item ${activePageKey === 'patient-home' ? 'active' : ''}">
          <span class="nav-icon">${icon('home')}</span> <span data-i18n="home">${t('home')}</span>
        </a>
        <a href="${basePath}patient/records.html" class="nav-item ${activePageKey === 'patient-records' ? 'active' : ''}">
          <span class="nav-icon">${icon('file-text')}</span> <span data-i18n="medicalRecords">${t('medicalRecords')}</span>
        </a>
        <a href="${basePath}patient/symptoms.html" class="nav-item ${activePageKey === 'patient-symptoms' ? 'active' : ''}">
          <span class="nav-icon">${icon('thermometer')}</span> <span data-i18n="symptoms">${t('symptoms')}</span>
        </a>
        <a href="${basePath}patient/voice.html" class="nav-item ${activePageKey === 'patient-voice' ? 'active' : ''}">
          <span class="nav-icon">${icon('mic')}</span> <span data-i18n="voiceAssistant">${t('voiceAssistant')}</span>
        </a>
        <a href="${basePath}patient/appointments.html" class="nav-item ${activePageKey === 'patient-appointments' ? 'active' : ''}">
          <span class="nav-icon">${icon('calendar')}</span> <span data-i18n="appointments">${t('appointments')}</span>
        </a>
        <a href="${basePath}patient/consent.html" class="nav-item ${activePageKey === 'patient-consent' ? 'active' : ''}">
          <span class="nav-icon">${icon('shield-check')}</span> <span data-i18n="consentPrivacy">${t('consentPrivacy')}</span>
        </a>
        <a href="${basePath}patient/emergency.html" class="nav-item ${activePageKey === 'patient-emergency' ? 'active' : ''}" style="color:var(--status-emergency);">
          <span class="nav-icon">${icon('alert-octagon')}</span> <span data-i18n="emergency">${t('emergency')}</span>
        </a>
        <a href="${basePath}patient/profile.html" class="nav-item ${activePageKey === 'patient-profile' ? 'active' : ''}">
          <span class="nav-icon">${icon('user')}</span> <span data-i18n="profile">${t('profile')}</span>
        </a>
      `;
    } else if (session.role === 'doctor') {
      navItemsHtml = `
        <div class="nav-section-title" data-i18n="doctor">${t('doctor')}</div>
        <a href="${basePath}doctor/dashboard.html" class="nav-item ${activePageKey === 'doctor-dashboard' ? 'active' : ''}">
          <span class="nav-icon">${icon('layout-dashboard')}</span> <span data-i18n="home">${t('home')}</span>
        </a>
        <a href="${basePath}doctor/queue.html" class="nav-item ${activePageKey === 'doctor-queue' ? 'active' : ''}">
          <span class="nav-icon">${icon('list-ordered')}</span> <span data-i18n="priorityQueue">${t('priorityQueue')}</span>
        </a>
        <a href="${basePath}doctor/patients.html" class="nav-item ${activePageKey === 'doctor-patients' ? 'active' : ''}">
          <span class="nav-icon">${icon('users')}</span> <span data-i18n="patients">${t('patients')}</span>
        </a>
        <a href="${basePath}doctor/consultation.html" class="nav-item ${activePageKey === 'doctor-consult' ? 'active' : ''}">
          <span class="nav-icon">${icon('stethoscope')}</span> <span data-i18n="consultations">${t('consultations')}</span>
        </a>
        <a href="${basePath}doctor/prescriptions.html" class="nav-item ${activePageKey === 'doctor-rx' ? 'active' : ''}">
          <span class="nav-icon">${icon('pill')}</span> <span data-i18n="prescriptions">${t('prescriptions')}</span>
        </a>
        <a href="${basePath}doctor/referrals.html" class="nav-item ${activePageKey === 'doctor-referrals' ? 'active' : ''}">
          <span class="nav-icon">${icon('git-pull-request')}</span> <span data-i18n="referrals">${t('referrals')}</span>
        </a>
        <a href="${basePath}doctor/followups.html" class="nav-item ${activePageKey === 'doctor-followups' ? 'active' : ''}">
          <span class="nav-icon">${icon('clock')}</span> <span data-i18n="followups">${t('followups')}</span>
        </a>
      `;
    } else if (session.role === 'worker') {
      navItemsHtml = `
        <div class="nav-section-title" data-i18n="worker">${t('worker')}</div>
        <a href="${basePath}worker/dashboard.html" class="nav-item ${activePageKey === 'worker-dashboard' ? 'active' : ''}">
          <span class="nav-icon">${icon('layout-dashboard')}</span> <span data-i18n="home">${t('home')}</span>
        </a>
        <a href="${basePath}worker/patients.html" class="nav-item ${activePageKey === 'worker-patients' ? 'active' : ''}">
          <span class="nav-icon">${icon('users')}</span> <span data-i18n="patients">${t('patients')}</span>
        </a>
        <a href="${basePath}worker/assisted-access.html" class="nav-item ${activePageKey === 'worker-assisted' ? 'active' : ''}">
          <span class="nav-icon">${icon('heart-handshake')}</span> <span data-i18n="assistedAccess">${t('assistedAccess')}</span>
        </a>
        <a href="${basePath}worker/field-visit.html" class="nav-item ${activePageKey === 'worker-visit' ? 'active' : ''}">
          <span class="nav-icon">${icon('clipboard-check')}</span> <span data-i18n="fieldVisit">${t('fieldVisit')}</span>
        </a>
        <a href="${basePath}worker/vitals.html" class="nav-item ${activePageKey === 'worker-vitals' ? 'active' : ''}">
          <span class="nav-icon">${icon('activity')}</span> <span data-i18n="vitals">${t('vitals')}</span>
        </a>
        <a href="${basePath}worker/voice.html" class="nav-item ${activePageKey === 'worker-voice' ? 'active' : ''}">
          <span class="nav-icon">${icon('mic')}</span> <span data-i18n="voiceEntry">${t('voiceEntry')}</span>
        </a>
        <a href="${basePath}worker/sync.html" class="nav-item ${activePageKey === 'worker-sync' ? 'active' : ''}">
          <span class="nav-icon">${icon('refresh-cw')}</span> <span data-i18n="sync">${t('sync')}</span>
        </a>
      `;
    }

    sidebarContainer.innerHTML = `
      <aside class="app-sidebar" id="app-sidebar">
        <div class="sidebar-header">
          <a href="${basePath}index.html" class="sidebar-logo">
            <span class="sidebar-logo-icon">${icon('activity', '', 18)}</span>
            <span>LIFE PATCH</span>
          </a>
        </div>
        <nav class="sidebar-nav">
          ${navItemsHtml}
          <div class="nav-section-title" data-i18n="settings">${t('settings')}</div>
          <a href="${basePath}shared/accessibility.html" class="nav-item ${activePageKey === 'shared-a11y' ? 'active' : ''}">
            <span class="nav-icon">${icon('eye')}</span> <span data-i18n="accessibility">${t('accessibility')}</span>
          </a>
          <a href="${basePath}shared/help.html" class="nav-item ${activePageKey === 'shared-help' ? 'active' : ''}">
            <span class="nav-icon">${icon('help-circle')}</span> <span data-i18n="help">${t('help')}</span>
          </a>
        </nav>
        <div class="sidebar-footer">
          <div class="connection-indicator">
            <span class="connection-dot" id="conn-dot"></span>
            <span id="conn-text" data-i18n="connected">${t('connected')}</span>
          </div>
          <div style="color:#64748B; font-size:0.7rem;">SIH 2026 Public Health Platform</div>
        </div>
      </aside>
    `;
  }

  // Render Mobile Bottom Navigation
  const mobileNavContainer = document.getElementById('mobile-nav-mount');
  if (mobileNavContainer) {
    if (session.role === 'patient') {
      mobileNavContainer.innerHTML = `
        <nav class="mobile-bottom-nav">
          <a href="${basePath}patient/dashboard.html" class="mobile-nav-item ${activePageKey === 'patient-home' ? 'active' : ''}">
            <span class="mobile-nav-icon">${icon('home')}</span>
            <span data-i18n="home">${t('home')}</span>
          </a>
          <a href="${basePath}patient/records.html" class="mobile-nav-item ${activePageKey === 'patient-records' ? 'active' : ''}">
            <span class="mobile-nav-icon">${icon('file-text')}</span>
            <span data-i18n="medicalRecords">${t('medicalRecords')}</span>
          </a>
          <a href="${basePath}patient/voice.html" class="mobile-nav-item ${activePageKey === 'patient-voice' ? 'active' : ''}">
            <span class="mobile-nav-icon" style="color:var(--primary-blue)">${icon('mic', '', 22)}</span>
            <span data-i18n="voiceAssistant">${t('voiceAssistant')}</span>
          </a>
          <a href="${basePath}patient/appointments.html" class="mobile-nav-item ${activePageKey === 'patient-appointments' ? 'active' : ''}">
            <span class="mobile-nav-icon">${icon('calendar')}</span>
            <span data-i18n="appointments">${t('appointments')}</span>
          </a>
          <a href="${basePath}patient/emergency.html" class="mobile-nav-item ${activePageKey === 'patient-emergency' ? 'active' : ''}">
            <span class="mobile-nav-icon" style="color:var(--status-emergency)">${icon('alert-octagon')}</span>
            <span data-i18n="emergency">${t('emergency')}</span>
          </a>
        </nav>
      `;
    } else if (session.role === 'doctor') {
      mobileNavContainer.innerHTML = `
        <nav class="mobile-bottom-nav">
          <a href="${basePath}doctor/dashboard.html" class="mobile-nav-item ${activePageKey === 'doctor-dashboard' ? 'active' : ''}">
            <span class="mobile-nav-icon">${icon('layout-dashboard')}</span>
            <span data-i18n="home">${t('home')}</span>
          </a>
          <a href="${basePath}doctor/queue.html" class="mobile-nav-item ${activePageKey === 'doctor-queue' ? 'active' : ''}">
            <span class="mobile-nav-icon">${icon('list-ordered')}</span>
            <span data-i18n="priorityQueue">${t('priorityQueue')}</span>
          </a>
          <a href="${basePath}doctor/patients.html" class="mobile-nav-item ${activePageKey === 'doctor-patients' ? 'active' : ''}">
            <span class="mobile-nav-icon">${icon('users')}</span>
            <span data-i18n="patients">${t('patients')}</span>
          </a>
          <a href="${basePath}doctor/prescriptions.html" class="mobile-nav-item ${activePageKey === 'doctor-rx' ? 'active' : ''}">
            <span class="mobile-nav-icon">${icon('pill')}</span>
            <span data-i18n="prescriptions">${t('prescriptions')}</span>
          </a>
        </nav>
      `;
    } else if (session.role === 'worker') {
      mobileNavContainer.innerHTML = `
        <nav class="mobile-bottom-nav">
          <a href="${basePath}worker/dashboard.html" class="mobile-nav-item ${activePageKey === 'worker-dashboard' ? 'active' : ''}">
            <span class="mobile-nav-icon">${icon('layout-dashboard')}</span>
            <span data-i18n="home">${t('home')}</span>
          </a>
          <a href="${basePath}worker/field-visit.html" class="mobile-nav-item ${activePageKey === 'worker-visit' ? 'active' : ''}">
            <span class="mobile-nav-icon">${icon('clipboard-check')}</span>
            <span data-i18n="fieldVisit">${t('fieldVisit')}</span>
          </a>
          <a href="${basePath}worker/voice.html" class="mobile-nav-item ${activePageKey === 'worker-voice' ? 'active' : ''}">
            <span class="mobile-nav-icon">${icon('mic')}</span>
            <span data-i18n="voiceEntry">${t('voiceEntry')}</span>
          </a>
          <a href="${basePath}worker/sync.html" class="mobile-nav-item ${activePageKey === 'worker-sync' ? 'active' : ''}">
            <span class="mobile-nav-icon">${icon('refresh-cw')}</span>
            <span data-i18n="sync">${t('sync')}</span>
          </a>
        </nav>
      `;
    }
  }

  // Bind Events
  document.querySelectorAll('.lang-select').forEach(sel => {
    sel.addEventListener('change', async (e) => {
      await setLanguage(e.target.value);
      renderLayout(activePageKey);
    });
  });

  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      await toggleTheme();
      renderIcons();
    });
  });

  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      logout();
    });
  }

  const menuToggle = document.getElementById('mobile-menu-toggle');
  const sidebar = document.getElementById('app-sidebar');
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  // Network Status Monitor
  window.addEventListener('online', updateNetworkStatus);
  window.addEventListener('offline', updateNetworkStatus);
  updateNetworkStatus();

  // Sync Theme button icon & state
  applyTheme(getTheme());

  // Render vector icons
  renderIcons();
}

function updateNetworkStatus() {
  const dot = document.getElementById('conn-dot');
  const text = document.getElementById('conn-text');
  if (dot && text) {
    if (navigator.onLine) {
      dot.classList.remove('offline');
      text.textContent = t('connected');
    } else {
      dot.classList.add('offline');
      text.textContent = t('offline');
    }
  }
}

export function showToast(message, type = 'success', duration = 3500) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  const iconName = type === 'success' ? 'check-circle' : type === 'error' ? 'alert-circle' : 'info';
  toast.innerHTML = `<span style="color:var(--primary-${type === 'success' ? 'green' : type === 'error' ? 'emergency' : 'blue'})">${icon(iconName)}</span> <span>${message}</span>`;
  container.appendChild(toast);

  renderIcons(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}
