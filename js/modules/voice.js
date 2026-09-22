/**
 * LIFE PATCH - Voice Interaction Engine
 * Robust Multilingual Web Speech API (Recognition & Synthesis)
 * Supports English (en-IN), Hindi (hi-IN), and Telugu (te-IN)
 */

import { getLanguage } from '../core/i18n.js';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export class VoiceSystem {
  constructor(options = {}) {
    this.recognition = null;
    this.isListening = false;
    this.finalTranscript = '';
    this.onResult = options.onResult || (() => {});
    this.onStatusChange = options.onStatusChange || (() => {});
    this.onError = options.onError || (() => {});
    this.isSupported = !!SpeechRecognition;
    this.currentLang = options.lang || this.getLangCode();

    if (this.isSupported) {
      this.initRecognition();
    }
  }

  initRecognition() {
    try {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.maxAlternatives = 1;
      this.recognition.lang = this.currentLang;

      this.recognition.onstart = () => {
        this.isListening = true;
        this.onStatusChange('listening');
      };

      this.recognition.onresult = (event) => {
        let interim = '';
        let fullFinal = '';

        for (let i = 0; i < event.results.length; ++i) {
          const res = event.results[i];
          if (res.isFinal) {
            fullFinal += res[0].transcript + ' ';
          } else {
            interim += res[0].transcript;
          }
        }

        const combined = (fullFinal + interim).trim();
        this.finalTranscript = fullFinal.trim();
        this.onResult(combined, fullFinal.length > 0);
      };

      this.recognition.onerror = (event) => {
        console.warn('SpeechRecognition error:', event.error);
        if (event.error === 'no-speech') {
          // Keep listening or ignore minor silence
          return;
        }
        this.isListening = false;
        this.onStatusChange('error');
        this.onError(event.error);
      };

      this.recognition.onend = () => {
        if (this.isListening) {
          // Restart if continuous listening was requested
          try {
            this.recognition.start();
            return;
          } catch (e) {
            // pass
          }
        }
        this.isListening = false;
        this.onStatusChange('stopped');
      };
    } catch (e) {
      console.error('Failed to initialize SpeechRecognition:', e);
      this.isSupported = false;
    }
  }

  getLangCode() {
    const lang = getLanguage();
    if (lang === 'hi') return 'hi-IN';
    if (lang === 'te') return 'te-IN';
    return 'en-IN';
  }

  setLanguage(langCode) {
    this.currentLang = langCode;
    if (this.recognition) {
      this.recognition.lang = langCode;
    }
  }

  start(langCode) {
    if (!this.isSupported) {
      this.onError('speech-not-supported');
      return false;
    }

    if (langCode) {
      this.setLanguage(langCode);
    } else {
      this.setLanguage(this.getLangCode());
    }

    try {
      this.finalTranscript = '';
      this.recognition.start();
      this.isListening = true;
      return true;
    } catch (e) {
      // If already started, stop and restart
      try {
        this.recognition.stop();
        setTimeout(() => {
          this.recognition.start();
          this.isListening = true;
        }, 100);
        return true;
      } catch (err) {
        console.warn('Speech start fallback error:', err);
        this.onError('recognition-failed');
        return false;
      }
    }
  }

  stop() {
    this.isListening = false;
    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch (e) {
        // pass
      }
    }
  }

  speak(text, langCode) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCode || this.currentLang || this.getLangCode();
    utterance.rate = 0.92;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  }
}
