import React from "react";

const Card = () => {
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
    <div>
      {cards.map((val) => {
        return (
          <div className="flex flex-col gap-3 border rounded-lg m-2 p-2 pl-4 pr-4">
            <div className="font-bold">
              <h1>{val.Title}</h1>
            </div>
            <div className="text-gray-500 line-clamp-3">{val.message}</div>
            <div className="text-xs flex flex-row gap-8">
              <span className="font-semibold">
                Priority:{" "}
                <span
                  className={
                    val.priority === "High"
                      ? "text-red-600"
                      : val.priority === "Low"
                      ? "text-green-600"
                      : "text-blue-600"
                  }
                >
                  {val.priority}
                </span>
              </span>

              <span className="font-semibold">
                Status:{" "}
                <span
                  className={
                    val.status === "Not Started"
                      ? "text-red-600"
                      : val.status === "Completed"
                      ? "text-green-600"
                      : "text-blue-600"
                  }
                >
                  {val.status}
                </span>
              </span>

              <span className="font-semibold text-gray-400">
                Created On: {val.Timing}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
