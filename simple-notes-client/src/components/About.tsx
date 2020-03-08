import React, { useContext } from "react";
import { UISref } from "@uirouter/react";
import { LocalizationContext } from "../localization";

// about page
const About = () => {
  console.debug("About.render");
  const ctx = useContext(LocalizationContext);

  return (
    <div>
      <div id="createdby">
        {ctx.tr("Created by")}{" "}
        <a href="mailto:tomas.holub@apitree.cz">tomas.holub@apitree.cz</a>.
      </div>
      <UISref to="home">
        <button className="btn btn-primary mt-2">{ctx.tr("OK")}</button>
      </UISref>
    </div>
  );
};

export default About;
