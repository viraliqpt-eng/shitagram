# vClean12.4 — Ligações finais entre Landing, Beta, Status e App

## Ficheiros

- `index_shitagram_v12_4_final_links.html`
- `beta_shitagram_v12_4_final_links.html`
- `status_shitagram_v12_4_final_links.html`
- `investors_shitagram_v12_4_final_links.html`
- `supabase_shitagram_v12_4_final_links.sql`

## Como aplicar no GitHub

Renomeia/substitui assim:

```text
index_shitagram_v12_4_final_links.html     → index.html
beta_shitagram_v12_4_final_links.html      → beta.html
status_shitagram_v12_4_final_links.html    → status.html
investors_shitagram_v12_4_final_links.html → investors.html
```

Mantém:

```text
app.html
legal.html
audit.html
```

## SQL

Executa no Supabase:

```text
supabase_shitagram_v12_4_final_links.sql
```

Este SQL garante a tabela `app_events` e permite tracking público de cliques.

## Ligações finais

- Landing → `index.html`
- Entrar na beta → `beta.html`
- Ver estado da candidatura → `status.html`
- Entrar na app → `app.html`
- Investidores → `investors.html`
- Regras/Termos/Privacidade → `legal.html`

## Teste

1. Abre `/shitagram/index.html`.
2. Clica em:
   - Entrar na beta;
   - Ver estado da candidatura;
   - Entrar na app;
   - Investidores;
   - Regras.
3. Confirma no Supabase se aparecem eventos em `app_events`.
