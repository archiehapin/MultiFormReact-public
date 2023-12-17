import { useFormContext } from "react-hook-form";

const PersonalInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="block rounded-lg bg-white pt-[10px]">
        <h1 className="text-2xl font-bold text-a_Marine_blue">Personal info</h1>
        <p className="pt-2">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <div className="flex flex-col gap-1 hover:cursor-pointer">
          <label
            htmlFor="Name"
            className="flex items-center justify-between font-medium text-a_Marine_blue"
          >
            Name
            <span className="text-sm font-normal text-a_Strawberry_red">
              {errors.Name && errors.Name?.message}
            </span>
          </label>
          <input
            autoComplete="disabled"
            placeholder="e.g. Stephen King"
            type="text"
            id="Name"
            name="Name"
            className="h-10 rounded-[5px] border border-a_Cool_gray pl-2  focus:border-a_Purplish_blue focus:border-t-a_Pastel_blue focus:outline-none"
            {...register("Name")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="Email"
            className="flex items-center justify-between font-medium text-a_Marine_blue"
          >
            Email Address
            <span className="text-sm font-normal text-a_Strawberry_red">
              {errors.Email && errors.Email?.message}
            </span>
          </label>
          <input
            autoComplete="disabled"
            placeholder="e.g. stephenking@lorem.com"
            type="email"
            id="Email"
            name="Email"
            className="h-10 rounded-[5px] border border-a_Cool_gray pl-2 focus:border-a_Purplish_blue focus:border-t-a_Pastel_blue focus:outline-none"
            {...register("Email")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="PhoneNumber"
            className="flex items-center justify-between font-medium text-a_Marine_blue"
          >
            Phone Number
            <span className="text-sm font-normal text-a_Strawberry_red">
              {errors.PhoneNumber && errors.PhoneNumber?.message}
            </span>
          </label>
          <input
            autoComplete="disabled"
            placeholder="e.g. +1 234 567 890"
            type="text"
            id="PhoneNumber"
            name="PhoneNumber"
            className="h-10 rounded-[5px] border border-a_Cool_gray pl-2 focus:border-a_Purplish_blue focus:border-t-a_Pastel_blue focus:outline-none"
            {...register("PhoneNumber")}
          />
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
