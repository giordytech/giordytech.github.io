import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import type { Metadata } from 'next';

import Section from '@/components/Section.tsx';
import PageTemplate from '@/templates/PageTemplate.tsx';

export const metadata: Metadata = { title: 'Pagina non trovata' };

const NotFound = () => (
  <PageTemplate>
    <Section>
      <Typography>
        Questa pagina non esiste. <Link href="/">Torna alla home</Link>.
      </Typography>
    </Section>
  </PageTemplate>
);

export default NotFound;
