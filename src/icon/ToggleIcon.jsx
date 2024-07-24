import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../redux/Slice";
export default function ToggleIcon() {

  const mode = useSelector(state => state.mode.mode)
  const dispatch = useDispatch()
  function handleClick(){
    dispatch(changeMode(!mode))
    console.log(mode,"mode")
  }

  // light mode is true
  return (
    <div>
      <label class="switch">
        <input type="checkbox" onClick={handleClick} />
        <span class="slider round"></span>
      </label>
    </div>
  );
}
