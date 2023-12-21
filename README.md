# Projeto: Trybe Futebol Club

### Instituição: Trybe

O TFC (Trybe Futebol Club) é um site informativo sobre partidas e classificações de futebol. No desenvolvimento do TFC, o squad foi encarregado de construir uma API, utilizando o método TDD, e integrar as aplicações através do docker-compose para funcionarem consumindo um banco de dados.

Durante o projeto, o objetivo foi desenvolver um backend dockerizado utilizando a modelagem de dados com Sequelize. O desenvolvimento seguiu as regras de negócio fornecidas, garantindo que a API pudesse ser consumida pelo frontend já fornecido no projeto.

O backend implementa regras de negócio para preencher adequadamente a tabela disponível no frontend, exibida para o usuário do sistema.

### Instruções de Clonagem do Projeto:

Para clonar este repositório, utilize o comando abaixo:

```bash
git clone <URL_DO_REPOSITORIO> && cd Trybe-Futebol-Club
```

#### URL SSH - `git@github.com:FilipeMHottis/trybe-futebol-clube.git`

### Comandos para iniciar o projeto via Docker:
```bash
npm start
```

### Detalhes do Projeto:

Este projeto foi um desafio para criar o backend e configurar os DockerFiles. No backend, foi necessário desenvolver a maior parte do código a partir do zero. As únicas estruturas disponíveis foram `app.ts`, `server.ts` e os seeders.

#### Tecnologias Obrigatórias:

- Sequelize
- JWT
- Bcryptjs

#### Tecnologias Extras Utilizadas:

- JOI
- Swagger (para documentação)

### Padrões de Conexão:

- Frontend: http://localhost:3000
- Backend: http://localhost:3001
- Banco de dados: Porta 3306

Para acessar a documentação do backend, é necessário que o servidor esteja ligado em `http://localhost:3001/docs`.

