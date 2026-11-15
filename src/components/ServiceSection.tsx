import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Section, { type SectionTone } from '@/components/Section.tsx';
import type { Photo, Service } from '@/content/site.ts';

/** Every copy of the photo with its width, so the browser picks the smallest that is sharp enough. */
const photoSrcSet = ({ src, width, smallerCopies }: Photo) =>
  [...smallerCopies, { src, width }]
    .map((copy) => `${copy.src} ${copy.width}w`)
    .join(', ');

/**
 * The photo column's width. Below `md`: the page less its 16-pixel side padding. From `md`: half of what is
 * left of the page (at most 1200 pixels) after 24 pixels of padding per side and the 64-pixel column gap.
 */
const photoSizes =
  '(min-width: 1200px) 544px, (min-width: 900px) calc(50vw - 56px), calc(100vw - 32px)';

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
  /** How the photo loads: `eager` for one on screen when the page opens, `lazy` (the default) for the rest. */
  photoLoading?: 'eager' | 'lazy';
}

/**
 * One service as a full-width band, as Neve's two-column sections: title, text and examples on one side, the
 * photo on the other. Without a photo, the examples card takes the second column.
 */
const ServiceSection = ({
  service,
  tone,
  imageFirst = false,
  photoLoading = 'lazy',
}: Props) => {
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
              srcSet={photoSrcSet(image)}
              sizes={photoSizes}
              width={image.width}
              height={image.height}
              loading={photoLoading}
              alt={image.alt}
            />
          </Box>
        : examples !== undefined && <ExamplesCard examples={examples} />}
      </Box>
    </Section>
  );
};

export default ServiceSection;
