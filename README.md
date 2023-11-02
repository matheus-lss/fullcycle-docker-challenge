Repositório destinado a implementação dos desafios do módulo de docker do curso Full Cycle.

Desafio 1:

Publicar uma imagem no docker hub. Quando executarmos:

docker run matheuslss/fullcycle

Temos que ter o seguinte resultado: Full Cycle Rocks!!

A imagem de nosso projeto Go precisa ter menos de 2MB =)

Suba o projeto em um repositório Git remoto e coloque o link da imagem que subiu no Docker Hub.

https://hub.docker.com/r/matheuslss/fullcycle

Desafio2 :

Quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação, por sua vez, adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

- A linguagem de programação para este desafio é Node/JavaScript.
