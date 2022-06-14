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
  url: "https://xsoar-marketplace.pan.dev/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "/img/cortexfavicon.png",
  organizationName: "PaloAltoNetworks", // Usually your GitHub org/user name.
  projectName: "xsoar-marketplace.pan.dev", // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: "XSOAR Marketplace",
        href: "https://xsoar.pan.dev",
        target: "_self",
        src: "/img/Cortex_XSoar_logos_RGB_Cortex-Ng-Soar-Horizontal.svg"
      },
      items: [
        {
          label: "Developer Docs",
          href: "https://xsoar.pan.dev/docs/welcome",
          position: "left",
          target: "_self",
          activeBaseRegex:
            "docs(/welcome|/index|/concepts|/contributing|/dashboards|/doc_imgs|/documentation|/incidents|/integrations|/packs|/playbooks|/scripts|/tutorials)"
        },
        {
          label: "Articles",
          href: "https://xsoar.pan.dev/docs/reference/articles",
          position: "left",
          target: "_self",
          activeBaseRegex: "docs/reference/articles"
        },
        {
          label: "Reference",
          href: "https://xsoar.pan.dev/docs/reference/index",
          position: "left",
          target: "_self",
          activeBaseRegex: "docs/reference/(index|api|integrations|playbooks|releases|scripts)"
        },
        {
          label: "Marketplace",
          to: "https://xsoar-marketplace.pan.dev",
          target: "_self",
          position: "left",
        },
        {
          label: "Products",
          items: [
            {
              label: "PAN-OS",
              href: "https://panos.pan.dev",
              target: "_self",
              className: "panosItem",
            },
            {
              label: "Cortex Data Lake",
              href: "https://cortex.pan.dev",
              target: "_self",
              className: "cortexItem",
            },
            {
              label: "Cortex XSOAR",
              href: "https://xsoar.pan.dev",
              target: "_self",
              className: "xsoarItem",
            },
            {
              label: "Prisma",
              href: "https://prisma.pan.dev",
              target: "_self",
              className: "prismaItem",
            },
          ],
          position: "right"
        },
        {
          label: "Partners",
          items: [
            {
              label: "Why Cortex XSOAR?",
              href: "https://xsoar.pan.dev/docs/partners/why-xsoar",
              target: "_self"
            },
            {
              label: "Become a Partner",
              href: "https://xsoar.pan.dev/docs/partners/become-a-tech-partner",
              target: "_self"
            },
            {
              label: "Premium Packs",
              href: "https://xsoar.pan.dev/docs/partners/premium-packs",
              target: "_self"
            },
            {
              label: "Private Offer",
              href: "https://xsoar.pan.dev/docs/partners/private-offer",
              target: "_self"
            },
            {
              label: "Adopt-a-Pack",
              href: "https://xsoar.pan.dev/docs/partners/adopt",
              target: "_self"
            },
            {
              label: "Pack Certification",
              href: "https://xsoar.pan.dev/docs/partners/certification",
              target: "_self"
            },
            {
              label: "Office Hours",
              href: "https://xsoar.pan.dev/docs/partners/office-hours",
              target: "_self"
            },
            {
              label: "Development Partners",
              href: "https://xsoar.pan.dev/docs/partners/development-partners",
              target: "_self"
            },
            {
              label: "Sign Up Now",
              href: "https://start.paloaltonetworks.com/become-a-technology-partner",
              target: "_self"
            },
          ],
          position: "right"
        },
        {
          label: "Blog",
          href: "https://blog.demisto.com/",
          target: "_self",
          position: "right"
        },
        {
          href: "http://github.com/demisto/content/",
          target: "_self",
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
              target: "_self"
            },
            {
              label: "Become a Technology Partner",
              to: "https://xsoar.pan.dev/docs/partners/become-a-tech-partner",
              target: "_self"
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              href: "https://blog.demisto.com/",
              target: "_self"
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
