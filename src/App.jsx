import { useEffect, useState } from "react";
import React from "react";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import Header from "./components/Header";
import InputText from "./components/InputText";
import Body from "./components/Body";

export default function App() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching the data:", error));
  }, []);
  console.log(data, "data");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main data={data} id={id} setId={setId} />} />
        <Route path="/detail" element={<Details data={data} id={id} setId={setId} />} />
        {/* <Main data={data} /> */}
      </Routes>
    </BrowserRouter>
  );
}
