"use client";

import Link from "next/link";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import { Tvideo } from "../../types/apiTypes";
import "react-multi-carousel/lib/styles.css";

const responsiveHero = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface IProps {
  videos: Tvideo[];
}

export default function HeroSlider({ videos }: IProps) {
  return (
    <div className="flex flex-col">
      <Carousel
        ssr={false}
        responsive={responsiveHero}
        autoPlay
        autoPlaySpeed={8000}
        infinite
      >
        {videos
          .filter((video) => video.display === true)
          .map((video) => (
            <div key={video.id}>
              <video
                className="w-full h-full"
                key={video.id}
                src={video.videoUrl}
                autoPlay
                loop
                muted
              >
                <track kind="captions" />
              </video>
              <div className="absolute inset-x-0 bottom-0 text-lg md:text-2xl p-4 bg-gray-700 bg-opacity-25">
                <Link key={video.id} href={`/videos/${video.id}`}>
                  {video.title}
                </Link>
                <p className="hidden md:flex md:text-lg">{video.description}</p>
              </div>
              <div className="hidden md:flex absolute inset-x-0 bottom-1/2 left-1/2">
                <Link key={video.id} href={`/videos/${video.id}`}>
                  <Image
                    src="/play_logo.svg"
                    width={70}
                    height={70}
                    alt="logo play"
                  />
                </Link>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
}
