import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const JobDescription = styled.div`
  background-color: white;
  width: 327px;
  height: 205px;
  position: absolute;
  top: 220px;
  left: 23px;
`;

const Items = styled.ul`
  /* background-color: white; */
  padding: 22px;
  margin: 23px;
  /* border-radius: 5px; */

  & li {
    /* margin-bottom: 5px; */
  }
`;
const Detail = styled.li`
  color: #6e8098;
`;
const Position = styled.li`
  color: #19202d;
`;
const Location = styled.li`
  color: #5964e0;
`;
const ApplyButton = styled.button`
  width: 279px;
  height: 48px;
  position: absolute;
  top: 130px;
  left: 20px;
  border-radius: 5px;
  background-color: #5964e0;
  color: white;
`;
const Introduction= styled.div`
  width: 320px;
  height: 205px;
  position: absolute;
  top: 420px;
  left: 23px;
`

const JobDetails = () => {
  const data = useSelector((state) => state.job.job);
  const id = useSelector((state) => state.job.id);
  const selectedJob = data.find((item) => item.id === id);
  return (
    <JobDescription>
      <Items>
        <li>
          <Detail>
            {selectedJob.postedAt} . {selectedJob.contract}
          </Detail>
          <Position>
            <h4>{selectedJob.position}</h4>
          </Position>
          <Location>{selectedJob.location}</Location>
        </li>
      </Items>

      <ApplyButton>Apply now </ApplyButton>

      <Introduction>
        <p>{selectedJob.description}</p>
        <h1>Requirements</h1>
        <p>{selectedJob.requirements.content}</p>
        <ul className="list">
          {selectedJob.requirements.items.map((item) => (
            <li className="list">{item}</li>
          ))}
        </ul>
        <h1>what you will do</h1>
      </Introduction>
    </JobDescription>
  );
};

export default JobDetails;
