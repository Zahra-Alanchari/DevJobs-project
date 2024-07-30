import React from "react";
import Header from "./Header";
import Item from "./Item";
import styled from "styled-components";
import { useSelector } from "react-redux";

const MainContent = styled.div`
  width: 375px;
  position: relative;
  top: -50px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;
const MainBody = styled.div`
  width: 375px;
  background-color: ${({ darkMode }) =>darkMode ? "rgb(244, 246, 248)" : "#121721"};
  position: absolute;
  padding-top: 65px;
  top: 41px;
  left: 0px;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export default function Main() {
  const mode = useSelector((state) => state.job.lightMode);

  return (
    <div>
      <Header />
      <MainContent>
        <MainBody darkMode={mode}>
          <Item />
        </MainBody>
      </MainContent>
    </div>
  );
}
