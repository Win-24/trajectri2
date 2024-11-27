
import { auth } from "@/auth/auth"; 
import db from "@/vendor/db";
// import { getServerSession } from "next-auth";
import UserOptions from "@/components/shared/Navigation/Navbar/UserOptions/UserOptions";

export default async function getCurrentUser() {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await db.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    return currentUser;
  } catch (error: any) {
    return null;
  }
}
