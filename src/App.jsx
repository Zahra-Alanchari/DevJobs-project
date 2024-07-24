import { useEffect, useState } from "react";
import React from "react";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import Header from "./components/Header";
import InputText from "./components/InputText";
// import Body from "./components/Body";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();
export default function App() {
  const [id, setId] = useState(null);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main id={id} setId={setId} />} />
          <Route path="/detail" element={<Details id={id} />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
