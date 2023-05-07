/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Grid from "../../../src/components/Sections/Grid";
import { Tvideo } from "../../../src/types/apiTypes";

const getSectionVideos = async (id: string) => {
  const res = await fetch(
    `${process.env.API_URL}/dynamic-sections/${id}` || "apiurl",
    {
      credentials: "include",
    }
  );
  const sectionJson = await res.json();
  return sectionJson.categories.videos as Tvideo[];
};

const getCategory = async (id: string) => {
  const res = await fetch(
    `${process.env.API_URL}/dynamic-sections/${id}` || "apiurl",
    {
      credentials: "include",
    }
  );
  const sectionJson = await res.json();
  return sectionJson.categories.name as string;
};

export default async function Section({ params }: any) {
  const videos = await getSectionVideos(params.id);
  const title = await getCategory(params.id);

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
