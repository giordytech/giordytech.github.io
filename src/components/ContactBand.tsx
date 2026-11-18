import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Section from '@/components/Section.tsx';
import UrgentContact from '@/components/UrgentContact.tsx';
import { contactPage } from '@/content/pages.ts';
import { addressLine, site } from '@/content/site.ts';

const focusOnBand = { '&.Mui-focusVisible': { outlineColor: 'common.white' } };

/**
 * The closing call to action, as Neve's full-width colored band: the contact line and the free-quote offer, the
 * button to the request form, the urgent line, then the email and address in small print.
 */
const ContactBand = () => (
  <Section tone="primary" spacing={4} alignItems="center" textAlign="center">
    <Stack spacing={2} alignItems="center">
      <Typography variant="h2">{site.contact.label}</Typography>
      <Typography variant="h4" component="p" fontWeight={400}>
        {site.contact.offer}
      </Typography>
    </Stack>
    <Button
      variant="contained"
      size="large"
      href={contactPage.path}
      sx={{
        bgcolor: 'common.white',
        color: 'primary.main',
        '&:hover': { bgcolor: 'grey.100' },
        ...focusOnBand,
      }}
    >
      Richiedi assistenza
    </Button>
    <UrgentContact onPrimary />
    <Stack
      component="address"
      direction={{ xs: 'column', sm: 'row' }}
      columnGap={2}
      rowGap={0.5}
      justifyContent="center"
      sx={{ fontStyle: 'normal' }}
    >
      <Typography variant="body2">
        <Link href={`mailto:${site.contact.email}`} color="inherit">
          {site.contact.email}
        </Link>
      </Typography>
      <Typography variant="body2">{addressLine}</Typography>
    </Stack>
  </Section>
);

export default ContactBand;
