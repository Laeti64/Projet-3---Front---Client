/* eslint-disable @typescript-eslint/no-explicit-any */
import CookiesConsent from "../../../src/components/CookiesConsent";
import Ad from "../../../src/components/Sections/Ad";
import CarouselDynamic from "../../../src/components/Sections/CarouselDynamic";
import CarouselStatic from "../../../src/components/Sections/CarouselStatic";
import Grid from "../../../src/components/Sections/Grid";
import HeroSlider from "../../../src/components/Sections/HeroSlider";

const getMultipleRandom = (arr: any[], num: number) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const getOnePage = async (id: string) => {
  const res = await fetch(`${process.env.API_URL}/pages/${id}` || "apiurl", {
    credentials: "include",
  });
  const pageJson = await res.json();

  return pageJson;
};

const extractSections = (page: any) => {
  const sections = [] as any[];

  page.pagesAdvertisings.map((section: any) => sections.push(section));
  page.pagesSectionsDynamic.map((section: any) => sections.push(section));
  page.pagesSectionsStatic.map((section: any) => sections.push(section));

  sections.sort((a, b) => a.position - b.position);

  return sections;
};

export default async function Page({ params }: any) {
  const page = await getOnePage(params.id);
  const sections = extractSections(page);
  const url = `${process.env.NEXT_PUBLIC_PROD_URL}/pages/${params.id}`;
  const title = `Whatever You Watch - ${page.title}`;

  return (
    <>
      <div>
        <head>
          <title>{title}</title>

          <meta name="title" content={title} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:image" content="/wyw_logo_svg" />
        </head>
      </div>
      <div className=" bg-primary_bg text-primary_font w-screen min-h-[calc(100vh-64px)]">
        {page.title !== "Homepage" ? (
          <div className="bg-primary_bg h-20"> </div>
        ) : (
          ""
        )}
        {page.title === "Homepage" ? <CookiesConsent /> : ""}

        {sections.map((section) => {
          if (section.advertisingId)
            return <Ad key={section.advertisingId} section={section} />;
          if (section.sectionsStatics) {
            if (section.sectionsStatics.isHero)
              return (
                <HeroSlider
                  key={section.sectionsStatics.id}
                  videos={section.sectionsStatics.videos}
                />
              );

            return (
              <CarouselStatic
                activeFavorite={false}
                displayFavorite
                videos={section.sectionsStatics.videos}
                title={section.sectionsStatics.title}
                id={section.sectionsStatics.id}
                key={section.sectionsStatics.id}
              />
            );
          }
          if (section.sectionsDynamic) {
            if (section.sectionsDynamic.isGrid)
              return (
                <Grid
                  activeFavorite={false}
                  displayFavorite
                  videos={getMultipleRandom(
                    section.sectionsDynamic.categories.videos,
                    section.sectionsDynamic.max
                  )}
                  title={section.sectionsDynamic.title}
                  id={section.sectionsDynamic.id}
                  key={section.sectionsDynamic.id}
                />
              );

            return (
              <CarouselDynamic
                activeFavorite={false}
                displayFavorite
                videos={getMultipleRandom(
                  section.sectionsDynamic.categories.videos,
                  section.sectionsDynamic.max
                )}
                title={section.sectionsDynamic.title}
                id={section.sectionsDynamic.id}
                key={section.sectionsDynamic.id}
              />
            );
          }
          return "";
        })}
      </div>
    </>
  );
}
