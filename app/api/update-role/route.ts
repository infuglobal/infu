import { clerkClient} from "@clerk/clerk-sdk-node";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    const  userId  = user?.id ;
    if (!userId) return new Response("Unauthorized", { status: 401 });

    const { role } = await req.json(); // ✅ Receive role from request body
    if (!role) return new Response("Role is required", { status: 400 });

    // ✅ Fetch existing metadata
    const existingUser = await clerkClient.users.getUser(userId);
    const existingMetadata = existingUser.publicMetadata || {};

    if (existingMetadata.role) {
      return new Response(JSON.stringify({ redirect: "/" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
    
    // ✅ Update publicMetadata with role
    await clerkClient.users.updateUser(userId, {
      publicMetadata: { ...existingMetadata, role },
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error updating metadata:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
