const Product = require('./products-model')
const httpStatus = require('http-status')
const DAO = require('../base/dao')
const products = []
//criamos a instancia da classe dao p/ products
const daoProducts = new DAO(products)

const RESPONSE_NOT_FOUND = {
    "message": "Product not found!"
}
  
/*CADASTRAR UM PRODUTO */
  
function create (req,res){
    const { description, quantityStock, quantityAvailable, value} = req.body
    const id = products.length + 1 //o id serah o tamanho da minha lista + 1
    const product = new Product({id, description, quantityStock, quantityAvailable, value})
    return res.status(httpStatus.CREATED).json(daoProducts.create(product))
  
    //vou gravar dentro do array
    //customers.push(customer) -- foi comentado para utilizar o DAO
      
    // return res.json(customer)
   //return res.status(httpStatus.CREATED).json(product) -- foi comentado para utilizar o DAO
}

function findAll (req,res){
        return res.json(daoProducts.findAll()) //chamo o array
        //return res.json(products) //chamo o array
}

function findOne (req,res){
    // x = products (objeto)
    const { id } = req.params

    //= atribuicao
    //== compara valores
    //=== compara valores considerando o valor e o tipo
        
    const response = daoProducts.findOne(id)
    if (!response) {
     //404
      return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND)
    }
    daoProducts.findOne()
    return res.status(httpStatus.OK).json(response)
               
}

function update (req,res){
    //obter o parametro
   const { id } = req.params
  
   //obter os dados que eu devo atualizar (o payload - body)
   const { description, quantityStock, quantityAvailable, value} = req.body
   const product = daoProducts.findOne(id)

   if (!product){
     return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND)
   }
   //const updatedProducts = products[idx]

   //atualizar os valores de cada propriedade com os novos valores a ser atualizados
   if (description) {
     product.description = description
   }
   if (quantityStock) {
    product.quantityStock = quantityStock
   }
   if (quantityAvailable) {
    product.quantityAvailable = quantityAvailable
   }
   if (value) {
    product.value = value
   }
   product.updated_at = new Date()

   //product[idx] = updatedCustomer
  // daoCurstomers.update()
   return res.status(httpStatus.OK).json(daoProducts.update(product, id))
} 

function destroy (req,res) {
  //extrair o id que deve ser excluido
  const id = req.params.id
 
  //pesquisar o id dentro do array
  const product = daoProducts.findOne(id)
  if (!product){
    return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND)
 }
 daoProducts.destroy(id) 
  return res.status(httpStatus.NO_CONTENT).send()
    
}

module.exports = {
    create,
    findAll,
    findOne,
    update, 
    destroy
}
