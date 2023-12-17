import { useAppContext } from "../context/ContexProvider";
import ToggleSwitch from "./ToggleSwitch";
import IconArcade from "./icons/IconArcade";
import IconAdvanced from "./icons/IconAdvanced";
import IconPro from "./icons/IconPro";

const planLoop = [
  {
    title: "Arcade",
    icon: <IconArcade />,
    price: 9,
  },
  {
    title: "Advanced",
    icon: <IconAdvanced />,
    price: 12,
  },
  {
    title: "Pro",
    icon: <IconPro />,
    price: 15,
  },
];
const Plan = () => {
  const { value } = useAppContext();
  const { plan, handlePlan, planCat, handlePlanPrice } = value;

  return (
    <>
      <div className="pt-[10px]">
        <h3 className="text-2xl font-bold text-a_Marine_blue">
          Select your plan
        </h3>
        <p className="pt-2">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="mt-5 flex flex-col gap-4 md:flex-row">
        {planLoop.map((plans) => (
          <div
            onClick={() => {
              handlePlan(plans.title);
              handlePlanPrice(plans.price);
            }}
            key={plans.title}
            className={`flex h-[100px] items-start gap-3 ${
              plan === plans.title ? "border-a_Purplish_blue bg-a_Magnolia" : ""
            } cursor-pointer rounded-md border border-a_Marine_blue p-4 md:h-[155px] md:w-[120px] md:flex-col md:gap-5 lg:w-[150px]`}
          >
            <div className="flex flex-row">{plans.icon}</div>
            <div className=" md:flex md:flex-col md:justify-start">
              <h3 className="font-medium text-a_Marine_blue">{plans.title}</h3>
              <span>
                {`$${planCat === "monthly" ? plans.price : plans.price * 10}/${
                  planCat === "monthly" ? "mo" : "yr"
                }`}
              </span>
              {planCat === "yearly" ? (
                <p className="text-xs text-a_Marine_blue">2 months free</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <ToggleSwitch />
    </>
  );
};

export default Plan;
