/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Grid from "../../../src/components/Sections/Grid";
import { Tvideo } from "../../../src/types/apiTypes";

const getSectionVideos = async (id: string) => {
  const res = await fetch(
    `${process.env.API_URL}/static-sections/${id}` || "apiurl",
    {
      credentials: "include",
    }
  );
  const sectionJson = await res.json();
  return { videos: sectionJson.videos as Tvideo[], title: sectionJson.title };
};

export default async function Section({ params }: any) {
  const { videos, title } = await getSectionVideos(params.id);

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      <div className="bg-primary_bg h-20"> </div>
      <div className="text-primary_font flex">
        <Grid
          videos={videos}
          activeFavorite
          displayFavorite={false}
          title={title}
        />
      </div>
    </div>
  );
}
