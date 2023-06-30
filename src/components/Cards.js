const Cards = (props) => {
  return (
    <div className={"md:p-2 md:w-1/2 lg:w-1/3"}>
      <div
        className={
          "overflow-hidden rounded-lg mb-4 shadow-lg bg-white flex flex-col items-center h-full"
        }>
        <img className="w-full" src={props.image} alt="" />
        <div className={"p-7"}>
          <h1 className={"text-xl font-semibold"}>{props.title}</h1>
          <p className={"text-slate-800 mb-6"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            tempore?
          </p>
          <button
            className={
              "bg-teal-400 px-4 py-2 rounded-xl text-white hover:bg-teal-600"
            }>
            Baca Selelngkapnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
