import React, {useContext} from "react";
import {Fade} from "react-reveal";
import {useTranslation} from "react-i18next";
import StyleContext from "../../contexts/StyleContext";
import "./Portfolio.scss";

export default function Portfolio() {
  const {isDark} = useContext(StyleContext);
  const {t} = useTranslation();

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="portfolio">
        <div className="portfolio-header">
          <h1 className="portfolio-header-text">{t("nav.portfolio")}</h1>
          <p className={isDark ? "dark-mode subTitle" : "subTitle"}>
            Coming soon...
          </p>
        </div>
      </div>
    </Fade>
  );
}
