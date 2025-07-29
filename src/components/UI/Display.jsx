import React from "react";

const Display = ({ display }) => {
  if (!display.title) {
    return (
      <div className="text-gray-500 text-center mt-20">
        Click on a task to view details.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold text-gray-700">{display.title}</h1>

      <div className="flex flex-row gap-6 text-sm">
        <span className="font-semibold">
          Priority:{" "}
          <span
            className={
              display.priority === "High"
                ? "text-red-600"
                : display.priority === "Low"
                ? "text-green-600"
                : "text-blue-600"
            }
          >
            {display.priority}
          </span>
        </span>

        <span className="font-semibold">
          Status:{" "}
          <span
            className={
              display.status === "Not Started"
                ? "text-red-600"
                : display.status === "Completed"
                ? "text-green-600"
                : "text-blue-600"
            }
          >
            {display.status}
          </span>
        </span>

        <span className="font-semibold text-gray-500">
          Created On: {display.createdtime}
        </span>
      </div>

      <p className="text-gray-600 mt-2">{display.description}</p>
    </div>
  );
};

export default Display;
