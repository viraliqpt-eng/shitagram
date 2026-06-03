SHITAGRAM™ vClean11.4 — Anti-spam e limites de segurança

Como aplicar:
1. Executa supabase_shitagram_clean_v11_4_antispam_limits.sql no Supabase.
2. Renomeia app_shitagram_clean_v11_4_antispam_limits.html para app.html.
3. Faz commit no GitHub.
4. Testa posts, comentários, mensagens, denúncias, presentes e boosts.

O que adiciona:
- tabela rate_limit_events;
- função check_rate_limit(action);
- limites por ação;
- contas novas com limites mais baixos;
- perfis com security_status: normal, watchlist, limited, blocked;
- painel admin flutuante 🛡️ com utilizadores suspeitos;
- função get_suspicious_users();
- função set_user_security_status();
- limpeza opcional de eventos antigos.

Limites iniciais:
- mensagens: 8/minuto;
- posts: 5/hora;
- comentários: 10/minuto;
- denúncias: 8/hora;
- reações: 35/minuto;
- convites: 20/dia;
- presentes: 20/10min;
- boosts: 10/hora.

Nota:
Esta versão aplica uma camada de proteção no front-end e no Supabase via RPC. Para segurança máxima, os próximos módulos podem reforçar triggers/RPCs específicas para cada ação.
