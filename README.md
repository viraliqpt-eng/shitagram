# SHITAGRAM™ Site Package

Ficheiros incluídos:
- `index.html` — landing principal
- `arena.html` — Arena Live separada
- `manifest.json` — configuração PWA
- `sw.js` — service worker/cache
- `livekit-config.js` — configuração LiveKit
- `icon-192.png` e `icon-512.png` — ícones da app

## Como subir
Carrega todos estes ficheiros para a raiz do domínio, por exemplo:
`https://shitagram.pt/`

Depois confirma:
- `https://shitagram.pt/index.html`
- `https://shitagram.pt/arena.html`
- `https://shitagram.pt/manifest.json`

## LiveKit
A Arena funciona em modo demonstração sem configuração.
Para live real, edita `livekit-config.js` e adiciona:
- `window.SHITAGRAM_LIVEKIT_URL`
- `window.SHITAGRAM_LIVEKIT_TOKEN_ENDPOINT`

O endpoint de token deve ser criado no servidor/backend, nunca com a chave secreta exposta no front-end.
