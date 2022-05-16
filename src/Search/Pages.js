import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Search from "./Search";
import Searched from "../Pages/Searched";

function Pages() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/searched/:search" element={<Searched />} />
      </Routes>
    </>
  );
}

export default Pages;
