# back-end-fastfy-zod-prisma
 
Configuração do Ambiente
DATABASE_URL: URL de conexão com o banco PostgreSQL.
JWL_SECRET: Chave secreta para tokens JWT. Configure no arquivo .env.
Endpoints da API
Usuarios
Listar Usuários
Endpoint: /users 
Método: GET
Descrição: Retorna uma lista de todos os usuários.
Resposta: Um array de objetos com id, name, email.
Criar Novo Usuário
Endpoint: /users
Método: POST
Corpo:
json
Copiar código
{
  "name": "John Doe",
  "email": "johndoe@example.com"
}
Descrição: Cria um novo usuário.
Resposta: Usuário criado com id, name, email.
Autenticação
Login
Endpoint: /login
Método: POST
Corpo:
json
Copiar código
{
  "email": "johndoe@example.com",
  "password": "senha_do_usuario"
}
Descrição: Verifica as credenciais do usuário e gera um token JWT se estiverem corretas.
Resposta:
json
Copiar código
{
  "token": "token_jwt"
}
Tecnologias Utilizadas
Fastify: Framework web para Node.js com foco em performance.
Prisma: ORM para Node.js que facilita a integração com o banco de dados.
Bcrypt: Biblioteca para hashing de senhas.
jsonwebtoken: Biblioteca para criação e validação de tokens JWT.
Fastify-Cors: Middleware para permitir Cross-Origin Resource Sharing.
Fastify Swagger e Swagger UI: Documentação automatizada da API. 