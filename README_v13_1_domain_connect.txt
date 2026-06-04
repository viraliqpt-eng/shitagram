vClean13.1 — Ligar domínio shitagram.pt ao GitHub Pages

Ficheiros:
- CNAME
- README_v13_1_domain_connect.txt

Como aplicar no GitHub:
1. Adiciona o ficheiro CNAME à raiz do repositório /shitagram.
2. O ficheiro deve conter apenas:
   shitagram.pt
3. Faz commit.

Depois no GitHub:
1. Vai ao repositório.
2. Settings → Pages.
3. Em Custom domain, escreve:
   shitagram.pt
4. Guarda.
5. Ativa Enforce HTTPS quando ficar disponível.

Depois no Hostinger/DNS:
Cria/ajusta os DNS do domínio.

Para domínio raiz:
Tipo: A
Nome/Host: @
Valor:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

Para www:
Tipo: CNAME
Nome/Host: www
Valor: viraliqpt-eng.github.io

Notas:
- A propagação pode demorar alguns minutos até 24h.
- Mantém também o GitHub Pages ativo no branch main.
- Depois testa:
  https://shitagram.pt
  https://www.shitagram.pt
