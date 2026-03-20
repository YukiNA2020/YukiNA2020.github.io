import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import zh from "./locales/zh.json";

// 从localStorage获取保存的语言，或根据浏览器语言检测
const savedLanguage = (() => {
  try {
    const saved = localStorage.getItem("i18nextLng");
    if (saved) return saved;

    // 检测浏览器语言
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.toLowerCase().startsWith("zh")) {
      return "zh";
    }
    return "en";
  } catch (e) {
    // 如果localStorage不可用，默认英文
    return "en";
  }
})();

i18n
  .use(LanguageDetector) // 自动检测用户语言
  .use(initReactI18next) // 绑定react-i18next
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh }
    },
    lng: savedLanguage, // 默认语言
    fallbackLng: "en", // 如果当前语言没有翻译，回退到英文
    detection: {
      // 语言检测选项
      order: ["localStorage", "navigator"],
      caches: ["localStorage"] // 缓存用户语言选择
    },
    interpolation: {
      escapeValue: false // React已经防止XSS，不需要转义
    },
    react: {
      // React相关配置
      useSuspense: false // 禁用Suspense，避免加载问题
    }
  });

export default i18n;
