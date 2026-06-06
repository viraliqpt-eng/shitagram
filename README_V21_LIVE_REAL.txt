SHITAGRAM™ v21 — Arena Live Real Automática

Conteúdo:
- arena.html: interface pública sem códigos, pronta para LiveKit.
- livekit-config.js: configurar URL LiveKit e endpoint token.
- supabase_schema_v21_live_battles.sql: tabelas para salas, convites, chat e gifts.
- supabase_edge_function_livekit_token.ts: exemplo de função segura para gerar tokens LiveKit.

Publicação rápida:
1. Substitui /arena.html no site.
2. Sobe /livekit-config.js para a raiz.
3. Mantém manifest.json, sw.js e ícones se usares PWA.
4. A página funciona em modo demo se o LiveKit ainda não estiver configurado.

Para live real automática:
1. Criar projeto LiveKit Cloud ou self-host.
2. Criar Supabase Edge Function livekit-token.
3. Configurar secrets LIVEKIT_API_KEY, LIVEKIT_API_SECRET e LIVEKIT_URL.
4. Preencher livekit-config.js:
   window.SHITAGRAM_LIVEKIT_URL = "wss://...livekit.cloud";
   window.SHITAGRAM_LIVEKIT_TOKEN_ENDPOINT = "https://...supabase.co/functions/v1/livekit-token";
5. Testar em HTTPS: https://shitagram.pt/arena.html

Nota: nunca coloques LIVEKIT_API_SECRET no frontend.
