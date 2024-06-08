import React from "react";
import Sidebar from "./Sidebar";
import Mails from "./Mails";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Mails />
    </div>
  );
};

export default Body;
