import { homepageDEData } from "@/lib/locales/de/homePageDeData";
import { homepageENData } from "@/lib/locales/en/homePageData";

const homePageData = [
  homepageDEData,
  homepageENData
];

export async function getHomePageData(langId) {
    const homePage = homePageData.filter(item => item.lang === langId);
    return homePage;
}
