import React from "react";
import Moon from "../icon/moon";
import SunIcon from "../icon/SunIcon";
import InputText from "./InputText";
import LogoIcon from "../icon/LogoIcon";

export default function Header() {
  return (
    <div className="header">
      <div className="xc">
        <LogoIcon />
        <Moon />
        <SunIcon />
      </div>
      <InputText />
    </div>
  );
}
