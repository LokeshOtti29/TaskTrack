import React from "react";
import Card from "./Card";

const Dashboard = () => {
  return (
    <div className="h-[100vh] w-full grid grid-cols-4 grid-rows-4 gap-2 mt-4 mb-4 ml-4 overflow-hidden">
      <div className="border col-span-2 row-span-4 gap-2 flex flex-col p-4">
        <div className="flex flex-row items-center justify-between m-2">
          <h3 className="text-[rgb(246,130,122)] font-semibold">Task</h3>
          <button className="flex flex-row items-center gap-1 text-gray-400 hover:text-gray-600 transition">
            <img src="/plus.png" alt="plus" className="h-4 w-4" />
            <span>Add Task</span>
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100%-4rem)] pr-2">
          <Card />
        </div>
      </div>

      <div className="border col-span-2 row-span-2 gap-2"></div>
      <div className="border col-span-2 row-span-2 gap-2"></div>
    </div>
  );
};

export default Dashboard;
