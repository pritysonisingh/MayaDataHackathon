import React from "react";
import Search from "./Search";

const Home = () => {
  return (
    <div>
      <p style={{ fontSize: "36px", textAlign: "left", marginLeft: "300px" }}>
        My Meetings
      </p>

      <Search />
    </div>
  );
};

export default Home;
