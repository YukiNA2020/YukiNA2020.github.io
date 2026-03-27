import React, {useContext} from "react";
import Headroom from "react-headroom";
import { useTranslation } from "react-i18next";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import LanguageToggle from "../languageToggle/LanguageToggle";
import {
  greeting,
  workExperiences,
  skillsSection,
  blogSection,
  talkSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const { t } = useTranslation();
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">{t("nav.skills")}</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">{t("nav.experience")}</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">{t("nav.blogs")}</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">{t("nav.talks")}</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume">{t("nav.resume")}</a>
            </li>
          )}
          <li>
            <a href="#contact">{t("nav.contact")}</a>
          </li>
          <li>
            <ToggleSwitch />
          </li>
          <li>
            <LanguageToggle />
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
