# SHITAGRAM™ vClean11.6 — Integração total dos logs admin

## Ficheiros

- app_shitagram_clean_v11_6_admin_logs_integrated.html → renomear para app.html
- supabase_shitagram_clean_v11_6_admin_logs_integrated.sql → executar no Supabase

## O que esta versão faz

A v11.5 criou a base dos logs.  
A v11.6 passa a registar automaticamente ações administrativas críticas feitas pela app.

Ações cobertas pelo interceptor:

- aprovação de acesso beta;
- bloqueio de acesso beta;
- reposição para pending;
- aprovação de convite beta;
- moderação de denúncias de posts;
- alteração de estado de posts;
- moderação de denúncias de mensagens privadas;
- bloqueio/desbloqueio de utilizadores nas mensagens;
- alteração de estado anti-spam/segurança.

## Como aplicar

1. Executar no Supabase:

   supabase_shitagram_clean_v11_6_admin_logs_integrated.sql

2. Renomear:

   app_shitagram_clean_v11_6_admin_logs_integrated.html → app.html

3. Manter:

   audit.html → painel de auditoria separado

4. Fazer commit no GitHub.

5. Entrar como admin:

   viraliqpt@gmail.com

6. Testar ações admin e abrir audit.html.

## Teste rápido no Supabase

Depois de aplicar, podes executar:

select public.audit_healthcheck();

Depois abre o painel audit.html e confirma se apareceu um log `audit_healthcheck`.

## Nota

A v11.6 não substitui o painel `audit.html`.
Ela corrige a app principal para que ações admin feitas dentro da app sejam registadas em `admin_audit_logs`.
