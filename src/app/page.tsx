import type { Metadata } from 'next';

import ContactBand from '@/components/ContactBand.tsx';
import Hero from '@/components/Hero.tsx';
import ServiceSection from '@/components/ServiceSection.tsx';
import { services, site } from '@/content/site.ts';
import PageTemplate from '@/templates/PageTemplate.tsx';

// The home page's own title and canonical link: here, not in the root layout, so the not-found page doesn't
// claim to be the home page.
export const metadata: Metadata = {
  title: { absolute: site.homeTitle },
  alternates: { canonical: '/' },
};

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
        // The first photo is on screen when the page opens on a wide screen; the others load as they come near.
        photoLoading={photosBefore(index) === 0 ? 'eager' : 'lazy'}
      />
    ))}
    <ContactBand />
  </PageTemplate>
);

export default HomePage;
