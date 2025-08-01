import React from "react";

const Display = ({ display, setEdit }) => {
  if (!display.title) {
    return (
      <div className="text-gray-500 text-center mt-20 italic">
        Click on a task to view details.
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full  ">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-1">
          <h2 className="text-lg font-semibold">Task Title:</h2>
          <p className="text-lg text-gray-700">{display.title}</p>
        </div>

        <div className="flex flex-col gap-4 text-sm">
          <div>
            <span className="font-semibold">Priority:</span>{" "}
            <span
              className={
                display.priority === "High"
                  ? "text-red-600 font-medium"
                  : display.priority === "Low"
                  ? "text-green-600 font-medium"
                  : "text-blue-600 font-medium"
              }
            >
              {display.priority}
            </span>
          </div>

          <div>
            <span className="font-semibold">Status:</span>{" "}
            <span
              className={
                display.status === "Not Started"
                  ? "text-red-600 font-medium"
                  : display.status === "Completed"
                  ? "text-green-600 font-medium"
                  : "text-blue-600 font-medium"
              }
            >
              {display.status}
            </span>
          </div>

          <div>
            <span className="font-semibold">Created On:</span>{" "}
            <span className="text-gray-500">{display.createdtime}</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-1">Description:</h3>
          <p className="text-gray-600 leading-relaxed">{display.description}</p>
        </div>
      </div>
      <div className="mt-auto flex justify-end">
        <div className="flex gap-2">
          <button>
            <img src="/delete.png" alt="delete" />
          </button>
          <button
            onClick={() => {
              setEdit(true);
            }}
          >
            <img src="/edit.png" alt="delete" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Display;
