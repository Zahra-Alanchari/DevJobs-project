import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedId } from "../../redux/Slice";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InputText from "../InputText/InputText";
import { fetchgetAllJobs } from "../../redux/action";
import { Detail, Items, Location, Position, Wrapper } from "./Item.styled";

const Item = () => {
  const mode = useSelector((state) => state.job.lightMode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchgetAllJobs());
  }, [dispatch]);
  const data = useSelector((state) => state.job.job);
  const showFilteredData = useSelector((state) => state.job.filteredData);

  function handleClick(e) {
    const target = e.currentTarget.id;
    dispatch(updateSelectedId(target));
  }

  return (
    <>
      <div>
        <InputText />
      </div>
      <Wrapper>
        <Link to={"/detail"}>
          {(showFilteredData || data)?.map((item) => {
            return (
              <Items
                darkMode={mode}
                onClick={handleClick}
                key={item.id}
                id={item.id}
              >
                <li>
                  <img
                    onClick={handleClick}
                    key={item.id}
                    src={item.logo}
                    alt="scoot"
                  />
                </li>
                <li>
                  <Detail>
                    {item && item.postedAt} . {item && item.contract}
                  </Detail>
                  <Position darkMode={mode}>
                    <h4>{item.position}</h4>
                  </Position>
                  <Detail>{item.company}</Detail>
                  <Location>{item.location}</Location>
                </li>
              </Items>
            );
          })}
        </Link>
      </Wrapper>
    </>
  );
};

export default Item;
