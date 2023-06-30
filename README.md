# Configuração inicial.

- Rode o comando `npm init` e responda tudo normalmente.
- Crie a pasta `.bin` na raiz do projeto e arquivo `cli.js` dentro da mesma.
- Adicione o comentário de shebang (`#!/usr/bin/env node`) no inicio do arquivo cli.js.

### Package.json

- Remova a propriedade `"main"`.
- Adicione a propriedade `"bin"` com o valor de `"./bin/cli.js"`.
- Adicione o script de `start` sendo `node .bin/cli.js`.
