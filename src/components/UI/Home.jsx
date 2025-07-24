import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Rendercomponent from "./Rendercomponent";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col">
      <header>
        <Navbar />
      </header>

      <main className="flex flex-1 flex-row gap-2">
        <div className="basis-1/6">
          <Sidebar />
        </div>
        <div className="basis-5/6  ml-12 mt-8 mr-12 mb-2 flex flex-col items-start pl-8 pt-4 pr-8 border shadow-lg rounded-lg">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Home;
