import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Section from '@/components/Section.tsx';
import { site } from '@/content/site.ts';

/** The page's opening band, as Neve's hero: the tagline as the main heading and the contact button. */
const Hero = () => (
  <Section spacing={4} alignItems="flex-start">
    <Typography variant="h1" sx={{ maxWidth: '16ch' }}>
      {site.tagline}
    </Typography>
    <Button
      variant="contained"
      size="large"
      href={`mailto:${site.contact.email}`}
      sx={{ width: { xs: '100%', sm: 'auto' } }}
    >
      {site.contact.label}
    </Button>
  </Section>
);

export default Hero;
