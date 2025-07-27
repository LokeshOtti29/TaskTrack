import React from "react";

const UpdateInfo = ({ setModal }) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50">
      <div className="w-[25%] flex flex-col items-end">
        <div className="z-50 m-2">
          <button
            className="text-white  text-xl "
            onClick={() => setModal(false)}
          >
            &#10005;
          </button>
        </div>

        <div className="w-[100%]  mx-auto p-6 shadow-lg rounded-lg box-border bg-white">
          <form className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="font-semibold">First Name</label>
              <input
                disabled
                type="text"
                className="border rounded-lg p-2 w-[100%]"
                placeholder="Enter your first name"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold">Last Name</label>
              <input
                disabled
                type="text"
                className="border rounded-lg p-2"
                placeholder="Enter your last name"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold">Email Address</label>
              <input
                disabled
                type="email"
                className="border rounded-lg p-2"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold">Contact Number</label>
              <input
                disabled
                type="number"
                className="border rounded-lg p-2"
                placeholder="Enter your contact number"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold">Position</label>
              <input
                disabled
                type="text"
                className="border rounded-lg p-2"
                placeholder="Enter your position"
              />
            </div>

            <div className="flex gap-4 md:col-span-2 pb-2 pt-2">
              <button
                type="button"
                className="flex-1 md:flex-none w-full md:w-[10vw] min-w-[120px] bg-[rgb(246,130,122)] text-white p-2 rounded"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateInfo;
