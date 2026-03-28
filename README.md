# 冯荆扬的个人主页

> 基于 [DeveloperFolio](https://github.com/saadpasta/developerFolio) 模板，经过大量定制化修改

## 在线访问

[https://yukina2020.github.io/](https://yukina2020.github.io/)

## 技术栈

- React 16 + Create React App 5
- SCSS 样式
- i18next 中英文双语支持
- Lottie + React Reveal 动画
- GitHub Actions 自动部署

## 导航栏结构（下拉菜单）

```
┌──────────┬──────────────┬──────────┬─────────┬─────────────────┐
│  About   │  Experience  │   Life   │ Contact │ 🌙/☀️  EN/中文  │
├──────────┼──────────────┼──────────┤         │                 │
│ Intro    │ Education    │ Blogs    │         │                 │
│ Skills   │ Work         │ Talks    │         │                 │
│          │ Portfolio    │ Photos   │         │                 │
│          │              │ Radio    │         │                 │
└──────────┴──────────────┴──────────┴─────────┴─────────────────┘
```

## 页面区块（渲染顺序）

| 区块 | 锚点 | 组件路径 | 状态 |
|------|------|---------|------|
| 首屏介绍 | `#introduction` | `containers/greeting/Greeting` | 有内容 |
| 技能展示 | `#skills` | `containers/skills/Skills` | 有内容 |
| 教育经历 | `#education` | `containers/education/Education` | 有内容 |
| 工作经历 | `#experience` | `containers/workExperience/WorkExperience` | 模板数据待替换 |
| 项目作品 | `#portfolio` | `containers/portfolio/Portfolio` | **占位待填充** |
| 博客 | `#blogs` | `containers/blogs/Blogs` | 模板数据待替换 |
| 演讲 | `#talks` | `containers/talks/Talks` | 模板数据待替换 |
| 旅行相册 | `#travel-photos` | `containers/travelPhotos/TravelPhotos` | **占位待填充** |
| 广播剧推荐 | `#radio-play` | `containers/radioPlay/RadioPlay` | **占位待填充** |
| 播客 | — | `containers/podcast/Podcast` | 模板数据待替换 |
| GitHub Profile | — | `containers/profile/Profile` | 有内容 |

## 关键文件

| 文件 | 作用 |
|------|------|
| `src/portfolio.js` | 所有页面数据配置（姓名、经历、技能等） |
| `src/components/header/Header.js` | 导航栏（下拉菜单逻辑） |
| `src/containers/Main.js` | 页面区块组装 |
| `src/i18n/locales/en.json` | 英文翻译 |
| `src/i18n/locales/zh.json` | 中文翻译 |
| `src/_globalColor.scss` | 全局颜色变量 |
| `src/contexts/StyleContext.js` | 深色/浅色主题 Context |
| `.github/workflows/deploy.yml` | GitHub Actions 部署配置 |

## 已删除的原始模板功能

以下模块已从 fork 的原始仓库中移除：
- Open Source / Achievements（开源/成就）
- Resume（简历下载按钮）
- Proficiency（技能进度条）
- Twitter 嵌入（加载失败的旋转动画）

## 自定义改动说明

- 导航栏：固定在页面顶部（`position: fixed`），含三个下拉菜单
- 字体：左上角名字使用 Google Fonts "Caveat" 替代原始的 Agustina
- 双语：通过 i18next 实现中英文切换，自动检测浏览器语言
- 主题：深色/浅色切换，偏好保存到 localStorage

## 本地开发

```bash
npm install
npm start        # http://localhost:3000
npm run build    # 生产构建
```

## 部署

push 到 main 分支后 GitHub Actions 自动构建部署。GitHub Pages Source 需设置为 **"GitHub Actions"**。

## 待办事项

- [ ] 替换工作经历中的模板数据（Facebook/Quora/Airbnb → 真实经历）
- [ ] 替换博客/演讲/播客中的模板数据
- [ ] 填充 Portfolio 项目作品内容
- [ ] 填充旅行相册内容
- [ ] 填充广播剧推荐内容
