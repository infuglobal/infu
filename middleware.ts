import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/clerk-sdk-node"; // ✅ Correct import

// Define protected routes (all other routes will be public)
const isInvestorRoute = createRouteMatcher(["/investor-dashboard(.*)"]);
const isBusinessRoute = createRouteMatcher(["/business-dashboard(.*)"]);
const isProtectedRoute = createRouteMatcher(["/investor-dashboard(.*)", "/business-dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // If the route is protected and user is not authenticated, redirect to sign-in
  if (!userId && isProtectedRoute(req)) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // If the user is authenticated, check their role and redirect if needed
  if (userId) {
    try {
      const user = await clerkClient.users.getUser(userId); // ✅ Correct usage
      const role = user.publicMetadata.role as "Investor" | "Business" | undefined;

      // Redirect logic based on roles
      if (role === "Investor" && isBusinessRoute(req)) {
        return NextResponse.redirect(new URL("/investor-dashboard", req.url));
      }

      if (role === "Business" && isInvestorRoute(req)) {
        return NextResponse.redirect(new URL("/business-dashboard", req.url));
      }
    } catch (error) {
      console.error("Error fetching user data from Clerk:", error);
      return NextResponse.redirect(new URL("/error", req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)", // Matches all non-static files
    "/",
    "/(api|trpc)(.*)",
  ],
};
