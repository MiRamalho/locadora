/*
const Product = require('./products/products-moldel')

//importo a classe customers - que eh um array (lista) que serah criado


const products = []

const RESPONSE_NOT_FOUND = {
  "message": "Customer not found!"
}
//cria-se uma rota com o endereco /
 //estah sendo utilizado o metodo GET, que eh uma consulta no servidor e ela serah acessada pela /
// routes.get('/helloworld', (req, res) => {
    //call back (retorno de uma funcao)
    //entao o segundo parametro do GET, eh uma funcao com dois parametros que sao:
    //o req = request (que eh a requisicao) e 
    //o res = response (que eh a resposta do servidor) 
    //resposta do servidor serah "Hello World"
 //     res.status(httpStatus.OK).send('Hello World!')




  /*CADASTRAR UM PRODUTO */
  /*
  routes.post('/products',(req,res) => {
  const { description, quantityStock, quantityAvailable, value} = req.body
  const id = products.length + 1 //o id serah o tamanho da minha lista + 1
  const product = new Product({id, description, quantityStock, quantityAvailable, value})
  
  products.push(product)
    return res.status(httpStatus.CREATED).json(product)
  })
  
  /*CONSULTAR UM PRODUTO*/ 
  /*
    routes.get('/products',(req,res) => {
      return res.json(products) //chamo o array
    })
  
    /*ATUALIZAR UM PRODUTO */
  /*
    routes.put('/products/:id',(req,res) => {
      const { id } = req.params
  
      const { description, quantityStock, quantityAvailable, value} = req.body
  
      const idx = products.findIndex(x => x.id == id)
      if (idx < 0){
        return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND)
      }
      const updatedProduct = products[idx]
  
      //atualizar os valores de cada propriedade com os novos valores a ser atualizados
      if (description) {
        updatedProduct.description = description
      }
      if (quantityStock) {
        updatedProduct.quantityStock = quantityStock
      }
      if (quantityAvailable) {
        updatedProduct.quantityAvailable = quantityAvailable
      }
      if (value) {
        updatedProduct.value = value
      }
      
      updatedProduct.updated_at = new Date()
   
      products[idx] = updatedProduct
      return res.status(httpStatus.OK).json(products.find(x => x.id == id))
    }) 
    
    /*BUSCAR APENAS 1 PRODUTO PELO ID */
  /*
  routes.get('/products/:id',(req,res) => {
   
    const id = req.params.id
      
    const response = products.find(x => x.id == id)
     if (!response) {
       //404
        return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND)
     }
     return res.status(httpStatus.OK).json(response)
  
    return res.status(httpStatus.OK).json(customers.find(x => x.id == id))
    //console.log(response)
  
  })
  
  /*DELETAR UM PRODUTO*/ 
  /*
    routes.delete('/products/:id',(req,res) => {
  
      const id = req.params.id
  
      const idx = products.findIndex(x => x.id == id)
      if (id < 0) {
        //404
        return res.status(httpStatus.NO_FOUND).json(RESPONSE_NOT_FOUND)
      }
      
      products.splice(idx, 1)
  
      return res.status(httpStatus.NO_CONTENT).send()
      
    })
  

module.exports = routes
//tem que ser exportado pq quero que o servidor (app.js) enxergue o routes e la
//no servidor (app.js) eu vou importar ele*/