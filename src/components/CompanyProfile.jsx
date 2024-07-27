import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Profile = styled.div`
  background-color: white;
  width: 327px;
  height: 205px;
  position: absolute;
  top: -30px;
  left: 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export default function CompanyProfile() {
  const data = useSelector((state) => state.job.job);
  const id = useSelector((state) => state.job.id);
  const selectedJob = data.find((item) => item.id === id);
  return (
    <>
      <Profile>
        {/* <img src="" alt="" /> */}
        <span>{selectedJob.company}</span>
        <span>{selectedJob.company}.com</span>
        <span>{selectedJob.website}</span>
      </Profile>
    </>
  );
}
