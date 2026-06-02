# vClean10.8 — Checklist de ativação + missões iniciais

## Ficheiros

- app_shitagram_clean_v10_8_activation_checklist.html
- supabase_shitagram_clean_v10_8_activation_checklist.sql

## O que esta versão adiciona

- menu "Primeiros Passos";
- checklist de ativação:
  - completar perfil;
  - publicar primeiro mico;
  - reagir a 3 posts;
  - comentar 1 post;
  - visitar Mood Map;
  - enviar 1 presente;
- progresso visual;
- bónus de 750 ShitCoins™ ao concluir tudo;
- tabela user_activation_checklists;
- função claim_activation_checklist_bonus();
- evita receber o bónus mais de uma vez.

## Como aplicar

1. Executa o SQL no Supabase:
   supabase_shitagram_clean_v10_8_activation_checklist.sql

2. Renomeia o HTML para:
   app.html

3. Mantém a landing como index.html.

4. Faz commit no GitHub.

## Teste recomendado

1. Faz login com uma conta aprovada.
2. Abre "Primeiros Passos".
3. Completa as missões:
   - edita o perfil;
   - publica um mico;
   - reage a 3 posts;
   - comenta 1 post;
   - abre o Mood Map;
   - envia 1 presente.
4. Volta a "Primeiros Passos".
5. Clica em "Receber bónus".
6. Confirma no Supabase:
   - user_activation_checklists;
   - profiles.coins;
   - coin_transactions.
