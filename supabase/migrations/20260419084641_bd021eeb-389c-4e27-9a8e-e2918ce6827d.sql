alter table public.registrations
  add constraint parent_name_len check (char_length(parent_name) between 1 and 200),
  add constraint parent_email_len check (char_length(parent_email) between 3 and 320),
  add constraint parent_email_format check (parent_email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  add constraint parent_phone_len check (parent_phone is null or char_length(parent_phone) between 3 and 40),
  add constraint child_name_len check (child_name is null or char_length(child_name) between 1 and 200),
  add constraint child_age_range check (child_age is null or (child_age between 8 and 16)),
  add constraint notes_len check (notes is null or char_length(notes) <= 1000),
  add constraint turnus_valid check (preferred_turnus in ('first','second','any','other'));