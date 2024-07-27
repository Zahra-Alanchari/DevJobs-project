import React from "react";
import Moon from "../icon/moon";
import SunIcon from "../icon/SunIcon";
import LogoIcon from "../icon/LogoIcon";
import ToggleIcon from "../icon/ToggleIcon";
import styled from "styled-components";
// import mobile from "../assets/"
const Head = styled.div`
  height: 136px;
  width: 375px;
  margin: 0 auto;
  background-color: #2ca3c7;
  /* background-image: url("../assets/mobile/bg-pattern-header.svg"); */
`;

const HeaderIcon = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;

export default function Header() {
  return (
    <Head>
      <HeaderIcon >
        <LogoIcon />
        <SunIcon />
        <ToggleIcon />
        <Moon />
      </HeaderIcon>
    </Head>
  );
}
