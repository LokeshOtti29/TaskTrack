import React from "react";

const AccountInfo = () => {
  return (
    <div className=" w-full ">
      <div className="pb-4">
        <span className="font-semibold text-xl">Account Information</span>
      </div>
      <div className="mb-12 mt-4">
        <div className="my-4 flex flex-row items-center gap-4">
          <div>
            <span className="r">
              <img
                src="/me.jpg"
                alt="Avatar"
                className="w-20 h-20 rounded-full object-cover"
              />
            </span>
          </div>
          <div className="flex flex-col">
            <span className="block font-semibold">Lokesh Otti</span>
            <span className="text-sm">lokeshotti01@gmail.com</span>
          </div>
        </div>
        <div className="w-[100%] pl-8 pt-4 pr-8 pb-4 border shadow-lg rounded-lg">
          <form>
            <div className="flex flex-col gap-2 mb-2">
              <label className="font-semibold">First Name</label>
              <input
                type="text"
                className="border w-[50%] rounded-lg p-2"
                placeholder="enter your first name"
              />
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <label className="font-semibold">Last Name</label>
              <input
                type="text"
                className="border w-[50%] rounded-lg p-2"
                placeholder="enter your first name"
              />
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <label className="font-semibold">Email Address</label>
              <input
                type="email"
                className="border w-[50%] rounded-lg p-2"
                placeholder="enter your first name"
              />
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <label className="font-semibold">Contact Number</label>
              <input
                type="number"
                className="border w-[50%] rounded-lg p-2"
                placeholder="enter your first name"
              />
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <label className="font-semibold">Position</label>
              <input
                type="text"
                className="border w-[50%] rounded-lg p-2"
                placeholder="enter your first name"
              />
            </div>
            <div className="flex flex-row gap-4">
              <button className="w-[10vw] my-4 bg-[rgb(246,130,122)] text-white p-2 rounded">
                Update Info
              </button>
              <button className=" w-[10vw] my-4 bg-[rgb(246,130,122)] text-white p-2 rounded">
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
