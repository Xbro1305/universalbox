import { useTranslation } from "react-i18next";
import { intro_img, home_info } from "./assets";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { runIntersectionAnimation } from "@/hooks/animation";
import { MdOutlineFactory } from "react-icons/md";
import { BiPalette, BiWallet } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { LuSprout } from "react-icons/lu";

export const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const titleElement = document?.querySelector("title");
    if (titleElement) titleElement.innerText = `${t("home")} - Universal Box`;

    const timeoutId = setTimeout(() => runIntersectionAnimation(".anim"), 100);
    return () => clearTimeout(timeoutId);
  }, [t]);

  return (
    <div className="flex flex-col">
      <div className="md:h-[100vh] h-[50vh] mt-[90px] md:mt-[0] relative anim">
        <img
          src={intro_img}
          className="w-full h-full object-cover object-top"
          alt=""
        />
        <div className="absolute top-[0] left-[0] w-full h-full bg-black/50 flex flex-col p-2xl py-4xl md:p-6xl gap-3xl md:gap-5xl justify-end items-start text-white">
          <h1 className="text-2xl lg:text-4xl flex flex-col gap-lg lg:gap-xl anim er">
            <span className="text-3xl lg:text-6xl">Universal Box -</span>
            {t("businessQualityPackaging")}
          </h1>
          <div className="flex items-center gap-xl">
            <Link
              to={"/contact"}
              className="bg-blue md:px-6xl px-2xl py-lg md:py-xl md:text-lg rounded border-solid border-[3px] border-blue anim el hover:bg-orange active:bg-orange"
            >
              {t("contactUs")}
            </Link>
            <button className="md:px-6xl md:py-xl px-2xl py-lg text-lg rounded border-solid border-[3px] border-blue anim el hover:border-orange">
              {t("prices")}
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-2xl py-4xl md:p-6xl bg-[white] gap-3xl">
        <h1 className="text-3xl md:text-6xl text-black anim">Universal Box</h1>
        <div className="flex items-start justify-between gap-2xl flex-col lg:flex-row">
          <p className="text-lg md:text-xl w-full lg:w-[50%] anim el">
            {t("homeAboutCompany")}
          </p>
          <img src={home_info} className="w-full lg:w-[49%] anim er" alt="" />
        </div>
      </div>
      <div className="flex flex-col bg-[#f2f2f2] p-2xl py-4xl md:p-6xl gap-4xl">
        <h1 className="text-center text-3xl md:text-6xl text-black anim">
          {t("whyChooseUs")}
        </h1>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gird-cols-1 gap-xl sm:gap-2xl">
          <div className="flex flex-row sm:flex-col items-start gap-lg">
            <MdOutlineFactory className="text-4xl anim sm:text-6xl text-blue" />
            <div className="flex flex-col gap-sm w-[calc(100%-40px)] sm:w-full">
              <p className="text-2xl font-black xl:text-3xl anim el">
                {t("ownProductionTitle")}
              </p>
              <span className="text-lg xl:text-xl anim eb">
                {t("ownProductionDesc")}
              </span>
            </div>
          </div>

          <div className="flex flex-row sm:flex-col items-start gap-lg">
            <BiPalette className="text-4xl anim sm:text-6xl text-blue" />
            <div className="flex flex-col gap-sm w-[calc(100%-40px)] sm:w-full">
              <p className="text-2xl font-black xl:text-3xl anim el">
                {t("designPrintTitle")}
              </p>
              <span className="text-lg xl:text-xl anim eb">
                {t("designPrintDesc")}
              </span>
            </div>
          </div>

          <div className="flex flex-row sm:flex-col items-start gap-lg">
            <AiFillThunderbolt className="text-4xl anim sm:text-6xl text-blue" />
            <div className="flex flex-col gap-sm w-[calc(100%-40px)] sm:w-full">
              <p className="text-2xl font-black xl:text-3xl anim el">
                {t("fastReliableTitle")}
              </p>
              <span className="text-lg xl:text-xl anim eb">
                {t("fastReliableDesc")}
              </span>
            </div>
          </div>

          <div className="flex flex-row sm:flex-col items-start gap-lg">
            <BiWallet className="text-4xl anim sm:text-6xl text-blue" />
            <div className="flex flex-col gap-sm w-[calc(100%-40px)] sm:w-full">
              <p className="text-2xl font-black xl:text-3xl anim el">
                {t("bestPricesTitle")}
              </p>
              <span className="text-lg xl:text-xl anim eb">
                {t("bestPricesDesc")}
              </span>
            </div>
          </div>

          <div className="flex flex-row sm:flex-col items-start gap-lg">
            <FaHandshake className="text-4xl anim sm:text-6xl text-blue" />
            <div className="flex flex-col gap-sm w-[calc(100%-40px)] sm:w-full">
              <p className="text-2xl font-black xl:text-3xl anim el">
                {t("contractWorkTitle")}
              </p>
              <span className="text-lg xl:text-xl anim eb">
                {t("contractWorkDesc")}
              </span>
            </div>
          </div>

          <div className="flex flex-row sm:flex-col items-start gap-lg">
            <LuSprout className="text-4xl anim sm:text-6xl text-blue" />
            <div className="flex flex-col gap-sm w-[calc(100%-40px)] sm:w-full">
              <p className="text-2xl font-black xl:text-3xl anim el">
                {t("qualityGrowthTitle")}
              </p>
              <span className="text-lg xl:text-xl anim eb">
                {t("qualityGrowthDesc")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
