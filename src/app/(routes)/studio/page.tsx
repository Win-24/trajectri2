
import getCurrentChannel from "@/actions/getCurrentChannel";
import getVideosByChannelId from "@/actions/getVideosByChannelId";
import AnalyticsSummary from "@/components/studio/AnalyticsSummary";
import VideoDetailsCard from "@/components/studio/VideoDetailsCard";
import getTrendingVideos from "@/actions/getTrendingVideos";
import SidebarStudio from "@/components/shared/Navigation/Sidebar/SidebarStudio";
import VideoCard from "@/components/shared/VideoCard";


export default async function StudioPage() {
  const currentChannel = await getCurrentChannel();
  const videos = await getVideosByChannelId({ channelId: currentChannel?.id });

  return (
    <div className="flex flex-col w-full h-full">
      <SidebarStudio />
      
      <div className="p-8">
        <AnalyticsSummary videos={videos} />
        <div className="flex flex-col gap-4 mt-8 p-8">
          <h2 className="text-2xl">Videos</h2>
          {videos.length
            ? videos.map((video) => {
                return <VideoDetailsCard key={video.id} video={video} />;
              })
            : "Upload some videos to get started"}
        </div>
      </div>
    </div>
  );
}
