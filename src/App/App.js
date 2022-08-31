import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Gallery,
  News,
  SinglePost,
  Resturant,
  Rooms,
  RoomsDetails,
  Spa,
  NotFound,
} from "../Pages";
import "./App.scss";

export const VideoContext = React.createContext();
export const ActivePopupContext = React.createContext();

function App() {
  const [playVideo, setPlayVideo] = useState(false);
  const [ActivePopup, setActivePopup] = useState(null);

  return (
    <VideoContext.Provider value={[playVideo, setPlayVideo]}>
      <ActivePopupContext.Provider value={[ActivePopup, setActivePopup]}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Gallery" element={<Gallery />} />
            <Route path="News" element={<News />} />
            <Route path="News/:PostId" element={<SinglePost />} />
            <Route path="Resturant" element={<Resturant />} />
            <Route path="Rooms" element={<Rooms />} />
            <Route path="RoomsDetails" element={<RoomsDetails />} />
            <Route path="Spa" element={<Spa />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </ActivePopupContext.Provider>
    </VideoContext.Provider>
  );
}

export default App;
