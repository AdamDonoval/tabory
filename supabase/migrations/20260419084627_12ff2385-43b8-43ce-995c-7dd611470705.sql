create table public.registrations (
  id uuid primary key default gen_random_uuid(),
  parent_name text not null,
  parent_email text not null,
  parent_phone text,
  child_name text,
  child_age int,
  preferred_turnus text not null default 'any',
  notes text,
  created_at timestamptz not null default now()
);

alter table public.registrations enable row level security;

create policy "Anyone can submit a registration"
  on public.registrations
  for insert
  to anon, authenticated
  with check (true);