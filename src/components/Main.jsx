import React, { useState } from "react";
// import Body from "./Body";
import Header from "./Header";
import InputText from "./InputText";
import Item from "./Item";
import { Link } from "react-router-dom";

export default function Main({id, setId}) {
  const [selectedData, setSelectedData] = useState("");
  return (
    <div>
      <Header />
      <InputText
        selectedData={selectedData}
        setSelectedData={setSelectedData}
      />
      <div className="content">
        <Link to="/detail" className="body">
          <Item setId={setId} id={id} selectedData={selectedData} setSelectedData={setSelectedData} />
        </Link>
      </div>
    </div>
  );
}
