import React, { useState } from "react";

const Login = ({ handleLogin, loginError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showCredentials, setShowCredentials] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="h-dvh w-full flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-950 text-white">
      {showCredentials && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40">
          <div className="bg-white/10 border border-white/20 rounded-xl shadow-2xl p-8 max-w-md w-[90%] text-white">
            <h2 className="text-xl font-semibold mb-4 text-center text-purple-300">
              Demo Credentials
            </h2>
            <div className="space-y-3 text-sm">
              <div className="bg-white/5 px-4 py-2 rounded border border-white/20">
                <strong>Admin</strong>
                <br />
                Email: <code>admin@example.com</code>
                <br />
                Password: <code>123</code>
              </div>
              <div>
                Replace the symbol{" "}
                <span className="text-yellow-400 font-extrabold font-mono">
                  #
                </span>{" "}
                with any number from{" "}
                <span className="text-green-400">1 to 5</span> for login.
              </div>

              <div className="bg-white/5 px-4 py-2 rounded border border-white/20">
                <strong>Employee</strong>
                <br />
                Email:{" "}
                <code>
                  employee
                  <span className="text-yellow-400 font-extrabold font-mono">
                    #
                  </span>
                  @example.com
                </code>
                <br />
                Password: <code>123</code>
              </div>
            </div>
            <button
              onClick={() => setShowCredentials(false)}
              className="w-full mt-6 py-2 bg-purple-500 hover:bg-purple-600 transition-all rounded-md font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="z-10 backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-3xl px-5 lg:px-10 py-10 lg:py-16 w-[90%] max-w-md">
        <h1 className="text-4xl font-extrabold text-white text-center mb-10 drop-shadow-xl">
          Welcome Back
        </h1>

        {loginError && (
          <div className="mb-6 text-red-400 text-center font-medium bg-red-400/10 border border-red-400/30 px-4 py-2 rounded-lg">
            {loginError}
          </div>
        )}

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

        <div className="mt-6 text-center">
          <button
            onClick={() => setShowCredentials(true)}
            className="text-sm text-purple-300 hover:underline hover:text-purple-400 transition"
          >
            View Demo Credentials
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
