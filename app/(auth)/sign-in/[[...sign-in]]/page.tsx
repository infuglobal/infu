"use client";

import { SignIn } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

const SignInPage = () => {
  const { user } = useUser();

  return (
    <div className="w-full h-screen flex justify-center overflow-y-auto">
      <SignIn
        redirectUrl={
          user?.publicMetadata?.role === "Investor"
            ? "/investor-dashboard"
            : "/business-dashboard"
        }
        appearance={{
          elements: {
            card: "w-full flex flex-col",
            form: "flex-grow h-full flex flex-col justify-center",
            formButtonPrimary:
              "bg-purple-600 text-white hover:bg-purple-700 focus:ring-2 focus:ring-purple-500",
          },
          variables: {
            spacingUnit: "1.4rem",
          },
          layout: {
            unsafe_disableDevelopmentModeWarnings: true,
          },
        }}
      />
    </div>
  );
};

export default SignInPage;
