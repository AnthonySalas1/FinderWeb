import React from "react";
import { Profile } from "../Landing/Auth/profile";
import { Navbar } from "../Landing/navbar";
import Jobs from "./jobs";

export const Main = () => {
  return (
    <>
    <Navbar/>
    <Profile/>
    <Jobs/>
    </>
  );
};
