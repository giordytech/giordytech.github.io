import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { urgent } from '@/content/pages.ts';
import { phoneHref, site, whatsappHref } from '@/content/site.ts';

interface Props {
  /** On the home page's blue band the link and button turn white. */
  onPrimary?: boolean;
}

/** The urgent-matters line: the phone number to call and a WhatsApp button. */
const UrgentContact = ({ onPrimary = false }: Props) => (
  <Stack
    direction={{ xs: 'column', sm: 'row' }}
    spacing={{ xs: 1.5, sm: 2 }}
    alignItems="center"
    justifyContent="center"
    flexWrap="wrap"
  >
    <Typography>
      {urgent.text}{' '}
      <Link
        href={phoneHref}
        color="inherit"
        fontWeight={700}
        sx={{ whiteSpace: 'nowrap' }}
      >
        {site.contact.phone}
      </Link>
    </Typography>
    <Button
      variant="outlined"
      href={whatsappHref}
      target="_blank"
      rel="noopener"
      startIcon={<WhatsAppIcon />}
      sx={
        onPrimary ?
          {
            color: 'common.white',
            borderColor: 'common.white',
            '&:hover': {
              borderColor: 'common.white',
              bgcolor: 'rgba(255, 255, 255, 0.08)',
            },
            '&.Mui-focusVisible': { outlineColor: 'common.white' },
          }
        : {}
      }
    >
      {urgent.whatsapp}
    </Button>
  </Stack>
);

export default UrgentContact;
