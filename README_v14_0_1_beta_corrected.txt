v14.0.1 — Landing corrigida para beta fechada

Problema corrigido:
A landing dizia “Aberto ao público”, “Criar conta grátis” e “Sem candidatura beta”, mas a app ainda mostra conta demo/local. Isso quebrava confiança.

Correções:
- “Aberto ao público” → “Beta fechada”
- “Criar conta grátis” → “Pedir acesso à beta”
- “Já tenho conta” → “Ver estado da candidatura”
- CTA principal aponta para beta.html
- CTA secundário aponta para status.html
- Texto explica que a entrada é controlada
- Rodapé aponta para legal.html, beta.html e contacto@shitagram.pt

Ficheiro:
- index_shitagram_v14_0_1_beta_corrected.html

Como aplicar:
1. Substitui index.html por index_shitagram_v14_0_1_beta_corrected.html.
2. Faz commit.
3. Abre https://shitagram.pt com Ctrl+F5.
4. Testa:
   - botão “Pedir acesso à beta” → beta.html
   - botão “Ver estado da candidatura” → status.html
   - botão “Ver Arena Live” → arena.html, se existir

Não precisa de SQL novo.
