/**
 * AlphaEdge Pro Academy - React Bits Interaction Engine
 * Features:
 *  - Spotlight hover tracking (--mouse-x, --mouse-y)
 *  - 3D Tilted Cards with specular sheen
 *  - Magnetic Buttons with spring release
 *  - Starfield / Constellation Particle Canvas
 *  - Real-time Product Simulators:
 *      1. Ultraviewer Candlestick & Blue Band Retest Engine
 *      2. U.O.P. Option Premium Decay & Morning Breakfast Visualizer
 *      3. Advance Feature Live Strike Matrix
 *      4. Multi-Timeframe Trend All Confluence Heatmap
 *  - Smooth Count-Up & Reveal Observer
 */

(function () {
  'use strict';

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // =========================================================================
  // 1. STARFIELD / CONSTELLATION PARTICLES (React Bits Particles Component)
  // =========================================================================
  function initParticleCanvas() {
    const canvas = document.getElementById('rb-particle-canvas');
    if (!canvas || isReducedMotion) return;

    const ctx = canvas.getContext('2d');
    let width, height, dpr;
    let particles = [];
    let mouse = { x: null, y: null, radius: 120 };

    function resize() {
      dpr = window.devicePixelRatio || 1;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    const count = Math.min(Math.floor(width / 22), 55);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.8,
        alpha: Math.random() * 0.5 + 0.25,
      });
    }

    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse avoidance/gentle attraction
        if (mouse.x !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x -= dx * force * 0.03;
            p.y -= dy * force * 0.03;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(53, 209, 196, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(0, 242, 254, 0.4)';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.18 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }

  // =========================================================================
  // 2. SPOTLIGHT CARDS (React Bits Spotlight Hover)
  // =========================================================================
  function initSpotlightCards() {
    document.addEventListener('pointermove', (e) => {
      const cards = document.querySelectorAll('.rb-spotlight-card, .pillar-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        // Check if mouse is near or inside
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  // =========================================================================
  // 3. 3D TILT EFFECT (React Bits Tilted Card)
  // =========================================================================
  function initTilt3D() {
    if (isReducedMotion) return;
    const tiltElements = document.querySelectorAll('.rb-tilt-card');

    tiltElements.forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const maxDeg = el.dataset.tiltMax ? parseFloat(el.dataset.tiltMax) : 10;

        el.style.transform = `perspective(1000px) rotateY(${x * maxDeg}deg) rotateX(${-y * maxDeg}deg) scale3d(1.02, 1.02, 1.02)`;
      });

      el.addEventListener('pointerleave', () => {
        el.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
      });
    });
  }

  // =========================================================================
  // 4. MAGNET BUTTONS (React Bits Magnetic Interaction)
  // =========================================================================
  function initMagnetButtons() {
    if (isReducedMotion) return;
    const buttons = document.querySelectorAll('.rb-magnet-btn');

    buttons.forEach((btn) => {
      if (btn.classList.contains('ae-btn-dashboard') || btn.closest('.ae-btn-dashboard')) return;
      btn.addEventListener('pointermove', (e) => {
        const rect = btn.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * 0.35;
        const dy = (e.clientY - cy) * 0.45;

        btn.style.transform = `translate(${dx}px, ${dy}px) scale(1.03)`;
      });

      btn.addEventListener('pointerleave', () => {
        btn.style.transform = 'translate(0px, 0px) scale(1)';
      });
    });
  }

  // =========================================================================
  // 5. BLUR TEXT & DECRYPTED TEXT INITIALIZATION
  // =========================================================================
  function initTextEffects() {
    const blurHeaders = document.querySelectorAll('.rb-blur-text');
    blurHeaders.forEach((h) => {
      const text = h.dataset.text || h.textContent.trim();
      h.innerHTML = '';
      const words = text.split(' ');
      words.forEach((word, idx) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.animationDelay = `${idx * 0.1}s`;
        h.appendChild(span);
        h.appendChild(document.createTextNode(' '));
      });
    });

    // Decrypted text scramble on hover
    const scrambleElements = document.querySelectorAll('[data-scramble], .rb-decrypt-badge');
    const glyphs = '0123456789ABCDEF!@#$%&*';

    scrambleElements.forEach((el) => {
      // Find text target (exclude .dot)
      const target = el.querySelector('.scramble-txt') || el;
      // Get only text content excluding .dot
      const originalText = target.innerText || target.textContent;
      let interval = null;

      el.addEventListener('mouseenter', () => {
        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {
          const scrambled = originalText
            .split('')
            .map((char, index) => {
              if (index < iteration) {
                return originalText[index];
              }
              if (char === ' ' || char === '\n') return char;
              return glyphs[Math.floor(Math.random() * glyphs.length)];
            })
            .join('');

          if (target === el) {
            // Keep .dot if present
            const dot = el.querySelector('.dot');
            if (dot) {
              target.innerHTML = '';
              target.appendChild(dot);
              target.appendChild(document.createTextNode(' ' + scrambled.trim()));
            } else {
              target.textContent = scrambled;
            }
          } else {
            target.textContent = scrambled;
          }

          if (iteration >= originalText.length) {
            clearInterval(interval);
          }
          iteration += 1 / 2;
        }, 28);
      });
    });
  }

  // =========================================================================
  // 6. STATS COUNTER & SCROLL REVEAL OBSERVER
  // =========================================================================
  function initScrollRevealAndCounters() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);

          const el = entry.target;
          if (el.dataset.count) {
            const target = parseFloat(el.dataset.count);
            const decimals = parseInt(el.dataset.decimals || 0, 10);
            const suffix = el.dataset.suffix || '';
            const duration = 1800;
            const startTime = performance.now();

            function updateCount(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // easeOutCubic
              const eased = 1 - Math.pow(1 - progress, 3);
              const currentVal = target * eased;

              el.textContent =
                (decimals ? currentVal.toFixed(decimals) : Math.round(currentVal).toLocaleString('en-IN')) + suffix;

              if (progress < 1) {
                requestAnimationFrame(updateCount);
              }
            }
            requestAnimationFrame(updateCount);
          } else {
            el.classList.add('in');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.rb-reveal, [data-count]').forEach((el) => observer.observe(el));
  }

  // =========================================================================
  // 7. ULTRAVIEWER V2.1 LIVE CANDLESTICK & BLUE BAND RETEST SIMULATOR
  // =========================================================================
  function initUltraviewerSimulator() {
    const canvas = document.getElementById('uv-chart-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, dpr;

    function resize() {
      dpr = window.devicePixelRatio || 1;
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    // Candle data generator
    let candles = [];
    let currentPrice = 24810.0;
    let mode = 'normal'; // 'retest', 'breakout', 'normal'
    let retestTimer = 0;

    function createCandle(open) {
      let delta = (Math.random() - 0.47) * 9;
      if (mode === 'retest') delta = -Math.random() * 6 - 2; // pulling back to blue band
      if (mode === 'breakout') delta = Math.random() * 12 + 4; // strong bounce from blue band

      const close = open + delta;
      const high = Math.max(open, close) + Math.random() * 4;
      const low = Math.min(open, close) - Math.random() * 4;
      return { o: open, c: close, h: high, l: low };
    }

    // Initialize 40 candles
    for (let i = 0; i < 40; i++) {
      const c = createCandle(currentPrice);
      currentPrice = c.c;
      candles.push(c);
    }

    const priceEl = document.getElementById('uv-live-price');
    const signalPill = document.getElementById('uv-signal-pill');

    function updateSimulationState() {
      if (mode === 'retest') {
        retestTimer++;
        if (retestTimer > 10) {
          mode = 'breakout';
          retestTimer = 0;
          if (signalPill) {
            signalPill.innerHTML = '<span class="dot"></span> ULTRAVIEWER BUY RETEST CONFIRMED';
            signalPill.style.color = '#2be39a';
            signalPill.style.borderColor = '#2be39a';
          }
        }
      } else if (mode === 'breakout') {
        retestTimer++;
        if (retestTimer > 8) {
          mode = 'normal';
          retestTimer = 0;
        }
      }
    }

    let lastTick = performance.now();
    function render(time) {
      if (time - lastTick > 650 && !isReducedMotion) {
        lastTick = time;
        updateSimulationState();

        const lastC = candles[candles.length - 1];
        const newC = createCandle(lastC.c);
        candles.push(newC);
        candles.shift();

        if (priceEl) {
          const isUp = newC.c >= newC.o;
          priceEl.textContent = newC.c.toFixed(2);
          priceEl.style.color = isUp ? 'var(--ae-bullish)' : 'var(--ae-bearish)';
        }
      }

      const isLight = document.documentElement.dataset.theme === 'light';

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = isLight ? '#f8fafc' : 'rgba(2, 9, 23, 0.9)';
      ctx.fillRect(0, 0, W, H);

      // Determine price scale
      const lows = candles.map((c) => c.l);
      const highs = candles.map((c) => c.h);
      const minP = Math.min(...lows) - 8;
      const maxP = Math.max(...highs) + 8;
      const candleWidth = W / candles.length;
      const getY = (val) => H - ((val - minP) / (maxP - minP)) * (H - 30) - 15;

      // Draw Grid Lines
      ctx.strokeStyle = isLight ? 'rgba(30, 58, 138, 0.1)' : 'rgba(56, 189, 248, 0.08)';
      ctx.lineWidth = 1;
      for (let y = 20; y < H; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }

      // 1. Draw Ultraviewer Blue Band (Smoothed Moving Ribbon)
      ctx.beginPath();
      candles.forEach((c, i) => {
        const x = i * candleWidth + candleWidth / 2;
        const bandTop = getY(c.c) - 18;
        if (i === 0) ctx.moveTo(x, bandTop);
        else ctx.lineTo(x, bandTop);
      });
      for (let i = candles.length - 1; i >= 0; i--) {
        const x = i * candleWidth + candleWidth / 2;
        const bandBottom = getY(candles[i].c) + 18;
        ctx.lineTo(x, bandBottom);
      }
      ctx.closePath();
      const bandGrad = ctx.createLinearGradient(0, 0, W, 0);
      bandGrad.addColorStop(0, isLight ? 'rgba(37, 99, 235, 0.12)' : 'rgba(47, 107, 255, 0.18)');
      bandGrad.addColorStop(0.5, isLight ? 'rgba(14, 116, 144, 0.18)' : 'rgba(0, 242, 254, 0.28)');
      bandGrad.addColorStop(1, isLight ? 'rgba(37, 99, 235, 0.12)' : 'rgba(47, 107, 255, 0.18)');
      ctx.fillStyle = bandGrad;
      ctx.fill();

      // Blue Band Center Line (Trend Confirmation Line - TCL)
      ctx.beginPath();
      candles.forEach((c, i) => {
        const x = i * candleWidth + candleWidth / 2;
        const y = getY(c.c);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.strokeStyle = isLight ? 'rgba(37, 99, 235, 0.65)' : 'rgba(53, 209, 196, 0.55)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // 2. Draw Candlesticks
      const upCol = isLight ? '#16a34a' : '#2be39a';
      const dnCol = isLight ? '#dc2626' : '#ff5d73';
      candles.forEach((c, i) => {
        const x = i * candleWidth + candleWidth / 2;
        const isBullish = c.c >= c.o;
        const candleColor = isBullish ? upCol : dnCol;

        // Wick
        ctx.beginPath();
        ctx.moveTo(x, getY(c.h));
        ctx.lineTo(x, getY(c.l));
        ctx.strokeStyle = candleColor;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Body
        const topY = getY(Math.max(c.o, c.c));
        const bodyH = Math.max(2, Math.abs(getY(c.o) - getY(c.c)));
        const bodyW = candleWidth * 0.65;

        ctx.fillStyle = candleColor;
        ctx.fillRect(x - bodyW / 2, topY, bodyW, bodyH);
      });

      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    // Interactive Trigger Buttons
    const btnTriggerRetest = document.getElementById('uv-btn-retest');
    if (btnTriggerRetest) {
      btnTriggerRetest.addEventListener('click', (e) => {
        e.preventDefault();
        mode = 'retest';
        retestTimer = 0;
        if (signalPill) {
          signalPill.innerHTML = '<span class="dot" style="background:#ffc24a"></span> PULLBACK TO BLUE BAND IN PROGRESS...';
          signalPill.style.color = '#ffc24a';
          signalPill.style.borderColor = '#ffc24a';
        }
      });
    }
  }

  // =========================================================================
  // 8. ALPHA EDGE U.O.P. THEORY V2.1 - MORNING BREAKFAST & DECAY SIMULATOR
  // =========================================================================
  function initUOPSimulator() {
    const decayBarsContainer = document.getElementById('uop-decay-bars');
    const breakfastTimerEl = document.getElementById('uop-breakfast-timer');
    const strikeSlider = document.getElementById('uop-strike-slider');
    const strikeValEl = document.getElementById('uop-strike-display');

    if (!decayBarsContainer) return;

    const barCount = 14;
    let baseHeights = [95, 88, 80, 72, 65, 58, 52, 45, 38, 32, 26, 21, 16, 12];

    decayBarsContainer.innerHTML = baseHeights
      .map(
        (h, i) =>
          `<div class="rb-uop-bar" style="height:${h}%; animation-delay:${i * 0.06}s" title="Tick ${i + 1}"></div>`
      )
      .join('');

    function updateDecayBars(factor) {
      const bars = decayBarsContainer.querySelectorAll('.rb-uop-bar');
      bars.forEach((b, i) => {
        const decayRate = Math.max(10, Math.round(baseHeights[i] * factor));
        b.style.height = `${decayRate}%`;
      });
    }

    if (strikeSlider) {
      strikeSlider.addEventListener('input', (e) => {
        const val = e.target.value;
        if (strikeValEl) strikeValEl.textContent = `${val} CE`;
        const factor = (25000 - val) / 500 + 0.6;
        updateDecayBars(Math.max(0.4, Math.min(1.2, factor)));
      });
    }

    // Morning Breakfast Live countdown clock
    let sec = 45;
    let min = 28;
    setInterval(() => {
      sec++;
      if (sec >= 60) {
        sec = 0;
        min++;
      }
      if (breakfastTimerEl) {
        breakfastTimerEl.textContent = `09:${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec} IST`;
      }
    }, 1000);
  }

  // =========================================================================
  // 9. ALPHA EDGE ADVANCE FEATURE V2.1 - STRIKE MATRIX ORDERBOOK SIMULATOR
  // =========================================================================
  function initAdvanceMatrixSimulator() {
    const matrixContainer = document.getElementById('adv-strike-table');
    if (!matrixContainer) return;

    const strikes = [
      { s: '24800 CE', h: 142.5, l: 38.0, oi: '4.8M', buyer: 68 },
      { s: '24850 CE', h: 96.0, l: 22.4, oi: '3.2M', buyer: 72 },
      { s: '24900 CE', h: 64.2, l: 14.0, oi: '5.1M', buyer: 45 },
      { s: '24800 PE', h: 84.0, l: 26.5, oi: '4.2M', buyer: 35 },
      { s: '24750 PE', h: 56.4, l: 18.2, oi: '2.9M', buyer: 29 },
    ];

    function renderMatrix() {
      const isLight = document.documentElement.dataset.theme === 'light';
      let html = `
        <div class="rb-strike-matrix-header" style="${isLight ? 'background:#e2e8f0; color:#0a1536;' : ''}">
          <span>Strike</span>
          <span style="text-align:right">High/LTP</span>
          <span style="text-align:right">OI Volume</span>
          <span style="text-align:right">Buyer %</span>
        </div>
      `;

      strikes.forEach((st) => {
        const ltpChange = (Math.random() - 0.48) * 3.5;
        st.h = Math.max(10, st.h + ltpChange);
        const isUp = ltpChange >= 0;
        const flashClass = isUp ? 'rb-tick-flash-up' : 'rb-tick-flash-dn';

        const strikeColor = isLight ? '#0a1536' : 'var(--ae-ink-bright)';
        const oiColor = isLight ? '#4f5d87' : 'var(--ae-muted)';
        const buyerColor = st.buyer > 50 
          ? (isLight ? '#15803d' : 'var(--ae-bullish)') 
          : (isLight ? '#dc2626' : 'var(--ae-bearish)');

        html += `
          <div class="rb-strike-matrix-row" style="${isLight ? 'border-bottom:1px solid rgba(30,58,138,0.08);' : ''}">
            <span style="font-weight:700; color:${strikeColor}">${st.s}</span>
            <span class="${flashClass}" style="text-align:right; font-weight:700">₹${st.h.toFixed(1)}</span>
            <span style="text-align:right; color:${oiColor}">${st.oi}</span>
            <span style="text-align:right; color:${buyerColor}; font-weight:700">${st.buyer}%</span>
          </div>
        `;
      });

      matrixContainer.innerHTML = html;
    }

    renderMatrix();
    setInterval(renderMatrix, 1800);
  }

  // =========================================================================
  // 10. ALPHA EDGE TREND ALL - 5-TIMEFRAME CONFLUENCE HEATMAP
  // =========================================================================
  function initTrendAllSimulator() {
    const heatContainer = document.getElementById('trend-heatmap-board');
    const scorePill = document.getElementById('trend-confluence-score');
    if (!heatContainer) return;

    const timeframes = ['5m', '15m', '1H', 'Daily', 'Weekly'];
    const assets = ['NIFTY 50', 'BANK NIFTY', 'FINNIFTY', 'MCX CRUDE', 'GOLD'];

    function getScoreColor(val) {
      const isLight = document.documentElement.dataset.theme === 'light';
      if (val >= 3) return isLight ? 'background:#dcfce7; color:#15803d; border:1px solid #86efac; font-weight:800;' : 'background:rgba(43,227,154,0.85); color:#021021;';
      if (val > 0) return isLight ? 'background:#f0fdf4; color:#16a34a; border:1px solid #bbf7d0;' : 'background:rgba(43,227,154,0.45); color:#ffffff;';
      if (val === 0) return isLight ? 'background:#f1f5f9; color:#64748b; border:1px solid #e2e8f0;' : 'background:rgba(142,165,182,0.25); color:#8ea5b6;';
      if (val > -3) return isLight ? 'background:#fef2f2; color:#dc2626; border:1px solid #fecaca;' : 'background:rgba(255,93,115,0.45); color:#ffffff;';
      return isLight ? 'background:#fee2e2; color:#b91c1c; border:1px solid #fca5a5; font-weight:800;' : 'background:rgba(255,93,115,0.85); color:#ffffff;';
    }

    function renderHeatmap() {
      const isLight = document.documentElement.dataset.theme === 'light';
      const labelColor = isLight ? '#4f5d87' : 'var(--ae-muted)';
      const assetColor = isLight ? '#0a1536' : 'var(--ae-ink-bright)';

      let headerHtml = '<span></span>' + timeframes.map((t) => `<span style="font-weight:700; text-align:center; color:${labelColor}">${t}</span>`).join('');
      let totalScore = 0;
      let count = 0;

      let rowsHtml = assets
        .map((asset) => {
          let assetRow = `<span style="font-weight:700; color:${assetColor}">${asset}</span>`;
          timeframes.forEach(() => {
            const val = Math.floor(Math.random() * 11) - 5;
            totalScore += val;
            count++;
            const sign = val > 0 ? '+' : '';
            assetRow += `<div class="rb-trend-cell" style="${getScoreColor(val)}">${sign}${val}</div>`;
          });
          return assetRow;
        })
        .join('');

      heatContainer.innerHTML = headerHtml + rowsHtml;

      if (scorePill) {
        const avgScore = (totalScore / count).toFixed(1);
        const isBull = avgScore >= 0;
        scorePill.textContent = `${isBull ? '+' : ''}${avgScore} CONFLUENCE`;
        scorePill.style.color = isBull ? 'var(--ae-bullish)' : 'var(--ae-bearish)';
      }
    }

    renderHeatmap();
    setInterval(renderHeatmap, 2600);
  }

  // =========================================================================
  // 11. FINANCIAL TICKER TAPE (Redesign Demo Ticker)
  // =========================================================================
  function initTicker() {
    const container = document.getElementById('tk');
    if (!container) return;
    const data = [
      ['NIFTY 50', '24,812', 0.42],
      ['BANK NIFTY', '53,240', -0.18],
      ['FINNIFTY', '23,905', 0.21],
      ['SENSEX', '81,560', 0.37],
      ['CRUDE OIL', '6,420', -0.64],
      ['GOLD', '72,310', 0.28],
      ['SILVER', '88,900', 0.51],
      ['USDINR', '83.41', -0.05],
    ];
    const items = data.concat(data).map(t => {
      const isUp = t[2] > 0;
      return `<span>${t[0]}<b class="${isUp ? 'u' : 'd'}">${t[1]} ${isUp ? '▲' : '▼'}${Math.abs(t[2])}%</b></span>`;
    }).join('');
    container.innerHTML = items;
  }

  // =========================================================================
  // 12. HERO CANDLESTICK CHART PANEL WITH BOX RANGE & PULSING U.O.P. MARKER
  // =========================================================================
  function initHeroCandlestickChart() {
    const cv = document.getElementById('cv');
    if (!cv) return;
    const cx = cv.getContext('2d');
    let W, H;
    const N = 46;
    const cs = [];
    let px = 100;
    let drift = 0;

    function cssVar(name, fallback) {
      return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
    }

    function mk() {
      const o = px;
      const c = o + (Math.random() - 0.48) * 5 + drift;
      const hi = Math.max(o, c) + Math.random() * 3;
      const lo = Math.min(o, c) - Math.random() * 3;
      px = c;
      return { o, c, h: hi, l: lo };
    }

    for (let i = 0; i < N; i++) cs.push(mk());

    function size() {
      const r = cv.getBoundingClientRect();
      const d = window.devicePixelRatio || 1;
      W = r.width;
      H = r.height;
      cv.width = W * d;
      cv.height = H * d;
      cx.setTransform(d, 0, 0, d, 0, 0);
    }
    size();
    window.addEventListener('resize', size);

    let prog = 0;
    let last = 0;

    function draw(ts) {
      if (!isReducedMotion && ts - last > 650) {
        last = ts;
        cs.push(mk());
        if (cs.length > N) cs.shift();
      }

      let mn = 1e9, mx = -1e9;
      cs.forEach((k) => {
        mn = Math.min(mn, k.l);
        mx = Math.max(mx, k.h);
      });

      const pad = 16;
      const y = (v) => pad + ((mx - v) / (mx - mn)) * (H - pad * 2);
      const bw = W / N;

      cx.clearRect(0, 0, W, H);

      const isLight = document.documentElement.dataset.theme === 'light';

      // Horizontal subtle gridlines
      cx.strokeStyle = cssVar('--line', isLight ? 'rgba(30, 58, 138, 0.12)' : 'rgba(56, 189, 248, 0.1)');
      cx.lineWidth = 1;
      for (let g = 1; g < 5; g++) {
        cx.beginPath();
        cx.moveTo(0, (H * g) / 5);
        cx.lineTo(W, (H * g) / 5);
        cx.stroke();
      }

      // Box Zone from recent 14 candles
      const rec = cs.slice(-14);
      const bh = Math.max.apply(null, rec.map(k => k.h));
      const bl = Math.min.apply(null, rec.map(k => k.l));
      const bx = W - 14 * bw;

      cx.fillStyle = isLight ? 'rgba(37, 99, 235, 0.12)' : 'rgba(47, 107, 255, 0.14)';
      cx.strokeStyle = isLight ? 'rgba(37, 99, 235, 0.75)' : 'rgba(53, 209, 196, 0.75)';
      cx.lineWidth = 1.2;
      cx.setLineDash([5, 4]);
      cx.fillRect(bx, y(bh), 14 * bw, y(bl) - y(bh));
      cx.strokeRect(bx, y(bh), 14 * bw, y(bl) - y(bh));
      cx.setLineDash([]);

      // Render Candlesticks
      const upCol = cssVar('--up', isLight ? '#16a34a' : '#22c55e');
      const dnCol = cssVar('--dn', isLight ? '#dc2626' : '#ef4444');
      cs.forEach((k, i) => {
        const x = i * bw + bw / 2;
        const up = k.c >= k.o;
        const col = up ? upCol : dnCol;
        cx.strokeStyle = col;
        cx.fillStyle = col;
        cx.lineWidth = 1.5;
        cx.beginPath();
        cx.moveTo(x, y(k.h));
        cx.lineTo(x, y(k.l));
        cx.stroke();
        const t = y(Math.max(k.o, k.c));
        const b = y(Math.min(k.o, k.c));
        cx.fillRect(x - bw * 0.32, t, bw * 0.64, Math.max(2, b - t));
      });

      // Pulsing U.O.P. Price Level Line + Ping
      const lv = cs[cs.length - 1].c;
      const ly = y(lv);
      const cyan = cssVar('--cyan', isLight ? '#0e7490' : '#00f2fe');

      cx.strokeStyle = cyan;
      cx.lineWidth = 1.3;
      cx.setLineDash([4, 4]);
      cx.beginPath();
      cx.moveTo(0, ly);
      cx.lineTo(W, ly);
      cx.stroke();
      cx.setLineDash([]);

      prog = (prog + 0.02) % 1;
      cx.strokeStyle = cyan;
      cx.globalAlpha = 1 - prog;
      cx.beginPath();
      cx.arc(W - bw / 2, ly, 4 + prog * 18, 0, Math.PI * 2);
      cx.stroke();
      cx.globalAlpha = 1;

      cx.fillStyle = cyan;
      cx.beginPath();
      cx.arc(W - bw / 2, ly, 4.5, 0, Math.PI * 2);
      cx.fill();

      // Floating U.O.P. Price Tag
      cx.fillStyle = isLight ? 'rgba(255, 255, 255, 0.95)' : 'rgba(4, 11, 24, 0.85)';
      cx.fillRect(8, Math.max(8, ly - 18), 100, 20);
      cx.strokeStyle = cyan;
      cx.lineWidth = 1;
      cx.strokeRect(8, Math.max(8, ly - 18), 100, 20);
      cx.fillStyle = cyan;
      cx.font = '700 11px JetBrains Mono, monospace';
      cx.fillText('U.O.P ' + (24800 + (lv - 100) * 18).toFixed(0), 14, Math.max(22, ly - 4));

      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);

    // 3D Panel Tilt on Hover
    const pn = document.getElementById('panel');
    if (pn) {
      pn.addEventListener('pointermove', (e) => {
        if (isReducedMotion) return;
        const r = pn.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        pn.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
      });
      pn.addEventListener('pointerleave', () => {
        pn.style.transform = '';
      });
    }
  }

  // =========================================================================
  // 13. SVG TRENDLINES DRAW ON SCROLL (Framework Cards)
  // =========================================================================
  function initSvgTrendlines() {
    const paths = document.querySelectorAll('.ln');
    if (!paths.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const path = entry.target;
          path.classList.add('drawn');
          observer.unobserve(path);
        }
      });
    }, { threshold: 0.25 });

    paths.forEach((p) => observer.observe(p));
  }

  // =========================================================================
  // 14. ULTRAVIEWER OSCILLATING RETEST BAND CANVAS
  // =========================================================================
  function initUltraviewerRetestBand() {
    const bc = document.getElementById('band');
    if (!bc) return;
    const bx2 = bc.getContext('2d');
    let bt = 0;

    function bs() {
      const r = bc.getBoundingClientRect();
      const d = window.devicePixelRatio || 1;
      bc.width = r.width * d;
      bc.height = r.height * d;
      bx2.setTransform(d, 0, 0, d, 0, 0);
    }
    bs();
    window.addEventListener('resize', bs);

    function bd() {
      const w = bc.getBoundingClientRect().width;
      const hh = 70;
      bx2.clearRect(0, 0, w, hh);
      bt += 0.02;

      function ln(off, col, wd) {
        bx2.strokeStyle = col;
        bx2.lineWidth = wd;
        bx2.beginPath();
        for (let x = 0; x <= w; x += 4) {
          const yy = 35 - x * 0.12 + Math.sin(x * 0.035 + bt) * 8 + off;
          if (x === 0) bx2.moveTo(x, yy);
          else bx2.lineTo(x, yy);
        }
        bx2.stroke();
      }

      const blue = getComputedStyle(document.documentElement).getPropertyValue('--blue').trim() || 'rgba(59, 130, 246, 0.9)';
      const red = getComputedStyle(document.documentElement).getPropertyValue('--dn').trim() || 'rgba(239, 68, 68, 0.8)';
      const cyan = getComputedStyle(document.documentElement).getPropertyValue('--cyan').trim() || '#00f2fe';

      ln(-10, blue, 3);
      ln(12, red, 2);

      const px2 = (bt * 40) % w;
      const py = 35 - px2 * 0.12 + Math.sin(px2 * 0.035 + bt) * 8 - 10;
      bx2.fillStyle = cyan;
      bx2.beginPath();
      bx2.arc(px2, py, 5, 0, Math.PI * 2);
      bx2.fill();

      requestAnimationFrame(bd);
    }
    if (!isReducedMotion) requestAnimationFrame(bd);
  }

  // =========================================================================
  // 15. DUAL-THEME TOGGLE SYSTEM (Redesign Demo Light & Dark Themes)
  // =========================================================================
  function initThemeToggle() {
    const root = document.documentElement;
    const themeButtons = document.querySelectorAll('#theme, #theme-mobile, .ae-theme-toggle, [data-theme-toggle]');

    const sunSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon theme-icon-sun" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
    const moonSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon theme-icon-moon" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;

    // Retrieve saved theme or current attribute, default to dark
    const savedTheme = localStorage.getItem('alphaedge_theme') || root.dataset.theme || 'dark';
    applyTheme(savedTheme);

    function applyTheme(theme) {
      root.dataset.theme = theme;
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      localStorage.setItem('alphaedge_theme', theme);

      const isDark = theme === 'dark';
      themeButtons.forEach((btn) => {
        btn.setAttribute('title', isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme');
        btn.setAttribute('aria-label', isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme');
        if (btn.id === 'theme-mobile') {
          btn.innerHTML = `${isDark ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode'}`;
        } else {
          // ICON ONLY - NO TEXT of theme
          btn.innerHTML = isDark ? sunSvg : moonSvg;
        }
      });
    }

    function toggle() {
      const current = root.dataset.theme === 'light' ? 'light' : 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    }

    themeButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggle();
      });
    });
  }

  // =========================================================================
  // BOOTSTRAP ALL REACT BITS COMPONENTS ON DOM READY
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initParticleCanvas();
    initSpotlightCards();
    initTilt3D();
    initMagnetButtons();
    initTextEffects();
    initScrollRevealAndCounters();
    initUltraviewerSimulator();
    initUOPSimulator();
    initAdvanceMatrixSimulator();
    initTrendAllSimulator();
    initTicker();
    initHeroCandlestickChart();
    initSvgTrendlines();
    initUltraviewerRetestBand();
  });
})();
