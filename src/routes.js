//inicio para rotear o servidor
//crud
//importo o express novamente, pois sera necessario instanciar ele para q ele seja roteado, isto eh,
//como ele nao estah dentro do servidor (app.js) eh necessario instanciar novamente
const express = require('express')
const Customer = require('./customers')

//instancio um objeto que eh o responsavel por rotear o meu servidor (app.js), que nesse caso eh o express.Router()
const routes = express.Router()
//dessa forma, eu consigo criar todas as rotas no mesmo lugar

const httpstatus = require('http-status')
const httpStatus = require('http-status')

//importo a classe customers - que eh um array (lista) que serah criado
const customers = []

const RESPONSE_NOT_FOUND = {
  "message": "Customer not found!"
}
//cria-se uma rota com o endereco /
 //estah sendo utilizado o metodo GET, que eh uma consulta no servidor e ela serah acessada pela /
 routes.get('/helloworld', (req, res) => {
    //call back (retorno de uma funcao)
    //entao o segundo parametro do GET, eh uma funcao com dois parametros que sao:
    //o req = request (que eh a requisicao) e 
    //o res = response (que eh a resposta do servidor) 
    //resposta do servidor serah "Hello World"
      res.status(httpStatus.OK).send('Hello World!')
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
   // return res.json(customer)
    return res.status(httpStatus.CREATED).json(customer)
  })

/*CONSULTAR UM CLIENTE*/ 

  //o GET equivale a um select no BD
  routes.get('/customers',(req,res) => {
    return res.json(customers) //chamo o array
  })

  /*ATUALIZAR UM CLILENTE */
  routes.put('/customers/:id',(req,res) => {
  //obter o parametro
    const { id } = req.params

    //obter os dados que eu devo atualizar (o payload - body)
    const { name, cpf, birthday} = req.body

    //identificar dentro do array o ID a ser atualizado
    //x = é o meu objeto customer
    const idx = customers.findIndex(x => x.id == id)
    if (idx < 0){
      return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND)
    }
    const updatedCustomer = customers[idx]

    //atualizar os valores de cada propriedade com os novos valores a ser atualizados
    if (name) {
      updatedCustomer.name = name
    }
    if (cpf) {
      updatedCustomer.cpf = cpf
    }
    if (birthday) {
      updatedCustomer.birthday = birthday
    }
    
    updatedCustomer.updated_at = new Date()

    customers[idx] = updatedCustomer
    return res.status(httpStatus.OK).json(customers.find(x => x.id == id))
  }) 
  
  /*BUSCAR APENAS 1 CLIENTE PELO ID */

//o GET equivale a um select no BD
 // customeres/{1}
 //customers/:id ==> no express
routes.get('/customers/:id',(req,res) => {
 // x = customers (objeto)
  const id = req.params.id
  //= atribuicao
  //== compara valores
  //=== compara valores considerando o valor e o tipo
 
   const response = customers.find(x => x.id == id)
   if (!response) {
     //404
      return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND)
   }
   return res.status(httpStatus.OK).json(response)


  return res.status(httpStatus.OK).json(customers.find(x => x.id == id))
  //console.log(response)

})

/*DELETAR UM CLIENTE*/ 

  routes.delete('/customers/:id',(req,res) => {
    //extrair o id que deve ser excluido
    const id = req.params.id

    //pesquisar o id dentro do array
    const idx = customers.findIndex(x => x.id == id)
    if (id < 0) {
      //404
      return res.status(httpStatus.NO_FOUND).json(RESPONSE_NOT_FOUND)
    }
    
    customers.splice(idx, 1)

    return res.status(httpStatus.NO_CONTENT).send()
    
  })



module.exports = routes
//tem que ser exportado pq quero que o servidor (app.js) enxergue o routes e la
//no servidor (app.js) eu vou importar ele