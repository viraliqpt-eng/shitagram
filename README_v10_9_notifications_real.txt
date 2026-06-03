vClean10.9 — Notificações reais melhoradas

Ficheiros:
- app_shitagram_clean_v10_9_notifications_real.html
- supabase_shitagram_clean_v10_9_notifications_real.sql

Como aplicar:
1. Executar o SQL no Supabase SQL Editor.
2. Renomear app_shitagram_clean_v10_9_notifications_real.html para app.html.
3. Fazer commit no GitHub.
4. Abrir a app com Ctrl+F5.

O que testar:
- Entrar com conta aprovada.
- Clicar no sino de notificações.
- Ver painel de notificações reais.
- Marcar como lidas.
- Testar novo seguidor com segunda conta.
- Testar comentário recebido.
- Testar presente recebido.
- Testar aprovação/bloqueio beta no painel admin.
- Testar post ocultado/removido/aprovado na moderação.

Notas:
- O badge vermelho mostra a contagem real de notificações por ler.
- Se não existirem notificações, aparece estado vazio.
- O SMS continua como “em breve”, sem mensagens privadas reais.
- O SQL é defensivo e tenta adaptar a tabela notifications caso já exista.
