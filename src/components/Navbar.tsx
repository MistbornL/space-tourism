import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";

export const Navbar = () => {
  return (
    <div className="flex items-center  justify-between ml-14  mt-10">
      <div>
        <img src={logo} alt="ah" />
      </div>
      <ul className="nav items-center pl-32 flex gap-20 h-24  backdrop-blur-sm text-gray-light">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li className="">
          <Link to={"/destination"}>DESTINATION</Link>
        </li>
        <li className=" ">
          <Link to={"/crew"}>CREW</Link>
        </li>
        <li className="">
          <Link to={"/technology"}>TECHNOLOGY</Link>
        </li>
      </ul>
    </div>
  );
};
