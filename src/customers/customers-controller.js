const Customer = require('./customers-model')
const httpStatus = require('http-status')
const DAO = require('../base/dao')
const customers = []
//criamos a instancia da classe dao p/ customers
const daoCurstomers = new DAO(customers)

const RESPONSE_NOT_FOUND = {
    "message": "Customer not found!"
}
  
function create (req,res){
    const { name, cpf, birthday} = req.body
    const id = customers.length + 1 //o id serah o tamanho da minha lista + 1
    const customer = new Customer(id, name, cpf, birthday)
    return res.status(httpStatus.CREATED).json(daoCurstomers.create(customer))
    
    //vou gravar dentro do array
    //customers.push(customer) -- foi comentado para utilizar o DAO
      
    // return res.json(customer)
   //return res.status(httpStatus.CREATED).json(customer) -- foi comentado para utilizar o DAO
}

function findAll (req,res){
        return res.json(daoCurstomers.findAll()) //chamo o array
        //return res.json(customers) //chamo o array
}

function findOne (req,res){
    // x = customers (objeto)
    const { id } = req.params

    //= atribuicao
    //== compara valores
    //=== compara valores considerando o valor e o tipo
        
    const response = daoCurstomers.findOne(id)
    if (!response) {
     //404
      return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND)
    }
    daoCurstomers.findOne()
    return res.status(httpStatus.OK).json(response)
               
}

function update (req,res){
    //obter o parametro
   const { id } = req.params
  
   //obter os dados que eu devo atualizar (o payload - body)
   const { name, cpf, birthday} = req.body

   const customer = daoCurstomers.findOne(id)

   if (!customer){
     return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND)
   }
   //const updatedCustomer = customers[idx]

   //atualizar os valores de cada propriedade com os novos valores a ser atualizados
   if (name) {
     customer.name = name
   }
   if (cpf) {
    customer.cpf = cpf
   }
   if (birthday) {
    customer.birthday = birthday
   }
   
   customer.updated_at = new Date()

   //customers[idx] = updatedCustomer
  // daoCurstomers.update()
   return res.status(httpStatus.OK).json(daoCurstomers.update(customer, id))
} 

function destroy (req,res) {
   //extrair o id que deve ser excluido
   const id = req.params.id
  
   //pesquisar o id dentro do array
   const customer = daoCurstomers.findOne(id)
   if (!customer){
     return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND)
  }
   daoCurstomers.destroy(id) 
   return res.status(httpStatus.NO_CONTENT).send()
     
}

module.exports = {
    create,
    findAll,
    findOne,
    update, 
    destroy
}
