import React, { useState } from "react";
import { setLocalStorage } from "../../utils/LocalStorage";

const Header = (props) => {
  const [userName, setUserName] = useState("");

  // if (!data) {
  //   setUserName('Admin');
  // } else {
  //   setUserName(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-white text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">Bhakk👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
