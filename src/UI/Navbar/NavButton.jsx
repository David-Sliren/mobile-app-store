import React from "react";
import { NavLink } from "react-router";

const NavButton = ({ to = "", title = "" }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-white"
          : "hover:text-white transition-colors w-full text-center"
      }
    >
      {title}
    </NavLink>
  );
};

export default NavButton;
