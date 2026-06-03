SHITAGRAM™ vClean11.5 — Logs de auditoria/admin actions

Ficheiros:
- app_shitagram_clean_v11_5_audit_logs.html
- supabase_shitagram_clean_v11_5_audit_logs.sql

Como aplicar:
1. Executa o SQL no Supabase.
2. Renomeia app_shitagram_clean_v11_5_audit_logs.html para app.html, ou integra o painel na app atual.
3. Faz commit no GitHub.
4. Entra com viraliqpt@gmail.com.
5. Abre a área de auditoria.

O que esta versão adiciona:
- tabela admin_audit_logs;
- função log_admin_action;
- função get_admin_audit_logs;
- função get_admin_audit_stats;
- painel com filtros por ação, admin, alvo e período;
- visível apenas para admin;
- moderadores podem gerar logs via função, mas apenas admins conseguem ver o histórico completo.

Sugestão de integração:
Sempre que uma função admin aprovar, bloquear, remover, ocultar ou alterar estados, chamar:
select public.log_admin_action('post_removed','post','POST_ID', null, '{"reason":"violação das regras"}');
