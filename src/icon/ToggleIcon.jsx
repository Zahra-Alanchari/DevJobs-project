import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMode, updateMode } from "../redux/Slice";
import styled from "styled-components";

const ToggleLabel =styled.label`
position: relative;
display: inline-block;
width: 50px;
height: 19px;
margin: 5px;

input {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}

span {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
  
  &::before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 1.5px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
}

input:checked + span {
  background-color: #2196f3;
}

input:checked + span::before {
  transform: translateX(34px);
}
`;

export default function ToggleIcon() {
  const mode = useSelector((state) => state.job.lightMode);
  const dispatch = useDispatch();
  function handleClick(e) {
    dispatch(updateMode(!mode));
  }

  // dark mode is true
  return (
    <div>
      <ToggleLabel >
        <input onClick={handleClick} type="checkbox" />
        <span></span>
      </ToggleLabel>
    </div>
  );
}
