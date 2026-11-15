import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Section from '@/components/Section.tsx';
import { addressLine, phoneHref, site } from '@/content/site.ts';

const focusOnBand = { '&.Mui-focusVisible': { outlineColor: 'common.white' } };

/**
 * The closing call to action, as Neve's full-width colored band: the contact line, the free-quote offer, the
 * email and phone as buttons, and the address.
 */
const ContactBand = () => (
  <Section tone="primary" spacing={4} alignItems="center" textAlign="center">
    <Stack spacing={2} alignItems="center">
      <Typography variant="h2">{site.contact.label}</Typography>
      <Typography variant="h4" component="p" fontWeight={400}>
        {site.contact.offer}
      </Typography>
    </Stack>
    <Stack
      component="address"
      spacing={3}
      alignItems="center"
      sx={{ fontStyle: 'normal' }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        sx={{ width: { xs: '100%', sm: 'auto' } }}
      >
        <Button
          variant="contained"
          size="large"
          href={`mailto:${site.contact.email}`}
          sx={{
            bgcolor: 'common.white',
            color: 'primary.main',
            '&:hover': { bgcolor: 'grey.100' },
            ...focusOnBand,
          }}
        >
          {site.contact.email}
        </Button>
        <Button
          variant="outlined"
          size="large"
          href={phoneHref}
          sx={{
            color: 'common.white',
            borderColor: 'common.white',
            borderWidth: 2,
            '&:hover': {
              borderColor: 'common.white',
              // Faint enough that white text keeps 4.5:1 over the dark theme's lighter blue (about 4.9:1).
              bgcolor: 'rgba(255, 255, 255, 0.08)',
            },
            ...focusOnBand,
          }}
        >
          {site.contact.phone}
        </Button>
      </Stack>
      <Typography>{addressLine}</Typography>
    </Stack>
  </Section>
);

export default ContactBand;
