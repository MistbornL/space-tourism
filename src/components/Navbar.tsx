import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/shared/logo.svg";

export const Navbar = () => {
  const current = useLocation();
  const [selected, setSelected] = useState<string>(
    current.pathname === "/" ? "home" : current.pathname.slice(1)
  );
  const navbarItems: string[] = ["home", "destination", "crew", "technology"];
  return (
    <div className="flex items-center  justify-between ml-14  mt-10">
      <div>
        <img src={logo} alt="ah" />
      </div>
      <ul className="nav items-center pl-32 flex gap-20 h-24  backdrop-blur-sm text-gray-light">
        {navbarItems.map((item) => {
          return (
            <li className={selected === item ? "selected " : "transition-all"}>
              <Link
                onClick={() => setSelected(item)}
                to={`${item === "home" ? "/" : item}`}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
