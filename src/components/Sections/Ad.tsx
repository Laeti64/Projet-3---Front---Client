"use client";

import Image from "next/image";
import { TPageAdvertising } from "../../types/apiTypes";

interface IProps {
  section: TPageAdvertising;
}

export default function Ad({ section }: IProps) {
  return (
    <div className="p-3">
      <p className="text-lg md:text-2xl p-3">{section.advertisings.title}</p>
      <a target="_blank" rel="noreferrer" href={section.advertisings.linkTo}>
        <Image
          alt={section.advertisings.title}
          src={section.advertisings.imageUrl}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto p-7"
        />
      </a>
    </div>
  );
}
