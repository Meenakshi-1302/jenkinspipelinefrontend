import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import View from "./View";
import Add from "./Add";
import Edit from "./Edit"
 
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/create" element={<Add />} />
        <Route path="/update/:uid" element={<Edit/>} />
      </Routes>
    </Router>
  );
}
 
export default AppRouter;