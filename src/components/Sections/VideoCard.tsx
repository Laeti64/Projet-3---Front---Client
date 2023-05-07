"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/UserContext";
import { Tvideo } from "../../types/apiTypes";
import axiosInstance from "../../utils/axiosInstance";
import Favorite from "../Favorite";

interface IProps {
  video: Tvideo;
  activeFavorite: boolean;
  displayFavorite: boolean;
}

export default function VideoCard({
  video,
  activeFavorite,
  displayFavorite,
}: IProps) {
  const { isAuth, user } = useAuth();
  const [favorite, setFavorite] = useState(false);

  const isVideoFavorite = async () => {
    const { data } = await axiosInstance.get(
      `/favorites/${video.id}/isFavorite`
    );

    return data;
  };

  useEffect(() => {
    if (user) {
      isVideoFavorite().then((res) => setFavorite(res));
    }
  }, []);

  return (
    <>
      {isAuth === false && video.isPublic === false ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-50">
          <Image src="/lock_logo.svg" alt="logo share" width="80" height="80" />
        </div>
      ) : (
        ""
      )}

      <div className="absolute bottom-0 left-0 right-0 bg-gray-700 bg-opacity-25 px-2 flex justify-between items-center">
        {isAuth || video.isPublic ? (
          <Link href={`/videos/${video.id}`}>{video.title}</Link>
        ) : (
          <p>{video.title}</p>
        )}

        {activeFavorite && isAuth ? <Favorite id={video.id} /> : ""}
        {displayFavorite && favorite && isAuth ? (
          <Image
            src="/full_heart_logo.svg"
            alt="logo share"
            width="25"
            height="25"
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
