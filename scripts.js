// 简易语言切换脚本
const toggle = document.getElementById('langToggle');
let currentLang = 'en';

toggle.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });
  toggle.textContent = currentLang === 'en' ? '中 / EN' : 'EN / 中';
});
