import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Web Prophecy",
    short_name: "Web Prophecy",
    description: "Sites web et applications modernes pour paroisses catholiques.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfaf6",
    theme_color: "#17211f"
  };
}
