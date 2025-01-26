"use client";

import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="w-full h-screen flex justify-center overflow-y-auto">
      <SignIn
        appearance={{
          elements: {
            card: "w-full  flex flex-col", // Removed background, shadow, and border
            form: "flex-grow h-full flex flex-col justify-center", // Ensures content is centered within the card
            formButtonPrimary:
              "bg-purple-600 text-white hover:bg-purple-700 focus:ring-2 focus:ring-purple-500", // Styled submit button
          },
          variables: {
            spacingUnit : "1.4rem"
          },
          layout: {
            unsafe_disableDevelopmentModeWarnings: true,
          
          }
        }}
      />
    </div>
  );
};

export default SignInPage;
