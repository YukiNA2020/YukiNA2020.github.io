import React, {useContext} from "react";
import {Fade} from "react-reveal";
import {useTranslation} from "react-i18next";
import StyleContext from "../../contexts/StyleContext";
import "./TravelPhotos.scss";

export default function TravelPhotos() {
  const {isDark} = useContext(StyleContext);
  const {t} = useTranslation();

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="travel-photos">
        <div className="travel-photos-header">
          <h1 className="travel-photos-header-text">{t("nav.travelPhotos")}</h1>
          <p className={isDark ? "dark-mode subTitle" : "subTitle"}>
            Coming soon...
          </p>
        </div>
      </div>
    </Fade>
  );
}
