import { Metadata } from 'next';

import { getServerConfig } from '@/config/server';

import pkg from '../../package.json';

const title = 'Midjourney WebUI';
const { description, homepage } = pkg;

const { METADATA_BASE_URL } = getServerConfig();

const metadataBase = METADATA_BASE_URL ? new URL(METADATA_BASE_URL!) : undefined;

const metadata: Metadata = {
  metadataBase,
  title: {
    default: title,
    template: '%s · Midjourney WebUI',
  }
};

export default metadata;
