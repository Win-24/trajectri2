
import { Channel } from "@prisma/client";
import db from "@/vendor/db"
import getCurrentUser from "./getCurrentUser"

export default async function getCurrentChannel():
Promise<Channel | null> {
    try {
        const user = await getCurrentUser();

        const query: any = {};

        if (user?.id) {
            query.userId = user?.id;
        } else {
            return null;
        }

        const currentChannel = await db.channel.findFirst({
            where: query
        })

        return currentChannel
    } catch (error: any) { 
        throw new Error(error)
    }
}