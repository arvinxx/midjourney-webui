import { Metadata } from 'next';

import { getServerConfig } from '@/config/server';

import pkg from '../../package.json';

const title = 'Midjourney WebUI';
const { description, homepage } = pkg;

const { METADATA_BASE_URL } = getServerConfig();

const metadataBase = METADATA_BASE_URL ? new URL(METADATA_BASE_URL!) : undefined;

const metadata: Metadata = {
  appleWebApp: {
    statusBarStyle: 'black-translucent',
    title,
  },
  description,
  manifest: '/manifest.json',
  metadataBase,
  openGraph: {
    description: description,
    locale: 'en-US',
    siteName: title,
    title: title,
    type: 'website',
    url: homepage,
  },

  title: {
    default: title,
    template: '%s · Midjourney WebUI',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@lobehub',
    description,
    images: [
      'https://registry.npmmirror.com/@lobehub/assets-favicons/latest/files/assets/og-960x540.png',
    ],
    title,
  },
};

export default metadata;
