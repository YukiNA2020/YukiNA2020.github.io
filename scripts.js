/**
 * 中英文切换功能脚本
 *
 * 【修复说明】
 * 问题：原脚本在 <head> 中加载时立即执行，此时 DOM 未就绪，导致：
 *   - document.getElementById('langToggle') 返回 null
 *   - document.querySelectorAll('[data-en]') 找不到任何元素
 *   - 语言切换功能完全失效
 *
 * 修复：使用 DOMContentLoaded 事件包装代码，确保 DOM 完全加载后再执行
 * 这样可以保证所有元素（包括 #langToggle 按钮和带有 data-en/data-zh 的元素）都已存在
 *
 * 【注意事项】
 * - 此脚本必须在 DOM 加载完成后执行，否则无法找到任何元素
 * - 如果未来改变脚本加载位置（移到 </body> 前），可能需要调整此包装方式
 * - localStorage 用于存储用户的语言偏好，某些浏览器隐私模式下可能不可用
 */
(() => {
  // 等待 DOM 完全加载后再执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageToggle);
  } else {
    // DOM 已经加载完成（脚本在 body 底部的情况）
    initLanguageToggle();
  }

  function initLanguageToggle() {
    const toggle = document.getElementById('langToggle');

    // 如果找不到切换按钮，说明页面结构有问题，直接退出
    if (!toggle) {
      console.warn('Language toggle button not found. Make sure #langToggle exists in the DOM.');
      return;
    }

    // 1) 选择初始语言：优先使用 localStorage 保存的偏好，否则根据浏览器语言判断
    const saved = localStorage.getItem('lang');
    const browserPref = (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en';
    let currentLang = saved || browserPref;

    /**
     * 应用语言到页面
     * @param {string} lang - 语言代码 ('zh' 或 'en')
     */
    function applyLang(lang) {
      currentLang = lang;

      // 2) 遍历所有带有 data-en 属性的元素，根据当前语言设置文本内容
      document.querySelectorAll('[data-en]').forEach(el => {
        const val = el.getAttribute(`data-${lang}`);
        if (val != null) el.textContent = val;
      });

      // 3) 处理页面标题（如果 title 元素有 data-en 属性）
      const titleEl = document.querySelector('title[data-en]');
      if (titleEl) titleEl.textContent = titleEl.getAttribute(`data-${lang}`) || document.title;

      // 4) 更新 html 元素的 lang 属性，有利于屏幕阅读器和搜索引擎
      document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

      // 5) 更新切换按钮的文字，显示当前可切换到的语言
      // 当前是中文时，按钮显示 "EN / 中"（提示点击可切换到英文）
      // 当前是英文时，按钮显示 "中 / EN"（提示点击可切换到中文）
      toggle.textContent = lang === 'zh' ? 'EN / 中' : '中 / EN';

      // 6) 保存语言偏好到 localStorage，下次访问时自动应用
      try {
        localStorage.setItem('lang', lang);
      } catch (e) {
        // 某些浏览器环境下 localStorage 可能不可用（如隐私模式、file:// 协议）
        console.warn('Failed to save language preference:', e);
      }
    }

    // 7) 绑定点击事件：点击按钮时切换语言
    toggle.addEventListener('click', () => {
      applyLang(currentLang === 'en' ? 'zh' : 'en');
    });

    // 8) 页面加载时立即应用初始语言
    applyLang(currentLang);
  }
})();
