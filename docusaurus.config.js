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
  console.log('marketplace metadata from docusaurus config', { marketplace })
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
  projectName: "marketplace.pan.dev", // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: "XSOAR Marketplace",
        src: "/img/Cortex_XSoar_logos_RGB_Cortex-Ng-Soar-Horizontal.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "marketplace", label: "Marketplace", position: "left" },
        {
          href: "https://github.com/PaloAltoNetworks/marketplace.pan.dev",
          label: "GitHub",
          position: "right",
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
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} XSOAR Marketplace, Inc. Built with Docusaurus.`,
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
