import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Rendercomponent from "./Rendercomponent";

const Home = () => {
  const [page, setPage] = useState(0);

  return (
    <div className="h-screen flex flex-col">
      <header>
        <Navbar />
      </header>

      <main className="flex flex-1 flex-row gap-2">
        <div className="basis-1/6 h-full">
          <Sidebar setPage={setPage} />
        </div>
        <div className="basis-4/6  ml-12 mt-8 mb-8 flex flex-col items-start pl-8 pt-4 pr-8 border shadow-lg rounded-lg">
          <Rendercomponent page={page} />
        </div>
      </main>
    </div>
  );
};

export default Home;
