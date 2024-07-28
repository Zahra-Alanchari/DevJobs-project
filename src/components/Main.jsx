import React from "react";
import Header from "./Header";
import Item from "./Item";
import styled from "styled-components";

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
  background-color: rgb(244, 246, 248);
  position: absolute;
  padding-top: 65px;
  top: 41px;
  left: 0px;
  @media screen and (min-width: 768px) {
    /* background-color: red; */
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    /* background-color: red; */
  }
`;

export default function Main() {
  return (
    <div>
      <Header />
      <MainContent>
        <MainBody>
          <Item />
        </MainBody>
      </MainContent>
    </div>
  );
}
