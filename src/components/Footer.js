import { useNavigate } from "react-router-dom";
import Sosmed from "./Sosmed";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <footer
        className={
          "bg-slate-800 text-white pb-4 pt-16 flex flex-col items-center w-full"
        }>
        <div
          className={
            "flex flex-wrap gap-y-8 px-8 lg:px-16 justify-between w-full"
          }>
          <div className={"w-full md:w-1/2 lg:w-1/3 lg:p-8"}>
            <h1 className={"text-3xl font-bold mb-4"}>WPM</h1>
            <h2 className={"text-xl font-bold text-slate-400 mb-4"}>
              Hubungi Saya
            </h2>
            <p className={"text-slate-400"}>muhammadfikri4402@gmail.com</p>
            <p className={"text-slate-400 text-sm"}>
              Jl. H.M. Said Gg. Demokrat No.25
            </p>
            <p className={"text-slate-400"}>Medan</p>
          </div>
          <div className={"w-full md:w-1/2 lg:w-1/3 lg:p-8"}>
            <h2 className={"mb-4 text-xl font-semibold"}>Kategori Tulisan</h2>
            <p className={"text-slate-400 mb-3 cursor-pointer"}>Programming</p>
            <p className={"text-slate-400 mb-3 cursor-pointer"}>Teknologi</p>
            <p className={"text-slate-400 mb-3 cursor-pointer block"}>
              Gaya Hidup
            </p>
          </div>
          <div className={"w-full md:w-1/2 lg:w-1/3 lg:p-8"}>
            <h2 className={"mb-4 text-xl font-semibold"}>Tautan</h2>
            <p className={"text-slate-400 mb-2 cursor-pointer"}>
              <span
                className={"hover:text-teal-300"}
                onClick={() => {
                  navigate("/");
                }}>
                Home
              </span>
            </p>
            <p className={"text-slate-400 mb-2 cursor-pointer"}>
              <span
                onClick={() => {
                  navigate("/about");
                }}
                className={"hover:text-teal-300"}>
                About
              </span>
            </p>
            <p className={"text-slate-400 mb-2 cursor-pointer"}>
              <span
                onClick={() => {
                  navigate("/portfolio");
                }}
                className={"hover:text-teal-300"}>
                Portfolio
              </span>
            </p>
            <p className={"text-slate-400 mb-2 cursor-pointer"}>
              <span
                onClick={() => {
                  navigate("/contact");
                }}
                className={"hover:text-teal-300"}>
                Contact
              </span>
            </p>
          </div>
        </div>
        <hr className={"w-[90%] mt-8 mb-4 bg-slate-400 lg:w-[95%]"} />
        <Sosmed />
        <p className={"px-8 py-4 text-slate-400 text-sm mt-4"}>
          Tiket Masuk Praktek 06 Juli 2023 |{" "}
          <span className={"text-teal-300"}>&copy; Fikri</span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
