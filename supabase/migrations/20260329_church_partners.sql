-- Church partner referral system
create table if not exists church_partners (
  id uuid primary key default gen_random_uuid(),
  church_name text not null,
  contact_name text not null,
  contact_email text not null,
  congregation_size text,
  referral_code text unique not null,
  install_count integer not null default 0,
  premium_unlocked boolean not null default false,
  created_at timestamptz not null default now()
);

-- RLS: anyone can insert (church partner sign-up is public)
alter table church_partners enable row level security;

create policy "Allow public insert" on church_partners
  for insert with check (true);

-- Only service role can read/update
create policy "Service role full access" on church_partners
  for all using (auth.role() = 'service_role');

-- Index for referral code lookups
create index if not exists church_partners_referral_code_idx on church_partners (referral_code);
