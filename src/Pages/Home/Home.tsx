import { useTranslation } from "react-i18next";
import * as assets from "./assets";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { runIntersectionAnimation } from "@/hooks/animation";
import { MdOutlineFactory } from "react-icons/md";
import { BiPalette, BiWallet } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { LuSprout } from "react-icons/lu";

export const Home = () => {
  const [selectedSection, setSelectedSection] = useState<number>(1);

  const { t } = useTranslation();

  useEffect(() => {
    const titleElement = document?.querySelector("title");
    if (titleElement) titleElement.innerText = `${t("home")} - Universal Box`;

    const timeoutId = setTimeout(() => runIntersectionAnimation(".anim"), 100);
    return () => clearTimeout(timeoutId);
  }, [t, selectedSection]);

  const brands = [
    assets.client1,
    assets.client2,
    assets.client3,
    assets.client4,
    assets.client5,
    assets.client6,
    assets.client7,
    assets.client8,
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <div className="md:h-[100vh] h-[50vh] mt-[90px] md:mt-[0] relative anim">
        <img
          src={assets.intro_img}
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
        <div className="flex items-start justify-between gap-4xl flex-col lg:flex-row">
          <p className="text-lg md:text-xl w-full lg:w-[50%] anim el">
            {t("homeAboutCompany")}
          </p>
          <img
            src={assets.home_info}
            className="w-full lg:w-[49%] anim er"
            alt=""
          />
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
      <div className="flex flex-col p-2xl py-4xl md:p-6xl gap-4xl">
        <h1 className="text-center text-3xl md:text-6xl text-black anim">
          {t("ourClients")}
        </h1>
        <div className={`anim eb marquee`}>
          <div className="marquee_inner">
            {[...brands, ...brands].map((brand, idx) => (
              <img src={brand} className="marquee_item" key={idx} alt="" />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="px-2xl pt-3xl md:px-6xl flex anim overflow-auto">
          <p
            className={`${selectedSection == 1 ? "bg-[#f2f2f2]" : ""}
        whitespace-nowrap text-xl md:text-2xl lg:text-3xl p-sm px-xl w-fit border-solid border-x-[2px] border-[#f2f2f2] cursor-pointer`}
            onClick={() => setSelectedSection(1)}
          >
            {t("home.about.title")}
          </p>
          <p
            className={`${selectedSection == 2 ? "bg-[#f2f2f2]" : ""}
        whitespace-nowrap text-xl md:text-2xl lg:text-3xl p-sm px-xl w-fit border-solid border-x-[2px] border-[#f2f2f2] cursor-pointer`}
            onClick={() => setSelectedSection(2)}
          >
            {t("home.production.title")}
          </p>
          <p
            className={`${selectedSection == 3 ? "bg-[#f2f2f2]" : ""}
        whitespace-nowrap text-xl md:text-2xl lg:text-3xl p-sm px-xl w-fit border-solid border-x-[2px] border-[#f2f2f2] cursor-pointer`}
            onClick={() => setSelectedSection(3)}
          >
            {t("home.cooperation.title")}
          </p>
        </div>

        <div className="bg-[#f2f2f2] flex p-2xl py-4xl md:p-6xl gap-4xl anim eb">
          {selectedSection == 1 && (
            <div className="flex flex-col lg:flex-row justify-between gap-5xl lg:gap-3xl">
              <p className="text-base md:text-lg md:text-xl w-full lg:w-[49%] anim el">
                {t("home.about.text1")}
                <br />
                <br />
                {t("home.about.text2")}
                <br />
                <br />
                {t("home.about.text3")}
                <ul className="ml-[20px] flex flex-col gap-sm mt-[10px] list-disc">
                  <li>{t("home.about.list1")}</li>
                  <li>{t("home.about.list2")}</li>
                  <li>{t("home.about.list3")}</li>
                </ul>
              </p>
              <img
                src={assets.home_about1}
                className="aspect-square w-full lg:w-[50%] md:max-w-[500px] anim es"
                alt=""
              />
            </div>
          )}

          {selectedSection == 2 && (
            <div className="flex flex-col lg:flex-row justify-between gap-5xl lg:gap-3xl">
              <p className="text-base md:text-lg md:text-xl w-full lg:w-[49%] anim el">
                {t("home.production.text1")}
                <br />
                {t("home.production.text2")}
                <br />
                <br />
                {t("home.production.text3")}
                <br />
                <br />
                {t("home.production.text4")}
                <br />
                {t("home.production.text5")}
              </p>
              <img
                src={assets.home_about2}
                className="aspect-square w-full lg:w-[50%] md:max-w-[500px] anim es object-cover object-left"
                alt=""
              />
            </div>
          )}

          {selectedSection == 3 && (
            <div className="flex flex-col lg:flex-row justify-between gap-5xl lg:gap-3xl">
              <p className="text-base md:text-lg md:text-xl w-full lg:w-[49%] anim el ">
                {t("home.cooperation.text1")}
                <br />
                {t("home.cooperation.text2")}
                <br />
                <br />
                {t("home.cooperation.text3")}
                <ul className="ml-[20px] list-disc flex flex-col gap-sm mt-[10px] anim eb">
                  <li>{t("home.cooperation.list1")}</li>
                  <li>{t("home.cooperation.list2")}</li>
                  <li>{t("home.cooperation.list3")}</li>
                  <li>{t("home.cooperation.list4")}</li>
                </ul>
              </p>
              <img
                src={assets.handshake}
                className="aspect-square object-cover w-full lg:w-[50%] md:max-w-[500px] anim er"
                alt=""
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col p-2xl py-4xl md:p-6xl gap-4xl">
        <h1 className="text-center text-3xl md:text-6xl anim">
          {t("honest.title")}
        </h1>

        <div className="flex flex-col md:flex-row gap-3xl">
          <img
            src={assets.certificate}
            alt="certificate"
            className="w-full md:w-[50%] max-w-[400px] h-auto anim el"
          />

          <div className="flex flex-col gap-xl anim er text-lg">
            <p>{t("honest.p1")}</p>
            <p>{t("honest.p2")}</p>

            <ul className="ml-[20px] list-disc -mt-[10px] flex flex-col gap-sm">
              <li>{t("honest.list1")}</li>
              <li>{t("honest.list2")}</li>
              <li>{t("honest.list3")}</li>
            </ul>

            <p className="mt-2">{t("honest.cert")}</p>
            <p>{t("honest.valid")}</p>
            <p>{t("honest.org")}</p>

            <p className="mt-4">{t("honest.p3")}</p>
            <p className="font-semibold">{t("honest.end")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
