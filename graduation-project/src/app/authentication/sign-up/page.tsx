import React from "react";
import { SignUpForm } from "featuers/authentecation/components/SignUP/SignUpForm";
import RegistrationCard from "featuers/authentecation/components/RegistrationCard";
const SignUp = () => {
  return (
    <RegistrationCard className="w-[100%] ">
      <SignUpForm />
    </RegistrationCard>
  );
};

export default SignUp;
