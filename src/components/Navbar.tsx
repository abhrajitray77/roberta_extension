import React, { useCallback } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  //funtion for route changing
  const routeChange = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  return (
    <nav className="p-5">
      <ul className="flex space-x-6 text-gray-800 text-md font-medium ">
        <li
          className="cursor-pointer hover:text-gray-950 hover:-translate-y-1 transition-all duration-500"
          onClick={() => routeChange("/")}
        >
          Model
        </li>
        <li
          className="cursor-pointer hover:-translate-y-1 transition-all duration-500"
          onClick={() => routeChange("/Clips")}
        >
          Clipboard
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
