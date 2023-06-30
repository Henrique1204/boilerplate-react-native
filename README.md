# Introdução ao Boilerplate.

## Configuração inicial.

- Rode o comando `npm init` e responda tudo normalmente.
- Crie a pasta `.bin` na raiz do projeto e arquivo `cli.js` dentro da mesma.
- Adicione o comentário de shebang (`#!/usr/bin/env node`) no inicio do arquivo cli.js.
- Criar o arquivo `index.js` na raiz do projeto com o shebang no inico do arquivo.

#### Conteúdo do arquivo `cli.js`.

```js
#!/usr/bin/env node

const init = require('../index.js');

init();
```

#### Conteúdo do arquivo `index.js`.

```js
#!/usr/bin/env node

const init = async () => {
  ...
};

module.exports = init;
```

## Package.json

- Remova a propriedade `"main"`.
- Adicione a propriedade `"bin"` com o valor de `"./bin/cli.js"`.
- Adicione o script de `start` sendo `node .bin/cli.js`.

## Publicando.

- Crie uma conta na [`npm`](https://www.npmjs.com/).
- Utilize o comando `npm login` para realizar o login no termial.
- Aumente versão dentro do `package.json` e execute o comando `npm publish`.

## Referências.

- [Tutorial do Alura sobre criação de libs](https://www.alura.com.br/artigos/criando-e-publicando-uma-biblioteca-javascript-no-npm)
- [Tutorial sobre criar comandos no npm](https://deepgram.com/learn/npx-script)
- [Tutorial sobre criação de conta no npm e login pelo terminal](https://docs.npmjs.com/creating-a-new-npm-user-account)
