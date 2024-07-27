import React from "react";
import Header from "./Header";
import Item from "./Item";
import styled from "styled-components";

const MainContent = styled.div`
  width: 375px;
  position: relative;
  top: -50px;
  margin: 0 auto;
`;
const MainBody = styled.div`
  width: 375px;
  background-color: rgb(244, 246, 248);
  position: absolute;
  padding-top: 65px;
  top: 41px;
  left: 0px;
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
