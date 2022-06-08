const globby = require("globby");

function genMetaData() {
  let marketplace = [];
  const packs = globby.sync(["./index", "!./index/index.json"], {
    absolute: false,
    objectMode: true,
    deep: 1,
    onlyDirectories: true,
  });
  packs.map((pack) => {
    const meta = globby.sync([`${pack.path}/metadata.json`], {
      absolute: true,
      objectMode: true,
      deep: 1,
    });
    let metadata = require(meta[0].path);
    marketplace.push(metadata);
  });

  return marketplace;
}

module.exports = {
  title: "Marketplace",
  tagline: "Browse the XSOAR marketplace. Automate the thing.",
  url: "https://xsoar-marketplace-dev.netlify.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "PaloAltoNetworks", // Usually your GitHub org/user name.
  projectName: "xsoar-marketplace.pan.dev", // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: "XSOAR Marketplace",
        src: "/img/Cortex_XSoar_logos_RGB_Cortex-Ng-Soar-Horizontal.svg",
      },
      items: [
        {
          label: "Products",
          items: [
            {
              href: "https://panos.pan.dev",
              label: "PAN-OS",
              className: "panosItem",
              target: "_self"
            },
            {
              href: "https://cortex.pan.dev",
              label: "Cortex Data Lake",
              className: "cortexItem",
              target: "_self"
            },
            {
              href: "https://xsoar.pan.dev",
              label: "Cortex XSOAR",
              className: "xsoarItem",
              target: "_self"
            },
            {
              href: "https://prisma.pan.dev",
              label: "Prisma",
              className: "prismaItem",
              target: "_self"
            },
          ],
          position: "right"
        },
        {
          label: "Partners",
          to: "docs/partners/why-xsoar",
          activeBaseRegex: "docs/partners",
          items: [
            { to: "/docs/partners/why-xsoar", label: "Why Cortex XSOAR?" },
            {
              to: "docs/partners/become-a-tech-partner",
              label: "Become a Partner"
            },
            {
              to: "/docs/partners/premium-packs",
              label: "Premium Packs"
            },
            {
              to: "/docs/partners/private-offer",
              label: "Private Offer"
            },
            {
              to: "/docs/partners/adopt",
              label: "Adopt-a-Pack"
            },
            {
              to: "/docs/partners/certification",
              label: "Pack Certification"
            },
            {
              to: "/docs/partners/office-hours",
              label: "Office Hours"
            },
            {
              to: "/docs/partners/development-partners",
              label: "Development Partners"
            },
            {
              to:
                "https://start.paloaltonetworks.com/become-a-technology-partner",
              label: "Sign Up Now"
            },
          ],
          position: "right"
        },
        {
          href: "https://blog.demisto.com/",
          label: "Blog",
          position: "right"
        },
        {
          href: "http://github.com/demisto/content/",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository"
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Developer Docs",
              href: "https://xsoar.pan.dev/docs/welcome",
            },
            {
              label: "Become a Technology Partner",
              to: "https://xsoar.pan.dev/docs/partners/become-a-tech-partner",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              href: "https://blog.demisto.com/",
            }
          ],
        },
      ],
      logo: {
        alt: "Palo Alto Networks for Developers",
        src: "/img/PANW_Parent_Brand_Primary_Logo_RGB_KO.svg"
      },
      copyright: `Copyright © ${new Date().getFullYear()} Palo Alto Networks, Inc.`
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  customFields: {
    marketplace: genMetaData(),
  },
  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.15.0/css/all.css",
      type: "text/css",
      rel: "stylesheet",
    },
  ],
};
