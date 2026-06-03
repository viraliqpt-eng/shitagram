# SHITAGRAM™ vClean11.3 — Denúncias e moderação de mensagens privadas

## Aplicar

1. Executa `supabase_shitagram_clean_v11_3_message_moderation.sql` no Supabase.
2. Renomeia `app_shitagram_clean_v11_3_message_moderation.html` para `app.html`.
3. Faz commit no GitHub.
4. Testa com duas contas.

## Teste recomendado

- Conta A envia mensagem à Conta B.
- Conta B denuncia uma mensagem individual.
- Conta B denuncia a conversa, se necessário.
- Admin abre "Mod. Mensagens".
- Admin ignora, oculta, remove ou bloqueia autor.
- Confirma no Supabase:
  - private_message_reports
  - conversation_reports
  - private_messages
  - user_blocks

## Segurança

A moderação só aparece para perfis com `role = admin` ou `role = moderator`.
