import { SiPython } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
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

const Skills = () => {
  const skills = [
    {
      id: "01",
      name: "Python",
      logo: <SiPython className={"text-4xl lg:text-9xl text-[#30485b]"} />,
      data: "fade-right",
      post: "row-start-1 col-start-1",
      level: "Intermediate",
    },
    {
      id: "02",
      name: "HTML5",
      logo: <SiHtml5 className={"text-4xl lg:text-9xl text-[#e96228]"} />,
      data: "fade-left",
      post: "row-start-2 col-start-2",
      level: "Advanced",
    },
    {
      id: "03",
      name: "CSS3",
      logo: <SiCss3 className={"text-4xl lg:text-9xl text-[#0894d6]"} />,
      data: "fade-right",
      post: "row-start-3 col-start-1",
      level: "Intermediate",
    },
    {
      id: "04",
      name: "Javascript",
      logo: <SiJavascript className={"text-4xl lg:text-9xl text-[#e8d44d]"} />,
      data: "fade-left",
      post: "row-start-4 col-start-2",
      level: "Novice",
    },
    {
      id: "05",
      name: "MySQL",
      logo: <SiMysql className={"text-4xl lg:text-9xl text-[#42759c]"} />,
      data: "fade-right",
      post: "row-start-5 col-start-1",
      level: "Novice",
    },
    {
      id: "06",
      name: "MongoDB",
      logo: <SiMongodb className={"text-4xl lg:text-9xl text-[#449a3d]"} />,
      data: "fade-left",
      post: "row-start-6 col-start-2",
      level: "Beginner",
    },
  ];

  const allitems = skills.map((skill) => {
    return (
      <>
        <div
          data-aos={skill.data}
          data-aos-offset="10"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          key={skill.id}
          className={`flex bg-white rounded-lg p-4 justify-between items-center shadow-2xl md:py-10 lg:py-14 md:justify-evenly xl:py-20 ${skill.post}`}>
          <div>
            <h1 className={"font-bold text-lg lg:text-4xl lg:mb-4"}>
              {skill.name}
            </h1>
            <p className={"font-semibold lg:text-xl"}>{skill.level}</p>
          </div>
          <span>{skill.logo}</span>
        </div>
      </>
    );
  });
  return (
    <>
      <div>
        <p className={"px-8 text-center text-teal-600 text-xl font-bold mb-6"}>
          SKILLS
        </p>
        <h1 className={"px-8 text-center text-3xl font-bold mb-4"}>
          Keahlian Saya
        </h1>
        <p className={"px-8 text-slate-600 font-semibold text-center"}>
          Berikut ini merupakan beberapa keahlian yang telah saya latih semasa
          perkuliahan.
        </p>
        <div className={"relative mt-16 grid grid-cols-2 gap-y-8"}>
          {allitems}
        </div>
      </div>
    </>
  );
};

export default Skills;
