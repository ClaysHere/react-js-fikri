import React from "react";
import image from "../img/2957253.jpg";
import Form from "../components/Form";

const Home = () => {
  return (
    <div className={"pt-8 flex flex-col justify-center items-center w-full"}>
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
      <Form />
    </div>
  );
};

export default Home;
