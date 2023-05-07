/* eslint-disable @typescript-eslint/no-non-null-assertion */

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "../../context/UserContext";
import axiosInstance from "../../utils/axiosInstance";

interface IProps {
  id: string;
}

export default function Favorite({ id }: IProps) {
  const { user } = useAuth();
  const [favorite, setFavorite] = useState();
  const router = useRouter();

  const isVideoFavorite = async () => {
    const { data } = await axiosInstance.get(`/favorites/${id}/isFavorite`);

    return data;
  };

  const addVideoFavorite = async () => {
    const { data } = await axiosInstance.post(
      "/favorites/",
      JSON.parse(JSON.stringify({ videoId: id }))
    );

    setFavorite(data.id);

    return data;
  };

  const removeVideoFavorite = async () => {
    await axiosInstance.delete(`/favorites/${favorite}`);
    setFavorite(undefined);
    router.refresh();
  };

  useEffect(() => {
    if (user) {
      isVideoFavorite().then((data) => (data ? setFavorite(data.id) : ""));
    }
  }, []);

  return (
    <div>
      {favorite ? (
        <Image
          className="cursor-pointer"
          src="/full_heart_logo.svg"
          alt="logo share"
          width="25"
          height="25"
          onClick={() => {
            removeVideoFavorite();
          }}
        />
      ) : (
        <Image
          className="cursor-pointer"
          src="/empty_heart_logo.svg"
          alt="logo share"
          width="25"
          height="25"
          onClick={() => {
            addVideoFavorite();
          }}
        />
      )}
    </div>
  );
}
