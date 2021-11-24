# Anthorflix
O teste de dev da Anthor

# Sobre
Obrigado pelo seu interesse em participar do nosso processo seletivo. No seu email você deve ter recebido qual trilha deve executar para seu teste: o de backend ou mobile (não é necessário fazer os dois, apenas o da sua trilha).

O Anthorflix(:tm:) é uma aplicação revolucionária para compartilhar com seus amigos os filmes que você viu e suas avaliações. Você pode cadastrar os filmes que assistiu, avaliá-los e comentar as avaliações de seus amigos. Abaixo estão as instruções para cada trilha:

## Teste Mobile (Flutter)
Você deve construir uma aplicação móvel utilizando Flutter para compartilhar suas opiniões sobre filmes. Seu aplicativo deve ter as seguintes funcionalidades:

**Requisitos:**

- Criar, editar e remover filmes (o famoso CRUD)
- Listar os detalhes de um filme: diretor, elenco, ano, gênero, etc
- Avaliar filmes: fique a vontade para escolher o sistema de avaliação que quiser (estrelas, joinha, emojis, etc)
- Comentar na avaliação de filmes: o que seria a internet sem comentários de pessoas aleatórias?
- Use um gerenciador de estado a sua escolha
- Teste unitário ou widget

**Opcionais:**

- Seria legal se sua aplicação também fizesse o cadastro e login de usuários
- Teste de integração
- Integração com a API do OMDB ou TheMovieDB
- Backend em qualquer linguagem

Você não precisa usar um backend, mas seu aplicativo deve se comportar como se existisse um. Se optar por não usar um backend, seu aplicativo deve persistir os dados locais.

**Você será avaliado por:**
- Qualidade das features entregues. Se não conseguir fazer tudo, dê preferência por entregar poucas funcionalidades, desde que sejam entregues com qualidade
- Estrutura do seu projeto
- Qualidade do código e padrões utilizados (Solid, Dry, etc)
- Testes escritos

---

## Teste Frontend/Fullstack (NodeJs, React)
Você deve construir uma aplicação web utilizando React para compartilhar suas opiniões sobre filmes. Seu aplicativo deve ter as seguintes funcionalidades:

**Requisitos:**

- Criar, editar e remover filmes (o famoso CRUD)
- Listar os detalhes de um filme: diretor, elenco, ano, gênero, etc
- Avaliar filmes: fique a vontade para escolher o sistema de avaliação que quiser (estrelas, joinha, emojis, etc)
- Comentar na avaliação de filmes: o que seria a internet sem comentários de pessoas aleatórias?
- Teste unitário

**Opcionais:**

- Seria legal se sua aplicação também fizesse o cadastro e login de usuários
- Teste de integração
- Integração com a API do OMDB ou TheMovieDB

**Backend:**

Se você se candidatou para uma vaga de frontend **não precisa usar um backend**, mas seu aplicativo **deve** se comportar como se existisse um. Se optar por não usar um backend, seu aplicativo deve persistir os dados locais.

Para candidatos fullstack, **você deve fazer um backend** que atenda as necessidades do frontend. De forma opcional, você pode seguir a especificação para o teste de backend.

**Você será avaliado por:**
- Qualidade das features entregues. Se não conseguir fazer tudo, dê preferência por entregar poucas funcionalidades, desde que sejam entregues com qualidade
- Estrutura do seu projeto
- Qualidade do código e padrões utilizados (Solid, Dry, etc)
- Testes escritos

---

## Teste Backend (NodeJS)

Você deve construir uma API Restful (preferencialmente usando NodeJS) para avaliação de filmes.

**Requisitos:**

Sua API deve estar dividida nos domínios significativos para o funcionamento do sistema e deve ter as seguintes funcionalidades:
- CRUD de filmes
- Cadastro de usuários
- Usuários podem marcar filmes que já assistiram
- Usuários podem avaliar filmes
    - Fique a vontade para escolher o sistema de avaliação que quiser (estrelas, joinha, emojis, etc)
    - A avaliação de um filme é calculada pela média de avaliações dos usuários. O cálculo da avaliação de um filme deve ser feito de forma assíncrona
- Usuários podem comentar nas avaliações de outros usuários
- Sua API deve se comunicar com algum banco de dados (MongoDB, Postgres, Cassandra, etc)
- Testes unitários (mire em 70% de cobertura)

**Opcionais:**
- Use docker-compose
- Teste de integração
- Integração com a API do OMDB ou TheMovieDB
- Typescript
- GraphQL
- Autenticação de usuários

**Você será avaliado por:**
1. Qualidade das features entregues. Se não conseguir fazer tudo, dê preferência por entregar poucas funcionalidades, desde que sejam entregues com qualidade
1. Facilidade para rodar o código. Dê preferência para soluções como o `docker-compose` ou outras abstrações que coloquem tudo no ar com apenas um comando
1. Testes escritos
1. Modelagem dos domínios e estrutura do seu projeto
1. Qualidade do código e padrões utilizados (Solid, Dry, etc)

# Entrega

Você deve enviar o link do seu projeto em um repositório público por email e responder as seguintes informações no README do projeto:

1. Como rodar o seu projeto
1. Bugs conhecidos
1. Como você planejou abordar este projeto? Que tecnologias foram utilizadas?
1. Você acha algum dos requisitos ou funcionalidades difíceis em algum aspecto? Por quê?
1. Se você tivesse mais tempo para fazer o projeto o que faria de diferente?
