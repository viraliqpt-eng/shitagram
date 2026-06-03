vClean11.5.1 — Correção Voltar à app

Problema:
O botão "Voltar à app" não voltava porque o ficheiro de auditoria foi provavelmente renomeado para app.html.
Assim, o botão apontava para app.html e recarregava a própria página de auditoria.

Estrutura correta no GitHub:
/shitagram/index.html  -> landing
/shitagram/app.html    -> app principal real
/shitagram/audit.html  -> painel de auditoria

Como aplicar:
1. Repor a app principal como app.html usando a última versão funcional da app.
2. Guardar este ficheiro como audit.html.
3. Na app, o botão/menu Auditoria deve abrir: audit.html
4. No painel de auditoria, "Voltar à app" abre: app.html

Nota:
Não substituas app.html pelo painel de auditoria standalone.
