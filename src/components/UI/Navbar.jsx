import React from "react";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between mx-16 my-4">
      <div className="text-xl">
        <h1>
          <span className="text-[rgb(246,130,122)] font-bold">Task</span>-
          <b>Track</b>
        </h1>
      </div>
      <div>
        <Search />
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
