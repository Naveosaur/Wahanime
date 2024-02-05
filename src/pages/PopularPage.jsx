import React from "react";
import Navbar2 from "../components/common/Navbar2";
import { Popular, Genres, Upcoming } from "../components/layout";

const LatestPage = () => {
  return (
    <div>
      <Navbar2 />
      <div className="flex flex-col lg:flex-row justify-between items-start gap-5 px-5 lg:px-10 my-10">
        <div className="w-[100%] lg:w-[75%]">
          <Popular />
        </div>
        <div className="w-[100%] lg:w-[25%]">
          <Genres />
          <Upcoming />
        </div>
      </div>
    </div>
  );
};

export default LatestPage;
