import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchgetAllJobs } from "../redux/action";
import { updateSelectedId } from "../redux/Slice";
import InputText from "./InputText";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Items = styled.ul`
  background-color: ${({ darkMode }) => (darkMode ? "white" : "#19202D")};
  padding: 22px;
  margin: 23px;
  border-radius: 5px;

  & li {
    margin-bottom: 15px;
    &:last-of-type {
      @media screen and (min-width: 768px) {
        margin-top: 35px;
      }
    }
  }
  & img {
    background-color: blue;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    vertical-align: middle;
    position: absolute;
    margin-top: -40px;
    margin-left: -10px;
  }
  @media screen and (min-width: 768px) {
    width: 250px;
    height: 200px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 689px;
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto;
  }
  @media screen and (min-width: 1440px) {
    width: 1110px;
    justify-content: center;
  }
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
const Item = () => {
  const mode = useSelector((state) => state.job.lightMode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchgetAllJobs());
  }, [dispatch]);
  const data = useSelector((state) => state.job.job);
  const showFilteredData = useSelector((state) => state.job.filteredData);
  function handleClick(e) {
    const target = e.target.id;
    dispatch(updateSelectedId(target));
    // e.stopPropagation();
  }
  return (
    <>
      <div>
        <InputText />
      </div>
      <Wrapper>
        {(showFilteredData || data).map((item) => (
          <Link onClick={handleClick} key={item.id} to={"/detail"}>
            <Items
              darkMode={mode}
              
              key={item.id}
              id={item.id}
            >
              <li>
                <img onClick={handleClick} key={item.id} src={item.logo} alt="scoot" />
              </li>
              <li>
                <Detail>
                  {item.postedAt} . {item.contract}
                </Detail>
                <Position darkMode={mode}>
                  <h4>{item.position}</h4>
                </Position>
                <Detail>{item.company}</Detail>
                <Location>{item.location}</Location>
              </li>
            </Items>
          </Link>
        ))}
      </Wrapper>
    </>
  );
};

export default Item;
