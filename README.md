# 冯荆扬的个人主页

> 基于 [DeveloperFolio](https://github.com/saadpasta/developerFolio) 模板的个人作品集网站

这是一个现代化、响应式的开发者个人主页，用于展示个人信息、教育经历、技能和项目。

## 🌐 在线访问

[https://yukina2020.github.io/](https://yukina2020.github.io/)

## ✨ 特性

- 🎨 现代化UI设计，精美动画效果
- 📱 完全响应式，支持移动端和桌面端
- ⚡ 快速加载，优化性能
- 🎯 易于自定义和配置
- 🌙 支持深色/浅色主题切换
- 🚀 自动部署到 GitHub Pages

## 🛠️ 技术栈

- **框架**: React 16.10.2
- **构建工具**: Create React App (react-scripts 5.0.1)
- **样式**: SCSS
- **动画**: Lottie, React Reveal
- **图标**: Font Awesome 5.15.4
- **部署**: GitHub Actions

## 📁 项目结构

```
YukiNA2020.github.io/
├── public/                  # 静态资源文件
│   ├── index.html          # HTML 入口文件
│   ├── manifest.json       # PWA 配置
│   └── favicon.ico         # 网站图标
├── src/                     # 源代码目录
│   ├── assets/             # 资源文件
│   │   ├── images/         # 图片资源
│   │   └── lottie/         # Lottie 动画文件
│   ├── components/         # 可复用组件
│   │   ├── button/         # 按钮组件
│   │   ├── educationCard/  # 教育经历卡片
│   │   ├── socialMedia/    # 社交媒体链接
│   │   ├── displayLottie/  # 动画展示组件
│   │   ├── header/         # 页头导航
│   │   └── footer/         # 页脚
│   ├── containers/         # 页面容器组件（主要页面部分）
│   │   ├── greeting/       # 首页欢迎区
│   │   ├── education/      # 教育经历
│   │   ├── skills/         # 技能展示
│   │   ├── projects/       # 项目展示
│   │   ├── workExperience/ # 工作经历
│   │   ├── achievement/    # 成就证书
│   │   ├── blogs/          # 博客文章
│   │   ├── contact/        # 联系方式
│   │   └── ...
│   ├── contexts/           # React Context（主题等）
│   ├── hooks/              # 自定义 Hooks
│   ├── portfolio.js        # ⭐ 个人信息配置文件（最重要）
│   ├── App.js              # 主应用组件
│   ├── index.js            # 应用入口
│   └── _globalColor.scss   # 全局颜色主题配置
├── package.json            # 项目依赖配置
└── README.md              # 项目说明文档
```

## ⭐ 如何配置个人信息

**最重要的文件是 `src/portfolio.js`！** 这个文件包含了所有在网站上显示的个人信息。

### 1. 基本信息配置

编辑 `src/portfolio.js` 文件中的以下部分：

```javascript
// 欢迎语和标题
const greeting = {
  username: "Jingyang Feng (Edmond)",  // 你的名字
  title: "Hi all, I'm Jingyang Feng",  // 主标题
  subTitle: emoji(
    "A passionate learner and thinker 🚀 from China..."  // 副标题
  ),
  resumeLink: "",  // 简历链接（留空则不显示按钮）
  displayGreeting: true  // 是否显示此部分
};

// 社交媒体链接
const socialMediaLinks = {
  github: "https://github.com/YukiNA2020",
  linkedin: "https://www.linkedin.com/in/jingyang-feng-2ba90436b/",
  gmail: "JYfengswufe@163.com",
  // 可以添加更多：facebook, twitter, medium 等
  display: true  // 是否显示社交媒体部分
};
```

### 2. 技能配置

```javascript
const skillsSection = {
  title: "What I do",  // 技能部分标题
  subTitle: "CRAZY FULL STACK DEVELOPER...",  // 副标题
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // 添加更多技能描述
  ],
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"  // Font Awesome 图标类名
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    // 添加更多技能图标
  ],
  display: true  // 是否显示技能部分
};
```

### 3. 教育经历配置

```javascript
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "The Chinese University of Hong Kong",
      subHeader: "Master of Science in Information Science and Technology",
      duration: "August 2025 - July 2026",
      desc: "Graduate program focusing on information science and technology.",
      descBullets: [
        "可选：详细描述",
        "可选：更多要点"
      ]
    },
    // 添加更多教育经历
  ]
};
```

### 4. 工作经历配置

```javascript
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "工作描述...",
      descBullets: [
        "工作内容要点1",
        "工作内容要点2"
      ]
    },
    // 添加更多工作经历
  ]
};
```

### 5. 项目展示配置

```javascript
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/projectLogo.webp"),  // 项目图片路径
      projectName: "项目名称",
      projectDesc: "项目描述...",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://project-url.com/"
        }
      ]
    },
    // 添加更多项目
  ],
  display: true
};
```

### 6. 成就证书配置

```javascript
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters...",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "成就描述...",
      image: require("./assets/images/certificateLogo.webp"),
      imageAlt: "证书图片",
      footerLink: [
        {
          name: "Certification",
          url: "https://certificate-url.com"
        }
      ]
    },
    // 添加更多成就
  ]
};
```

### 7. 显示/隐藏页面部分

每个部分都有 `display: true/false` 选项，可以控制是否在网站上显示：

```javascript
// 示例：隐藏成就部分
const achievementSection = {
  // ...
  display: false  // 设置为 false 即可隐藏
};
```

## 🎨 自定义颜色主题

编辑 `src/_globalColor.scss` 文件来自定义网站的颜色主题：

```scss
// 全局颜色变量
$background: #f8f8f8;      // 背景色
$background-dark: #121212; // 深色模式背景
$text: #333333;           // 文字颜色
$text-dark: #f8f8f8;      // 深色模式文字
$primary: #6c63ff;        // 主题色
// ... 更多颜色配置
```

## 💻 本地开发

### 前置要求

- Node.js >= 18.x
- npm >= 9.x

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
```

构建后的文件会在 `build/` 目录中。

## 🚀 部署

本项目使用 GitHub Actions 自动部署到 GitHub Pages。

### 部署步骤

1. **推送代码到 GitHub**

```bash
git add .
git commit -m "添加个人信息"
git push
```

2. **GitHub Actions 自动构建和部署**

- 访问 [GitHub Actions 页面](https://github.com/YukiNA2020/YukiNA2020.github.io/actions) 查看部署进度
- 等待 1-3 分钟，部署完成后访问 [https://yukina2020.github.io/](https://yukina2020.github.io/)

3. **GitHub Pages 设置**

确保在仓库设置中：
- 访问 [Settings > Pages](https://github.com/YukiNA2020/YukiNA2020.github.io/settings/pages)
- **Source** 设置为 **"GitHub Actions"**

## 📝 修改网页标题和 SEO

编辑 `public/index.html` 文件：

```html
<!-- 修改网页标题 -->
<title>冯荆扬 | Jingyang Feng (Edmond)</title>

<!-- 修改 SEO 描述 -->
<meta name="description" content="冯荆扬的个人主页...">

<!-- 修改 Open Graph 信息（用于社交媒体分享） -->
<meta property="og:title" content="冯荆扬 | Jingyang Feng (Edmond)">
<meta property="og:description" content="冯荆扬的个人主页...">
<meta property="og:url" content="https://yukina2020.github.io/">
```

## 📂 添加自定义图片

1. **项目 Logo 和图片**

将图片放到 `src/assets/images/` 目录，然后在 `portfolio.js` 中引用：

```javascript
{
  image: require("./assets/images/yourImage.png"),
  // ...
}
```

2. **公司 Logo**

将公司 logo 放到 `src/assets/images/`，在 `workExperiences` 中引用：

```javascript
{
  companylogo: require("./assets/images/companyLogo.png"),
  // ...
}
```

## 🔧 常见问题

### Q: 如何添加新的页面部分？

A: DeveloperFolio 已经包含了主要的部分（教育、技能、项目等）。如果需要添加自定义部分，需要：

1. 在 `src/containers/` 创建新的组件
2. 在 `src/containers/Main.js` 中导入并使用该组件
3. 在 `src/portfolio.js` 中添加对应的配置数据

### Q: 如何更改主题颜色？

A: 编辑 `src/_globalColor.scss` 文件中的颜色变量。

### Q: 网站没有更新怎么办？

A: 尝试以下步骤：

1. 清除浏览器缓存
2. 等待 GitHub Actions 部署完成（约 1-3 分钟）
3. 检查 GitHub Actions 是否构建成功
4. 本地测试：`npm run build && npm start`

### Q: 如何添加简历下载按钮？

A: 在 `portfolio.js` 的 `greeting` 部分设置 `resumeLink`：

```javascript
const greeting = {
  // ...
  resumeLink: "https://drive.google.com/file/d/你的简历ID/view",
  // ...
};
```

## 📚 相关资源

- [DeveloperFolio 原项目](https://github.com/saadpasta/developerFolio)
- [React 官方文档](https://react.dev/)
- [Font Awesome 图标库](https://fontawesome.com/icons?d=gallery)
- [Lottie 动画](https://lottiefiles.com/)

## 📄 许可证

本项目基于 [MIT License](LICENSE) 开源。

---

**作者**: 冯荆扬 (Jingyang Feng / Edmond)

**最后更新**: 2025年3月
