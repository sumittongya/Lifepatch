/**
 * LIFE PATCH - Shared Layout Component Renderer
 * Dynamically mounts Header, Sidebar, Mobile Nav, Toasts, and Modals
 * Integrated with crisp Lucide vector icons & User Profile Controls
 */

import { getSession, setSession, logout, getBasePath, getDashboardUrl } from './auth.js';
import { t, setLanguage, getLanguage } from './i18n.js';
import { toggleTheme, getTheme, applyTheme } from './theme.js';
import { renderIcons, icon } from './icons.js';
import { getPageHelp } from './page-help.js';

export function renderLayout(activePageKey = '') {
  let session = getSession();
  const basePath = getBasePath();
  const currentLang = getLanguage();

  if (!session) {
    session = setSession('patient', 'usr-pat-1', 'pat-1', 'Lakshmi Devi', 'LP-10234');
  }

  // Role icon helper
  const roleIcon = session.role === 'doctor' ? icon('stethoscope') : session.role === 'worker' ? icon('heart-handshake') : icon('user');
  const roleLabel = session.role === 'doctor' ? 'PHC Medical Officer' : session.role === 'worker' ? 'ASHA Health Worker' : 'Citizen / Patient';

  // Render Top Header
  const headerContainer = document.getElementById('header-mount');
  if (headerContainer) {
    headerContainer.innerHTML = `
      <header class="top-header">
        <div class="header-left">
          <button class="mobile-menu-btn" id="mobile-menu-toggle" aria-label="Toggle navigation menu">
            ${icon('menu')}
          </button>
          <a href="${getDashboardUrl(session.role)}" class="btn btn-outline btn-icon" id="back-to-dashboard-btn" title="${t('backToDashboard')}" aria-label="${t('backToDashboard')}" style="height:34px; width:34px; border-radius: 50%; padding: 0; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;">
            ${icon('arrow-left', '', 16)}
          </a>
          <a href="${basePath}index.html" class="header-brand">
            <span style="color:var(--primary-blue); display:flex; align-items:center;">${icon('activity', '', 22)}</span>
            <span>LIFE PATCH</span>
            <span class="brand-badge" data-i18n="demoMode">${t('demoMode')}</span>
          </a>
        </div>
        <div class="header-right">
          <!-- Interactive User Profile Menu & Dropdown -->
          <div style="position: relative;" id="user-profile-menu-container">
            <button id="user-profile-btn" class="role-badge ${session.role}" style="cursor: pointer; border: 1px solid var(--border-default); background: var(--bg-surface); padding: 0.3rem 0.75rem; border-radius: var(--radius-full); display: inline-flex; align-items: center; gap: 0.5rem;" title="Account & Profile Options">
              <span>${roleIcon}</span>
              <span style="font-weight: 700; color: var(--text-main); font-size: 0.85rem;">${session.name}</span>
              <span style="font-size: 0.65rem; padding: 0.1rem 0.4rem; border-radius: var(--radius-full); background: rgba(0,0,0,0.06); font-weight: 800; text-transform: uppercase;">${session.role}</span>
              ${icon('chevron-down', '', 14)}
            </button>

            <!-- User Menu Dropdown -->
            <div id="user-profile-dropdown" style="display: none; position: absolute; top: calc(100% + 8px); right: 0; width: 260px; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); box-shadow: var(--shadow-xl); z-index: 100; overflow: hidden; animation: fadeIn 0.15s ease;">
              <div style="padding: 1rem; border-bottom: 1px solid var(--border-subtle); background: var(--bg-main);">
                <div style="font-weight: 800; font-size: 0.95rem; color: var(--text-main);">${session.name}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.15rem;">${roleLabel}</div>
                <div style="font-size: 0.7rem; color: var(--primary-blue); font-family: var(--font-mono); margin-top: 0.25rem;">ID: ${session.identifier || 'LP-10234'}</div>
              </div>
              <div style="padding: 0.5rem;">
                <a href="${basePath}login.html" class="dropdown-item" style="display: flex; align-items: center; gap: 0.6rem; padding: 0.6rem 0.75rem; color: var(--text-main); font-size: 0.85rem; font-weight: 600; text-decoration: none; border-radius: var(--radius-md);">
                  ${icon('arrow-left-right', '', 16)}
                  <span>Switch Persona / Role</span>
                </a>
                <a href="${basePath}shared/settings.html" class="dropdown-item" style="display: flex; align-items: center; gap: 0.6rem; padding: 0.6rem 0.75rem; color: var(--text-main); font-size: 0.85rem; font-weight: 600; text-decoration: none; border-radius: var(--radius-md);">
                  ${icon('settings', '', 16)}
                  <span>Settings & Database</span>
                </a>
                <div style="border-top: 1px solid var(--border-subtle); margin: 0.25rem 0;"></div>
                <button id="menu-signout-btn" style="width: 100%; display: flex; align-items: center; gap: 0.6rem; padding: 0.6rem 0.75rem; color: var(--status-emergency); font-size: 0.85rem; font-weight: 700; background: none; border: none; cursor: pointer; text-align: left; border-radius: var(--radius-md);">
                  ${icon('log-out', '', 16)}
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Language Selector -->
          <div style="display: flex; align-items: center; gap: 0.35rem; background: var(--bg-main); border: 1px solid var(--border-default); border-radius: var(--radius-full); padding: 0.2rem 0.65rem;">
            <i data-lucide="globe" style="width: 14px; height: 14px; color: var(--text-muted);"></i>
            <select class="lang-select" style="border: none; background: transparent; color: var(--text-main); padding: 0.1rem 0.2rem; height: 26px; font-size: 0.8rem; font-weight: 700; cursor: pointer; outline: none;" aria-label="Select Language">
              <option value="en" ${currentLang === 'en' ? 'selected' : ''}>EN</option>
              <option value="hi" ${currentLang === 'hi' ? 'selected' : ''}>हिन्दी</option>
              <option value="te" ${currentLang === 'te' ? 'selected' : ''}>తెలుగు</option>
            </select>
          </div>

          <!-- Contextual Page Help -->
          <button class="btn btn-outline btn-icon" id="page-help-btn" title="${t('pageHelp')}" aria-label="${t('pageHelp')}" style="height:34px; width:34px; border-radius: 50%; padding: 0; display: inline-flex; align-items: center; justify-content: center;">
            ${icon('help-circle', '', 16)}
          </button>

          <!-- Theme Toggle -->
          <button class="btn btn-outline btn-icon theme-toggle-btn" title="Toggle Theme" style="height:34px; width:34px; border-radius: 50%; padding: 0; display: inline-flex; align-items: center; justify-content: center;">
            ${icon('moon', '', 16)}
          </button>

          <!-- Quick Switch Role Button -->
          <a href="${basePath}login.html" class="btn btn-outline btn-sm" style="height:34px; border-radius: var(--radius-full); font-size:0.8rem; padding: 0 0.85rem;" title="Switch Role / Persona">
            ${icon('arrow-left-right', '', 14)} <span>Role</span>
          </a>

          <!-- Quick Direct Sign Out Button -->
          <button id="logout-btn" class="btn btn-outline btn-sm" style="height:34px; border-radius: var(--radius-full); font-size:0.8rem; padding: 0 0.85rem; color: var(--status-emergency); border-color: var(--status-emergency-border);" title="Sign Out & Return to Home">
            ${icon('log-out', '', 14)} <span>Sign Out</span>
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
    });
  });

  // Contextual Page Help Button & Modal
  const pageHelpBtn = document.getElementById('page-help-btn');
  if (pageHelpBtn) {
    pageHelpBtn.addEventListener('click', () => {
      openPageHelpModal(activePageKey);
    });
  }

  // User Profile Dropdown Toggle
  const userProfileBtn = document.getElementById('user-profile-btn');
  const userProfileDropdown = document.getElementById('user-profile-dropdown');
  if (userProfileBtn && userProfileDropdown) {
    userProfileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isVisible = userProfileDropdown.style.display === 'block';
      userProfileDropdown.style.display = isVisible ? 'none' : 'block';
    });

    document.addEventListener('click', (e) => {
      if (!userProfileBtn.contains(e.target) && !userProfileDropdown.contains(e.target)) {
        userProfileDropdown.style.display = 'none';
      }
    });
  }

  // Logout Buttons (Direct header and dropdown)
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      logout();
    });
  }

  const menuSignoutBtn = document.getElementById('menu-signout-btn');
  if (menuSignoutBtn) {
    menuSignoutBtn.addEventListener('click', () => {
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

function openPageHelpModal(activePageKey) {
  const existing = document.getElementById('page-help-overlay');
  if (existing) existing.remove();

  const help = getPageHelp(activePageKey);
  const overlay = document.createElement('div');
  overlay.id = 'page-help-overlay';
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-content" role="dialog" aria-modal="true" aria-label="${help.title}">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1rem;">
        <div style="display:flex; align-items:center; gap:0.6rem;">
          <span style="width:38px; height:38px; border-radius:var(--radius-md); background:var(--primary-blue-light); color:var(--primary-blue); display:inline-flex; align-items:center; justify-content:center; flex-shrink:0;">
            ${icon('help-circle', '', 20)}
          </span>
          <div>
            <div style="font-weight:800; font-size:1.05rem; color:var(--text-main);">${help.title}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${t('pageHelpSubtitle')}</div>
          </div>
        </div>
        <button id="page-help-close" class="btn btn-outline btn-icon" aria-label="Close" style="height:32px; width:32px; border-radius:50%; padding:0; display:inline-flex; align-items:center; justify-content:center; flex-shrink:0;">
          ${icon('x', '', 15)}
        </button>
      </div>
      <ul style="margin:0 0 1.25rem 1.15rem; padding:0; font-size:0.9rem; color:var(--text-secondary); line-height:1.75;">
        ${help.points.map(p => `<li style="margin-bottom:0.4rem;">${p}</li>`).join('')}
      </ul>
      <div style="display:flex; justify-content:flex-end; gap:0.6rem; border-top:1px solid var(--border-subtle); padding-top:1rem;">
        <a href="${getBasePath()}shared/help.html" class="btn btn-outline btn-sm">${icon('book-open', '', 14)} <span>${t('fullGuide')}</span></a>
        <button id="page-help-done" class="btn btn-primary btn-sm">${t('gotIt')}</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  renderIcons(overlay);

  const close = () => overlay.remove();
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  overlay.querySelector('#page-help-close').addEventListener('click', close);
  overlay.querySelector('#page-help-done').addEventListener('click', close);
  document.addEventListener('keydown', function esc(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
  });
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
