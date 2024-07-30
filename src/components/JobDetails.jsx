import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const JobDescription = styled.div`
  background-color: ${({ darkMode }) => (darkMode ? "white" : "#19202D")};
  border-radius: 5px;
  width: 327px;
  position: absolute;
  top: 220px;
  left: 28px;
  display: flex;
  height: 1600px;
  z-index: 5;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 689px;
    height: 1150px;
    left: 38px;
  }
  @media screen and (min-width: 1440px) {
    left: 377px;
  }
`;
const Items = styled.ul`
  padding: 22px;
  margin: 23px;
`;
const Detail = styled.li`
  color: #6e8098;
`;
const Position = styled.li`
  color: ${({ darkMode }) => (darkMode ? "#19202d" : "white")};
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
  @media screen and (min-width: 768px) {
    width: 141px;
    top: 50px;
    left: 500px;
  }
`;
const ApplyButtonend = styled.button`
  width: 279px;
  height: 48px;
  border-radius: 5px;
  background-color: #5964e0;
  color: white;
  &::after {
    clear: both;
    display: block;
    content: "";
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Introduction = styled.div`
  width: 300px;
  height: auto;
  position: absolute;
  top: 210px;
  left: 23px;
  color: #6e8098;
  @media screen and (min-width: 768px) {
    width: 593px;
  }
`;
const Title = styled.h3`
  color: ${({ darkMode }) => (darkMode ? "black" : "white")};
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
const Footer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    width: 768px;
    position: absolute;
    height: 96px;
    background-color: ${({ darkMode }) => (darkMode ? "white" : "#19202D")};
    top: 110%;
    left: -38px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    left: -374px;
  }
`;
const FooterApply = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
    width: 141px;
    height: 48px;
    border-radius: 5px;
    background-color: #5964e0;
    color: white;
  }
`;
const FooterPosition = styled.div`
  display: none;
  color: ${({ darkMode }) => (darkMode ? "#19202d" : "white")};
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;
const JobDetails = () => {
  const mode = useSelector((state) => state.job.lightMode);
  const data = useSelector((state) => state.job.job);
  const id = useSelector((state) => state.job.id);
  const selectedJob = data.find((item) => item.id === id);
  return (
    <JobDescription darkMode={mode}>
      <Items>
        <li>
          <Detail>
            {selectedJob.postedAt} . {selectedJob.contract}
          </Detail>
          <Position darkMode={mode}>
            <h4>{selectedJob.position}</h4>
          </Position>
          <Location>{selectedJob.location}</Location>
        </li>
      </Items>

      <ApplyButton>Apply now </ApplyButton>

      <Introduction>
        <p>{selectedJob.description}</p>
        <Title darkMode={mode}>Requirements</Title>
        <p>{selectedJob.requirements.content}</p>
        <ul>
          {selectedJob.requirements.items.map((item) => (
            <ListDic>{item}</ListDic>
          ))}
        </ul>
        <Title darkMode={mode}>what you will do</Title>
        <p>{selectedJob.role.content}</p>
        <ul>
          {selectedJob.role.items.map((item) => (
            <ListDec>{item}</ListDec>
          ))}
        </ul>
        <ApplyButtonend>Apply now </ApplyButtonend>
      </Introduction>
      <Footer darkMode={mode}>
        <FooterPosition darkMode={mode}>
          <h4>{selectedJob.position}</h4>
          <p>so Digital .Inc</p>
        </FooterPosition>
        <FooterApply>Apply now </FooterApply>
      </Footer>
    </JobDescription>
  );
};

export default JobDetails;
