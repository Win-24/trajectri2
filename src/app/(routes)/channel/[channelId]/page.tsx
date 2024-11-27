
import getChannelById from "@/actions/getChannelById";
import getVideosByChannelId from "@/actions/getVideosByChannelId";
import ChannelHeader from "@/components/channel/ChannelHeader";
import Button from "@/components/shared/Button";
import Sidebar from "@/components/shared/Navigation/Sidebar/Sidebar";
import VideoCard from "@/components/shared/VideoCard";
import Link from "next/link";

interface ChannelPageParams {
  channelId?: string;
}

export default async function ChannelPage({
  params,
}: {
  params: ChannelPageParams;
}) {
  const { channelId } = params;

  const channel = await getChannelById({ channelId });
  const videos = await getVideosByChannelId({ channelId });

  return channel ? (
    <div className="flex flex-col">
      <Sidebar />
      <ChannelHeader channel={channel} videoCount={videos.length} />

      <div className="flex flex-row justify-center items-center px-10 py-5 border-t-[1px] border-b-[1px] border-gray-400 text-2xl">
          
          <Link href={"/channel/"} className="capitalize mr-7 cursor-pointer">
            Home
          </Link>

          <Link href={"/channel/"} className="capitalize mr-7 cursor-pointer">
            Shorts
          </Link>

          <Link href={"/channel/"} className="capitalize mr-7 cursor-pointer">
            Videos
          </Link>

          <Link href={"/channel/"} className="capitalize mr-7 cursor-pointer">
            Playlists
          </Link>

          <Link href={"/channel/"} className="capitalize mr-7 cursor-pointer2">
            Posts
          </Link>

      </div>

      <div className="mx-12 sm:mx-24 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} isVertical={true} />
        ))}
      </div>
    </div>
  ) : (
    <h1>Channel not found</h1>
  );
}

 