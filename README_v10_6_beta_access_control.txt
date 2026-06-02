SHITAGRAM™ vClean10.6 — Beta access control

Ficheiros:
- index_shitagram_clean_v10_6_landing_beta_access.html  -> renomear para index.html
- app_shitagram_clean_v10_6_beta_access_control.html    -> renomear para app.html
- supabase_shitagram_clean_v10_6_beta_access_control.sql -> executar no Supabase SQL Editor

O que adiciona:
- Beta fechada com estados pending, approved, blocked.
- Novos utilizadores ficam pendentes por defeito.
- viraliqpt@gmail.com fica como admin e approved.
- Painel admin "Acessos Beta" para aprovar, manter pendente ou bloquear.
- Utilizadores pendentes veem uma página de espera.
- Utilizadores bloqueados veem aviso de acesso bloqueado.
- Convites continuam a registar origem, mas não aprovam automaticamente.
- Landing passa a comunicar beta fechada e pedido sujeito a aprovação.

Como aplicar:
1. Executar o SQL no Supabase.
2. Substituir index.html pela landing v10.6.
3. Substituir app.html pela app v10.6.
4. Fazer commit no GitHub.
5. Entrar com viraliqpt@gmail.com.
6. Abrir Acessos Beta no menu admin.
7. Aprovar/rejeitar/bloquear utilizadores.

Teste recomendado:
- Criar uma conta nova por janela anónima.
- Confirmar que fica em pending.
- Entrar com admin e aprovar.
- Voltar à conta nova e atualizar a página.
- Confirmar que entra na app completa.
