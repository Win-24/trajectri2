
import { Video } from "@prisma/client";
import db from "@/vendor/db";

interface GetVideosByChannelIdParams {
  channelId?: string;
}

export default async function getVideosByChannelId(
  params: GetVideosByChannelIdParams
): Promise<Video[]> {
  try {
    const { channelId } = params;

    const query: any = {};

    if (channelId) {
      query.channelId = channelId;
    }

    const videos = await db.video.findMany({
      where: query,
    });

    return videos || [];
  } catch (error: any) {
    throw new Error(error);
  }
}
