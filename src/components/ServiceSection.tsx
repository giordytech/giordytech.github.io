import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Section, { type SectionTone } from '@/components/Section.tsx';
import { type Service, services } from '@/content/site.ts';

/**
 * Every service photo is a 1280×960 `.jpg`, with 640- and 960-pixel-wide copies beside it (`name-640.jpg`), so
 * a phone doesn't download the full size for a 343-pixel-wide column. 1280 is the originals' own width: high-
 * density screens between 600 and 899 pixels wide could use more, but there is nothing sharper to give them.
 */
const photo = { width: 1280, height: 960, smallerWidths: [640, 960] } as const;

const photoSrcSet = (src: string) =>
  [
    ...photo.smallerWidths.map(
      (width) => `${src.replace(/\.jpg$/, `-${width}.jpg`)} ${width}w`,
    ),
    `${src} ${photo.width}w`,
  ].join(', ');

/**
 * The photo column's width. Below `md`: the page less its 16-pixel side padding. From `md`: half of what is
 * left of the page (at most 1200 pixels) after 24 pixels of padding per side and the 64-pixel column gap.
 */
const photoSizes =
  '(min-width: 1200px) 544px, (min-width: 900px) calc(50vw - 56px), calc(100vw - 32px)';

/** The first photo can be on screen when the page opens on a wide screen; later ones load as they come near. */
const firstPhotoServiceId = services.find(
  ({ image }) => image !== undefined,
)?.id;

/** The examples as a bordered card with a check per item, as the cards in Neve's demo. */
const ExamplesCard = ({ examples }: { examples: readonly string[] }) => (
  <Box
    sx={{
      bgcolor: 'background.paper',
      border: 1,
      borderColor: 'divider',
      padding: { xs: 3, md: 4 },
    }}
  >
    <Typography fontWeight={700}>Esempi:</Typography>
    <Stack
      component="ul"
      spacing={1.5}
      sx={{ margin: 0, marginTop: 2, padding: 0 }}
    >
      {examples.map((example) => (
        <Stack
          component="li"
          key={example}
          direction="row"
          spacing={1.5}
          alignItems="flex-start"
          sx={{ listStyle: 'none' }}
        >
          <CheckCircleOutlined
            aria-hidden
            sx={{ color: 'surface.link', marginTop: '0.1em' }}
          />
          <Typography>{example}</Typography>
        </Stack>
      ))}
    </Stack>
  </Box>
);

interface Props {
  service: Service;
  tone: SectionTone;
  /** Puts the photo on the left on wide screens, so consecutive sections alternate sides. */
  imageFirst?: boolean;
}

/**
 * One service as a full-width band, as Neve's two-column sections: title, text and examples on one side, the
 * photo on the other. Without a photo, the examples card takes the second column.
 */
const ServiceSection = ({ service, tone, imageFirst = false }: Props) => {
  const { image, examples } = service;
  const hasSecondColumn = image !== undefined || examples !== undefined;

  return (
    <Section id={service.id} tone={tone}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: hasSecondColumn ? '1fr 1fr' : '1fr',
          },
          gap: { xs: 4, md: 8 },
          alignItems: 'center',
        }}
      >
        <Stack spacing={3}>
          <Typography variant="h2">{service.title}</Typography>
          {service.paragraphs.map((paragraph) => (
            <Typography key={paragraph} color="text.secondary">
              {paragraph}
            </Typography>
          ))}
          {image !== undefined && examples !== undefined && (
            <ExamplesCard examples={examples} />
          )}
        </Stack>
        {image !== undefined ?
          <Box
            sx={{
              order: { md: imageFirst ? -1 : 0 },
              '& > img': {
                display: 'block',
                width: '100%',
                height: 'auto',
                maxHeight: 480,
                objectFit: 'cover',
              },
            }}
          >
            {/* A plain <img>: MUI's Box would take width and height as styles, not as the file's size. */}
            <img
              src={image.src}
              srcSet={photoSrcSet(image.src)}
              sizes={photoSizes}
              width={photo.width}
              height={photo.height}
              loading={service.id === firstPhotoServiceId ? 'eager' : 'lazy'}
              alt={image.alt}
            />
          </Box>
        : examples !== undefined && <ExamplesCard examples={examples} />}
      </Box>
    </Section>
  );
};

export default ServiceSection;
