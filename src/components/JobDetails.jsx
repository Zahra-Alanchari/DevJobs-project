import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const JobDescription = styled.div`
  background-color: white;
  width: 327px;
  position: absolute;
  top: 220px;
  left: 23px;
`;

const Items = styled.ul`
  padding: 22px;
  margin: 23px;
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
  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;
const ApplyButtonend = styled.button`
  width: 279px;
  height: 48px;
  border-radius: 5px;
  background-color: #5964e0;
  color: white;
`;
const Introduction = styled.div`
  width: 300px;
  height: 205px;
  position: absolute;
  top: 210px;
  left: 23px;
  color: #6e8098;
  /* display: flex; */
`;
const Title = styled.h3`
  color: black;
  margin: 30px 0;
`;
const ListDec = styled.li`
  list-style-type: decimal;
  margin: 15px;
`;
const ListDic = styled.li`
  list-style-type: disc;
  margin: 15px;
`;
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
        <Title>Requirements</Title>
        <p>{selectedJob.requirements.content}</p>
        <ul>
          {selectedJob.requirements.items.map((item) => (
            <ListDic>{item}</ListDic>
          ))}
        </ul>
        <Title>what you will do</Title>
        <p>{selectedJob.role.content}</p>
        <ul>
          {selectedJob.role.items.map((item) => (
            <ListDec>{item}</ListDec>
          ))}
        </ul>
        <ApplyButtonend>Apply now </ApplyButtonend>
      </Introduction>
    </JobDescription>
  );
};

export default JobDetails;
