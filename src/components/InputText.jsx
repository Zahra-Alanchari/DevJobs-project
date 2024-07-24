import FilterIcon from "../icon/FilterIcon";
import React, { useState } from "react";

export default function InputText({setSelectedData, selectedData}) {
  function handleChange(e){
    const data = e.target.value.toLowerCase()
    setSelectedData(data)
  }
  console.log(selectedData,"content")
  return (
    <div>
      <input onChange={handleChange}  className="btn" type="text" placeholder="filter by title"/>
      <div>
      <FilterIcon/>
      </div>
    </div>
  );
}
