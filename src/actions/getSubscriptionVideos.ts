import { Channel, Video } from "@prisma/client";
import getCurrentUser from "./getCurrentUser";
import db from "@/vendor/db";

export default async function getSubscriptionVideos(): Promise<
  (Video & { channel: Channel })[]
> {
  const currentUser = await getCurrentUser();

  try {
    const videos = await db.video.findMany({
      where: {
        channelId: {
          in: currentUser?.subscribedChannelIds,
        },
      },
      include: {
        channel: true,
      },
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
    });

    return videos;
  } catch (error: any) {
    throw new Error(error);
  }
}
