SHITAGRAM™ vClean11.1 — Bloqueio de utilizadores + segurança nas mensagens

Como aplicar:
1. Executar supabase_shitagram_clean_v11_1_message_safety.sql no Supabase SQL Editor.
2. Renomear app_shitagram_clean_v11_1_message_safety.html para app.html.
3. Fazer commit no GitHub.
4. Testar com duas contas:
   - Conta A envia mensagem à Conta B.
   - Conta B bloqueia Conta A.
   - Conta A tenta enviar nova mensagem.
   - Conta B denuncia a conversa.
   - Conta A elimina uma mensagem própria.

Inclui:
- user_blocks
- conversation_reports
- block_user
- unblock_user
- report_conversation
- delete_own_private_message
- send_private_message com bloqueio
- botão de anexos como “em breve”
