import { createContext, useContext, useEffect, useState } from "react";

export const appContext = createContext(null);

import React from "react";

const ContexProvider = ({ children }) => {
  const [plan, setPlan] = useState("Arcade");
  const [planCat, setPlanCat] = useState("monthly");
  const [planPrice, setPlanPrice] = useState(9);
  const [step, setStep] = useState(1);
  const [onlineService, setOnlineService] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [customizableProfile, setCustomizableProfile] = useState(false);
  const [total, setTotal] = useState(0);

  const handleNext = () => {
    if (step <= 5) {
      setStep(step + 1);
    }
  };
  const handlePlanPrice = (price) => {
    setPlanPrice(price);
  };

  const handleBack = () => {
    setStep(step - 1);
  };
  const handleStep = () => {
    setStep(2);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };
  const handlePlan = (plan) => {
    setPlan(plan);
  };
  const handleOnchange = () => {
    if (planCat === "monthly") {
      setPlanCat("yearly");
    }
    if (planCat === "yearly") {
      setPlanCat("monthly");
    }
  };

  useEffect(() => {
    setTotal(planPrice);
    if (largerStorage) {
      setTotal((prev) => prev + 2);
    }
    if (onlineService) {
      setTotal((prev) => prev + 1);
    }
    if (customizableProfile) {
      setTotal((prev) => prev + 2);
    }
  }, [planCat, plan, onlineService, customizableProfile, largerStorage]);

  const value = {
    plan,
    planPrice,
    step,
    planCat,
    onlineService,
    customizableProfile,
    largerStorage,
    total,
    setCustomizableProfile,
    setLargerStorage,
    setOnlineService,
    handlePlanPrice,
    setPlanCat,
    handlePlan,
    handleBack,
    handleNext,
    handleStep,
    handleSubmit,
    handleOnchange,
  };

  return (
    <appContext.Provider value={{ value }}>{children}</appContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(appContext);
  if (context === undefined) {
    throw new Error("useAppContext was used outside of its Provider");
  }

  return context;
};

export default ContexProvider;
