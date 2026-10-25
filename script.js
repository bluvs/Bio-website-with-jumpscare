/**
 * V3nn0 // biolink.sh - Interactive Logic
 * Red Embers Particle Canvas, Linux Boot, Music Player & Ransomware Prank
 */

// ============================================================================
// CONFIGURATION
// ============================================================================
const CONFIG = {
  username: "c7uj",
  payloadName: "c7uj.exe",
  extension: ".c7uj",
  prankDurationMs: 4600, // Duration in ms before "JUST KIDDING" pops up
  startTimerSeconds: 17 * 3600 + 48 * 60 + 53, // 17:48:53 from screenshot
  initialLockedFiles: 1337,
};

let startTrackPlaybackFromZero = function() {};

// ============================================================================
// 1. SYNTHESIZED WEB AUDIO ENGINE (Zero external dependencies)
// ============================================================================
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.musicPlaying = false;
    this.musicNodes = null;
    this.musicInterval = null;
    this.exorcistBuffer = null;
    this.classicBuffer = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.preloadJumpscareSounds();
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.muted && this.musicPlaying) {
      this.stopMusic();
    }
    return !this.muted;
  }

  // Soft keyboard mechanical click for terminal typing
  playKeyClick() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(360 + Math.random() * 180, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {}
  }

  // System beep when Linux boot finishes
  playBootBeep() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, this.ctx.currentTime);
      osc.frequency.setValueAtTime(1320, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.22);
    } catch (e) {}
  }

  // Alarming glitch bass drop & siren for "DON'T CLICK"
  playAlarmGlitch() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // Heavy sub-bass drop
      const bass = this.ctx.createOscillator();
      const bassGain = this.ctx.createGain();
      bass.type = 'sawtooth';
      bass.frequency.setValueAtTime(220, now);
      bass.frequency.exponentialRampToValueAtTime(35, now + 0.7);
      bassGain.gain.setValueAtTime(0.26, now);
      bassGain.gain.exponentialRampToValueAtTime(0.01, now + 0.8);
      bass.connect(bassGain);
      bassGain.connect(this.ctx.destination);
      bass.start(now);
      bass.stop(now + 0.8);

      // Noise burst
      const bufferSize = this.ctx.sampleRate * 0.38;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.18, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);
      noise.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);
      noise.start(now);

      // Siren buzz
      const siren = this.ctx.createOscillator();
      const sirenGain = this.ctx.createGain();
      siren.type = 'square';
      siren.frequency.setValueAtTime(650, now + 0.1);
      siren.frequency.setValueAtTime(850, now + 0.25);
      siren.frequency.setValueAtTime(650, now + 0.4);
      siren.frequency.setValueAtTime(850, now + 0.55);
      sirenGain.gain.setValueAtTime(0.08, now + 0.1);
      sirenGain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
      siren.connect(sirenGain);
      sirenGain.connect(this.ctx.destination);
      siren.start(now + 0.1);
      siren.stop(now + 0.7);
    } catch (e) {}
  }

  // Fast disk crunching / encryption chatter
  playDataCrunch() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(100 + Math.random() * 400, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.02, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.03);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.03);
    } catch (e) {}
  }

  // Cheerful chime when "JUST KIDDING" is revealed
  playRevealChime() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = this.ctx.currentTime + idx * 0.09;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.12, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.28);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.28);
      });
    } catch (e) {}
  }

  // Pre-buffer authentic horror scream samples for zero-latency violent playback
  preloadJumpscareSounds() {
    try {
      if (!this.ctx) return;
      if (!this.exorcistBuffer) {
        fetch('assets/exorcist_scream.mp3')
          .then(r => r.arrayBuffer())
          .then(buf => this.ctx.decodeAudioData(buf))
          .then(decoded => { this.exorcistBuffer = decoded; })
          .catch(() => {});
      }
      if (!this.classicBuffer) {
        fetch('assets/scream_classic.mp3')
          .then(r => r.arrayBuffer())
          .then(buf => this.ctx.decodeAudioData(buf))
          .then(decoded => { this.classicBuffer = decoded; })
          .catch(() => {});
      }
    } catch (e) {}
  }

  // Pure authentic, deafening scream (No cartoonish synth FM buzzes)
  playAuthenticScream() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // 1. Play pre-buffered authentic Exorcist scream with boosted gain (+6dB)
      if (this.exorcistBuffer) {
        const source = this.ctx.createBufferSource();
        source.buffer = this.exorcistBuffer;
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(2.0, now);
        source.connect(gain);
        gain.connect(this.ctx.destination);
        source.start(now);
      }

      // 2. Layer classic high-pitch terror scream
      if (this.classicBuffer) {
        const source2 = this.ctx.createBufferSource();
        source2.buffer = this.classicBuffer;
        const gain2 = this.ctx.createGain();
        gain2.gain.setValueAtTime(1.6, now);
        source2.connect(gain2);
        gain2.connect(this.ctx.destination);
        source2.start(now);
      }

      // 3. Sub-bass visceral shockwave (80Hz -> 20Hz chest punch)
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(80, now);
      subOsc.frequency.exponentialRampToValueAtTime(20, now + 0.6);
      subGain.gain.setValueAtTime(1.2, now);
      subGain.gain.exponentialRampToValueAtTime(0.01, now + 0.8);
      subOsc.connect(subGain);
      subGain.connect(this.ctx.destination);
      subOsc.start(now);
      subOsc.stop(now + 0.8);
    } catch (e) {}
  }

  // Synthwave bass groove for "Tax Free - Styl Życia Haram"
  toggleMusic() {
    if (this.musicPlaying) {
      this.stopMusic();
      return false;
    } else {
      this.startMusic();
      return true;
    }
  }

  startMusic(volume = 0.75) {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.musicPlaying) return;

      const masterGain = this.ctx.createGain();
      masterGain.gain.setValueAtTime(this.muted ? 0 : 0.08 * volume, this.ctx.currentTime);
      masterGain.connect(this.ctx.destination);

      // Deep sub-bass foundation
      const bassOsc = this.ctx.createOscillator();
      const bassFilter = this.ctx.createBiquadFilter();
      const bassGain = this.ctx.createGain();
      bassOsc.type = 'sawtooth';
      bassOsc.frequency.setValueAtTime(55, this.ctx.currentTime); // A1 sub
      bassFilter.type = 'lowpass';
      bassFilter.frequency.setValueAtTime(220, this.ctx.currentTime);
      bassGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      bassOsc.connect(bassFilter);
      bassFilter.connect(bassGain);
      bassGain.connect(masterGain);
      bassOsc.start();

      // Atmospheric melodic synth sequence
      const notes = [220, 261.63, 293.66, 329.63, 349.23, 329.63, 293.66, 261.63];
      let step = 0;
      const interval = setInterval(() => {
        if (!this.musicPlaying || !this.ctx) {
          clearInterval(interval);
          return;
        }
        try {
          const now = this.ctx.currentTime;
          const osc = this.ctx.createOscillator();
          const g = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(notes[step % notes.length], now);
          g.gain.setValueAtTime(0.22, now);
          g.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
          osc.connect(g);
          g.connect(masterGain);
          osc.start(now);
          osc.stop(now + 0.32);
          step++;
        } catch (e) {}
      }, 240);

      this.musicNodes = { masterGain, bassOsc, interval };
      this.musicPlaying = true;
    } catch (e) {}
  }

  stopMusic() {
    if (this.musicNodes) {
      try {
        if (this.musicNodes.interval) clearInterval(this.musicNodes.interval);
        if (this.musicNodes.bassOsc) this.musicNodes.bassOsc.stop();
      } catch (e) {}
      this.musicNodes = null;
    }
    this.musicPlaying = false;
  }

  setMusicVolume(vol) {
    if (this.musicNodes && this.musicNodes.masterGain && this.ctx) {
      try {
        const val = this.muted ? 0 : 0.08 * vol;
        this.musicNodes.masterGain.gain.setValueAtTime(val, this.ctx.currentTime);
      } catch (e) {}
    }
  }
}

const sounds = new SoundEngine();

// ============================================================================
// 2. RED EMBERS BACKGROUND CANVAS
// ============================================================================
function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const embers = [];
  const EMBER_COUNT = Math.min(50, Math.floor(width / 22));

  for (let i = 0; i < EMBER_COUNT; i++) {
    embers.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: - (Math.random() * 0.45 + 0.15), // Drift upward like embers
      radius: Math.random() * 1.8 + 0.8,
      alpha: Math.random() * 0.7 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < embers.length; i++) {
      const e = embers[i];
      e.x += e.vx;
      e.y += e.vy;
      e.alpha += Math.sin(Date.now() * e.pulseSpeed) * 0.008;

      if (e.y < -10) {
        e.y = height + 10;
        e.x = Math.random() * width;
      }
      if (e.x < -10) e.x = width + 10;
      if (e.x > width + 10) e.x = -10;

      ctx.beginPath();
      ctx.arc(e.x, e.y, e.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.15, Math.min(0.85, e.alpha))})`;
      ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    requestAnimationFrame(render);
  }

  render();
}

// ============================================================================
// 3. ARCH LINUX SYSTEMD BOOT SEQUENCE & SCRIPT EXECUTION (1:1 Arch)
// ============================================================================
const ARCH_BOOT_LINES = [
  { hook: true, text: ":: running early hook [udev]" },
  { raw: true, text: "Starting systemd-udevd version 255.4-2-arch..." },
  { hook: true, text: ":: running hook [udev]" },
  { raw: true, text: ":: Triggering uevents..." },
  { hook: true, text: ":: running hook [filesystems]" },
  { raw: true, text: ":: mounting 'UUID=4a92c81e-128f-4b03-911a-7b3b4f6e1092' on real root" },
  { raw: true, text: ":: Mounting /sys, /proc, /dev..." },
  { ok: true, text: "Created slice Slice /system/modprobe." },
  { ok: true, text: "Started Dispatch Password Requests to Console Directory Watch." },
  { ok: true, text: "Reached target Local Encrypted Volumes." },
  { ok: true, text: "Reached target Paths." },
  { ok: true, text: "Reached target Remote File Systems." },
  { ok: true, text: "Reached target Slice Units." },
  { ok: true, text: "Listening on Device-mapper event daemon Socket." },
  { ok: true, text: "Listening on Process Core Dump Socket." },
  { ok: true, text: "Listening on Journal Socket." },
  { ok: true, text: "Starting Journal Service..." },
  { ok: true, text: "Started Journal Service." },
  { ok: true, text: "Starting Flush Journal to Persistent Storage..." },
  { ok: true, text: "Started Flush Journal to Persistent Storage." },
  { ok: true, text: "Starting Apply Kernel Variables..." },
  { ok: true, text: "Started Apply Kernel Variables." },
  { ok: true, text: "Started Rule-based Manager for Device Events and Files." },
  { ok: true, text: "Reached target System Initialization." },
  { ok: true, text: "Started Daily Cleanup of Temporary Directories." },
  { ok: true, text: "Reached target Basic System." },
  { ok: true, text: "Started Network Configuration." },
  { ok: true, text: "Reached target Network." },
  { ok: true, text: "Reached target Network is Online." },
  { ok: true, text: "Reached target Multi-User System." },
  { ok: true, text: "Reached target Graphical Interface." },
];

let bootRunning = false;
let bootTimeoutIds = [];

function clearAllBootTimers() {
  bootTimeoutIds.forEach((id) => clearTimeout(id));
  bootTimeoutIds = [];
}

function safeTimeout(fn, delay) {
  const id = setTimeout(fn, delay);
  bootTimeoutIds.push(id);
  return id;
}

function startLinuxBoot() {
  clearAllBootTimers();
  bootRunning = true;

  const bootScreen = document.getElementById('boot-screen');
  const biolinkApp = document.getElementById('biolink-app');
  const kernelLogs = document.getElementById('kernel-logs');
  const shellPromptArea = document.getElementById('shell-prompt-area');
  const cmd1 = document.getElementById('cmd1');
  const cmd2 = document.getElementById('cmd2');
  const cmd2Wrapper = document.getElementById('cmd2-wrapper');
  const cursor1 = document.getElementById('cursor1');
  const cursor2 = document.getElementById('cursor2');
  const scriptOutput = document.getElementById('script-output');
  const terminalBody = document.getElementById('boot-terminal-body');

  bootScreen.classList.remove('hidden');
  biolinkApp.classList.add('hidden');

  kernelLogs.innerHTML = '';
  cmd1.textContent = '';
  cmd2.textContent = '';
  cursor1.style.display = 'inline';
  cursor2.style.display = 'inline';
  cmd2Wrapper.classList.add('hidden');
  scriptOutput.classList.add('hidden');
  scriptOutput.innerHTML = '';
  shellPromptArea.classList.add('hidden');

  // Stream Arch Boot Logs
  let lineIdx = 0;
  function streamKernel() {
    if (!bootRunning) return;
    if (lineIdx < ARCH_BOOT_LINES.length) {
      const line = ARCH_BOOT_LINES[lineIdx];
      const div = document.createElement('div');
      div.className = 'log-line';

      if (line.hook) {
        div.innerHTML = `<span class="log-hook">${line.text}</span>`;
      } else if (line.ok) {
        div.innerHTML = `<span class="log-ok">[  OK  ]</span> <span class="log-text">${line.text}</span>`;
      } else {
        div.innerHTML = `<span class="log-text">${line.text}</span>`;
      }
      kernelLogs.appendChild(div);

      terminalBody.scrollTop = terminalBody.scrollHeight;
      lineIdx++;

      safeTimeout(streamKernel, 35);
    } else {
      safeTimeout(initShellTyping, 240);
    }
  }

  streamKernel();

  function initShellTyping() {
    if (!bootRunning) return;
    shellPromptArea.classList.remove('hidden');
    terminalBody.scrollTop = terminalBody.scrollHeight;

    // Type: chmod +x biolink.sh
    typeCommand("chmod +x biolink.sh", cmd1, () => {
      cursor1.style.display = 'none';
      safeTimeout(() => {
        cmd2Wrapper.classList.remove('hidden');
        terminalBody.scrollTop = terminalBody.scrollHeight;

        // Type: ./biolink.sh
        typeCommand("./biolink.sh", cmd2, () => {
          cursor2.style.display = 'none';
          safeTimeout(executeBiolinkScript, 220);
        });
      }, 220);
    });
  }

  function typeCommand(text, targetEl, onComplete) {
    let charIdx = 0;
    function typeChar() {
      if (!bootRunning) return;
      if (charIdx < text.length) {
        targetEl.textContent += text[charIdx];
        charIdx++;
        safeTimeout(typeChar, 35 + Math.random() * 25);
      } else {
        safeTimeout(onComplete, 160);
      }
    }
    typeChar();
  }

  function executeBiolinkScript() {
    if (!bootRunning) return;
    scriptOutput.classList.remove('hidden');

    const scriptLines = [
      "[*] Initializing biolink runtime environment...",
      "[*] Mounting profile & aesthetic assets........ [ OK ]",
      "[*] Spawning biolink server on 0.0.0.0:1337..... [ OK ]",
      "[!] SYSTEM READY. Launching interface...",
    ];

    let sIdx = 0;
    function streamScript() {
      if (!bootRunning) return;
      if (sIdx < scriptLines.length) {
        const p = document.createElement('div');
        p.textContent = scriptLines[sIdx];
        scriptOutput.appendChild(p);
        terminalBody.scrollTop = terminalBody.scrollHeight;

        sIdx++;
        safeTimeout(streamScript, 110);
      } else {
        safeTimeout(finishBoot, 400);
      }
    }

    streamScript();
  }

  function finishBoot() {
    bootRunning = false;
    bootScreen.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    bootScreen.style.opacity = '0';
    bootScreen.style.transform = 'scale(1.01)';

    setTimeout(() => {
      bootScreen.classList.add('hidden');
      bootScreen.style.opacity = '1';
      bootScreen.style.transform = 'scale(1)';
      biolinkApp.classList.remove('hidden');
      startTrackPlaybackFromZero();
    }, 400);
  }
}

function skipBoot() {
  bootRunning = false;
  clearAllBootTimers();
  const bootScreen = document.getElementById('boot-screen');
  const biolinkApp = document.getElementById('biolink-app');
  bootScreen.classList.add('hidden');
  biolinkApp.classList.remove('hidden');
  startTrackPlaybackFromZero();
}

// ============================================================================
// 4. THE CLICKBAIT RANSOMWARE PRANK ENGINE (Silent, Fullscreen, Long Strobe, Black Screen)
// ============================================================================
const BASE_FILES_LIST = [
  `C:\\Users\\User\\Downloads\\IMG_2044.HEIC`,
  `C:\\Users\\User\\AppData\\Roaming\\.minecraft\\saves\\New World\\level.dat`,
  `C:\\Users\\User\\Desktop\\New Text Document.txt`,
  `C:\\Users\\User\\AppData\\Local\\Microsoft\\Edge\\User Data\\Default\\Cookies`,
  `C:\\Users\\User\\OneDrive\\Documents\\Book1.xlsx`,
  `C:\\Program Files (x86)\\Steam\\config\\loginusers.vdf`,
  `C:\\Users\\User\\Videos\\Captures\\2026-06-18 22-41-07.mp4`,
];

const ADDITIONAL_SPOOF_FILES = [
  `C:\\Users\\User\\AppData\\Local\\Discord\\Local Storage\\leveldb\\000142.ldb`,
  `C:\\Users\\User\\Desktop\\passwords_2026_DONOTOPEN.txt`,
  `C:\\Users\\User\\AppData\\Roaming\\Telegram Desktop\\tdata\\D87FB34768C29D82`,
  `C:\\Users\\User\\Documents\\Praca_Magisterska_FINAL_v3.docx`,
  `C:\\Users\\User\\Pictures\\Screenshots\\Discord_Nitro_Receipt.png`,
  `C:\\Users\\User\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Login Data`,
  `C:\\Users\\User\\.ssh\\id_rsa`,
  `C:\\Users\\User\\Desktop\\crypto_wallet_seed_phrase.txt`,
  `C:\\Program Files (x86)\\Ubisoft\\Ubisoft Game Launcher\\savegames\\save.dat`,
  `C:\\Users\\User\\AppData\\Roaming\\.minecraft\\launcher_profiles.json`,
  `C:\\Users\\User\\Desktop\\Roblox_Cookie_Backup.log`,
  `C:\\Users\\User\\Videos\\Valorant_Ace_Clip.mp4`,
  `C:\\Users\\User\\Documents\\Zeznanie_Podatkowe_PIT-37.pdf`,
  `C:\\Users\\User\\AppData\\Local\\Spotify\\Storage\\user_credentials.db`,
];

// ============================================================================
// 4. THE GENUINE HORROR JUMPSCARE ENGINE (The Iconic Scary Maze Dread)
// ============================================================================
let jumpscareActive = false;
let jumpscareAudio1 = null;
let jumpscareAudio2 = null;
let wasMusicPlayingBeforeJumpscare = false;
let jumpscareTimer = null;
let flickerInterval = null;

function triggerMegaJumpscare() {
  if (jumpscareActive) return;
  jumpscareActive = true;

  // 1. Immediately cut all sound dead (Dead Silence)
  const bgAudio = document.getElementById('bg-audio');
  if (bgAudio && !bgAudio.paused) {
    wasMusicPlayingBeforeJumpscare = true;
    bgAudio.pause();
  } else {
    wasMusicPlayingBeforeJumpscare = false;
  }

  // 2. Fullscreen activation immediately allowed by user gesture
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen().catch(() => {});
  }

  // 3. THE SUSPENSE / DROP (240ms of dead quiet & black flash before the strike)
  // This psychological pause makes the user's brain drop its guard ("Wait, did it freeze?")
  const jumpscareOverlay = document.getElementById('jumpscare-overlay');
  const jumpscareImg = document.getElementById('jumpscare-img');
  const blackReturnScreen = document.getElementById('black-return-screen');
  const ransomwareScreen = document.getElementById('ransomware-screen');
  const strobeOverlay = document.getElementById('strobe-overlay');

  if (ransomwareScreen) ransomwareScreen.classList.add('hidden');
  if (strobeOverlay) strobeOverlay.classList.add('hidden');
  if (blackReturnScreen) blackReturnScreen.classList.add('hidden');

  // Array of terrifying authentic horror images (The Exorcist + Jeff The Killer)
  const terrorImages = [
    'assets/exorcist.jpg',
    'assets/scare_classic.jpg',
  ];

  if (jumpscareImg) {
    jumpscareImg.src = terrorImages[0];
  }

  setTimeout(() => {
    if (!jumpscareActive) return;

    // 4. THE VISCERAL IMPACT! (Loud, authentic, ear-bleeding screams)
    sounds.init();
    sounds.playAuthenticScream();

    try {
      if (!jumpscareAudio1) {
        jumpscareAudio1 = new Audio('assets/exorcist_scream.mp3');
      }
      jumpscareAudio1.currentTime = 0;
      jumpscareAudio1.volume = 1.0;
      jumpscareAudio1.play().catch(() => {});
    } catch (e) {}

    try {
      if (!jumpscareAudio2) {
        jumpscareAudio2 = new Audio('assets/scream_classic.mp3');
      }
      jumpscareAudio2.currentTime = 0;
      jumpscareAudio2.volume = 1.0;
      jumpscareAudio2.play().catch(() => {});
    } catch (e) {}

    // Reveal jumpscare overlay
    if (jumpscareOverlay) {
      jumpscareOverlay.classList.remove('hidden');
    }

    // Rapid alternating horror frames (every 95ms)
    let imgIdx = 0;
    if (flickerInterval) clearInterval(flickerInterval);
    flickerInterval = setInterval(() => {
      if (!jumpscareActive || !jumpscareImg) return;
      imgIdx = (imgIdx + 1) % terrorImages.length;
      jumpscareImg.src = terrorImages[imgIdx];
    }, 95);

    // 5. After ~2.4 seconds of peak terror, snap abruptly to pure silence in the pitch-black void
    if (jumpscareTimer) clearTimeout(jumpscareTimer);
    jumpscareTimer = setTimeout(() => {
      if (flickerInterval) clearInterval(flickerInterval);
      if (jumpscareOverlay) jumpscareOverlay.classList.add('hidden');
      if (blackReturnScreen) blackReturnScreen.classList.remove('hidden');

      if (jumpscareAudio1) {
        jumpscareAudio1.pause();
        jumpscareAudio1.currentTime = 0;
      }
      if (jumpscareAudio2) {
        jumpscareAudio2.pause();
        jumpscareAudio2.currentTime = 0;
      }
    }, 2400);

  }, 240); // 240ms psychological suspense drop
}

function returnToBiolink() {
  const jumpscareOverlay = document.getElementById('jumpscare-overlay');
  const blackReturnScreen = document.getElementById('black-return-screen');
  const ransomwareScreen = document.getElementById('ransomware-screen');
  const dontClickBtn = document.getElementById('dont-click-btn');
  const bgAudio = document.getElementById('bg-audio');

  if (jumpscareTimer) clearTimeout(jumpscareTimer);
  if (flickerInterval) clearInterval(flickerInterval);

  if (jumpscareAudio1) {
    jumpscareAudio1.pause();
    jumpscareAudio1.currentTime = 0;
  }
  if (jumpscareAudio2) {
    jumpscareAudio2.pause();
    jumpscareAudio2.currentTime = 0;
  }

  if (jumpscareOverlay) jumpscareOverlay.classList.add('hidden');
  if (ransomwareScreen) ransomwareScreen.classList.add('hidden');
  if (blackReturnScreen) blackReturnScreen.classList.add('hidden');

  // Exit fullscreen if active
  if (document.fullscreenElement && document.exitFullscreen) {
    document.exitFullscreen().catch(() => {});
  }

  jumpscareActive = false;

  // Resume music playback if it was playing
  if (wasMusicPlayingBeforeJumpscare && bgAudio) {
    bgAudio.play().then(() => {
      const playPauseIcon = document.getElementById('play-pause-icon');
      if (playPauseIcon) playPauseIcon.textContent = '❚❚';
    }).catch(() => {});
  }

  // Update button text
  if (dontClickBtn) {
    dontClickBtn.textContent = "DON'T CLICK (AGAIN? 💀)";
  }

  showToast("Ocalałeś! 💀 Wrócono do profilu");
}

function triggerPrankSequence() {
  triggerMegaJumpscare();
}

// ============================================================================
// 5. CLIPBOARD & TOAST SYSTEM
// ============================================================================
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('hidden');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add('hidden');
  }, 3200);
}

// ============================================================================
// 6. DYNAMIC CUSTOM MOUSE CURSOR (Dual-Circle Physics & White Trail)
// ============================================================================
function initCustomCursor() {
  const ring = document.getElementById('custom-cursor-ring');
  const dot = document.getElementById('custom-cursor-dot');
  const canvas = document.getElementById('cursor-trail-canvas');
  if (!ring || !dot || !canvas) return;

  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;
  let dpr = window.devicePixelRatio || 1;

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = window.devicePixelRatio || 1;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  let mouseX = -100;
  let mouseY = -100;
  let prevMouseX = -100;
  let prevMouseY = -100;
  let vx = 0;
  let vy = 0;

  // Solid Dot position (leads with movement velocity)
  let dotX = -100;
  let dotY = -100;

  // Outer Hollow Ring position (smooth spring damping lag)
  let ringX = -100;
  let ringY = -100;

  let isInitialized = false;
  let moveTimeout = null;

  // Trail storage: ribbon points and stardust sparks
  const ribbonPoints = [];
  const sparks = [];

  window.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') return;

    if (!isInitialized) {
      mouseX = prevMouseX = dotX = ringX = e.clientX;
      mouseY = prevMouseY = dotY = ringY = e.clientY;
      ring.style.opacity = '1';
      dot.style.opacity = '1';
      isInitialized = true;
    } else {
      mouseX = e.clientX;
      mouseY = e.clientY;
      ring.style.opacity = '1';
      dot.style.opacity = '1';
    }

    if (moveTimeout) clearTimeout(moveTimeout);
    moveTimeout = setTimeout(() => {
      vx = 0;
      vy = 0;
    }, 45);
  });

  document.addEventListener('mouseleave', () => {
    ring.style.opacity = '0';
    dot.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    if (isInitialized) {
      ring.style.opacity = '1';
      dot.style.opacity = '1';
    }
  });

  window.addEventListener('mousedown', () => {
    ring.classList.add('is-clicking');
    dot.classList.add('is-clicking');
  });

  window.addEventListener('mouseup', () => {
    ring.classList.remove('is-clicking');
    dot.classList.remove('is-clicking');
  });

  // Interactive hover detection
  const interactiveSelectors = 'a, button, [data-copy], .lang-pill, .social-btn, .ios-ctrl-btn, .ios-play-btn, .ios-vol-btn, .ios-progress-bar, #return-trigger, #skip-hint, .dont-click-corner-btn, .vol-icon-btn, .volume-slider-track';
  document.addEventListener('mouseover', (e) => {
    if (e.target && e.target.closest && e.target.closest(interactiveSelectors)) {
      ring.classList.add('is-hovering');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target && e.target.closest && e.target.closest(interactiveSelectors)) {
      ring.classList.remove('is-hovering');
    }
  });

  function renderCursor() {
    if (isInitialized) {
      // Calculate velocity with smoothing
      const rawVx = mouseX - prevMouseX;
      const rawVy = mouseY - prevMouseY;
      vx = rawVx * 0.75 + vx * 0.25;
      vy = rawVy * 0.75 + vy * 0.25;
      prevMouseX = mouseX;
      prevMouseY = mouseY;

      const speed = Math.hypot(vx, vy);

      // Solid dot leading target: shoots forward faster in direction of travel
      // "jak sie ruszy to te kolko pelne idzie szybciej i one wychodzi z tego"
      const leadMultiplier = Math.min(speed * 0.35, 48);
      const angle = Math.atan2(vy, vx);
      const targetDotX = mouseX + (speed > 0.4 ? Math.cos(angle) * leadMultiplier : 0);
      const targetDotY = mouseY + (speed > 0.4 ? Math.sin(angle) * leadMultiplier : 0);

      // Fast tracking for inner solid dot (0.75 lerp)
      dotX += (targetDotX - dotX) * 0.75;
      dotY += (targetDotY - dotY) * 0.75;

      // Outer hollow ring lags behind with smooth inertia (0.13 lerp)
      // "ale jak sie zatrzyma to znowu jest w tym nie pelny"
      ringX += (mouseX - ringX) * 0.13;
      ringY += (mouseY - ringY) * 0.13;

      // Update element transforms
      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

      // Spawn ribbon trail points
      if (speed > 0.4) {
        ribbonPoints.unshift({
          x: dotX,
          y: dotY,
          alpha: 0.9,
          size: Math.min(speed * 0.35 + 2.5, 7.5)
        });
        if (ribbonPoints.length > 22) {
          ribbonPoints.pop();
        }

        // Spawn white stardust sparks while moving
        if (speed > 1.8 && Math.random() < 0.65) {
          sparks.push({
            x: dotX + (Math.random() - 0.5) * 6,
            y: dotY + (Math.random() - 0.5) * 6,
            vx: -vx * 0.12 + (Math.random() - 0.5) * 1.6,
            vy: -vy * 0.12 + (Math.random() - 0.5) * 1.6,
            size: Math.random() * 2.2 + 0.9,
            alpha: 0.9,
            decay: Math.random() * 0.035 + 0.02
          });
        }
      }
    }

    // DRAW CANVAS TRAIL
    ctx.clearRect(0, 0, width, height);

    // 1. Glowing white ribbon trail
    if (ribbonPoints.length > 1) {
      for (let i = 0; i < ribbonPoints.length - 1; i++) {
        const pt1 = ribbonPoints[i];
        const pt2 = ribbonPoints[i + 1];

        pt1.alpha *= 0.88;
        pt1.size *= 0.92;

        if (pt1.alpha < 0.015) continue;

        ctx.beginPath();
        ctx.moveTo(pt1.x, pt1.y);
        ctx.lineTo(pt2.x, pt2.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${pt1.alpha * 0.75})`;
        ctx.lineWidth = Math.max(pt1.size, 0.6);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';
        ctx.shadowBlur = 8;
        ctx.stroke();
      }

      while (ribbonPoints.length > 0 && ribbonPoints[ribbonPoints.length - 1].alpha < 0.015) {
        ribbonPoints.pop();
      }
    }

    // 2. Glowing white sparks
    ctx.shadowBlur = 6;
    ctx.shadowColor = '#ffffff';
    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i];
      s.x += s.vx;
      s.y += s.vy;
      s.alpha -= s.decay;
      s.size *= 0.96;

      if (s.alpha <= 0.02 || s.size <= 0.2) {
        sparks.splice(i, 1);
        continue;
      }

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
      ctx.fill();
    }
    ctx.shadowBlur = 0;

    requestAnimationFrame(renderCursor);
  }

  requestAnimationFrame(renderCursor);
}

// ============================================================================
// 7. INITIALIZATION & EVENT LISTENERS
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initBackgroundCanvas();
  initCustomCursor();
  
  // Start background video playback safely
  const bgVideo = document.getElementById('bg-video');
  if (bgVideo) {
    bgVideo.play().catch(() => {});
  }

  startLinuxBoot();

  // Skip boot button / hint
  const skipHint = document.getElementById('skip-hint');
  if (skipHint) {
    skipHint.addEventListener('click', skipBoot);
  }
  const skipBtn = document.getElementById('skip-boot-btn');
  if (skipBtn) {
    skipBtn.addEventListener('click', skipBoot);
  }

  // Keyboard shortcut (ESC)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (bootRunning) {
        skipBoot();
      } else if (jumpscareActive) {
        returnToBiolink();
      }
    }
  });

  // THE DON'T CLICK BUTTON (Mega Terrifying Jumpscare)
  const dontClickBtn = document.getElementById('dont-click-btn');
  if (dontClickBtn) {
    dontClickBtn.addEventListener('click', () => {
      triggerMegaJumpscare();
    });
  }

  // BLACK SCREEN RETURN ("-- click to return --")
  const blackReturnScreen = document.getElementById('black-return-screen');
  if (blackReturnScreen) {
    blackReturnScreen.addEventListener('click', returnToBiolink);
  }

  // ============================================================================
  // MUSIC PLAYER (Tax Free - Styl Życia Haram) & DEDICATED IOS VOLUME BOX
  // ============================================================================
  const audio = document.getElementById('bg-audio');
  const musicPlayBtn = document.getElementById('music-play-btn');
  const playPauseIcon = document.getElementById('play-pause-icon');
  const prevTrackBtn = document.getElementById('prev-track-btn');
  const nextTrackBtn = document.getElementById('next-track-btn');
  const progressBar = document.getElementById('music-progress-bar');
  const timelineFill = document.getElementById('timeline-fill');
  const timeCurrent = document.getElementById('time-current');
  const timeRemaining = document.getElementById('time-remaining');

  // Volume slider elements
  const volMuteBtn = document.getElementById('vol-mute-btn');
  const volMaxBtn = document.getElementById('vol-max-btn');
  const volumeTrack = document.getElementById('volume-slider-track');
  const volumeFill = document.getElementById('volume-slider-fill');

  let trackDuration = 137; // 2:17 (trimmed from 60s silence)
  let currentSec = 0; // Starts strictly from 0:00!
  let isPlaying = false;
  let playerInterval = null;
  let currentVolume = 0.75;
  let savedVolume = 0.75;

  function formatTime(s) {
    s = Math.max(0, s);
    const mins = Math.floor(s / 60);
    const secs = Math.floor(s % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  function updateTimelineUI() {
    if (timelineFill) {
      const pct = trackDuration > 0 ? (currentSec / trackDuration) * 100 : 0;
      timelineFill.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    }
    if (timeCurrent) {
      timeCurrent.textContent = formatTime(currentSec);
    }
    if (timeRemaining) {
      const rem = Math.max(0, trackDuration - currentSec);
      timeRemaining.textContent = `-${formatTime(rem)}`;
    }
  }

  function setGlobalVolume(level) {
    currentVolume = Math.max(0, Math.min(1, level));
    if (volumeFill) {
      volumeFill.style.width = `${currentVolume * 100}%`;
    }
    if (audio) {
      audio.volume = currentVolume;
    }
    sounds.setMusicVolume(currentVolume);

    if (volMuteBtn) {
      volMuteBtn.style.opacity = currentVolume === 0 ? '0.45' : '1';
    }
  }

  function startPlaybackTimer() {
    if (playerInterval) clearInterval(playerInterval);
    playerInterval = setInterval(() => {
      if (audio && !audio.paused && !isNaN(audio.duration) && audio.duration > 0) {
        currentSec = audio.currentTime;
        trackDuration = audio.duration;
      } else {
        currentSec += 1;
        if (currentSec > trackDuration) currentSec = 0;
      }
      updateTimelineUI();
    }, 1000);
  }

  function stopPlaybackTimer() {
    if (playerInterval) {
      clearInterval(playerInterval);
      playerInterval = null;
    }
  }

  // Global function called on boot completion or skip ("gra od 0:00 po loadingu"):
  startTrackPlaybackFromZero = function() {
    currentSec = 0;
    updateTimelineUI();
    setGlobalVolume(currentVolume);

    if (audio) {
      audio.currentTime = 0;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          isPlaying = true;
          if (playPauseIcon) playPauseIcon.textContent = '❚❚';
          startPlaybackTimer();
        }).catch(() => {
          // If browser autoplay policy blocks unmuted audio before user interaction,
          // unlock and play immediately on the first click / keypress anywhere!
          const onFirstInteraction = () => {
            if (audio) {
              audio.currentTime = currentSec;
              audio.play().then(() => {
                isPlaying = true;
                if (playPauseIcon) playPauseIcon.textContent = '❚❚';
                startPlaybackTimer();
              }).catch(() => {});
            }
            window.removeEventListener('click', onFirstInteraction);
            window.removeEventListener('keydown', onFirstInteraction);
          };
          window.addEventListener('click', onFirstInteraction, { once: true });
          window.addEventListener('keydown', onFirstInteraction, { once: true });
        });
      }
    }
  };

  // Play / Pause button toggle
  if (musicPlayBtn) {
    musicPlayBtn.addEventListener('click', () => {
      if (isPlaying) {
        if (audio && !audio.paused) {
          audio.pause();
        }
        isPlaying = false;
        if (playPauseIcon) playPauseIcon.textContent = '▶';
        stopPlaybackTimer();
      } else {
        if (audio) {
          audio.currentTime = currentSec;
          audio.play().then(() => {
            isPlaying = true;
            if (playPauseIcon) playPauseIcon.textContent = '❚❚';
            startPlaybackTimer();
            showToast("Odtwarzanie: Styl Życia Haram 🎵");
          }).catch(() => {});
        }
      }
    });
  }

  // Previous button -> restart from 0:00
  if (prevTrackBtn) {
    prevTrackBtn.addEventListener('click', () => {
      currentSec = 0;
      if (audio) audio.currentTime = 0;
      updateTimelineUI();
      if (!isPlaying && musicPlayBtn) {
        musicPlayBtn.click();
      }
      showToast("Odtwarzanie od 0:00 ⏪");
    });
  }

  // Next button -> seek forward 15s
  if (nextTrackBtn) {
    nextTrackBtn.addEventListener('click', () => {
      currentSec = Math.min(trackDuration - 5, currentSec + 15);
      if (audio && !isNaN(audio.duration) && audio.duration > 0) {
        audio.currentTime = currentSec;
      }
      updateTimelineUI();
      showToast("Przewinięto +15s ⏩");
    });
  }

  // Progress Bar Seeking
  if (progressBar) {
    progressBar.style.cursor = 'pointer';
    progressBar.addEventListener('click', (e) => {
      const rect = progressBar.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      currentSec = pct * trackDuration;
      if (audio && !isNaN(audio.duration) && audio.duration > 0) {
        audio.currentTime = currentSec;
      }
      updateTimelineUI();
    });
  }

  // Audio element events
  if (audio) {
    audio.addEventListener('loadedmetadata', () => {
      if (audio.duration && !isNaN(audio.duration)) {
        trackDuration = audio.duration;
        updateTimelineUI();
      }
    });

    audio.addEventListener('ended', () => {
      currentSec = 0;
      if (audio) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      }
    });
  }

  // VOLUME BOX CONTROLS
  // Left button: speaker without waves (Mute / Restore)
  if (volMuteBtn) {
    volMuteBtn.addEventListener('click', () => {
      if (currentVolume > 0) {
        savedVolume = currentVolume;
        setGlobalVolume(0);
        showToast("Wyciszono 🔇");
      } else {
        setGlobalVolume(savedVolume > 0 ? savedVolume : 0.75);
        showToast("Dźwięk włączony 🔊");
      }
    });
  }

  // Right button: speaker with 3 waves (Max Volume 100%)
  if (volMaxBtn) {
    volMaxBtn.addEventListener('click', () => {
      setGlobalVolume(1.0);
      showToast("Głośność 100% 🔊");
    });
  }

  // Center: Volume slider track (click & drag)
  if (volumeTrack) {
    let isDraggingVol = false;
    function updateVolFromEvent(e) {
      const rect = volumeTrack.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      setGlobalVolume(pct);
    }

    volumeTrack.addEventListener('mousedown', (e) => {
      isDraggingVol = true;
      updateVolFromEvent(e);
    });

    window.addEventListener('mousemove', (e) => {
      if (isDraggingVol) {
        updateVolFromEvent(e);
      }
    });

    window.addEventListener('mouseup', () => {
      isDraggingVol = false;
    });
  }

  // Initial volume & UI setup (starts at 0:00)
  setGlobalVolume(0.75);
  updateTimelineUI();

  // COPY ON DISCORD CLICK
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Discord: skopiowano "${textToCopy}"! 📋`);
        }).catch(() => {
          showToast(`Discord: ${textToCopy}`);
        });
      }
    });
  });

  // Audio permission on first click
  window.addEventListener('click', () => {
    sounds.init();
  }, { once: true });
});
