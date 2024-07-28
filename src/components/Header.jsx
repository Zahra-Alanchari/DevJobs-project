import React from "react";
import Moon from "../icon/moon";
import SunIcon from "../icon/SunIcon";
import LogoIcon from "../icon/LogoIcon";
import ToggleIcon from "../icon/ToggleIcon";
import styled from "styled-components";
import bgPatternHeader from '../assets/mobile/bg-pattern-header.svg';
import tbPatternHeader from '../assets/tablet/bg-pattern-header.svg';
import dsPatternHeader from '../assets/desktop/bg-pattern-header.svg'

const Head = styled.div`
  height: 136px;
  width: 375px;
  margin: 0 auto;
  /* background-color: #2ca3c7; */
  background-image: url(${bgPatternHeader});
  @media screen and (min-width: 768px) {
    background-image: url(${tbPatternHeader});
    background-color: rgb(244, 246, 248);
    width: 768px;
    height: 160px;
  }
  @media screen and (min-width: 1440px) {
    background-image:url(${dsPatternHeader}) ;
    width: 1440px;
    height: 162px;
  }
  
`;

const HeaderIcon = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  @media screen and (min-width: 1440px) {
    padding: 20px 170px;
  }
`;

export default function Header() {
  return (
    <Head>
      <HeaderIcon>
        <LogoIcon />
        <SunIcon />
        <ToggleIcon />
        <Moon />
      </HeaderIcon>
    </Head>
  );
}
