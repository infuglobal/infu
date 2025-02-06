"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const UpdateRole = () => {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!isLoaded || !user) return;

    const updateRole = async () => {
      const role = localStorage.getItem("selectedRole");
      if (!role) return;

      try {
        const response = await fetch("/api/update-role", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ role }),
        });

        if (response.ok) {
          localStorage.removeItem("selectedRole");
          router.push("/"); // ✅ Redirect after successful update
        } else {
          console.error("Failed to update role");
        }
      } catch (error) {
        console.error("Error updating role:", error);
      }
    };

    updateRole();
  }, [isLoaded, user, router]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <p className="text-lg text-gray-700">Creating your profile...</p>
    </div>
  );
};

export default UpdateRole;
