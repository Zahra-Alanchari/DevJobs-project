import React from "react";
import Moon from "../icon/moon";
import SunIcon from "../icon/SunIcon";
import LogoIcon from "../icon/LogoIcon";
import ToggleIcon from "../icon/ToggleIcon";
import styled from "styled-components";

// const Head = styled.div`
//   height: 136px;
//   width: 375px;
//   margin: 0 auto;
//   background-image: url("../assets/mobile/bg-pattern-header.svg");
// `;

export default function Header() {
  return (
    <div className="header">
      <div className="xc">
        <LogoIcon />
        <SunIcon />
        <ToggleIcon />
        <Moon />
      </div>
    </div>
  );
}
