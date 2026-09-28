import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://noxtum.ai";

  const routes = [
    "",
    "/solutions",
    "/transformation",
    "/industries",
    "/products/nova",
    "/about",
    "/insights",
    "/book-consultation"
  ];

  return routes.map((route) => ({
    url: baseUrl + route,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
