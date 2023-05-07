"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Tvideo } from "../../types/apiTypes";

interface IProps {
  video: Tvideo;
}

export default function Thumbnail({ video }: IProps) {
  const [teaser, setTeaser] = useState(false);

  return (
    <Link href={`/videos/${video.id}`}>
      <Image
        className="w-full h-full z-50"
        src={teaser ? video.teaserUrl : video.thumbnailUrl}
        alt="thumbnail"
        width="320"
        height="320"
        priority
        onMouseEnter={() => setTeaser(true)}
        onMouseLeave={() => setTeaser(false)}
      />
    </Link>
  );
}
