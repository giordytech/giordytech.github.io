import ContactBand from '@/components/ContactBand.tsx';
import Hero from '@/components/Hero.tsx';
import ServiceSection from '@/components/ServiceSection.tsx';
import { services } from '@/content/site.ts';
import PageTemplate from '@/templates/PageTemplate.tsx';

const HomePage = () => (
  <PageTemplate>
    <Hero />
    {services.map((service, index) => (
      <ServiceSection
        key={service.id}
        service={service}
        tone={index % 2 === 0 ? 'alt' : 'plain'}
        imageFirst={index % 2 === 1}
      />
    ))}
    <ContactBand />
  </PageTemplate>
);

export default HomePage;
