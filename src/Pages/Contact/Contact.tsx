import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BiSend } from "react-icons/bi";

export const Contact = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const titleElement = document?.querySelector("title");
    if (titleElement)
      titleElement.innerText = `${t("contact")} - Universal Box`;
  }, []);
  return (
    <div className="p-2xl py-4xl md:p-6xl pt-[90px_!important]">
      <form className="flex flex-col lg:grid lg:grid-cols-2 gap-2xl md:gap-4xl">
        <div className="flex flex-col gap-3xl">
          <label className="relative">
            <p className="text-base absolute bg-white p-[1px] left-[10px] top-[-12px] px-[5px]">
              Ism:
            </p>
            <input
              type="text"
              className="w-full h-[40px] border-solid border-[2px] border-blue outline-none rounded-xl"
            />
          </label>
          <label className="relative">
            <p className="text-base absolute bg-white p-[1px] left-[10px] top-[-12px] px-[5px]">
              E-mail:
            </p>
            <input
              type="text"
              className="w-full h-[40px] border-solid border-[2px] border-blue outline-none rounded-xl"
            />
          </label>{" "}
          <label className="relative">
            <p className="text-base absolute bg-white p-[1px] left-[10px] top-[-12px] px-[5px]">
              Mavzu:
            </p>
            <input
              type="text"
              className="w-full h-[40px] border-solid border-[2px] border-blue outline-none rounded-xl"
            />
          </label>
        </div>{" "}
        <div className="flex flex-col gap-2xl">
          <label className="relative">
            <p className="text-base absolute bg-white p-[1px] left-[10px] top-[-12px] px-[5px]">
              Xabar:
            </p>
            <textarea className="w-full h-[113px] border-solid border-[2px] border-blue outline-none rounded-xl resize-y" />
          </label>{" "}
          <label className="relative">
            <button
              type="submit"
              className="w-full h-[40px] border-solid border-[2px] border-blue bg-blue text-white text-center flex items-center justify-center outline-none rounded-xl"
            >
              <BiSend /> Yuborish
            </button>
          </label>
        </div>
      </form>
    </div>
  );
};
