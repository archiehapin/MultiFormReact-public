import { useAppContext } from "../context/ContexProvider";
import BackNext from "./BackNext";
import PersonalInfo from "./PersonalInfo";
import AddOns from "./AddOns";
import Plan from "./Plan";
import FinishingUp from "./FinishingUp";
import ThankYou from "./ThankYou";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";

const Form = () => {
  const { value } = useAppContext();
  const { step } = value;

  const schema = yup.object().shape({
    Name: yup
      .string()
      .required("Name is required field")
      .min(2, "At least 2 and above characters")
      .max(30)
      .matches(/^[a-zA-Z ]*$/, "Name must be all letters"),

    Email: yup.string().email().required("Email is required field"),

    PhoneNumber: yup
      .string()
      .required("Phone is required field")
      .matches(
        /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        "Invalid phone number format",
      ),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  return (
    <FormProvider {...methods}>
      <form className="mx-auto flex h-full w-[420px] flex-1 flex-col justify-between text-a_Cool_gray">
        <div className="mx-auto flex h-full flex-col justify-between md:w-[350px] lg:w-[500px]">
          <section className="md: m-5 -mt-[60px] flex justify-center gap-5 rounded-lg bg-white p-5 md:mx-0 md:mt-0 md:px-0">
            {step === 1 ? (
              <div className={`${step === 1 && "block"}`}>
                <PersonalInfo />
              </div>
            ) : null}
            {step === 2 ? (
              <div className={`${step === 2 && "block md:w-[500px]"}`}>
                <Plan />
              </div>
            ) : null}
            {step === 3 ? (
              <div className={`${step === 3 && "block md:w-full"}`}>
                <AddOns />
              </div>
            ) : null}
            {step === 4 ? (
              <div className={`${step === 4 && "block md:w-full"}`}>
                <FinishingUp />
              </div>
            ) : null}
            {step === 5 ? (
              <div className={`${step === 5 && "block md:w-full"}`}>
                <ThankYou />
              </div>
            ) : null}
          </section>
          {step < 5 && <BackNext />}
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
