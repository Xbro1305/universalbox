import { Link, NavLink } from "react-router-dom";
import { logo } from "./assets";
import { useEffect, useState } from "react";
import i18n, { t } from "i18next";
import { runIntersectionAnimation } from "@/hooks/animation";
import { BiMenu } from "react-icons/bi";

export const Header = () => {
  const lng = localStorage.getItem("i18nextLng") as "uz" | "ru" | "en";
  const [language, setLanguage] = useState<"uz" | "ru" | "en">(lng);
  const [opened, setOpened] = useState<boolean>(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value as "uz" | "ru" | "en";
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setOpened(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => runIntersectionAnimation(".anim"), 200);
    return () => clearTimeout(timeoutId);
  }, [t, opened]);

  return (
    <header className="flex items-center gap-3xl py-xl px-2xl fixed top-[0] z-50 bg-white w-full anim lg:px-6xl">
      <Link to="/" className="logo anim el">
        <img src={logo} alt="logo" className="w-[200px] cursor-pointer" />
      </Link>
      <div
        className={`md:items-center gap-3xl justify-between md:w-full md:flex ${
          opened
            ? "flex fixed flex-col bg-white p-xl top-[calc(100%+20px)] right-[15px] rounded-xl"
            : "hidden"
        }`}
      >
        <div className="flex md:items-center gap-xl flex-col md:flex-row min-w-[200px]">
          <NavLink
            to="/"
            className="navlink text-2xl font-normal hover:text-blue/80 active:text-orange"
            onClick={() => setTimeout(() => setOpened(false), 100)}
          >
            {t("home")}
          </NavLink>
          <NavLink
            to="/about"
            className="navlink text-2xl font-normal hover:text-blue/80 active:text-orange"
            onClick={() => setTimeout(() => setOpened(false), 100)}
          >
            {t("about")}
          </NavLink>
          <NavLink
            to="/contact"
            className="navlink text-2xl font-normal hover:text-blue/80 active:text-orange"
            onClick={() => setTimeout(() => setOpened(false), 100)}
          >
            {t("contact")}
          </NavLink>
        </div>
        <select
          name=""
          id=""
          onChange={handleLanguageChange}
          value={language}
          className="border-solid border-2 border-blue rounded-xl p-2 cursor-pointer"
        >
          <option value="uz">{t("uz")}</option>
          <option value="ru">{t("ru")}</option>
          <option value="en">{t("en")}</option>
        </select>
      </div>
      <button
        className="flex items-center justify-center border-none bg-none md:hidden text-3xl ml-auto cursor-pointer anim er"
        onClick={() => setOpened(!opened)}
      >
        {opened ? <>&times;</> : <BiMenu />}
      </button>
    </header>
  );
};
