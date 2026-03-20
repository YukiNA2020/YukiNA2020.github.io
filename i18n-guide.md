# 中英文双语功能实现指南

## ✅ 已完成的基础架构

我已经为你的网站添加了i18n国际化支持的基础架构：

1. **i18n配置** - 已安装并配置 `i18next`、`react-i18next`
2. **语言切换按钮** - 右侧固定位置的切换按钮
3. **语言文件** - `src/i18n/locales/` 目录下的中英文翻译文件
4. **持久化存储** - 语言选择会保存在localStorage中

## 🔄 当前状态

**语言切换按钮已添加**到网站右侧，点击可以在中文和英文之间切换。但目前网站的大部分内容还是英文的，需要逐步替换成i18n翻译。

## 📝 如何让各组件支持双语

### 方法1：简单文本替换（推荐用于标题、按钮等）

#### 示例：修改Greeting组件

**原代码：**
```javascript
// src/containers/greeting/Greeting.js
import { greeting } from "../../portfolio";

<h1>{greeting.title}</h1>
<p>{greeting.subTitle}</p>
```

**修改后：**
```javascript
// src/containers/greeting/Greeting.js
import { useTranslation } from "react-i18next";

export default function Greeting() {
  const { t } = useTranslation();

  return (
    <h1>{t("greeting.title")}</h1>
    <p>{t("greeting.subtitle")}</p>
  );
}
```

### 方法2：在语言文件中添加翻译

**编辑 `src/i18n/locales/en.json`：**
```json
{
  "greeting": {
    "title": "Hi all, I'm Jingyang Feng",
    "subtitle": "A passionate learner and thinker..."
  }
}
```

**编辑 `src/i18n/locales/zh.json`：**
```json
{
  "greeting": {
    "title": "大家好，我是冯荆扬",
    "subtitle": "我是一个热爱学习和思考的人..."
  }
}
```

## 🎯 需要修改的主要组件

### 1. Greeting组件（欢迎区）
**文件**: `src/containers/greeting/Greeting.js`

```javascript
import { useTranslation } from "react-i18next";

export default function Greeting() {
  const { t } = useTranslation();
  const { isDark } = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                {t("greeting.title")} {emoji("👋")}
              </h1>
              <p className={isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"}>
                {t("greeting.subtitle")}
              </p>
              {/* ... */}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
```

### 2. Skills组件（技能部分）
**文件**: `src/containers/skills/Skills.js`

在语言文件中添加：
```json
{
  "skills": {
    "title": "What I do",
    "subtitle": "CRAZY FULL STACK DEVELOPER..."
  }
}
```

修改组件：
```javascript
const { t } = useTranslation();
<h1 className="skills-heading">{t("skills.title")}</h1>
<h3 className="skills-sub-heading">{t("skills.subtitle")}</h3>
```

### 3. Education组件（教育经历）
**文件**: `src/containers/education/Education.js`

这个组件的数据来自 `portfolio.js` 的 `educationInfo`。建议：

1. 将educationInfo改为根据语言返回不同内容
2. 或者直接在组件中判断语言

**示例**：
```javascript
import { useTranslation } from "react-i18next";
import { educationInfo } from "../../portfolio";

export default function Education() {
  const { i18n } = useTranslation();

  // 创建翻译后的教育数据
  const getLocalizedEducation = () => {
    return educationInfo.schools.map(school => ({
      ...school,
      schoolName: i18n.language === "zh"
        ? t(`education.${school.schoolName}.name`)
        : school.schoolName
    }));
  };

  return (
    <div>
      {/* 使用 getLocalizedEducation() */}
    </div>
  );
}
```

### 4. Header导航栏
**文件**: `src/components/header/Header.js`

导航链接也可以支持多语言：

```javascript
const { t } = useTranslation();

<a href="#skills">{t("nav.skills")}</a>
<a href="#experience">{t("nav.experience")}</a>
<a href="#achievements">{t("nav.achievements")}</a>
<a href="#contact">{t("nav.contact")}</a>
```

## 📚 完整的语言文件示例

### `src/i18n/locales/en.json`
```json
{
  "greeting": {
    "title": "Hi all, I'm Jingyang Feng",
    "subtitle": "A passionate learner and thinker..."
  },
  "nav": {
    "home": "Home",
    "skills": "Skills",
    "experience": "Experience",
    "projects": "Projects",
    "achievements": "Achievements",
    "contact": "Contact"
  },
  "skills": {
    "title": "What I do",
    "subtitle": "FULL STACK DEVELOPER"
  },
  "education": {
    "title": "Education"
  },
  "contact": {
    "title": "Contact Me",
    "subtitle": "Feel free to reach out!"
  }
}
```

### `src/i18n/locales/zh.json`
```json
{
  "greeting": {
    "title": "大家好，我是冯荆扬",
    "subtitle": "我是一个热爱学习和思考的人..."
  },
  "nav": {
    "home": "首页",
    "skills": "技能",
    "experience": "经历",
    "projects": "项目",
    "achievements": "成就",
    "contact": "联系"
  },
  "skills": {
    "title": "技能专长",
    "subtitle": "全栈开发者"
  },
  "education": {
    "title": "教育经历"
  },
  "contact": {
    "title": "联系我",
    "subtitle": "欢迎随时联系！"
  }
}
```

## 🚀 快速实现步骤

### 第1步：修改最关键的组件
1. **Greeting组件** - 首页欢迎文字
2. **Header导航** - 菜单项文字
3. **Skills组件** - 技能部分标题

### 第2步：逐步添加翻译
1. 打开 `src/i18n/locales/en.json` 和 `zh.json`
2. 为每个需要翻译的文本添加key
3. 在组件中使用 `t("key.name")` 替换硬编码文本

### 第3步：测试
```bash
npm start
```
访问 http://localhost:3000，点击右侧语言按钮测试效果。

### 第4步：部署
```bash
git add .
git commit -m "feat: 添加XX组件的中英文翻译"
git push
```

## 💡 提示

1. **渐进式实现** - 不需要一次性翻译所有内容，可以逐步添加
2. **保留英文** - 对于专业术语（如技术栈名称），可以保持英文
3. **测试两种语言** - 每次修改后测试中英文切换是否正常
4. **备份** - 修改前先备份原文件

## 🎨 语言切换按钮样式

当前语言切换按钮位置：
- **桌面端**: 屏幕右侧中间
- **移动端**: 屏幕右下角

样式文件：`src/components/languageToggle/LanguageToggle.scss`

可以修改样式来调整按钮的外观和位置。

## 📞 需要帮助？

如果遇到问题：
1. 检查控制台是否有错误
2. 确认语言文件格式正确（JSON格式）
3. 确认i18n的key名称一致
4. 查看浏览器开发者工具的Console输出

---

**祝你实现成功！** 🎉
