SHITAGRAM™ — Configuração LiveKit

1. Envia livekit-config-v21-shitagram.js para a raiz do site e renomeia para:
   livekit-config.js

2. No Supabase, cria as Secrets da Edge Function:
   LIVEKIT_URL = wss://shitagram-arena-9s2vmtau.livekit.cloud
   LIVEKIT_API_KEY = a tua API Key do LiveKit
   LIVEKIT_API_SECRET = o teu API Secret do LiveKit

3. Publica a função livekit-token no Supabase usando o ficheiro:
   supabase_edge_function_livekit_token_v21.ts

4. O endpoint usado pela Arena será:
   https://dcupiiiifnfffdsyyccyac.supabase.co/functions/v1/livekit-token

IMPORTANTE:
Como o API Secret apareceu num print, depois de tudo funcionar deves criar uma nova key no LiveKit e apagar a antiga.
Nunca coloques o API Secret em livekit-config.js, arena.html ou qualquer ficheiro público.
