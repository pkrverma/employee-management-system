import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
            type="email"
            className="text-white text-xl outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full placeholder:text-grey-500"
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required
            type="password"
            className="text-white text-xl outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 mt-3 rounded-full placeholder:text-grey-500"
            placeholder="Enter password"
          />
          <button className="mt-5 text-white text-xl outline-none border-none bg-emerald-600 py-3 px-5 rounded-full placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
