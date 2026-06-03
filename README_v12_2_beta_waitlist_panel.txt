SHITAGRAM™ vClean12.2 — beta_waitlist no painel Acessos Beta

Problema corrigido:
- As candidaturas feitas em beta.html estavam a entrar na tabela beta_waitlist.
- O painel Acessos Beta da app só lia contas registadas em profiles/auth.users.
- Resultado: aparecia "Sem pedidos", mesmo com candidaturas na beta_waitlist.

Como aplicar:
1) Executa supabase_shitagram_v12_2_beta_waitlist_panel.sql no Supabase.
2) Substitui app.html por app_shitagram_clean_v12_2_beta_waitlist_panel.html.
3) Faz commit.
4) Entra como admin.
5) Abre Acessos Beta.
6) A candidatura da landing deve aparecer.

Notas:
- Aprovar uma candidatura muda beta_waitlist.status para approved.
- Se já existir uma conta auth.users com o mesmo email, também atualiza profiles.beta_status para approved.
- Bloquear faz o mesmo em sentido contrário quando a conta já existir.
