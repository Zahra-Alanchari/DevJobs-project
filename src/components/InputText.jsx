import FilterIcon from "../icon/FilterIcon";
import React from "react";

export default function InputText() {
  return (
    <div>
      <input className="btn" type="text" placeholder="filter by title"/>
      <div>
      <FilterIcon/>
      </div>
    </div>
  );
}
