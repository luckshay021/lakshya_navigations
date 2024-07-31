import { Routes, Route } from "react-router-dom";
import Home from "../app/Home";
import About from "../app/About";

export default function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
  );
}
