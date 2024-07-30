import React from "react";
import Header from "./Header";
import CompanyProfile from "./CompanyProfile";
import JobDetails from "./JobDetails";
import styled from "styled-components";

const MainBody = styled.div`
  width: 375px;
  background-color: #00ff2f;
  position: absolute;
  padding-top: 65px;
  top: -11px;
  left: 0px;
  /* height: auto; */
  /* overflow: auto; */
  /* display: block; */
  /* height: 2127px; */
`;
const MainContent = styled.div`
  width: 375px;
  position: relative;
  top: 10px;
  margin: 0 auto;
  /* overflow: auto; */
`;

export default function Details() {
  return (
    <>
      <Header />
      <MainContent>
        <MainBody>
          <CompanyProfile />
          <JobDetails />
        </MainBody>
      </MainContent>
    </>
  );
}
