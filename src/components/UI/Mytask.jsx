import React, { useState } from "react";
import Card from "./Card";
import Display from "./Display";
import Edittask from "./Edittask";

const Mytask = () => {
  const [edit, setEdit] = useState(false);
  const [display, setDisplay] = useState({
    title: "",
    priority: "",
    createdtime: "",
    status: "",
    description: "",
  });

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
  const handledisplay = (data) => {
    const obj = {
      title: data.Title,
      priority: data.priority,
      createdtime: data.Timing,
      status: data.status,
      description: data.message,
    };
    setDisplay(obj);
  };
  return (
    <div className="h-[100vh] w-full grid grid-cols-4 grid-rows-4 gap-2 mt-2 mb-4 ml-2 overflow-hidden ">
      <div className="border col-span-2 row-span-4 gap-2 flex flex-col p-4 rounded-lg">
        <div className="flex flex-row items-center justify-between m-2">
          <span className="text-[rgb(246,130,122)] font-semibold">My Task</span>
        </div>
        <div className="overflow-y-auto h-[calc(100%-4rem)] pr-2">
          <Card cards={cards} handledisplay={handledisplay} />
        </div>
      </div>
      <div className="border col-span-2 row-span-4 p-4 flex flex-col gap-6 rounded-lg">
        <Display display={display} setEdit={setEdit} />
      </div>
      {edit && <Edittask setEdit={setEdit} />}
    </div>
  );
};

export default Mytask;
