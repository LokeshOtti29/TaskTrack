import React from "react";

const Dashboard = () => {
  return (
    <div className="h-full w-full grid grid-cols-4 grid-rows-4 gap-2 mt-4 mb-4 ml-4">
      <div className="bg-red-600 col-span-2 row-span-4"></div>
      <div className="bg-blue-400 col-span-2 row-span-2"></div>
      <div className="bg-green-400 col-span-2 row-span-2"></div>
    </div>
  );
};

export default Dashboard;
