import React, { useRef } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Rendercomponent from "./Rendercomponent";

const Home = () => {
  const select = useRef(0);
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div>
          <div>
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
