alter table public.registrations
  add column child_email text,
  add column child_phone text;

alter table public.registrations
  add constraint child_email_len check (child_email is null or char_length(child_email) between 3 and 320),
  add constraint child_email_format check (child_email is null or child_email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  add constraint child_phone_len check (child_phone is null or char_length(child_phone) between 1 and 40);
