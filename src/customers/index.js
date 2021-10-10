
//classe customer (clientes)
class Customer { 
//o que nosso cliente vai ter?
//toda classe ja possui um construtor, que ele eh o responsavel pela criacao da classe
// construtor da classe que permite inicializa-la passando atributos para uso interno
     constructor(id, name, cpf, birthday) {
         this.id = id
         this.name = name
         this.cpf = cpf
         this.birthday = birthday
         this.active = true
         this.created_at = new Date()
     }
}

//exporta a classe customer
module.exports = Customer