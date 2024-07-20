import React, { useState } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

export default function Body({ data, id, setId }) {
  const [text, setText] = useState("0");

  return (
    <div className="content">
      <Link to="/detail" className="body">
        <Item data={data} text={text} setId={setId} />
      </Link>
    </div>
  );
}
