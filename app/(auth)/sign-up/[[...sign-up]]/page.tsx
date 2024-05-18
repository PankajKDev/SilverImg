import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return <SignUp signInFallbackRedirectUrl="/" path="/sign-up" />;
};

export default page;
