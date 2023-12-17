import { useAppContext } from "../context/ContexProvider";

const FinishingUp = () => {
  const { value } = useAppContext();
  const {
    plan,
    planPrice,
    planCat,
    handleStep,
    onlineService,
    customizableProfile,
    largerStorage,
    total,
  } = value;
  const adon = !largerStorage && !customizableProfile && !onlineService;
  return (
    <>
      <div className=" pt-[10px]">
        <h3 className="text-2xl font-bold text-a_Marine_blue">Finishing up</h3>
        <p className="pt-2">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="mb-[40px] mt-4 h-[190px] rounded bg-a_Magnolia px-4 pb-2 pt-3">
        <div className="flex items-center justify-between border-b-2">
          <div className="pb-2">
            <h3 className="text-lg font-medium text-a_Marine_blue">
              {plan} ({planCat})
            </h3>
            <p
              onClick={handleStep}
              className="cursor-pointer underline hover:text-a_Purplish_blue"
            >
              Change
            </p>
          </div>
          <span className="text-base font-medium text-a_Marine_blue">
            {`$${planCat === "monthly" ? planPrice : planPrice * 10}/${
              planCat === "monthly" ? "mo" : "yr"
            }`}
          </span>
        </div>
        <div className="mt-3 flex flex-col gap-2">
          {adon && <span className="text-center">No add-ons added</span>}

          {onlineService && (
            <div className="flex justify-between">
              <h3>Online service</h3>
              <span className="text-a_Marine_blue">
                {`+$${planCat === "monthly" ? 1 : 1 * 10}`}/
                {`${planCat === "monthly" ? "mo" : "yr"}`}
              </span>
            </div>
          )}
          {largerStorage && (
            <div className="flex justify-between">
              <h3>Larger storage</h3>
              <span className="text-a_Marine_blue">
                {`+$${planCat === "monthly" ? 2 : 2 * 10}`}/
                {`${planCat === "monthly" ? "mo" : "yr"}`}
              </span>
            </div>
          )}
          {customizableProfile && (
            <div className="flex justify-between">
              <h3>Customizable Profile</h3>
              <span className="text-a_Marine_blue">
                {`+$${planCat === "monthly" ? 2 : 2 * 10}`}/
                {`${planCat === "monthly" ? "mo" : "yr"}`}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-[50px]">
        <p>Total (per {`${planCat === "monthly" ? "month" : "year"}`})</p>
        <span className="text-a_Purplish_blue">
          ${`${planCat === "monthly" ? total : total * 10}`}/
          {`${planCat === "monthly" ? "mo" : "yr"}`}
        </span>
      </div>
    </>
  );
};

export default FinishingUp;
