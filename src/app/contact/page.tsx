import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { Metadata } from 'next';

import RequestForm from '@/components/RequestForm.tsx';
import Section from '@/components/Section.tsx';
import UrgentContact from '@/components/UrgentContact.tsx';
import { contactPage } from '@/content/pages.ts';
import PageTemplate from '@/templates/PageTemplate.tsx';

export const metadata: Metadata = {
  title: contactPage.title,
  description: contactPage.description,
  alternates: { canonical: contactPage.path },
};

const ContactPage = () => (
  <PageTemplate>
    <Section tone="alt" spacing={2}>
      <Typography variant="h2" component="h1">
        {contactPage.heading}
      </Typography>
      {contactPage.intro.map((paragraph) => (
        <Typography key={paragraph} variant="h5" component="p" fontWeight={400}>
          {paragraph}
        </Typography>
      ))}
      <Stack alignItems="flex-start" paddingTop={1}>
        <UrgentContact />
      </Stack>
    </Section>
    <Section>
      <Stack sx={{ maxWidth: 640 }}>
        <RequestForm />
      </Stack>
    </Section>
  </PageTemplate>
);

export default ContactPage;
