import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const burgerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const fixNav = headerRef.current.offsetTop;
      if (window.pageYOffset > fixNav) {
        headerRef.current.classList.add("nav-fix");
      } else {
        headerRef.current.classList.remove("nav-fix");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWindowClick = (e) => {
    if (
      !burgerRef.current.contains(e.target) &&
      !menuRef.current.contains(e.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <>
      <nav
        ref={headerRef}
        className={`flex w-full items-center justify-between bg-black px-4`}>
        <span className="bg-gradient-to-r from-sky-300 via-green-300 to-yellow-300 bg-clip-text text-transparent font-bold text-4xl font-mono italic py-4 animate-pulse">
          FIKRI
        </span>
        <ul
          id="nav-menu"
          ref={menuRef}
          className={`${
            isMenuOpen ? "" : "hidden"
          } bg-black md:bg-transparent bg-opacity-60 md:gap-x-4 rounded-lg w-[200px] h-[200px] md:w-1/2 md:h-0 md:p-4 right-1 top-20 justify-evenly md:justify-end items-center flex flex-col md:flex-row text-white font-semibold text-xl md:gap-16 xl:gap-16 mb-4 md:mb-0 absolute md:flex md:static`}>
          <li className={"nav-menu"}>HOME</li>
          <li className={"nav-menu"}>ABOUT</li>
          <li className={"nav-menu"}>CONTACT</li>
          <li className={"nav-menu"}>HELP</li>
        </ul>
        <div
          id="burger"
          ref={burgerRef}
          className={`${isMenuOpen ? "burger-active" : ""} md:hidden`}
          onClick={handleBurgerClick}>
          <span className={"burger-line origin-top-left"}></span>
          <span className={"burger-line"}></span>
          <span className={"burger-line origin-bottom-left"}></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
