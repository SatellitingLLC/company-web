export const site = {
  name: "Satelliting",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://satelliting.space",
  legalName: "Satelliting LLC",
  title: "Web Design & Development Studio | Satelliting LLC",
  description:
    "Satelliting LLC is a remote-first web studio. We design, build, host, and maintain fast, search-friendly websites for businesses that want to be found.",
  themeColor: "#04122b",
  email: "satelliting.official@gmail.com",
  github: "https://github.com/Satelliting",
  nav: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Start a project", href: "/contact" },
} as const;
