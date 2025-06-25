import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  // Setup default users in localStorage if needed
  useEffect(() => {
    setLocalStorage();
  }, []);

  // Auto-login if data is in localStorage
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data || null);
    }
  }, []);

  // Keep user data in sync with updates in context
  useEffect(() => {
    if (user === "employee" && userData && loggedInUserData) {
      const freshEmployee = userData.find(
        (e) => e.email === loggedInUserData.email
      );
      if (freshEmployee) {
        setLoggedInUserData(freshEmployee);
      }
    }
  }, [userData, user, loggedInUserData]);

  // Handle login submission
  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      setLoginError(""); // Clear previous error
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        setLoginError(""); // Clear previous error
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        setLoginError("Incorrect email or password."); // Show error
      }
    } else {
      setLoginError("User data not loaded."); // Fallback error
    }
  };

  // Apply background styles conditionally
  return (
    <div
      className={`f-dvh w-full transition-all duration-500 ${
        !user
          ? "bg-gradient-to-br from-purple-700 via-pink-500 to-yellow-400"
          : "bg-gradient-to-br from-gray-900 via-slate-800 to-gray-950 text-white"
      }`}
    >
      {!user ? (
        <Login handleLogin={handleLogin} loginError={loginError} />

      ) : user === "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
