//classe products (produtos)
class Product { //atributos
            constructor({id, description, quantityStock, quantityAvailable, value}) {
                //parametros
             this.id = id
             this.description = description
             this.quantityStock = quantityStock
             this.quantityAvailable = quantityAvailable
             this.value = value
             this.active = true
             this.created_at = new Date()
         }
    }
    
    //exporta a classe Product
    module.exports = Product



