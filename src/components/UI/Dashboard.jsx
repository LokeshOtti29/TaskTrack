import React from "react";
import Card from "./Card";
import Doughnutchart from "./Doughnut";
import { DASHBORAD } from "../../constants/constant";
const Dashboard = () => {
  const cards = [
    {
      Title: "Your profile information needs to be updated.",
      message:
        "Don't forget to complete your profile by filling in your job position and contact number. A complete profile increases your visibility and helps others connect with you professionally.",
      priority: "High",
      status: "Not Started",
      Timing: "29/05/2025",
    },
    {
      Title: "Your profile information needs to be updated.",
      message:
        "Don't forget to complete your profile by filling in your job position and contact number. A complete profile increases your visibility and helps others connect with you professionally.",
      priority: "High",
      status: "Completed",
      Timing: "29/05/2025",
    },
    {
      Title: "Your profile information needs to be updated.",
      message:
        "Don't forget to complete your profile by filling in your job position and contact number. A complete profile increases your visibility and helps others connect with you professionally.",
      priority: "High",
      status: "Completed",
      Timing: "29/05/2025",
    },
    {
      Title: "Your profile information needs to be updated.",
      message:
        "Don't forget to complete your profile by filling in your job position and contact number. A complete profile increases your visibility and helps others connect with you professionally.",
      priority: "High",
      status: "Completed",
      Timing: "29/05/2025",
    },
    {
      Title: "Your profile information needs to be updated.",
      message:
        "Don't forget to complete your profile by filling in your job position and contact number. A complete profile increases your visibility and helps others connect with you professionally.",
      priority: "High",
      status: "Completed",
      Timing: "29/05/2025",
    },
  ];
  return (
    <div className="h-[100vh] w-full grid grid-cols-4 grid-rows-4 gap-2 mt-4 mb-4 ml-4 overflow-hidden">
      <div className="border col-span-2 row-span-4 gap-2 flex flex-col p-4 rounded-lg">
        <div className="flex flex-row items-center justify-between m-2">
          <h3 className="text-[rgb(246,130,122)] font-semibold">Task</h3>
          <button className="flex flex-row items-center gap-1 text-gray-400 hover:text-gray-600 transition">
            <img src="/plus.png" alt="plus" className="h-4 w-4" />
            <span>Add Task</span>
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100%-4rem)] pr-2">
          <Card cards={cards} />
        </div>
      </div>

      <div className="border col-span-2 row-span-2 p-4 flex flex-col gap-6 rounded-lg">
        <span className="text-left  font-semibold text-[rgb(246,130,122)]">
          Task Status
        </span>

        <div className="flex flex-row justify-between items-center gap-4">
          <div className="w-1/3 min-w-[120px] flex justify-center">
            <Doughnutchart
              status={DASHBORAD.COMPLETED}
              color={DASHBORAD.COL_COMP}
            />
          </div>
          <div className="w-1/3 min-w-[120px] flex justify-center">
            <Doughnutchart
              status={DASHBORAD.IN_PROGRESS}
              color={DASHBORAD.COL_PROG}
            />
          </div>
          <div className="w-1/3 min-w-[120px] flex justify-center">
            <Doughnutchart
              status={DASHBORAD.NOT_STARTED}
              color={DASHBORAD.COL_NSTART}
            />
          </div>
        </div>
      </div>

      <div className="border col-span-2 row-span-2 gap-2 flex flex-col p-4 rounded-lg">
        <div className="flex flex-row items-center justify-between m-2">
          <h3 className="text-[rgb(246,130,122)] font-semibold">
            Completed Task
          </h3>
        </div>

        <div className="overflow-y-auto h-[calc(100%-4rem)] pr-2">
          <Card cards={cards.filter((card) => card.status === "Completed")} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
