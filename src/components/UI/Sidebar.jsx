import React from "react";
import { SIDE_BAR } from "../../constants/constant";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ setPage }) => {
  const navigate = useNavigate();
  return (
    <div className="h-full bg-[rgb(246,130,122)] text-white rounded-r-lg pt-4">
      <div className="relative flex flex-col items-center">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[20vw] h-[10vh] bg-white z-10"></div>
        <img
          src="/me.jpg"
          alt="Avatar"
          className="w-20 h-20 rounded-full object-cover z-10 border-4 border-white"
        />
        <div className="mt-2 text-center">
          <span className="block font-semibold">Lokesh Otti</span>
          <span className="text-sm">lokeshotti01@gmail.com</span>
        </div>
      </div>

      <div className="flex flex-col gap-6 pl-8 mt-6">
        {SIDE_BAR.map((sidebar, index) => (
          <div key={index} className="flex items-center gap-3">
            <img src={sidebar.IMAGE} alt={sidebar.NAME} className="w-6 h-6" />
            <button
              className="text-left hover:underline"
              onClick={() => navigate(sidebar.ROUTE)}
            >
              {sidebar.NAME}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
