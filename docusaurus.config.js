// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FieldBase Applications for Efficient Operations',
  tagline: 'Discover cutting-edge solutions tailored for the maritime and enterprise operations. Enhance efficiency, security, and connectivity with our innovative platforms.',
  favicon: 'img/favicon.ico',

  // local dev - change this when you deploy
  url: 'http://localhost',
  baseUrl: '/',

  // Optional GitHub pages settings
  organizationName: 'your-org', // change if needed
  projectName: 'your-repo', // change if needed

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Fieldbase User Documentation',
        logo: {
          alt: 'Fieldbase Logo',
          src: 'img/logo.svg',
        },
        items: [
          // Each of these links points to a sidebar (auto-generated from the named folder)
          { type: 'docSidebar', sidebarId: 'trackerSidebar', position: 'left', label: 'Tracker' },
          { type: 'docSidebar', sidebarId: 'inventorySidebar', position: 'left', label: 'Inventory and Subscription' },
          { type: 'docSidebar', sidebarId: 'epmsSidebar', position: 'left', label: 'E-PMS' },
          { type: 'docSidebar', sidebarId: 'starlinkSidebar', position: 'left', label: 'Starlink' },
          { type: 'docSidebar', sidebarId: 'workflowSidebar', position: 'left', label: 'Workflow' },
         
          // regular links
          { to: '/blog', label: 'Blog', position: 'left' },

          // external
          {
            href: 'https://github.com/your-org/your-repo',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Tracker', to: '/docs/tracker/intro' },
              { label: 'Inventory and Subscription', to: '/docs/Inventory and Subscription/intro' },
              { label: 'E-PMS', to: '/docs/epms/intro' },
              { label: 'Starlink', to: '/docs/starlink/intro' },
              { label: 'Workflow', to: '/docs/workflow/intro' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
              { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
              { label: 'X', href: 'https://x.com/docusaurus' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Blog', to: '/blog' },
              { label: 'GitHub', href: 'https://github.com/your-org/your-repo' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fieldbase.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
