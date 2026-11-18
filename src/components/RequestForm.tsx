'use client';

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { contactPage, privacyPage, requestTypes } from '@/content/pages.ts';
import { site } from '@/content/site.ts';

const { form } = contactPage;

const field = (data: FormData, name: string) => {
  const value = data.get(name);
  return typeof value === 'string' ? value.trim() : '';
};

/**
 * The request form. The site has no backend yet, so submitting opens the visitor's email app with the request
 * written out; the browser's own validation checks the required fields first.
 */
const RequestForm = () => (
  <Stack
    component="form"
    spacing={3}
    onSubmit={(event: React.SubmitEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const type = field(data, 'type');
      const lines = [
        `${form.requestType} ${type}`,
        `${form.name}: ${field(data, 'name')}`,
        `${form.reply}: ${field(data, 'reply')}`,
        `${form.device}: ${field(data, 'device')}`,
        `${form.source.replace(' (facoltativo)', '')} ${field(data, 'source')}`,
        '',
        field(data, 'message'),
      ];
      const subject = `Richiesta dal sito: ${type}`;
      window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
    }}
  >
    <TextField
      select
      name="type"
      label={form.requestType}
      required
      defaultValue={requestTypes[0]}
    >
      {requestTypes.map((type) => (
        <MenuItem key={type} value={type}>
          {type}
        </MenuItem>
      ))}
    </TextField>
    <TextField name="name" label={form.name} required autoComplete="name" />
    <TextField name="reply" label={form.reply} required autoComplete="email" />
    <TextField name="device" label={form.device} />
    <TextField
      name="message"
      label={form.message}
      helperText={form.messageHelp}
      required
      multiline
      minRows={5}
    />
    <TextField select name="source" label={form.source} defaultValue="">
      <MenuItem value="">—</MenuItem>
      {form.sources.map((source) => (
        <MenuItem key={source} value={source}>
          {source}
        </MenuItem>
      ))}
    </TextField>
    <FormControlLabel
      control={<Checkbox name="privacy" required />}
      label={
        <>
          {form.privacy} (
          <Link href={privacyPage.path}>{privacyPage.title}</Link>)
        </>
      }
    />
    <Stack spacing={1} alignItems="flex-start">
      <Button type="submit" variant="contained" size="large">
        {form.submit}
      </Button>
      <Typography variant="body2" color="text.secondary">
        {form.afterSubmit}
      </Typography>
    </Stack>
  </Stack>
);

export default RequestForm;
