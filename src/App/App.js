import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Gallery,
  News,
  Resturant,
  Rooms,
  RoomsDetails,
  Spa,
  // NotFound,
} from "../Pages";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="Contact" element={<Contact />}></Route>
        <Route path="Gallery" element={<Gallery />}></Route>
        <Route path="News" element={<News />}></Route>
        <Route path="Resturant" element={<Resturant />}></Route>
        <Route path="Rooms" element={<Rooms />}></Route>
        <Route path="RoomsDetails" element={<RoomsDetails />}></Route>
        <Route path="Spa" element={<Spa />}></Route>
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
