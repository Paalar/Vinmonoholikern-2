import React, { FunctionComponent } from "react";
import "./Footer.scss";

const csvLink = (
  <a href="https://www.vinmonopolet.no/datadeling/csv">
    https://www.vinmonopolet.no/datadeling/csv
  </a>
);

const Footer: FunctionComponent = (): JSX.Element => {
  return (
    <div id="footer">
      <div id="footer-seperator" />
      <div id="footer-info">
        <p>
          <span className="text-important">
            Vinmonopolet har ingen tilknytting til Vinmonoholikern
          </span>
          {" "}
          utenom at dataen blir hentet fra Vinmonopolets CSV filer. Disse filene
          kan bli hentet fra
          {" "}
          {csvLink}
        </p>
        <p>
          Alle linkene går til Vinmonopolet.no og
          {" "}
          <span className="text-important">
            all bestilling, kjøp, og utlevering
          </span>
          {" "}
          blir utført av Vinmonopolet eller av Vinmonopolets samarbeidspartnere.
        </p>
      </div>
    </div>
  );
};

export default Footer;
