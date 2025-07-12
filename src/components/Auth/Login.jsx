import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(20, "Username Should be less than 20 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  accept: z.boolean().optional(),
});
const Login = () => {
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
          <div className="flex-1 flex items-start justify-start px-10 py-10">
            <div className="flex flex-col my-3 w-full ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3"
              >
                <div className="flex-1 py-4 ">
                  <span className="text-xl font-semibold ">Sign In</span>
                </div>
                <div className="flex-2">
                  <input
                    type="text"
                    placeholder="username"
                    {...register("name")}
                    className="w-full px-3 py-2 border rounded"
                  />
                  <div className="h-5">
                    {errors.name && (
                      <p className="text-red-600 text-sm leading-tight">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex-2">
                  <input
                    type="password"
                    placeholder="password"
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
                <div className="flex-1 flex flex-row items-center gap-2">
                  <input type="checkbox" {...register("accept")} />
                  <p>Remember Me</p>
                </div>
                <div className="flex-1">
                  <button
                    type="submit"
                    className="w-3/5 bg-[rgb(246,130,122)] text-white py-2 rounded border hover:border-black"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex-1 flex items-end justify-center">
            <div
              className="w-full h-[350px] bg-contain bg-start bg-no-repeat"
              style={{ backgroundImage: "url('/login.png')" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
