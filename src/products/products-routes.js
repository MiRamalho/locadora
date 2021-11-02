//inicio para rotear o servidor
//crud
//importo o express novamente, pois sera necessario instanciar ele para q ele seja roteado, isto eh,
//como ele nao estah dentro do servidor (app.js) eh necessario instanciar novamente
const express = require('express')
const controller = require('./products-controller')//importo os controllers

const routes = express.Router()//instancio um objeto que eh o responsavel por rotear o meu servidor (app.js), que nesse caso eh o express.Router()
//dessa forma, eu consigo criar todas as rotas no mesmo lugar

//seguido o padrao http, POST uso para quando vou salvar dados
//sempre que for criar uma rota sempre seguira essa anotacao: req e resp
routes.post('/products', controller.create) /*CADASTRAR UM PRODUTO */
routes.get('/products',controller.findAll) /*CONSULTAR UM PRODUTO*/ //o GET equivale a um select no BD
  

//products/:id ==> no express
routes.get('/products/:id',controller.findOne)  /*BUSCAR APENAS 1 PRODUTO PELO ID */
routes.put('/products/:id',controller.update) /*ATUALIZAR UM PRODUTO */
routes.delete('/products/:id',controller.destroy)  /*DELETAR UM PRODUTO*/ 

module.exports = routes
  