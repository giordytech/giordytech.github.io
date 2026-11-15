import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import ServiceSection from '@/components/ServiceSection.tsx';
import { services, site } from '@/content/site.ts';
import PageTemplate from '@/templates/PageTemplate.tsx';

const HomePage = () => (
  <PageTemplate>
    {services.map((service) => (
      <ServiceSection key={service.id} service={service} />
    ))}
    <Stack alignItems="center">
      <Button
        variant="contained"
        size="large"
        href={`mailto:${site.contact.email}`}
      >
        {site.contact.label}
      </Button>
    </Stack>
  </PageTemplate>
);

export default HomePage;
