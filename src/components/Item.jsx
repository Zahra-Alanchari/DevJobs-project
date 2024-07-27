import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchgetAllJobs } from "../redux/action";
import { updateSelectedId } from "../redux/Slice";
import InputText from "./InputText";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Items = styled.ul`
  background-color: white;
  padding: 22px;
  margin: 23px;
  border-radius: 5px;

  & li {
    margin-bottom: 15px;
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

const Item = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchgetAllJobs());
  }, [dispatch]);
  const data = useSelector((state) => state.job.job);
  const selectedData = useSelector((state) => state.job.input);

  // console.log(data, "dataw");
  function handleClick(e) {
    const target = e.target.id;
    dispatch(updateSelectedId(target));
  }

  const filteredData = data.filter((job) => {
    if (selectedData === "") {
      return job;
    } else {
      return job.position.toLowerCase().includes(selectedData);
    }
  });
  return (
    <>
      <div>
        <InputText />
      </div>
      <Link to="/detail">
        <div>
          {filteredData.map((item) => (
            <Items onClick={handleClick} key={item.id} id={item.id}>
              <li>
                <img src={item.logo} alt="scoot" />
              </li>
              <li>
                <Detail>
                  {item.postedAt} . {item.contract}
                </Detail>
                <Position><h4>{item.position}</h4></Position>
                <Detail>{item.company}</Detail>
                <Location>{item.location}</Location>
              </li>
            </Items>
          ))}
        </div>
      </Link>
    </>
  );
};

export default Item;
