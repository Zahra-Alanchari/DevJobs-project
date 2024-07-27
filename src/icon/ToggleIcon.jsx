import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMode, updateMode } from "../redux/Slice";
export default function ToggleIcon() {

  const mode = useSelector(state => state.job.lightMode)
  const dispatch = useDispatch()
  function handleClick(){
    dispatch(updateMode(!mode))
    console.log(mode,"mode")
  }

  // light mode is true
  return (
    <div>
      <label class="switch">
        <input onClick={handleClick} type="checkbox"  />
        <span class="slider round"></span>
      </label>
    </div>
  );
}
