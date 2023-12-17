import React from "react";
import { useAppContext } from "../context/ContexProvider";

const formStep = [
  {
    num: 1,
    step: "step 1",
    desc: "Your info",
  },
  {
    num: 2,
    step: "step 2",
    desc: "select plan",
  },
  {
    num: 3,
    step: "step 3",
    desc: "add-ons",
  },
  {
    num: 4,
    step: "step 4",
    desc: "summary",
  },
];

const TopSideBar = () => {
  const { value } = useAppContext();
  const { step } = value;

  return (
    <>
      <div className="mx-auto flex h-[168px] w-[420px] items-start justify-center gap-5 bg-[url('./assets/imgs/bg-sidebar-mobile.svg')] bg-cover pt-10 text-base uppercase md:h-full md:w-[300px] md:flex-col md:justify-start md:gap-10 md:rounded-lg md:bg-[url('./assets/imgs/bg-sidebar-desktop.svg')] md:bg-cover md:bg-no-repeat md:pl-[30px] md:pt-[50px]">
        {formStep.map((formSteps) => (
          <div
            key={formSteps.num}
            className="-mt-4 flex justify-start md:gap-5"
          >
            <div
              className={`w-10 ${
                step === formSteps.num
                  ? "border-a_Purplish_blue bg-white text-a_Marine_blue"
                  : ""
              } flex h-10 items-center justify-center rounded-full border-2`}
            >
              {formSteps.num}
            </div>
            <div className="hidden md:block">
              <div className="flex min-w-max flex-col">
                <span className="text-[.9rem] text-a_Cool_gray">
                  {formSteps.step}
                </span>
                <span>{formSteps.desc}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopSideBar;
