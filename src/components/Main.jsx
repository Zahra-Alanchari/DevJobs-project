import React, { useState } from "react";
import Body from "./Body";
import Header from "./Header";
import InputText from "./InputText";

export default function Main({ data, id, setId }) {
//   const [id, setId] = useState(null);
  console.log(id,"what is id")
  return (
    <div>
      <Header />
      <InputText />
      <Body data={data} setId={setId} />
    </div>
  );
}
