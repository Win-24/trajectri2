
import { Channel } from "@prisma/client";
import db from "@/vendor/db";

interface GetChannelByIdParams {
    channelId?: string;
}

export default async function getChannelById(params: GetChannelByIdParams): Promise<Channel | null> {
    try {
        const {channelId} = params;

        const query: any = {};

        if (channelId) {
            query.id = channelId;
        }
 
        const channel = await db.channel.findFirst({
            where: query,
        });

        return channel;
    } catch (error: any) {
        throw new Error(error)
    }
}