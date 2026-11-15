import ContactBand from '@/components/ContactBand.tsx';
import Hero from '@/components/Hero.tsx';
import ServiceSection from '@/components/ServiceSection.tsx';
import { services } from '@/content/site.ts';
import PageTemplate from '@/templates/PageTemplate.tsx';

/** How many services before this one have a photo: photos alternate sides among themselves. */
const photosBefore = (index: number) =>
  services.slice(0, index).filter(({ image }) => image !== undefined).length;

const HomePage = () => (
  <PageTemplate>
    <Hero />
    {services.map((service, index) => (
      <ServiceSection
        key={service.id}
        service={service}
        tone={index % 2 === 0 ? 'alt' : 'plain'}
        imageFirst={photosBefore(index) % 2 === 1}
      />
    ))}
    <ContactBand />
  </PageTemplate>
);

export default HomePage;
