import React from "react";
import image from "../img/2957253.jpg";
import Clients from "../components/Clients";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <>
      <div
        className={
          "pt-20 pb-16 md:pb-8 lg:pt-8 flex flex-col items-center w-full shadow-lg"
        }>
        <div
          className={
            "container flex flex-col lg:flex-row justify-center items-center md:w-2/3 gap-y-4 xl:py-16"
          }>
          <div className={"w-full px-8"}>
            <p className={"font-semibold text-teal-500"}>Halo Semua 👋, saya</p>
            <h1 className={"font-bold text-4xl"}>Muhammad Fikri</h1>
            <p className={"text-slate-400"}>
              Student &{" "}
              <span className={"text-black"}>Front-End Developer</span>
            </p>
            <p className={"text-sm mt-6 font-semibold text-slate-400"}>
              Belajar pemrograman itu mudah dan menyenangkan bukan?{" "}
              <span className={"text-black font-bold"}>bukan!</span>
            </p>
            <button
              className={"bg-teal-500 text-white px-4 py-2 rounded-3xl mt-4"}>
              Hubungi Saya
            </button>
          </div>
          <div className={""}>
            <img className={"w-[640px]"} src={image} alt="" />
          </div>
        </div>
      </div>
      <Clients />
      <Blog />
    </>
  );
};

export default Home;
