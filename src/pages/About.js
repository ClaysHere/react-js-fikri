import logoR from "../img/R.png";
import logoRR from "../img/RR.png";
import logoT from "../img/T.png";

const About = () => {
  return (
    <div className={"px-12 lg:px-40 xl:px-60 py-20 flex w-full h-[1000px]"}>
      <div>
        <h1 className={"text-3xl font-semibold"}>Tentang website ini :</h1>
        <p className={"mt-4 font-semibold text-xl"}>
          Website ini dibangun secara responsif dengan menggunakan beberapa
          framework dan library, yaitu :
        </p>
        <ul className={"list-disc text-md"}>
          <li className={"flex items-center gap-x-4 mt-4"}>
            <a
              className={"text-sky-400 font-bold"}
              href="https://react.dev/"
              target="_blank"
              rel="noreferrer">
              React
            </a>{" "}
            (Javascript Framework)
            <img
              className={"w-[50px] animate-spin"}
              src={logoR}
              alt="react-logo"
            />
          </li>
          <li className={"flex items-center gap-x-4 mt-4"}>
            <a
              className={"text-sky-400 font-bold"}
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer">
              Tailwind
            </a>{" "}
            (CSS Framework)
            <img
              className={"w-[50px] animate-pulse"}
              src={logoT}
              alt="tailwind-logo"
            />
          </li>
          <li className={"flex items-center gap-x-4 mt-5"}>
            <a
              className={"font-bold"}
              href="https://reactrouter.com/en/main"
              target="_blank"
              rel="noreferrer">
              React <span className={"text-red-600"}>Router</span>
            </a>{" "}
            (React Library)
            <img
              className={"w-[50px] animate-bounce"}
              src={logoRR}
              alt="tailwind-logo"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
