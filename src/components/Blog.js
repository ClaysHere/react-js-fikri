import Cards from "./Cards";
import image1 from "../img/blog/programming.jpeg";
import image2 from "../img/blog/mechanical-keyboard.jpeg";
import image3 from "../img/blog/coffee.jpeg";

const Blog = () => {
  const items = [
    {
      id: "01",
      title: "Tips Belajar Programming",
      image: image1,
    },
    {
      id: "02",
      title: "Review Keyboard GMMK Pro",
      image: image2,
    },
    {
      id: "03",
      title: "Menikmati Secangkir Kopi",
      image: image3,
    },
  ];

  const card = items.map((item) => {
    return <Cards key={item.id} title={item.title} image={item.image} />;
  });
  return (
    <>
      <div
        className={
          "bg-slate-300 flex flex-col items-center py-16 px-8 shadow-lg"
        }>
        <p className={"text-teal-500 text-2xl mb-4 font-semibold"}>Blog</p>
        <h1
          className={
            "text-3xl lg:text-4xl font-bold text-black text-center mb-4"
          }>
          Tulisan Terkini
        </h1>
        <p className={"text-slate-800 text-center mb-8"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          optio velit, quisquam dolorem quis eveniet!
        </p>
        <div className={"w-full"}>
          <div
            className={
              "w-full md:flex md:flex-wrap md:justify-center md:gap-y-4"
            }>
            {card}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
