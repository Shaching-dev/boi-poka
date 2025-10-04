import React from "react";
import Banner from "../../components/Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-10">
      <Banner></Banner>
      <Books></Books>
    </div>
  );
};

export default Home;
