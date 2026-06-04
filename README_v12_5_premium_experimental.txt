vClean12.5 — Premium experimental sem pagamentos reais

Ficheiros:
- premium_shitagram_v12_5.html -> premium.html
- premium_admin_shitagram_v12_5.html -> premium_admin.html
- supabase_shitagram_v12_5_premium_experimental.sql

Como aplicar:
1. Executar o SQL no Supabase.
2. Adicionar premium.html ao GitHub.
3. Adicionar premium_admin.html ao GitHub.
4. Na landing, criar link para premium.html.
5. Na app/admin, criar link discreto para premium_admin.html.

Teste:
- Abrir /shitagram/premium.html
- Preencher interesse premium.
- Confirmar em premium_interest.
- Abrir /shitagram/premium_admin.html como admin.
- Ativar/desativar Premium manualmente se o perfil existir.

Nota:
- Sem pagamentos reais.
- Não usar Stripe/MB WAY nesta fase.
- Objetivo: medir interesse antes de integrar checkout.
