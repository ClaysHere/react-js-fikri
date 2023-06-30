const Footer = () => {
  return (
    <>
      <footer
        className={
          "bg-slate-800 text-white pb-4 pt-16 flex flex-col items-center w-full"
        }>
        <div
          className={
            "flex flex-wrap gap-y-8 px-8 md:px-14 lg:px-16 justify-between w-full"
          }>
          <div className={"w-full md:w-1/2 lg:w-1/3 p-8"}>
            <h1 className={"text-3xl font-bold mb-4"}>WPM</h1>
            <h2 className={"text-xl font-bold text-slate-400 mb-4"}>
              Hubungi Saya
            </h2>
            <p className={"text-slate-400"}>muhammadfikri4402@gmail.com</p>
            <p className={"text-slate-400"}>Jl. H.M. Said Gg. Demokrat No.25</p>
            <p className={"text-slate-400"}>Medan</p>
          </div>
          <div className={"w-full md:w-1/2 lg:w-1/3 p-8"}>
            <h2 className={"mb-4 text-xl font-semibold"}>Kategori Tulisan</h2>
            <p
              className={
                "text-slate-400 mb-3 cursor-pointer hover:text-teal-300"
              }>
              Programming
            </p>
            <p
              className={
                "text-slate-400 mb-3 cursor-pointer hover:text-teal-300"
              }>
              Teknologi
            </p>
            <p
              className={
                "text-slate-400 mb-3 cursor-pointer hover:text-teal-300"
              }>
              Gaya Hidup
            </p>
          </div>
          <div className={"w-full md:w-1/2 lg:w-1/3 p-8"}>
            <h2 className={"mb-4 text-xl font-semibold"}>Tautan</h2>
            <p
              className={
                "text-slate-400 mb-2 cursor-pointer hover:text-teal-300"
              }>
              Home
            </p>
            <p
              className={
                "text-slate-400 mb-2 cursor-pointer hover:text-teal-300"
              }>
              About Me
            </p>
            <p
              className={
                "text-slate-400 mb-2 cursor-pointer hover:text-teal-300"
              }>
              Portfolio
            </p>
            <p
              className={
                "text-slate-400 mb-2 cursor-pointer hover:text-teal-300"
              }>
              Contact
            </p>
          </div>
        </div>
        <hr className={"w-[90%] mt-8 mb-4 bg-slate-400 lg:w-[95%]"} />
        <p className={"px-8 text-slate-400 text-sm"}>
          Tiket Masuk Praktek 06 Juli 2023 |{" "}
          <span className={"text-teal-300"}>&copy; Fikri</span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
