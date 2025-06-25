import React from "react";

const Header = (props) => {
  const username = props.data ? props.data.firstName : "Admin";

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };

  return (
    <div className="flex items-end justify-between mb-8">
      <div>
        <h1 className="text-xl text-white/80 font-medium">Hello,</h1>
        <h2 className="text-3xl font-bold text-white drop-shadow">
          {username} 👋
        </h2>
      </div>
      <button
        onClick={logOutUser}
        className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 transition duration-200 text-white font-semibold px-5 py-2 rounded-md shadow-lg"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
