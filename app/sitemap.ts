export const dynamic = "force-static";
import { MetadataRoute } from "next";
import { apartments, places } from "@/lib/data";

const BASE_URL = "https://agadream.ma";

export default function sitemap(): MetadataRoute.Sitemap {
  const aptPages = apartments.map((a) => ({
    url: `${BASE_URL}/appartements/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const placePages = places.map((p) => ({
    url: `${BASE_URL}/explorer/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/appartements`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/explorer`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/a-propos`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    ...aptPages,
    ...placePages,
  ];
}
