import React, { useState } from "react";
import UpdateInfo from "./UpdateInfo";
import { useNavigate } from "react-router-dom";
import ChangePassword from "./ChangePassword";

const AccountInfo = () => {
  const [showmodal, setModal] = useState(false);
  const [passmodal, setPassmodal] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-full h-full box-border px-2 py-2 ">
      <div>
        <span className="font-semibold text-xl">Account Information</span>
      </div>
      <div className="mt-2">
        <div className="my-2 flex flex-row items-center gap-2">
          <img
            src="/me.jpg"
            alt="Avatar"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="block font-semibold">Lokesh Otti</span>
            <span className="text-sm">lokeshotti01@gmail.com</span>
          </div>
        </div>

        <div className="w-full  mx-auto p-4 shadow-lg rounded-lg box-border bg-white">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <label className="font-semibold">First Name</label>
              <input
                disabled
                type="text"
                className="border rounded-lg p-2"
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
                onClick={() => {
                  setModal(true);
                  navigate("/AccountInfo/UpdateInfo");
                }}
              >
                Update Info
              </button>
              <button
                type="button"
                className="flex-1 md:flex-none w-full md:w-[10vw] min-w-[120px] bg-[rgb(246,130,122)] text-white p-2 rounded"
                onClick={() => {
                  setPassmodal(true);
                  navigate("/AccountInfo/ChangePassword");
                }}
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
      {showmodal && <UpdateInfo setModal={setModal} />}
      {passmodal && <ChangePassword setPassmodal={setPassmodal} />}
    </div>
  );
};

export default AccountInfo;
