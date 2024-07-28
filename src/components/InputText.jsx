import { useDispatch, useSelector } from "react-redux";
import FilterIcon from "../icon/FilterIcon";
import React from "react";
import { updateInput } from "../redux/Slice";
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
    padding-left: 12px;
    color: #6e8098;
  }
  &[placeholder]{
    color: black;
    padding-left: 13px;
  }
  @media screen and (min-width: 768px){
    width: 689px;
    height: 80px;
    left: 33px;
  }
`;
const SearchIconbtn = styled.div`
  background-color: #5964e0;
  height: 48px;
  width: 48px;
  position: absolute;
  top: -10px;
  left: 270px;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export default function InputText() {
  const inputContent = useSelector((state) => state.job.input);
  const dispatch = useDispatch();
  function handleChange(e) {
    const data = e.target.value.toLowerCase();
    dispatch(updateInput(data));
  }

  return (
    <div>
      <TextBtn
        onChange={handleChange}
        type="text"
        placeholder="filter by title"
        value={inputContent}
      ></TextBtn>
      <div>
        <FilterIcon />
      </div>
      <SearchIconbtn>
        <SearchIcon />
      </SearchIconbtn>
    </div>
  );
}
