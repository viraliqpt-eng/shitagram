SHITAGRAM v20.8 — Registo público geral

Objetivo:
- Remover a lógica visual de beta/candidatura.
- Deixar o site aberto ao público.
- Usar app.html como entrada principal para Entrar / Criar conta / Recuperar conta.

Ficheiros principais:
- index.html  -> landing pública
- app.html    -> app com login, criar conta, recuperar conta, perfil e sair
- beta.html   -> redireciona para app.html
- estado.html -> redireciona para app.html

Publicação:
1. Enviar todos os ficheiros para a raiz do site.
2. Substituir os ficheiros antigos.
3. Testar:
   https://shitagram.pt/
   https://shitagram.pt/app.html
   https://shitagram.pt/beta.html
   https://shitagram.pt/estado.html

Nota:
Esta versão continua em modo demo/localStorage. Para registo real por email é necessário ligar Supabase Auth ou Firebase Auth.
