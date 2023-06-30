import google from "../img/clients/google.svg";
import gojek from "../img/clients/gojek.svg";
import tokopedia from "../img/clients/tokopedia.svg";
import traveloka from "../img/clients/traveloka.svg";

const Clients = () => {
  return (
    <>
      <div
        className={
          "bg-slate-800 flex flex-col items-center py-16 px-8 shadow-lg"
        }>
        <p className={"text-teal-300 text-2xl mb-4 font-semibold"}>Clients</p>
        <h1
          className={
            "text-3xl lg:text-4xl font-bold text-white text-center mb-4"
          }>
          Yang Pernah Bekerja Sama
        </h1>
        <p className={"text-slate-400 text-center mb-8"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at
          quia esse error eius. Eveniet.
        </p>
        <div className={"flex flex-wrap items-center justify-center"}>
          <a
            className={
              "mx-4 max-w-[120px] py-4 opacity-60 grayscale duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            }
            href="https://www.google.com/"
            target="_blank"
            rel="noreferrer">
            <img className={"w-32"} src={google} alt="" />
          </a>
          <a
            className={
              "mx-4 max-w-[120px] py-4 opacity-60 grayscale duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            }
            href="https://www.google.com/"
            target="_blank"
            rel="noreferrer">
            <img className={"w-32"} src={gojek} alt="" />
          </a>
          <a
            className={
              "mx-4 max-w-[120px] py-4 opacity-60 grayscale duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            }
            href="https://www.google.com/"
            target="_blank"
            rel="noreferrer">
            <img className={"w-32"} src={tokopedia} alt="" />
          </a>
          <a
            className={
              "mx-4 max-w-[120px] py-4 opacity-60 grayscale duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            }
            href="https://www.google.com/"
            target="_blank"
            rel="noreferrer">
            <img className={"w-32"} src={traveloka} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Clients;
