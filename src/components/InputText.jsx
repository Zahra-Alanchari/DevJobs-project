import { useDispatch, useSelector } from "react-redux";
import FilterIcon from "../icon/FilterIcon";
import React, { useEffect } from "react";
import {
  fullFilter,
  setLocationFilter,
  updateInput,
  workTimeFilter,
} from "../redux/Slice";
import styled from "styled-components";
import SearchIcon from "../icon/SearchIcon";

const TextBtn = styled.input`
  width: 315px;
  height: 80px;
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(205, 202, 202, 0.809);
  position: absolute;
  top: -26px;
  left: 22px;
  z-index: 1;
  &::placeholder {
    padding-left: 18px;
    color: #6e8098;
  }
  &[placeholder] {
    color: black;
    padding-left: 28px;
  }
  @media screen and (min-width: 768px) {
    width: 190px;
    height: 80px;
    position: static;
    border-radius: 0;
    top: 0;
    left: 33px;
    border-right: 1px solid gray;
  }
  @media screen and (min-width: 1440px) {
    width: 350px;
    height: 80px;
    left: 145px;
  }
`;
const LocBtn = styled.input`
  display: none;
  border-radius: 5px;
  &::placeholder {
    padding-left: 18px;
    color: #6e8098;
  }
  &[placeholder] {
    color: black;
    padding-left: 28px;
  }
  @media screen and (min-width: 768px) {
    display: inline-block;
    width: 190px;
    height: 80px;
    top: 0;
    border-right: 1px solid gray;
    border-radius: 0;
  }
  @media screen and (min-width: 1440px) {
    width: 350px;
    height: 80px;
  }
`;
const SearchIconbtn = styled.button`
  background-color: #5964e0;
  height: 48px;
  width: 48px;
  position: absolute;
  top: -10px;
  right: 55px;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  & span:last-child {
    display: none;
    @media screen and (min-width: 768px) {
      display: inline-block;
      color: white;
    }
  }
  & span:first-child {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
  @media screen and (min-width: 768px) {
    width: 80px;
    height: 48px;
    right: 76px;
  }
  @media screen and (min-width: 1440px) {
    width: 123px;
    height: 48px;
    right: 187px;
  }
`;

const InputContainer = styled.div`
  & input + label {
    display: none;
    margin-right: 40px;
    @media screen and (min-width: 768px) {
      background-color: white;
      width: 240px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media screen and (min-width: 1440px) {
      width: 415px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 640px;
    height: 80px;
    border-radius: 5px;
    background-color: white;
    position: absolute;
    top: -26px;
    left: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  @media screen and (min-width: 1440px) {
    width: 1110px;
    height: 80px;
    left: 170px;
  }
`;

export default function InputText() {
  const inputContent = useSelector((state) => state.job.input);
  const locationInput = useSelector((state) => state.job.location);
  const data = useSelector((state) => state.job.job);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  function handleChange(e) {
    const data = e.target.value.toLowerCase();
    dispatch(updateInput(data));
  }
  const handleLocationChange = (e) => {
    dispatch(setLocationFilter(e.target.value));
  };
  function handleCheck(e) {
    const status = e.target.checked;
    console.log(status, "status");
    dispatch(workTimeFilter(status));
  }

  const selectedTitleData = useSelector((state) => state.job.input);
  const selectedLocationData = useSelector((state) => state.job.location);
  const selectedTimeData = useSelector((state) => state.job.fullTime);
  const showFilteredData = useSelector((state) => state.job.filteredData);
  console.log(showFilteredData, "status");

  function handleGetJob() {
    const filterData = data.filter((job) => {
      if (
        selectedTitleData === "" &&
        selectedLocationData === "" &&
        (selectedTimeData === "" || selectedTimeData === false)
      ) {
        return job;
      } else {
        return (
          job.position.toLowerCase().includes(selectedTitleData) &&
          job.location.toLowerCase().includes(selectedLocationData) &&
          (selectedTimeData ? job.contract === "Full Time" : true)
        );
      }
    });
    dispatch(fullFilter(filterData));
  }
  return (
    <div>
      <InputContainer>
        <TextBtn
          onChange={handleChange}
          type="text"
          placeholder="filter by title"
          value={inputContent}
        ></TextBtn>
        <LocBtn
          type="text"
          onChange={handleLocationChange}
          value={locationInput}
          placeholder="filter by location"
        ></LocBtn>
        <label>
          <input onChange={handleCheck} type="checkbox" />
          Full Time only
        </label>
        <div>
          <FilterIcon />
        </div>
      </InputContainer>
      <SearchIconbtn onClick={handleGetJob}>
        <span>
          <SearchIcon />
        </span>
        <span>Search</span>
      </SearchIconbtn>
    </div>
  );
}
