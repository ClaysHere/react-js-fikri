import Sosmed from "../components/Sosmed";
import logoR from "../img/R.png";
import logoRR from "../img/RR.png";
import logoT from "../img/T.png";
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
});

const About = () => {
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
      <div className={"px-8 lg:px-20 p-16 shadow-lg"}>
        <p className={"text-teal-500 font-bold text-lg lg:text-2xl mb-4"}>
          TENTANG SAYA
        </p>
        <div className="flex flex-col md:flex-row gap-y-8 md:gap-x-8 lg:gap-x-36">
          <div>
            <h1 className={"text-3xl lg:text-5xl font-bold mb-4"}>
              Mari tingkatkan skill di bidang Informatika!
            </h1>
            <p className={"text-slate-500"}>
              Saya merupakan seorang mahasiswa semester 2 jurusan Teknik
              Informatika di Universitas Mikroskil Medan.
            </p>
          </div>
          <div>
            <h1 className={"text-2xl lg:text-3xl font-semibold mb-4"}>
              Follow Me
            </h1>
            <p className={"text-slate-500"}>
              Untuk mengenal lebih jauh tentang saya, kunjungi beberapa akun
              media soaial saya berikut ini.
            </p>
            <div className={"mt-8"}>
              <Sosmed />
            </div>
          </div>
        </div>
      </div>
      <div className={"px-8 p-16 shadow-lg bg-slate-300 r"}>
        <div className={"md:flex md:flex-col md:items-center"}>
          <h1 className={"font-bold text-xl text-teal-600"}>
            TENTANG WEBSITE INI
          </h1>
          <p
            className={
              "mt-4 font-semibold text-xl text-slate-600 mb-8 md:w-2/3 lg:text-center"
            }>
            Website ini dibangun secara responsif dengan menggunakan beberapa
            framework dan library.
          </p>
          <ul className={"lg:text-4xl grid grid-cols-1 md:grid-cols-2"}>
            <li
              data-aos="fade-right"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
              className={"mb-8 md:row-start-1 md:col-start-1"}>
              <a
                className={"font-bold text-[#383838]"}
                href="https://react.dev/"
                target="_blank"
                rel="noreferrer">
                <span className={"text-[#09d3f6] font-bold"}>React</span>{" "}
                (Javascript Framework)
              </a>
            </li>
            <li
              data-aos="fade-left"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
              className={"mb-8 md:row-start-2 md:col-start-2"}>
              <a
                className={"font-bold text-[#383838]"}
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer">
                <span className={"text-[#0fb2d0] font-bold"}>Tailwind</span>{" "}
                (CSS Framework)
              </a>
            </li>
            <li
              data-aos="fade-right"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
              className={"mb-8 md:row-start-3 md:col-start-1"}>
              <a
                className={"font-bold text-[#383838]"}
                href="https://michalsnik.github.io/aos/"
                target="_blank"
                rel="noreferrer">
                <span className={"text-[#323961] font-bold"}>
                  Animate On Scroll
                </span>{" "}
                (Javascript Library)
              </a>
            </li>
            <li
              data-aos="fade-left"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
              className={"mb-8 md:row-start-4 md:col-start-2"}>
              <a
                className={"font-bold text-[#383838]"}
                href="https://swiperjs.com/"
                target="_blank"
                rel="noreferrer">
                <span className={"text-[#0880f7] font-bold"}>Swiper</span>{" "}
                (Javascript Libary)
              </a>
            </li>
            <li
              data-aos="fade-right"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
              className={"mb-8 md:row-start-5 md:col-start-1"}>
              <a
                className={"font-bold text-[#383838]"}
                href="https://react-icons.github.io/react-icons/search"
                target="_blank"
                rel="noreferrer">
                <span className={"text-[#e91e63] font-bold"}>React Icons</span>{" "}
                (Javascript Libary)
              </a>
            </li>
            <li
              data-aos="fade-left"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
              className={"md:row-start-6 md:col-start-2"}>
              <a
                className={"font-bold text-[#383838]"}
                href="https://reactrouter.com/en/main"
                target="_blank"
                rel="noreferrer">
                React <span className={"text-[#f44250]"}>Router</span>(React
                Library)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
