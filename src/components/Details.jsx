import React from "react";
import Header from "./Header";
import CompanyProfile from "./CompanyProfile";
import JobDetails from "./JobDetails";
import styled from "styled-components";
// import { useQuery } from "@tanstack/react-query";
// import { jobFetcher, jobItemFetcher } from "../fetcher";

const MainBody = styled.div`
  width: 375px;
  background-color: #00ff2f;
  position: absolute;
  padding-top: 65px;
  top: -11px;
  left: 0px;
  height: 1000px;
`;
const MainContent = styled.div`
  width: 375px;
  position: relative;
  top: 10px;
  margin: 0 auto;
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
