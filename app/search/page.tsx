"use client";

/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { useState } from "react";
import Grid from "../../src/components/Sections/Grid";
import { Tvideo } from "../../src/types/apiTypes";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [videos, setVideos] = useState<Tvideo[] | null>(null);

  const searchVideos = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/videos/search?keyword=${keyword}` ||
        "apiurl"
    );
    const videoJson = await res.json();
    return videoJson as Tvideo[];
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    await searchVideos().then((res) => setVideos(res));
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      <div className="bg-primary_bg h-20"> </div>
      <div className="text-primary_font flex flex-col w-screen">
        <form className="flex text-black h-20 justify-center items-center">
          <div className="px-1">
            <input
              className="rounded-lg px-1"
              type="text"
              id="search"
              name="search"
              placeholder="Enter a keyword"
              onChange={handleChange}
              required
            />
          </div>
          <button
            className="text-primary_font bg-footer rounded-lg px-1"
            onClick={handleSubmit}
            type="submit"
          >
            Search
          </button>
        </form>
        <div className="px-2">
          {videos ? (
            <Grid
              videos={videos}
              activeFavorite
              displayFavorite={false}
              title=""
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
