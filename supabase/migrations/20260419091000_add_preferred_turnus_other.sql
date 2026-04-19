alter table public.registrations
  add column preferred_turnus_other text;

alter table public.registrations
  add constraint preferred_turnus_other_len check (preferred_turnus_other is null or char_length(preferred_turnus_other) between 1 and 500);
