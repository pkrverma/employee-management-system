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
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-950 text-white">
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-3xl px-10 py-16 w-[90%] max-w-md">
        <h1 className="text-4xl font-extrabold text-white text-center mb-10 drop-shadow-xl">
          Welcome Back
        </h1>
        <form onSubmit={submitHandler} className="flex flex-col gap-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="w-full px-5 py-3 text-white text-lg bg-white/10 border border-white/20 rounded-full placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter password"
            className="w-full px-5 py-3 text-white text-lg bg-white/10 border border-white/20 rounded-full placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 text-white text-lg font-semibold py-3 rounded-full shadow-lg hover:scale-105"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
