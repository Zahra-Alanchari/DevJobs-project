import React from "react";
import { useSelector } from "react-redux";
import {Profile} from "./CompanyProfile.styled"
export default function CompanyProfile() {
  const mode = useSelector((state) => state.job.lightMode);
  const data = useSelector((state) => state.job.job);
  const id = useSelector((state) => state.job.id);
  const selectedJob = data.find((item) => item.id === id);
  return (
    <>
      <Profile darkMode={mode}>
        {/* <img src="" alt="" /> */}
        <span>{selectedJob.company}</span>
        <span>{selectedJob.company}.com</span>
        <a href={selectedJob.website}>Company Site</a>
      </Profile>
    </>
  );
}
