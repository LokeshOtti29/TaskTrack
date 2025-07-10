import React from "react";
const Login = () => {
  return (
    <div className="w-full min-h-screen bg-gray-200 relative">
      <div className="absolute inset-0 z-50 flex items-center justify-center ">
        <div className="bg-white text-black p-4 rounded shadow w-[800px] h-[500px] flex flex-row">
          <div className="flex-1 flex items-center justify-center"></div>

          <div
            className="flex-1 bg-cover bg-center"
            style={{ backgroundImage: "url('/login.png')" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
