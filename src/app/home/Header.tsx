import { Midjourney } from '@lobehub/icons';
import { ActionIcon, DiscordIcon, Logo } from '@lobehub/ui';
import { Book, LucideGithub } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { MJ_DOCS } from '@/const/url';
import Settings from '@/features/Settings';

const Header = memo(() => {
  const { t } = useTranslation('common');
  return (
    <Flexbox align={'center'} horizontal justify={'space-between'}>
      <Midjourney.Combine size={32} />
      <Flexbox horizontal>
        <Link href={MJ_DOCS} style={{ color: 'inherit' }} target={'_blank'} title={t('docs')}>
          <ActionIcon icon={Book} />
        </Link>
        <Settings />
      </Flexbox>
    </Flexbox>
  );
});

export default Header;
