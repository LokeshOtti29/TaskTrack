import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  title: z.string().min(1, "Please Enter the Title"),
  date: z
    .string()
    .min(1, "Date is required")
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    }),
  priority: z
    .array(z.enum(["High", "Medium", "Low"]))
    .min(1, "Please select at least one priority"),
  description: z
    .string()
    .min(1, "Please Enter the Description")
    .max(50, "Description should be less than 50 characters"),
});
const Addtask = ({ setAddtask }) => {
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
      <div className="w-[50%] flex flex-col items-end">
        <div className="z-50 m-2">
          <button
            className="text-white  text-xl "
            onClick={() => {
              setAddtask(false);
              navigate("/Dashboard");
            }}
          >
            &#10005;
          </button>
        </div>
        <div className="w-[100%]  mx-auto p-6 shadow-lg rounded-lg box-border bg-white flex flex-col gap-2">
          <div className="m-2">
            <span className="text-lg font-semibold">Add New Task</span>
          </div>
          <form
            className="w-[70%] m-2 flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-1">
              <label className="font-semibold">Title</label>
              <input
                type="text"
                className="border rounded-lg p-2 w-[100%]"
                placeholder="Enter your Title"
                {...register("title")}
              />
              <div className="h-5">
                {errors.title && (
                  <p className="text-red-600 text-sm leading-tight">
                    {errors.title.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold">Date</label>
              <input
                type="date"
                className="border rounded-lg p-2"
                placeholder="select the date"
                {...register("date")}
              />
              <div className="h-5">
                {errors.date && (
                  <p className="text-red-600 text-sm leading-tight">
                    {errors.date.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold">Priority</label>

              <div className="flex gap-x-4">
                {["High", "Medium", "Low"].map((level) => (
                  <label key={level} className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      value={level}
                      {...register("priority")}
                      className="border rounded-lg p-2"
                    />
                    {level}
                  </label>
                ))}
              </div>

              <div className="h-5">
                {errors.priority && (
                  <p className="text-red-600 text-sm leading-tight">
                    {errors.priority.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold">Description</label>
              <textarea
                type="text"
                className="border rounded-lg p-2"
                placeholder="Enter the Description"
                rows={5}
                {...register("description")}
              />
              <div className="h-5">
                {errors?.description && (
                  <p className="text-red-600 text-sm leading-tight">
                    {errors?.description?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-4 md:col-span-2 pb-2 pt-2">
              <button
                type="submit"
                className="flex-1 md:flex-none w-full md:w-[10vw] min-w-[120px] bg-[rgb(246,130,122)] text-white p-2 rounded"
                onClick={() => navigate("/Dashboard")}
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

export default Addtask;
