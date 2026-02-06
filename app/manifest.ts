import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gatekeeper.io",
    short_name: "Gatekeeper",
    description:
      "Secure visitor and access management platform built for organizations that value accountability, stewardship, and compliance.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#1565C0",
    icons: [
      {
        src: "/icon-light-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  }
}
