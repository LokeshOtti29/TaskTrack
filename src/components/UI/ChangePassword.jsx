import React from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  currentpassword: z
    .string()
    .min(6, "Current password must be at least 6 characters")
    .max(20, "Current password must be less than 20 characters"),
  newpassword: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
      "Enter a strong password"
    ),
  confirmpassword: z.string().min(1, "Please confirm your password"),
});

const ChangePassword = ({ setPassmodal }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = (data) => {
    console.log("submitted", data);
  };
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50">
      <div className="w-[25%] flex flex-col items-end">
        <div className="z-50 m-2">
          <button
            className="text-white  text-xl "
            onClick={() => {
              setPassmodal(false);
              navigate("/AccountInfo");
            }}
          >
            &#10005;
          </button>
        </div>

        <div className="w-[100%]  mx-auto p-6 shadow-lg rounded-lg box-border bg-white">
          <form
            className="w-full flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-1">
              <label className="font-semibold">Current Password</label>
              <input
                type="text"
                className="border rounded-lg p-2 w-[100%]"
                placeholder="Enter your Current Password"
                {...register("currentpassword")}
              />
              <div className="h-5">
                {errors.currentpassword && (
                  <p className="text-red-600 text-sm leading-tight">
                    {errors.currentpassword.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold">New Password</label>
              <input
                type="text"
                className="border rounded-lg p-2"
                placeholder="Enter your New Password"
                {...register("newpassword")}
              />
              <div className="h-5">
                {errors.newpassword && (
                  <p className="text-red-600 text-sm leading-tight">
                    {errors.newpassword.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold">Confirm Password</label>
              <input
                type="text"
                className="border rounded-lg p-2"
                placeholder="Enter your confirm Password"
                {...register("confirmpassword")}
              />
              <div className="h-5">
                {errors.currentpassword && (
                  <p className="text-red-600 text-sm leading-tight">
                    {errors.currentpassword.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-4 md:col-span-2 pb-2 pt-2">
              <button
                type="submit"
                className="flex-1 md:flex-none w-full md:w-[10vw] min-w-[120px] bg-[rgb(246,130,122)] text-white p-2 rounded"
                onClick={() => navigate("/AccountInfo")}
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
