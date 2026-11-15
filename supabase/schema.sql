-- Run this SQL ONLY in a new, separate Neurally There Supabase project.
-- Do not run it in Billy's project.
-- Authentication uses Supabase email magic links. The front end uses only a publishable/anon key.

create table if not exists public.user_states (
  user_id uuid primary key references auth.users(id) on delete cascade,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.user_states enable row level security;

revoke all on table public.user_states from anon;
grant select, insert, update on table public.user_states to authenticated;

drop policy if exists "Read own progress" on public.user_states;
create policy "Read own progress"
on public.user_states for select to authenticated
using ((select auth.uid()) = user_id);

drop policy if exists "Insert own progress" on public.user_states;
create policy "Insert own progress"
on public.user_states for insert to authenticated
with check ((select auth.uid()) = user_id);

drop policy if exists "Update own progress" on public.user_states;
create policy "Update own progress"
on public.user_states for update to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

-- Optional verification, executed after creating the table:
-- select tablename, rowsecurity from pg_tables where schemaname='public' and tablename='user_states';
-- select policyname, cmd, roles from pg_policies where schemaname='public' and tablename='user_states';
