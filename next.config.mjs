/** @type {import('next').NextConfig} */
import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const nextConfig = {
  images: {
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "res.cloudinary.com",
      "images.clerk.dev",
      "www.gravatar.com",
      "saisolutions.vercel.app",
      "img.clerk.com",
      "content.jdmagicbox.com",
    ],
  },
};

export default withNextra(nextConfig);

// export default nextConfig;
