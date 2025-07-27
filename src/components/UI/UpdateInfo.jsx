import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  firstname: z
    .string()
    .min(1, "firstname is required")
    .max(20, "firstname Should be less than 20 characters"),
  lastname: z
    .string()
    .min(1, "lastname is required")
    .max(20, "lastname Should be less than 20 characters"),
  email: z.string().email({ message: "Invalid email address" }),
  number: z
    .string()
    .min(10, "Must be at least 10 digits")
    .max(15, "Too long")
    .regex(/^[0-9]+$/, "Must be a valid number"),
  position: z.string().min(1, "Position is required"),
});
const UpdateInfo = ({ setModal }) => {
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
              setModal(false);
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
              <label className="font-semibold">First Name</label>
              <input
                type="text"
                className="border rounded-lg p-2 w-[100%]"
                placeholder="Enter your first name"
                {...register("firstname")}
              />
              <div className="h-5">
                {errors.firstname && (
                  <p className="text-red-600 text-sm leading-tight">
                    {errors.firstname.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold">Last Name</label>
              <input
                type="text"
                className="border rounded-lg p-2"
                placeholder="Enter your last name"
                {...register("lastname")}
              />
              <div className="h-5">
                {errors.lastname && (
                  <p className="text-red-600 text-sm leading-tight">
                    {errors.lastname.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold">Email Address</label>
              <input
                type="email"
                className="border rounded-lg p-2"
                placeholder="Enter your email"
                {...register("email")}
              />
              <div className="h-5">
                {errors.email && (
                  <p className="text-red-600 text-sm leading-tight">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold">Contact Number</label>
              <input
                type="text"
                className="border rounded-lg p-2"
                placeholder="Enter your contact number"
                {...register("number")}
              />
              <div className="h-5">
                {errors.number && (
                  <p className="text-red-600 text-sm leading-tight">
                    {errors.number.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold">Position</label>
              <input
                type="text"
                className="border rounded-lg p-2"
                placeholder="Enter your position"
                {...register("position")}
              />
              <div className="h-5">
                {errors.position && (
                  <p className="text-red-600 text-sm leading-tight">
                    {errors.position.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-4 md:col-span-2 pb-2 pt-2">
              <button
                type="submit"
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
