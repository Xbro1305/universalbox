import * as assets from "@/pages/Home/assets";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const titleElement = document?.querySelector("title");
    if (titleElement) titleElement.innerText = `${t("about")} - Universal Box`;
  }, []);

  return (
    <div className="flex flex-col p-2xl py-4xl md:p-6xl gap-6xl  eb mt-[70px] w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between gap-5xl lg:gap-3xl">
        <div className="text-base md:text-lg md:text-xl w-full lg:w-[49%] ">
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
        </div>
        <img
          src={assets.home_about1}
          className="aspect-square w-full lg:w-[50%] md:max-w-[500px] "
          alt=""
        />
      </div>

      <div className="flex flex-col lg:flex-row-reverse justify-between gap-5xl lg:gap-3xl">
        <div className="text-base md:text-lg md:text-xl w-full lg:w-[49%] ">
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
        </div>
        <img
          src={assets.home_about2}
          className="aspect-square w-full object-cover lg:w-[50%] md:max-w-[500px] "
          alt=""
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-5xl lg:gap-3xl">
        <div className="text-base md:text-lg md:text-xl w-full lg:w-[49%]  ">
          {t("home.cooperation.text1")}
          <br />
          {t("home.cooperation.text2")}
          <br />
          <br />
          {t("home.cooperation.text3")}
          <ul className="ml-[20px] list-disc flex flex-col gap-sm mt-[10px] ">
            <li>{t("home.cooperation.list1")}</li>
            <li>{t("home.cooperation.list2")}</li>
            <li>{t("home.cooperation.list3")}</li>
            <li>{t("home.cooperation.list4")}</li>
          </ul>
        </div>
        <img
          src={assets.handshake}
          className="aspect-square object-cover w-full lg:w-[50%] md:max-w-[500px] "
          alt=""
        />
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
