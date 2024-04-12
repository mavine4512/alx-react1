import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import "./Footer.css";

function Footer() {
  return (
    <>
      x
      <div className="div-footer">
        <p className="App-footer">
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </>
  );
}

export default Footer;
