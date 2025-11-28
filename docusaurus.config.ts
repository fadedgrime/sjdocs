import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Summit Jump',
  tagline: 'The place for everything Summit Jump.',
  favicon: 'img/logo.svg',

  // Future flags
  future: {
    v4: true,
  },

  // Site URL
  url: 'https://docs.summitjump.wiki',
  baseUrl: '/',

  // GitHub pages
  organizationName: 'Summit Jump',
  projectName: 'sjdocs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',

          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Summit Jump',
      logo: {
        alt: 'Summit Jump Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://www.roblox.com/games/106795200786422/Summit-Jump-Trampoline-Park',
          label: 'Trampoline Park',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Home',
          items: [
            {
              label: 'Documentation',
              to: '/',
            },
            {
              label: 'Summit Jump Go',
              to: 'https://go.summitjump.wiki',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Roblox Community',
              href: 'https://www.roblox.com/communities/35165345/Summit-Jump#!/about',
            },
            {
              label: 'Discord Server',
              href: 'https://discord.gg/n7vQUtSaEk',
            },
             {
              label: 'Trampoline Park',
              href: 'https://www.roblox.com/games/106795200786422/Summit-Jump-Trampoline-Park',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Terms of Service',
              to: '/tos',
            },
            {
              label: 'Privacy Policy',
              href: 'https://privacy.harvesta.work',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Summit Jump. This documentation is intended for public use within Summit Jump. Unauthorized duplication, whether intentional or accidental, of our documents, assets, or websites is strictly prohibited.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;