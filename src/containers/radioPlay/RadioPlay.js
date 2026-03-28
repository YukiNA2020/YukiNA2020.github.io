import React, {useContext} from "react";
import {Fade} from "react-reveal";
import {useTranslation} from "react-i18next";
import StyleContext from "../../contexts/StyleContext";
import "./RadioPlay.scss";

export default function RadioPlay() {
  const {isDark} = useContext(StyleContext);
  const {t} = useTranslation();

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="radio-play">
        <div className="radio-play-header">
          <h1 className="radio-play-header-text">{t("nav.radioPlay")}</h1>
          <p className={isDark ? "dark-mode subTitle" : "subTitle"}>
            Coming soon...
          </p>
        </div>
      </div>
    </Fade>
  );
}
