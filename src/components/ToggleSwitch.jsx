import { useEffect } from "react";
import { useAppContext } from "../context/ContexProvider";

const ToggleSwitch = () => {
  const { value } = useAppContext();
  const { planCat, handleOnchange, setPlanCat } = value;
  return (
    <div className="mt-10 flex w-full justify-center gap-5 rounded-md bg-a_Alabaster py-[10px]">
      <span
        onClick={() => {
          setPlanCat("monthly");
        }}
        className="cursor-pointer"
      >
        Monthly
      </span>
      <label
        htmlFor="check"
        className="relative h-[21px] w-[44px] rounded-full  bg-a_Marine_blue hover:cursor-pointer"
      >
        <input
          onChange={handleOnchange}
          type="checkbox"
          checked={planCat === "yearly" ? true : false}
          id="check"
          className="peer sr-only"
        />
        <span className="absolute left-[3px] top-[2px] h-[78%] w-[16px] rounded-full bg-a_Magnolia transition-all duration-[400ms] hover:cursor-pointer peer-checked:left-[25px] peer-checked:bg-a_Magnolia"></span>
      </label>
      <span
        onClick={() => {
          setPlanCat("yearly");
        }}
        className="cursor-pointer"
      >
        Yearly
      </span>
    </div>
  );
};

export default ToggleSwitch;
