import React from "react";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between py-2 my-4 px-6 shadow-lg">
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
