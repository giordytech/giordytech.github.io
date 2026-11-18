import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { Metadata } from 'next';

import Section from '@/components/Section.tsx';
import { privacyPage } from '@/content/pages.ts';
import PageTemplate from '@/templates/PageTemplate.tsx';

export const metadata: Metadata = {
  title: privacyPage.title,
  description: privacyPage.description,
  alternates: { canonical: privacyPage.path },
};

const PrivacyPage = () => (
  <PageTemplate>
    <Section spacing={4}>
      <Typography variant="h2" component="h1">
        {privacyPage.heading}
      </Typography>
      {privacyPage.sections.map((section) => (
        <Stack key={section.title} component="section" spacing={1.5}>
          <Typography variant="h4" component="h2">
            {section.title}
          </Typography>
          {section.paragraphs.map((paragraph) => (
            <Typography key={paragraph}>{paragraph}</Typography>
          ))}
        </Stack>
      ))}
      <Typography variant="body2" color="text.secondary">
        {privacyPage.updated}
      </Typography>
    </Section>
  </PageTemplate>
);

export default PrivacyPage;
