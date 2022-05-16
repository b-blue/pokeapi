import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";

function Pages() {
const location = useLocation();

  return (
  <>
<Routes>
    <Route path='/' element={<Home />} />
    <Route path="/searched/:search" element={<Searched />} />
</Routes>
  </>
  )
}

export default Pages