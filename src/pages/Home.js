import React from "react";
import image from "../img/2957253.jpg";
import Clients from "../components/Clients";
import Blog from "../components/Blog";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const Home = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-center">
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
              className={
                "bg-teal-500 text-white px-4 py-2 rounded-3xl mt-4 hover:bg-teal-700"
              }>
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
    </div>
  );
};

export default Home;
