import React, {useState, useContext} from "react";
import Headroom from "react-headroom";
import { useTranslation } from "react-i18next";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import LanguageToggle from "../languageToggle/LanguageToggle";
import {
  greeting,
  workExperiences,
  educationInfo,
  skillsSection,
  blogSection,
  talkSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const { t } = useTranslation();
  const viewExperience = workExperiences.display;
  const viewEducation = educationInfo.display;
  const viewSkills = skillsSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <Headroom disable>
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
            <li
              className={"dropdown" + (aboutOpen ? " dropdown-open" : "")}
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              <a href="#introduction">{t("nav.about")}</a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#introduction">{t("nav.introduction")}</a>
                </li>
                <li>
                  <a href="#skills">{t("nav.whatICanDo")}</a>
                </li>
              </ul>
            </li>
          )}
          {(viewExperience || viewEducation) && (
            <li
              className={"dropdown" + (experienceOpen ? " dropdown-open" : "")}
              onMouseEnter={() => setExperienceOpen(true)}
              onMouseLeave={() => setExperienceOpen(false)}
              onClick={() => setExperienceOpen(!experienceOpen)}
            >
              <a href="#experience">{t("nav.experience")}</a>
              <ul className="dropdown-menu">
                {viewEducation && (
                  <li>
                    <a href="#education">{t("nav.educationExp")}</a>
                  </li>
                )}
                {viewExperience && (
                  <li>
                    <a href="#experience">{t("nav.workExp")}</a>
                  </li>
                )}
              </ul>
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
