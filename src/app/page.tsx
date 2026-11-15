import type { Metadata } from 'next';

import ContactBand from '@/components/ContactBand.tsx';
import Hero from '@/components/Hero.tsx';
import ServiceSection from '@/components/ServiceSection.tsx';
import { localBusinessData, services, site } from '@/content/site.ts';
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

// `<` escaped so no text in the data can close the script tag early.
const localBusinessJson = JSON.stringify(localBusinessData).replace(
  /</g,
  '\\u003c',
);

const HomePage = () => (
  <PageTemplate>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: localBusinessJson }}
    />
    <Hero />
    {services.map((service, index) => {
      const photoNumber = photosBefore(index);
      // The first photo can be on screen when the page opens on a wide screen; the others load as they come near.
      const isFirstPhoto = service.image !== undefined && photoNumber === 0;
      return (
        <ServiceSection
          key={service.id}
          service={service}
          tone={index % 2 === 0 ? 'alt' : 'plain'}
          imageFirst={photoNumber % 2 === 1}
          photoLoading={isFirstPhoto ? 'eager' : 'lazy'}
        />
      );
    })}
    <ContactBand />
  </PageTemplate>
);

export default HomePage;
