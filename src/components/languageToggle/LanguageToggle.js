import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageToggle.scss";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "zh" ? "en" : "zh";
    i18n.changeLanguage(newLang);

    // 保存到localStorage
    try {
      localStorage.setItem("i18nextLng", newLang);
    } catch (e) {
      console.error("Failed to save language preference:", e);
    }
  };

  return (
    <div className="language-toggle">
      <button
        onClick={toggleLanguage}
        className="lang-btn"
        aria-label="Toggle Language"
      >
        <span className="lang-text">
          {i18n.language === "zh" ? "EN" : "中文"}
        </span>
      </button>
    </div>
  );
};

export default LanguageToggle;
