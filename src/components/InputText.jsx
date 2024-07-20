import FilterIcon from "../icon/FilterIcon";
import React, { useState } from "react";

export default function InputText() {
  const [content, setContent] = useState("")
  function handleChange(e){
    setContent(e.target.value)
  }
  console.log(content,"content")
  return (
    <div>
      <input value={content} onChange={(e)=> handleChange(e)} className="btn" type="text" placeholder="filter by title"/>
      <div>
      <FilterIcon/>
      </div>
    </div>
  );
}
