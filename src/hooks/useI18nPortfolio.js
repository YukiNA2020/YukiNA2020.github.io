import { useTranslation } from "react-i18next";

/**
 * Hook to get translated content from portfolio.js
 * This hook combines portfolio.js data with i18n translations
 */
export const useI18nPortfolio = () => {
  const { t } = useTranslation();

  return {
    greeting: {
      title: t("greeting.title"),
      subTitle: t("greeting.subtitle"),
      resumeLinkText: t("greeting.resumeLinkText")
    },
    nav: {
      home: t("nav.home"),
      skills: t("nav.skills"),
      experience: t("nav.experience"),
      projects: t("nav.projects"),
      achievements: t("nav.achievements"),
      contact: t("nav.contact")
    }
  };
};
