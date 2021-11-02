//const { create, findOne, findAll, update } = require("../customers/customers-controller")

//const { destroy } = require("../customers/customers-controller")

/*o objetivo da DAO será de atualizar uma MODEL, então vamos passar a MODEL como
parametro no construtor*/

class DAO {
    //new - instancia uma nova classe
   constructor (model) {
       this.model = model 
   }

   //logo abaixo os métodos da MODEL que será os mesmos métodos do CRUD
   /* explicao sobre o create: vamos receber um customers(object) e dentro do model vai ter um array de 
      customeres e será gravado dentro do array (no push) armazenando o customers e vai retornar
     o proprio customers*/

   create(object) { //insert
      this.model.push(object)
      return object

   }
   findOne(id){ //select 1
       return this.model.find(x => x.id == id)
   } 
   findAll(){ //select *
       return this.model
   }  

   update(updateObject, id) {
       //identificar dentro do array o ID a ser atualizado
       //x = é o meu objeto customer
       const idx = this.model.findIndex(x => x.id == id)
       this.model[idx] = updateObject
       return this.model.find(x => x.id == id)
   } 

   destroy(id) {
       const idx = this.model.findIndex(x => x.id == id)
       this.model.splice(idx, 1)
   }
}

module.exports = DAO