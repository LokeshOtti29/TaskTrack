import React from "react";
import { SIDE_BAR } from "../../constants/constant";

const Sidebar = ({ setPage }) => {
  return (
    <div className="h-full bg-[rgb(246,130,122)] text-white rounded-r-lg pl-10 pt-4">
      <div></div>
      <div className="flex flex-col gap-6">
        {SIDE_BAR.map((sidebar, index) => (
          <div key={index} className="flex items-center gap-3">
            <img src={sidebar.IMAGE} alt={sidebar.NAME} className="w-6 h-6" />
            <button
              className="text-left hover:underline"
              onClick={() => setPage(index)}
            >
              {sidebar.NAME}
            </button>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
