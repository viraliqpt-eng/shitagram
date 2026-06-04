vClean12.3 — Página pública de estado da candidatura

Ficheiros:
- status_shitagram_v12_3_application_status.html
- supabase_shitagram_v12_3_application_status.sql

Como aplicar:
1. Executa o SQL no Supabase.
2. Renomeia status_shitagram_v12_3_application_status.html para status.html.
3. Faz commit no GitHub.
4. Abre /shitagram/status.html.
5. Consulta com o email usado na candidatura beta.

Estrutura sugerida:
/shitagram/index.html      Landing
/shitagram/app.html        App
/shitagram/beta.html       Candidatura beta
/shitagram/status.html     Estado da candidatura
/shitagram/investors.html  Investidores
/shitagram/legal.html      Regras/termos/privacidade

Notas:
- A página não abre SELECT público na tabela completa.
- Usa a função get_beta_application_status(email).
- Só devolve estado básico da candidatura.
