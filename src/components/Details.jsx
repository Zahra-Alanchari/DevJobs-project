import React from "react";
import Header from "./Header";
import CompanyProfile from "./CompanyProfile";
import JobDetails from "./JobDetails";
import styled from "styled-components";
import { useSelector } from "react-redux";

const MainContent = styled.div`
  width: 375px;
  margin: 0 auto;
  background-color: ${({ darkMode }) =>
    darkMode ? "rgb(244, 246, 248)" : "#121721"};
  height: 1950px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 768px;
    height: 1580px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    height: 1580px;
    top: -2px;
  }
`;

export default function Details() {
  const mode = useSelector((state) => state.job.lightMode);
  return (
    <>
      <Header />
      <MainContent darkMode={mode}>
        <CompanyProfile />
        <JobDetails />
      </MainContent>
    </>
  );
}
