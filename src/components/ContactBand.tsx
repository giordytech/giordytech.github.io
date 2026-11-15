import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Section from '@/components/Section.tsx';
import { site } from '@/content/site.ts';

/** The closing call to action, as Neve's full-width colored band: the contact line and the address as a button. */
const ContactBand = () => (
  <Section tone="primary" spacing={4} alignItems="center" textAlign="center">
    <Typography variant="h2">{site.contact.label}</Typography>
    <Button
      variant="contained"
      size="large"
      href={`mailto:${site.contact.email}`}
      sx={{
        bgcolor: 'common.white',
        color: 'primary.main',
        '&:hover': { bgcolor: 'grey.100' },
        '&.Mui-focusVisible': { outlineColor: 'common.white' },
      }}
    >
      {site.contact.email}
    </Button>
  </Section>
);

export default ContactBand;
