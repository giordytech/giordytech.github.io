import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import type { Service } from '@/content/site.ts';

/** One service: title, description, optional examples and photo. */
const ServiceSection = ({ service }: { service: Service }) => (
  <Stack component="section" id={service.id} spacing={2}>
    <Typography variant="h4" component="h2">
      {service.title}
    </Typography>
    {service.image !== undefined && (
      <Box
        component="img"
        src={service.image.src}
        alt={service.image.alt}
        sx={{
          width: '100%',
          maxHeight: 480,
          objectFit: 'cover',
          borderRadius: 2,
        }}
      />
    )}
    {service.paragraphs.map((paragraph) => (
      <Typography key={paragraph}>{paragraph}</Typography>
    ))}
    {service.examples !== undefined && (
      <Box>
        <Typography>Esempi:</Typography>
        <Box component="ul" sx={{ marginY: 1 }}>
          {service.examples.map((example) => (
            <Typography component="li" key={example}>
              {example}
            </Typography>
          ))}
        </Box>
      </Box>
    )}
  </Stack>
);

export default ServiceSection;
