(() => {
  const toggle = document.getElementById('langToggle');

  // 1) pick initial language
  const saved = localStorage.getItem('lang');
  const browserPref = (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en';
  let currentLang = saved || browserPref;

  function applyLang(lang) {
    currentLang = lang;

    // swap any node with data-en/data-zh
    document.querySelectorAll('[data-en]').forEach(el => {
      const val = el.getAttribute(`data-${lang}`);
      if (val != null) el.textContent = val;
    });

    // title (if title has data-xx)
    const titleEl = document.querySelector('title[data-en]');
    if (titleEl) titleEl.textContent = titleEl.getAttribute(`data-${lang}`) || document.title;

    // html lang
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // toggle label
    if (toggle) toggle.textContent = lang === 'zh' ? 'EN / 中' : '中 / EN';

    localStorage.setItem('lang', lang);
  }

  // 2) bind click
  if (toggle) {
    toggle.addEventListener('click', () => {
      applyLang(currentLang === 'en' ? 'zh' : 'en');
    });
  }

  // 3) init on load
  applyLang(currentLang);
})();
