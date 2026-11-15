import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import type { Metadata } from 'next';

import PageTemplate from '@/templates/PageTemplate.tsx';

export const metadata: Metadata = { title: 'Pagina non trovata' };

const NotFound = () => (
  <PageTemplate>
    <Typography>
      Questa pagina non esiste. <Link href="/">Torna alla home</Link>.
    </Typography>
  </PageTemplate>
);

export default NotFound;
