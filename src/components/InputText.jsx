import FilterIcon from "../icon/FilterIcon";
import React, { useState } from "react";

export default function InputText({setSelectedData, selectedData}) {
  // const [content, setContent] = useState("")
  function handleChange(e){
    const data = e.target.value.toLowerCase()
    setSelectedData(data)
  }
  console.log(selectedData,"content")
  return (
    <div>
      <input value={selectedData} onChange={(e)=> handleChange(e)} className="btn" type="text" placeholder="filter by title"/>
      <div>
      <FilterIcon/>
      </div>
    </div>
  );
}
