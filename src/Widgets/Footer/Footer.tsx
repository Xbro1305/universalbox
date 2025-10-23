// import { logo } from "../Header/assets";

import { useTranslation } from "react-i18next";
import { BiPhone } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { TbBrandTelegram } from "react-icons/tb";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="flex bg-[#f2f2f2] flex-col md:flex-row justify-between w-full overflow-hidden">
      <div className="flex flex-col gap-2xl p-2xl md:p-6xl md:py-2xl anim">
        <h2 className="text-4xl">{t("contacts.title")}</h2>

        <div className="flex flex-col gap-lg anim">
          <p className="mb-[-5px] text-lg">{t("contacts.addressLabel")}</p>
          <Link
            to="https://maps.app.goo.gl/KDUwX7Cq8rxpeYqTA"
            className="flex items-center gap-sm text-xl hover:text-blue/80 cursor-pointer"
          >
            <GrLocation className="text-2xl" /> {t("contacts.address")}
          </Link>
        </div>

        <div className="flex flex-col gap-lg anim el">
          <p className="mb-[-5px] text-lg">{t("contacts.phonesLabel")}</p>
          <Link
            to="tel:+998972300027"
            className="flex items-center gap-sm text-xl hover:text-blue/80 cursor-pointer"
          >
            <BiPhone className="text-2xl" /> +998 97-230-00-27
          </Link>
          <Link
            to="tel:+998942660005"
            className="flex items-center gap-sm text-xl hover:text-blue/80 cursor-pointer"
          >
            <BiPhone className="text-2xl" /> +998 94-266-00-05
          </Link>
        </div>

        <div className="flex flex-col gap-lg anim el">
          <p className="mb-[-5px] text-lg">{t("contacts.socialLabel")}</p>
          <Link
            to="https://t.me/GMV_uz"
            className="flex items-center gap-sm text-xl hover:text-blue/80 cursor-pointer"
          >
            <TbBrandTelegram className="text-2xl" /> @GMV_uz
          </Link>
        </div>

        <div className="flex flex-col gap-lg anim eb">
          <p className="mb-[-5px] text-lg">{t("contacts.developerLabel")}</p>
          <Link
            to="https://t.me/sh4rifoff"
            className="flex items-center gap-sm text-xl hover:text-blue/80 cursor-pointer"
          >
            <TbBrandTelegram className="text-2xl" />{" "}
            {t("contacts.developerName")}
          </Link>
        </div>

        <p className="text-xl font-medium anim eb">
          © 2017-{new Date().getFullYear()}, {t("contacts.company")}
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.8372135596637!2d71.6030490762278!3d40.985045271353805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4b7f74e51d8f%3A0x9c0a6369be6cec08!2sUNIVERSAL%20BOX!5e0!3m2!1sru!2s!4v1761138741981!5m2!1sru!2s"
        className="w-full md:w-[50%] h-[400px] md:h-[500px] anim er"
        loading="lazy"
      ></iframe>
    </div>
  );
};
