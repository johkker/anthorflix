# Anthorflix
O teste do desenvolvedor Anthor

# Sobre
Obrigado pelo seu interesse em participar do nosso processo seletivo. No seu email você deve ter recebido qual trilha deve executar para seu teste: o de backend ou mobile.

O Anthorflix(:tm:) é uma aplicação revolucionária para compartilhar com seus amigos os filmes que você viu e suas impressões sobre ele. Você pode cadastrar os filmes que assistiu, avaliá-los e comentar as avaliações de seus amigos. Abaixo estão as instruções para cada trilha:

## Teste Mobile
Você deve construir uma aplicação móvel utilizando Flutter para compartilhar suas opiniões sobre filme. Seu aplicativo deve ter as seguintes funcionalidades:

**Requisitos:**
- Criar, editar e remover filmes (o famoso CRUD)
- Listar os detalhes de um filme: diretor, elenco, ano, gênero, etc
- Avaliar filmes: fique a vontade para escolher o sistema de avaliação que quiser
- Comentar na avaliação de filmes: o que seria a internet sem comentários de pessoas aleatórias?
- Use um gerenciador de estado a sua escolha
- Teste unitário ou widget

**Opcionais:**
- Seria legal se sua aplicação também fizesse o cadastro e login de usuários.
- Backend em qualquer linguagem
- Integração com a API do OMDB
- Teste de integração

Você não precisa usar um backend, mas seu aplicativo deve se comportar como se existisse um. Se optar por não usar um backend, seu aplicativo deve persistir os dados locais.

Você será avaliado por:
- Estrutura do seu projeto
- Qualidade do código e padrões utilizados (Solid, Dry, etc)
- Testes escritos

---

## Teste Backend

Você deve construir uma API (preferencialmente usando NodeJS) para avaliação de filmes.

**Requisitos:**

Sua API deve estar dividida nos domínios significativos para o funcionamento do sistema e deve ter as seguintes funcionalidades:
- CRUD de filmes
- Cadastro de usuários
- Usuários podem avaliar filmes
    - Fique a vontade para escolher o sistema de avaliação que quiser
- A avaliação média do filme deve ser feita de forma assíncrona
- Usuários podem comentar em avaliações de outros usuários
- Comunicação com algum banco de dados (MongoDB, Postgres, Cassandra, etc)
- Testes (unitário ou integração)

**Opcionais:**
- Integração com a API do OMDB
- Autenticação de usuários
- GraphQL
- Typescript
- Docker

Você será avaliado por: 
- Estrutura do seu projeto
- Qualidade do código e padrões utilizados (Solid, Dry, etc)
- Testes escritos
- Modelagem dos domínios