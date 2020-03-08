import React, { useContext } from "react";
import { UISref } from "@uirouter/react";
import { LocalizationContext } from "../localization";

// top-page menu
const Menu = () => {
  const ctx = useContext(LocalizationContext);
  console.debug("Menu.render");

  return (
    <div>
      <UISref to="about">
        <span id="about" className="text-primary link clickable">{ctx.tr("ABOUT")}</span>
      </UISref>
      <span style={{ margin: 4 }}></span>
      <UISref to="reset">
        <span id="reset" className="text-primary link clickable">{ctx.tr("RESET")}</span>
      </UISref>
      <span style={{ margin: 4 }}></span>
    </div>
  );
};

export default Menu;