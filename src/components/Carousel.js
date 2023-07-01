import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/bundle";
import pro1 from "../img/portfolio/pro-1.png";
import pro2 from "../img/portfolio/pro-2.png";
import pro3 from "../img/portfolio/pro-3.png";
import pro4 from "../img/portfolio/pro-4.png";

const Carousel = () => {
  const items = [
    {
      id: "01",
      image: pro1,
      text1: "Warung Kopi Senja",
      text2:
        "Warung Kopi Senja merupakan hasil website yang saya buat dengan mengikuti tutorial dari channel youtube Web Programming Unpas, dimana webiste tersebut dirancang secara resposif dengan memanfaatkan HTML5, Vanilla CSS, dan Vanilla Javascript. ",
      background: "bg-teal-400",
      text: "text-slate-800",
      col: "text-slate-600",
    },
    {
      id: "02",
      image: pro2,
      text1: "AnimalPedia",
      text2:
        "AnimalPedia merupakan hasil dari tugas projek mata kuliah Front-End Web Development yang saya kembangkan bersama anggota team saya dengan memanfaatkan HTML5, Vanilla CSS, dan Vanilla javascript. Website ini masih terbilang sederhana dikarenakan tidak didesain secara responsif.",
      background: "bg-slate-600",
      text: "text-teal-400",
      col: "text-slate-300",
    },
    {
      id: "03",
      image: pro3,
      text1: "Web Search Film",
      text2:
        "Website ini merupakan website pertama sayas yang memanfaatkan framework javascript react dan juga memanfaatkan API gratis yaitu TMDB API yang berisikan data dari semua film yang ada didunia. Website ini saya buat dengan mengikuti tutorial react yang ada pada channel youtube Dea Afrizal.",
      background: "bg-teal-400",
      text: "text-slate-800",
      col: "text-slate-600",
    },
    {
      id: "04",
      image: pro4,
      text1: "To Do List App",
      text2:
        "To Do List App saya ini merupakan tugas ataupun challenge dari dosen, dimana saya menerapkan fungsi add, delete, dan edit didalamnya. App ini dibuat dengan menggunakan HTML5, Tailwind CSS, dan Vanilla Javascript.",
      background: "bg-slate-600",
      text: "text-teal-400",
      col: "text-slate-300",
    },
  ];

  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      speed: 500,
      spaceBetween: 0,
      direction: "horizontal",
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  const handlePaginationClick = (index) => {
    const swiper = document.querySelector(".swiper").swiper;
    swiper.slideTo(index);
  };

  const allitems = items.map((item) => {
    return (
      <div
        key={item.id}
        className={`swiper-slide px-8 py-16 md:py-8 lg:px-20 lg:py-16 flex rounded-3xl items-center ${item.background} h-full`}>
        <div
          className={
            "flex flex-col-reverse md:flex-row md:items-center lg:items-start gap-x-20"
          }>
          <div className={"flex-1"}>
            <p className={`swiper-bold text-2xl font-bold ${item.text}`}>
              {item.text1}
            </p>
            <p className={`swiper-thin mt-8 font-semibold text-xl ${item.col}`}>
              {item.text2}
            </p>
            <p
              className={`swiper-thin mt-8 font-semibold text-xl ${item.col} hidden lg:block`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              assumenda error adipisci debitis deleniti eligendi eos excepturi
              harum dolor ipsum reprehenderit est iste repudiandae modi iure
              consequatur laudantium, qui amet mollitia dolore! Dolores,
              incidunt nobis voluptatum reiciendis aliquam laudantium sunt!
            </p>
          </div>
          <div className={"flex-1 rounded-lg overflow-hidden mb-4"}>
            <img
              className="object-cover object-center"
              src={item.image}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="swiper h-full w-full">
        <div className="swiper-wrapper h-full w-full">{allitems}</div>
        <div className="swiper-pagination">
          {/* Menampilkan swiper-pagination dengan titik-titik */}
          {[1, 2, 3, 4].map((index) => (
            <span
              key={index}
              onClick={() => handlePaginationClick(index - 1)}
              className="swiper-pagination-bullet"></span>
          ))}
        </div>
        <div className="swiper-scrollbar hidden"></div>
      </div>
    </>
  );
};

export default Carousel;
