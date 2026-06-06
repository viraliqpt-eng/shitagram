SHITAGRAM™ v20.9 — Registo real com Supabase Auth

Ficheiros incluídos:
- app.html
- supabase-config.js
- supabase_schema_v20_9.sql

Como publicar:
1. Envia app.html para substituir o app.html atual.
2. Envia supabase-config.js para a raiz do site.
3. No Supabase, executa o ficheiro supabase_schema_v20_9.sql no SQL Editor.
4. Em supabase-config.js, troca:
   COLOCA_AQUI_O_PROJECT_URL
   COLOCA_AQUI_A_ANON_PUBLIC_KEY
   pelos valores reais do teu projeto Supabase.
5. No Supabase Auth, confirma que o Site URL é:
   https://shitagram.pt/app.html
6. Testa:
   https://shitagram.pt/app.html

Fluxo novo:
- Criar conta por email/password
- Entrar com email/password
- Recuperar conta por email
- Sair da conta
- Perfil básico guardado em public.profiles

Nota:
Se supabase-config.js não estiver preenchido, a app continua em modo demo local para não quebrar.
