import React from "react";
import { useForm } from "react-hook-form";
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
  username: z
    .string()
    .min(1, "username is required")
    .max(20, "username Should be less than 20 characters"),
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log("form submitted", data);
  };
  return (
    <div className="w-full min-h-screen bg-[rgb(246,130,122)] relative">
      <div className="absolute inset-0 z-50 flex items-center justify-center ">
        <div className="bg-white text-black p-4 rounded shadow w-[800px] h-[500px] flex flex-row">
          <div className="flex-1 flex items-end justify-center">
            <div
              className="w-full h-[400px] bg-contain bg-start bg-no-repeat"
              style={{ backgroundImage: "url('/signup.jpg')" }}
            ></div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col  w-full ">
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <div className="flex-1 py-4 ">
                  <span className="text-xl font-semibold ">Sign Up</span>
                </div>
                <div className="flex-2">
                  <input
                    type="text"
                    placeholder="Enter FirstName"
                    {...register("firstname")}
                    className="w-full px-3 py-2 border rounded"
                  />
                  <div className="h-5">
                    {errors.firstname && (
                      <p className="text-red-600 text-sm leading-tight">
                        {errors.firstname.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex-2">
                  <input
                    type="text"
                    placeholder="Enter LastName"
                    {...register("lastname")}
                    className="w-full px-3 py-2 border rounded"
                  />
                  <div className="h-5">
                    {errors.lastname && (
                      <p className="text-red-600 text-sm leading-tight">
                        {errors.lastname.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex-2">
                  <input
                    type="text"
                    placeholder="Enter UserName"
                    {...register("username")}
                    className="w-full px-3 py-2 border rounded"
                  />
                  <div className="h-5">
                    {errors.username && (
                      <p className="text-red-600 text-sm leading-tight">
                        {errors.username.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    {...register("password")}
                    className="w-full px-3 py-2 border rounded"
                  />
                  <div className="h-5">
                    {errors.password && (
                      <p className="text-red-600 text-sm leading-tight">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <input
                    type="password"
                    placeholder="Enter Password"
                    {...register("password")}
                    className="w-full px-3 py-2 border rounded"
                  />
                  <div className="h-5">
                    {errors.password && (
                      <p className="text-red-600 text-sm leading-tight">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center gap-2 py-3">
                  <input type="checkbox" {...register("terms")} />
                  <p>I agree to all terms</p>
                </div>
                <div className="flex-1">
                  <button
                    type="submit"
                    className="w-3/5 bg-[rgb(246,130,122)] text-white py-2 rounded border hover:border-black"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
