//inicio para rotear o servidor
//crud
//importo o express novamente, pois sera necessario instanciar ele para q ele seja roteado, isto eh,
//como ele nao estah dentro do servidor (app.js) eh necessario instanciar novamente
const express = require('express')
const controller = require('./customers-controller')//importo os controllers

const routes = express.Router()//instancio um objeto que eh o responsavel por rotear o meu servidor (app.js), que nesse caso eh o express.Router()
//dessa forma, eu consigo criar todas as rotas no mesmo lugar

//seguido o padrao http, POST uso para quando vou salvar dados
//sempre que for criar uma rota sempre seguira essa anotacao: req e resp
routes.post('/customers', controller.create) /*CADASTRAR UM CLIENTE */
routes.get('/customers',controller.findAll) /*CONSULTAR UM CLIENTE*/ //o GET equivale a um select no BD
  
// customeres/{1}
//customers/:id ==> no express
routes.get('/customers/:id',controller.findOne)  /*BUSCAR APENAS 1 CLIENTE PELO ID */
routes.put('/customers/:id',controller.update) /*ATUALIZAR UM CLIENTE */
routes.delete('/customers/:id',controller.destroy)  /*DELETAR UM CLIENTE*/ 

module.exports = routes
  