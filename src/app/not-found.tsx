import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import type { Metadata } from 'next';

import Section from '@/components/Section.tsx';
import PageTemplate from '@/templates/PageTemplate.tsx';

const title = 'Pagina non trovata';

export const metadata: Metadata = { title };

const NotFound = () => (
  <PageTemplate>
    <Section spacing={3}>
      <Typography variant="h2" component="h1">
        {title}
      </Typography>
      <Typography>
        Questa pagina non esiste. <Link href="/">Torna alla home</Link>.
      </Typography>
    </Section>
  </PageTemplate>
);

export default NotFound;
