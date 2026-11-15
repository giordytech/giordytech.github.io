import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import type { Metadata } from 'next';

import Section from '@/components/Section.tsx';
import { notFoundPage } from '@/content/site.ts';
import PageTemplate from '@/templates/PageTemplate.tsx';

export const metadata: Metadata = { title: notFoundPage.title };

const NotFound = () => (
  <PageTemplate>
    <Section spacing={3}>
      <Typography variant="h2" component="h1">
        {notFoundPage.title}
      </Typography>
      <Typography>
        {notFoundPage.message} <Link href="/">{notFoundPage.homeLink}</Link>.
      </Typography>
    </Section>
  </PageTemplate>
);

export default NotFound;
