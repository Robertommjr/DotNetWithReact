# DotNetWithReact



## Nomeclatura de commit
O commit deve ser coeso e se referir a uma única responsabilidade. Em cada commit deve haver alterações de um único tema, se um commit possui o seguinte formato: "corrigindo bug x e adicionando campo xpt" possivelmente este commit não está coeso ou está se referindo a múltiplas responsabilidades, neste caso está obvio que deve-se separar em dois commits.

A separação se dá para melhor controle no histórico de alterações, melhor visualização em um code review e uma possível reversão das alterações.

Segue abaixo as possíveis formatos e labels que os commits podem possuir

+ **feat:** para adição de novas funcionalidades ao código;

> Ex: "feat: criando UserService"

+ **fix:** para correção de um bug ou falha no código;

> Ex: "fix: correção de erro ao criar um usuário sem uma foto de perfil"

+ **style:** para alterações relacionadas a aspectos visuais ou de formatação do código;

> Ex: "style: alterando o a cor de fundo do menu do painel de usuário"

+ **refactor:** para alterações que visam melhorar a qualidade interna do código, sem alterar sua funcionalidade;

> Ex: "refactor: refatorando o UserSrvice, melhor separação de responsábilidade entre metodos"

+ **chore:** para outras tarefas relacionadas ao projeto que não se enquadram nas categorias anteriores;

> Ex: "chore: configurando regras do prettier e eslint"

+ **build:** para alterações relacionadas ao processo de compilação ou construção do projeto;

  **_ feat:** para adições de novas funcionalidades ao processo de compilação ou construção;

  **_ fix:** para correção de falhas relacionadas ao processo de compilação ou construção;

  **_ refactor:** para melhorias no processo de compilação ou construção do projeto;

> Ex: "build(feat): criando arquivo com as configurações de deploy"


+ **docs:** para alterações na documentação do projeto;

  **_ feat:** para adições de novos conteúdos na documentação;

  **_ fix:** para correção de erros ou inconsistências na documentação;

  **_ refactor:** para melhorias na organização ou estruturação da documentação;

> Ex: "docs(refactor): mudando a forma de nomenclatura dos commit"


+ **test:** para alterações relacionadas aos testes automatizados;

  **_ feat:** para adições de novos testes;

  **_ fix:** para correção de falhas ou erros em testes existentes;

  **_ refactor:** para melhorias nos testes ou na estrutura de testes existentes.

> Ex: "test(feat): criando teste para o UserService"
