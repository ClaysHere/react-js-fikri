import Carousel from "../components/Carousel";
import Skills from "../components/Skills";
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

const Portfolio = () => {
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
      <div className={"h-[600px] md:h-full mb-[280px] md:mb-0"}>
        <p
          className={
            "px-8 text-center text-teal-600 text-xl font-bold pt-16 mb-6"
          }>
          PORTFOLIO
        </p>
        <h1 className={"px-8 text-center text-3xl font-bold mb-4"}>
          Project Terbaru
        </h1>
        <p className={"px-8 mb-4 text-slate-600 font-semibold text-center"}>
          Berikut ini merupakan beberapa hasil projek buatan saya dari hasil
          belajar pemrograman web Front-End selama 1 semester ini.
        </p>
        <Carousel />
      </div>
      <div className={"px-8 bg-slate-300 py-16"}>
        <Skills />
      </div>
    </div>
  );
};

export default Portfolio;
