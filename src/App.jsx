import { useEffect, useState } from "react";
import React from "react";
import Main from "./components/Main";
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching the data:", error));
  }, []);
  console.log(data, "data");
  return (
    <>
      <Main/>
    </>
  );
}
