import Sosmed from "../components/Sosmed";
import logoR from "../img/R.png";
import logoRR from "../img/RR.png";
import logoT from "../img/T.png";

const About = () => {
  return (
    <>
      <div className={"px-8 p-16 shadow-lg"}>
        <p className={"text-teal-500 font-bold text-lg lg:text-2xl mb-4"}>
          TENTANG SAYA
        </p>
        <div className="flex flex-col md:flex-row gap-y-8 md:gap-x-8 lg:gap-x-36">
          <div>
            <h1 className={"text-3xl lg:text-5xl font-bold mb-4"}>
              Mari tingkatkan skill di bidang Informatika!
            </h1>
            <p className={"text-slate-500"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur laboriosam quia et incidunt obcaecati quo.
            </p>
          </div>
          <div>
            <h1 className={"text-2xl lg:text-3xl font-semibold mb-4"}>
              Follow Me
            </h1>
            <p className={"text-slate-500"}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut velit
              quam totam et deleniti inventore tempore veniam cupiditate
              dignissimos vero.
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
              "mt-4 font-semibold text-xl text-slate-600 mb-4 md:w-2/3"
            }>
            Website ini dibangun secara responsif dengan menggunakan beberapa
            framework dan library.
          </p>
          <ul>
            <li className={"mb-8"}>
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                <span className={"text-sky-400 font-bold"}>React</span>{" "}
                (Javascript Framework)
                <img
                  className={"w-[50px] animate-spin inline ml-4"}
                  src={logoR}
                  alt="react-logo"
                />
              </a>
            </li>
            <li className={"mb-8"}>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer">
                <span className={"text-sky-400 font-bold"}>Tailwind</span> (CSS
                Framework)
                <img
                  className={"w-[50px] animate-pulse inline ml-4"}
                  src={logoT}
                  alt="tailwind-logo"
                />
              </a>
            </li>
            <li className={""}>
              <a
                className={"font-bold"}
                href="https://reactrouter.com/en/main"
                target="_blank"
                rel="noreferrer">
                React <span className={"text-red-600"}>Router</span>(React
                Library)
                <img
                  className={"w-[50px] animate-bounce inline ml-4"}
                  src={logoRR}
                  alt="tailwind-logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
