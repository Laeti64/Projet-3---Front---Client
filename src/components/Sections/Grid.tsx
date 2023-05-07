"use client";

import Link from "next/link";
import { Tvideo } from "../../types/apiTypes";
import Thumbnail from "./Thumbnail";
import VideoCard from "./VideoCard";

interface IProps {
  videos: Tvideo[];
  activeFavorite: boolean;
  displayFavorite: boolean;
  title?: string;
  id?: string;
}

export default function Grid({
  videos,
  activeFavorite,
  displayFavorite,
  title,
  id,
}: IProps) {
  return (
    <div className="flex flex-col p-3">
      {id ? (
        <Link
          href={{
            pathname: `/dynamic-sections/${id}`,
          }}
        >
          <p className="text-lg md:text-2xl p-3">{title}</p>
        </Link>
      ) : (
        <p className="text-lg md:text-2xl p-3">{title}</p>
      )}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {videos.length > 0 ? (
          videos
            .filter((video: Tvideo) => video.display === true)
            .map((video: Tvideo) => (
              <div key={video.id} className="relative shadow-2xl">
                <Thumbnail video={video} />
                <VideoCard
                  video={video}
                  activeFavorite={activeFavorite}
                  displayFavorite={displayFavorite}
                />
              </div>
            ))
        ) : (
          <p> No videos...</p>
        )}
      </div>
    </div>
  );
}
