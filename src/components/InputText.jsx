import { useSelector } from "react-redux";
import FilterIcon from "../icon/FilterIcon";
import React, { useState } from "react";

export default function InputText({setSelectedData, selectedData}) {
  const mode = useSelector(state => state.mode.mode)
  function handleChange(e){
    const data = e.target.value.toLowerCase()
    setSelectedData(data)
  }
  console.log(selectedData,"content")
  return (
    <div>
      <input onChange={handleChange}  className={`btn ${mode === false ? "": "darkmode"}`} type="text" placeholder="filter by title"/>
      <div>
      <FilterIcon/>
      </div>
    </div>
  );
}
