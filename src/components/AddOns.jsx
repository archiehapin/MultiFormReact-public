import { useEffect } from "react";
import { useAppContext } from "../context/ContexProvider";

const AddOns = () => {
  const { value } = useAppContext();
  const {
    onlineService,
    customizableProfile,
    largerStorage,
    setCustomizableProfile,
    setLargerStorage,
    setOnlineService,
    planCat,
  } = value;
  const addOnns = [
    {
      title: "Online service",
      desc: "Access to multiplayer games",
      isChecked: onlineService,
      price: 1,
    },
    {
      title: "Larger storage",
      desc: "Extra 1TB of cloud save",
      isChecked: largerStorage,
      price: 2,
    },
    {
      title: "Customizable Profile",
      desc: "Custom theme on your profile",
      isChecked: customizableProfile,
      price: 2,
    },
  ];
  return (
    <>
      <div className=" pt-[10px]">
        <h3 className="text-2xl font-bold text-a_Marine_blue">Pick add-ons</h3>
        <p className="pt-2">Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {addOnns.map((addOnn, index) => (
          <div
            key={index}
            className={`flex ${
              addOnn.isChecked ? "border border-a_Purplish_blue" : ""
            }  items-center justify-between gap-3 rounded-md border px-5 py-3 hover:border-a_Purplish_blue`}
          >
            <div className="flex items-center gap-3">
              <span>
                <input
                  onChange={() => {
                    if (addOnn.title === "Online service") {
                      if (onlineService) {
                        setOnlineService((prev) => !prev);
                      } else {
                        setOnlineService((prev) => !prev);
                      }
                    }
                    if (addOnn.title === "Larger storage") {
                      if (largerStorage) {
                        setLargerStorage((prev) => !prev);
                      } else {
                        setLargerStorage((prev) => !prev);
                      }
                    }
                    if (addOnn.title === "Customizable Profile") {
                      if (customizableProfile) {
                        setCustomizableProfile((prev) => !prev);
                      } else {
                        setCustomizableProfile((prev) => !prev);
                      }
                    }
                  }}
                  type="checkbox"
                  checked={addOnn.isChecked}
                  name={addOnn.title}
                  id={addOnn.title}
                />
              </span>
              <div>
                <label className="hover:cursor-pointer" htmlFor={addOnn.title}>
                  <h4 className="font-medium text-a_Marine_blue">
                    {addOnn.title}
                  </h4>
                  <p className="text-xs md:text-base">{addOnn.desc}</p>
                </label>
              </div>
            </div>
            <span className="text-xs text-a_Purplish_blue md:text-base">
              {`+$${planCat === "monthly" ? addOnn.price : addOnn.price * 10}/${
                planCat === "monthly" ? "mo" : "yr"
              }`}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default AddOns;
