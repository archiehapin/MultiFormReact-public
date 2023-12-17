import { useAppContext } from "../context/ContexProvider";
import { useFormContext } from "react-hook-form";

const BackNext = () => {
  const { value } = useAppContext();
  const { step, handleBack, handleNext, handleSubmit } = value;
  const { trigger } = useFormContext();
  const goNext = useFormContext().formState.isValid;
  const nextStep = () => {
    trigger();
    if (goNext) {
      handleNext();
    }
  };
  return (
    <div className="relative mt-7 flex h-[70px] items-center justify-between bg-white px-5 lg:px-0">
      <button
        className={`${step > 1 && step < 5 ? "block" : "hidden"}`}
        type="button"
        onClick={handleBack}
      >
        Go Back
      </button>

      {step < 4 && (
        <button
          type="button"
          onClick={nextStep}
          className={`absolute right-5 top-[14px] rounded-md bg-a_Marine_blue px-4 py-2 text-white  active:scale-[.95] lg:right-0`}
        >
          Next Step
        </button>
      )}

      {step === 4 && (
        <button
          type="submit"
          onClick={handleSubmit}
          className="rounded-md  bg-a_Purplish_blue px-4 py-2 text-white"
        >
          Confirm
        </button>
      )}
    </div>
  );
};

export default BackNext;
