1) O node não fica observando as alteraçōes no código depois que roda. Para isso acontecer, é necessário adicionar uma outra dependência chamada nodemon.

2) "devDependencies": são as dependências utilizadas somente na hora do desenvolvimento. São salvas separadas das "dependencies" no package.json

3) post: criar alguma informacao(cadastro, por exemplo). put:editar um recurso

4) O browser só consegue mostrar na tela quando a requisicao é do tipo GET. Para ver o que aocntece com outras requisicoes, precisamos instalar o insomnia.

5) Tipos de parâmetros da requisição:
    Query Params: request.query (Filtros, ordenação, paginação, ...)
    Route Params: request.params(Identificar um recurso na alteração ou remoção)
    Body: request.body (Dados para criação ou alteração de um registro)

6) MongoDB: é um banco de dados não relacional. Ótimo par aplicaçōes que não possuem muitos relacionamentos.

7) Um cluster dentro do Mongo é um servidor, ou seja, podemos ter várias bases de dados dentro do mesmo cluster.

8) O pacote mongoose vai permitir a nossa aplicação a se conectar com um banco de dados Mongo.

9) A pasta src(source) é onde fica o código da aplicação

10) A pasta models vai armazenar as entidades a serem armazenadas no banco de dados.

11) O pacote axios faz chamada para outras apis

12) Estudar sobre promises

13) flag async: quer dizer q a function pode demorar para responder

14) string.trim() remove os espacamentos antes e depois de uma string

15) Ao testar no insomnia, sabemos que um dev foi cadastrado no banco de dados porque ele possui um id.

16) mongodb compass community: cliente para acessar o mongodb

17) Dentro de controllers, cria-se um controller por entidade. Ele vai ser responsável por receber a requisicao, ativar o que ele precisa fazer e devolver uma resposta

18) O controller normalmente possui no maximo 5 funcoes:
    index: mostar uma lista de recursos
    show: mostrar um unico recurso(no caso 1 dev)
    store: criar um recurso(no caso 1 dev)
    update: alterar 
    destroy: deletar

19) mongo operators. Pesquisar na internet

20) Criar um método update() e criar um método Destroy() no DevController
    .update(): nome, avatar, bio e a localizacao e techs

21) pesquisar sobre cors(instalada pelo yarn para o node nao ter bloqueio de acesso com o react)