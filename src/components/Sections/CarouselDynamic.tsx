"use client";

import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tvideo } from "../../types/apiTypes";
import Thumbnail from "./Thumbnail";
import VideoCard from "./VideoCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface IProps {
  videos: Tvideo[];
  activeFavorite: boolean;
  displayFavorite: boolean;
  title: string;
  id: string;
}

export default function CarouselDynamic({
  videos,
  activeFavorite,
  displayFavorite,
  title,
  id,
}: IProps) {
  return (
    <div className="flex flex-col p-3">
      <Link
        href={{
          pathname: `/dynamic-sections/${id}`,
        }}
      >
        <p className="text-lg md:text-2xl p-3">{title}</p>
      </Link>
      <Carousel ssr={false} responsive={responsive}>
        {videos
          .filter((video) => video.display === true)
          .map((video) => (
            <div key={video.id} className="relative m-2 shadow-2xl">
              <Thumbnail video={video} />
              <VideoCard
                video={video}
                activeFavorite={activeFavorite}
                displayFavorite={displayFavorite}
              />
            </div>
          ))}
      </Carousel>
    </div>
  );
}
