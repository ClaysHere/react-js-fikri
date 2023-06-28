import React from "react";
import image from "../img/2957253.jpg";

const Home = () => {
  return (
    <div className={"pt-8 flex flex-col items-center w-full h-[1000px]"}>
      <div
        className={
          "flex flex-col lg:flex-row justify-center items-center md:w-2/3 gap-y-4 xl:py-16"
        }>
        <div className={""}>
          <p className={"font-semibold"}>Hello,</p>
          <h1 className={"font-bold text-3xl"}>My Name is Fikri</h1>
          <p>I am a College Student in Mikroskil University</p>
        </div>
        <div className={""}>
          <img className={"w-[640px]"} src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
