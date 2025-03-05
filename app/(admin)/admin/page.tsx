import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { clerkClient } from "@clerk/clerk-sdk-node";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

// Define User interface
interface User {
  id: string;
  firstName: string | null;
  lastName: string | null;
  emailAddresses: { emailAddress: string }[];
  phoneNumbers: { phoneNumber: string }[];
  imageUrl: string;
  createdAt: number;
  updatedAt: number;
  lastActiveAt: number | null;
  twoFactorEnabled: boolean;
  banned: boolean;
  locked: boolean;
  publicMetadata: {
    role?: "Investor" | "Business" | null; // Add role to the metadata
  };
}

// Fetch all users from Clerk
async function getAllUsers(): Promise<User[]> {
  try {
    const response = await clerkClient.users.getUserList({ limit: 500 });
    if (!response || !response.data) return [];

    return response.data.map((user) => ({
      id: user.id,
      firstName: user.firstName || "N/A",
      lastName: user.lastName || "N/A",
      emailAddresses: user.emailAddresses || [],
      phoneNumbers: user.phoneNumbers || [],
      imageUrl: user.imageUrl || "/default-avatar.png",
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      lastActiveAt: user.lastActiveAt,
      twoFactorEnabled: user.twoFactorEnabled,
      banned: user.banned,
      locked: user.locked,
      publicMetadata: user.publicMetadata || { role: null }, // Include publicMetadata
    }));
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export default async function AdminDashboard() {
  const user = await currentUser();

  const ADMIN_EMAIL_1 = process.env.ADMIN_1_EMAIL;
  const ADMIN_EMAIL_2 = process.env.ADMIN_2_EMAIL;
  const ADMIN_EMAIL_3 = process.env.ADMIN_3_EMAIL;

  // Redirect if the user is not an admin
  if (
    !user ||
    !user.emailAddresses.some(
      (email) =>
        email.emailAddress === ADMIN_EMAIL_1 ||
        email.emailAddress === ADMIN_EMAIL_2 ||
        email.emailAddress === ADMIN_EMAIL_3
    )
  ) {
    redirect("/");
  }

  const users: User[] = await getAllUsers();

  const totalBusinesses = users.filter((user) => user.publicMetadata.role === "Business").length;
  const totalInvestors = users.filter((user) => user.publicMetadata.role === "Investor").length;

  return (
    <div className="container mx-auto px-4 pt-8 pb-12 h-full overflow-y-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-6 sm:p-8 text-white shadow-lg mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center gap-2">
            <FaUser className="text-yellow-300" /> Admin Dashboard
          </h1>
          <p className="text-base sm:text-lg">
            Manage and view all users, businesses, and investors in the system.
          </p>
        </div>

        {/* Top Section - Dashboard Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Users Box */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Total Users
            </h3>
            <p className="text-3xl font-bold text-purple-600">{users.length}</p>
          </div>

          {/* Total Businesses Box */}
          <Link href="/admin/businesses">
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Total Businesses
              </h3>
              <p className="text-3xl font-bold text-green-600">
                {totalBusinesses}
              </p>
            </div>
          </Link>

          {/* Total Investors Box */}
          <Link href="/admin/investors">
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Total Investors
              </h3>
              <p className="text-3xl font-bold text-blue-600">
                {totalInvestors}
              </p>
            </div>
          </Link>
        </div>

        {/* Bottom Section - Users Table */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-x-auto">
          <h2 className="text-2xl font-bold text-purple-900 mb-6 flex items-center gap-2">
            <FaUser className="text-purple-600" /> All Users
          </h2>
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-100 text-black">
                <th className="py-3 px-4">Profile</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Phone</th>
                <th className="py-3 px-4">Role</th>
                <th className="py-3 px-4">Created At</th>
                <th className="py-3 px-4">Updated At</th>
                <th className="py-3 px-4">Last Active</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <Image
                      height={40}
                      width={40}
                      src={user.imageUrl}
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="py-3 px-4">{`${user.firstName} ${user.lastName}`}</td>
                  <td className="py-3 px-4">
                    {user.emailAddresses[0]?.emailAddress || "No Email"}
                  </td>
                  <td className="py-3 px-4">
                    {user.phoneNumbers[0]?.phoneNumber || "No Phone"}
                  </td>
                  <td className="py-3 px-4">
                    {user.publicMetadata?.role || "null"}
                  </td>
                  <td className="py-3 px-4">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4">
                    {new Date(user.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4">
                    {user.lastActiveAt
                      ? new Date(user.lastActiveAt).toLocaleDateString()
                      : "Never"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}