import React from "react";
import { Route, Routes } from "react-router-dom";

import Characters from "./Characters/Characters";
import Login from "./Login/Login";
import CharacterFullDescription from "./CharacterFullDescription/CharacterFullDescription";
import Profile from "./Profile/Profile";

const RouteComponents: React.FC = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Characters/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signUp" element={<Login/>}/>
        <Route path="/characters" element={<Characters/>}/>
        <Route path="/characters/character/:id" element={<CharacterFullDescription/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </>
  );
};

export default RouteComponents;
