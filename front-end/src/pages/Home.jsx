import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Speciality from "../components/Speciality";
import TopDoctors from "../components/TopDoctors";

const Home = () => {
  return (
    <div className="py-3 flex flex-col  gap-8">
      <Hero />
      <Speciality />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default Home;
