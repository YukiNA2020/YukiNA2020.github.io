# 项目交接文档：个人主页中英文切换功能修复

## 项目背景
这是一个 GitHub Pages 托管的个人静态网站，用于展示个人简历、项目经历和生活兴趣。
- 所有者：冯荆扬 (Edmond Feng)
- 技术栈：纯 HTML + CSS + Vanilla JavaScript（无框架）
- 部署方式：GitHub Pages

## 项目结构
```
YukiNA2020.github.io/
├── index.html          # 首页（Hero介绍页，背景图）
├── journey.html        # 个人简历（教育、实习、校园活动）
├── projects.html       # 项目展示（目前是占位符内容）
├── life.html           # 生活兴趣（目前是占位符内容）
├── style.css           # 全局样式
├── scripts.js          # 中英文切换脚本
├── assets/
│   └── background.jpg  # 首页背景图
└── .git/               # Git 仓库
```

## 中英文切换系统设计

### 实现方式
使用 `data-en` 和 `data-zh` 自定义属性存储双语内容，JavaScript 根据 `localStorage` 存储的语言偏好切换 `textContent`。

### HTML 使用方式
```html
<a href="index.html" data-en="Home" data-zh="首页">首页</a>
<h1 data-en="Jingyang Feng" data-zh="冯荆扬">冯荆扬</h1>
<p data-en="Hello..." data-zh="你好...">你好...</p>
```

### JavaScript 逻辑（scripts.js）
```javascript
(() => {
  const toggle = document.getElementById('langToggle');

  // 1) 初始语言选择：优先 localStorage，其次浏览器语言
  const saved = localStorage.getItem('lang');
  const browserPref = (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en';
  let currentLang = saved || browserPref;

  // 2) 应用语言函数
  function applyLang(lang) {
    currentLang = lang;

    // 交换所有带有 data-en 的元素内容
    document.querySelectorAll('[data-en]').forEach(el => {
      const val = el.getAttribute(`data-${lang}`);
      if (val != null) el.textContent = val;
    });

    // 更新 html lang 属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // 更新按钮文本
    if (toggle) toggle.textContent = lang === 'zh' ? 'EN / 中' : '中 / EN';

    // 保存到 localStorage
    localStorage.setItem('lang', lang);
  }

  // 3) 绑定点击事件
  if (toggle) {
    toggle.addEventListener('click', () => {
      applyLang(currentLang === 'en' ? 'zh' : 'en');
    });
  }

  // 4) 页面加载时初始化
  applyLang(currentLang);
})();
```

## 报告的问题
用户反馈：**中英文切换功能不能正常工作**

## 需要排查的方向

### 1. 脚本加载时机问题
检查 `scripts.js` 是否在 DOM 完全加载前执行。当前脚本在 `<head>` 中通过 `<script src="scripts.js"></script>` 加载，此时 DOM 可能还未就绪。

**可能修复**：将脚本移到 `</body>` 前，或使用 `DOMContentLoaded` 事件包装。

### 2. 选择器问题
检查 `document.getElementById('langToggle')` 和 `document.querySelectorAll('[data-en]')` 是否能正确获取元素。

### 3. localStorage 可用性
某些浏览器环境下 localStorage 可能不可用（如隐私模式、file:// 协议等）。

### 4. 浏览器兼容性
检查是否使用了不兼容的 API（如箭头函数、const/let、forEach 等）。

### 5. 控制台错误
需要打开浏览器开发者工具查看是否有 JavaScript 错误。

## 调试步骤

1. **打开浏览器开发者工具**（F12），切换到 Console 标签
2. **访问 index.html**，查看是否有红色错误信息
3. **点击"EN / 中"按钮**，观察：
   - 按钮文字是否变化
   - 页面内容是否变化
   - Console 是否有新错误
4. **检查 localStorage**：在 Console 输入 `localStorage.getItem('lang')` 查看是否有值
5. **手动测试函数**：在 Console 输入 `applyLang('en')` 看是否能切换

## 期望修复后的行为

1. 首次访问时，根据浏览器语言自动选择中文或英文
2. 点击按钮能立即切换所有页面的中英文内容
3. 刷新页面后，语言选择能被记住
4. 按钮文字能正确反映当前语言（中文时显示 "EN / 中"，英文时显示 "中 / EN"）

## 附加任务

修复功能后，请在 scripts.js 中添加详细的注释，说明：
- 修复了什么问题
- 为什么会出现这个问题
- 未来的维护者需要注意什么

## 代码仓库信息
- 路径：`D:\github\YukiNA2020.github.io`
- 当前分支：main
- 远程仓库：https://github.com/YukiNA2020/YukiNA2020.github.io
