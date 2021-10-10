//inicio para rotear o servidor
//crud
//importo o express novamente, pois sera necessario instanciar ele para q ele seja roteado, isto eh,
//como ele nao estah dentro do servidor (app.js) eh necessario instanciar novamente
const express = require('express')
const Customer = require('./customers')

//instancio um objeto que eh o responsavel por rotear o meu servidor (app.js), que nesse caso eh o express.Router()
const routes = express.Router()
//dessa forma, eu consigo criar todas as rotas no mesmo lugar

//importo a classe customers - que eh um array (lista) que serah criado
const customers = []

//cria-se uma rota com o endereco /
 //estah sendo utilizado o metodo GET, que eh uma consulta no servidor e ela serah acessada pela /
 routes.get('/helloworld', (req, res) => {
    //call back (retorno de uma funcao)
    //entao o segundo parametro do GET, eh uma funcao com dois parametros que sao:
    //o req = request (que eh a requisicao) e 
    //o res = response (que eh a resposta do servidor) 
    //resposta do servidor serah "Hello World"
      res.send('Hello World!')
})

/*CADASTRAR UM CLIENTE */

  //seguido o padrao http, POST uso para quando vou salvar dados
  //sempre que for criar uma rota sempre seguira essa anotacao: req e resp
  routes.post('/customers',(req,res) => {
    const { name, cpf, birthday} = req.body
    const id = customers.length + 1 //o id serah o tamanho da minha lista + 1
    const customer = new Customer(id, name, cpf, birthday)

    //vou gravar dentro do array
    customers.push(customer)
    return res.json(customer)
  })

/*CONSULTAR UM CLIENTE*/ 

  //o GET equivale a um select no BD
  routes.get('/customers',(req,res) => {
    return res.json(customers) //chamo o array
  })

  /*ATUALIZAR UM CLILENTE */

  /*BUSCAR APENAS 1 CLIENTE PELO ID */

  
module.exports = routes
//tem que ser exportado pq quero que o servidor (app.js) enxergue o routes e la
//no servidor (app.js) eu vou importar ele