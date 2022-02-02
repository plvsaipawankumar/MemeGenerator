import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "./App";
import EditMeme from "./Edit Meme/EditMeme";
import MyOwn from "./Edit Meme/MyOwn";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/editmeme/:name" element={<EditMeme />}></Route>
        <Route path="/createyourown" element={<MyOwn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
