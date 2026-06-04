vClean12.6 — Premium integrado dentro da app

Ficheiros:
- app_shitagram_clean_v12_6_premium_integrated.html
- supabase_shitagram_v12_6_premium_integrated.sql
- README_v12_6_premium_integrated.txt

O que adiciona:
- menu Premium dentro da app;
- badge Premium visível no perfil;
- moldura Premium no avatar;
- página Premium interna;
- botão para abrir premium.html;
- botão para abrir premium_admin.html para admins;
- benefícios Premium visíveis na Loja;
- 1.000 ShitCoins mensais via RPC claim_premium_monthly_benefits();
- 3 boosts Premium mensais via premium_boosts_left;
- admin consegue ver/ativar/desativar Premium pelo painel premium_admin.html;
- mantém a lógica sem pagamentos reais.

Como aplicar:
1. Executar supabase_shitagram_v12_6_premium_integrated.sql no Supabase.
2. Renomear app_shitagram_clean_v12_6_premium_integrated.html para app.html.
3. Manter premium.html e premium_admin.html no GitHub.
4. Fazer commit.
5. Abrir app.html com Ctrl+F5.

Teste recomendado:
1. Entra com viraliqpt@gmail.com.
2. Abre Premium no menu.
3. Abre premium_admin.html e dá 30 dias Premium ao teu perfil.
4. Volta à app e faz Ctrl+F5.
5. Confirma:
   - badge Premium no perfil;
   - moldura no avatar;
   - botão de benefícios mensais;
   - benefícios Premium na Loja.
6. Clica em "Receber benefícios mensais".
7. Confirma se coins aumentaram no perfil.
