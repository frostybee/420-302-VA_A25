export default [
  {
    label: "Home",
    link: "/420-302-VA_A25/guides/home",
  },
  {
    label: "Guides",
    autogenerate: {
      directory: "guides",
    },
  },
  {
    label: "Assignments",
    autogenerate: {
      directory: "assignments",
    },
  },
  {
    label: "Resources",
    autogenerate: {
      directory: "resources",
    },
  },
] as const;
