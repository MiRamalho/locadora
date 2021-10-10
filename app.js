/* ** ESSE AQUI EH O PONTO DE ENTRADA ** ELE QUE SERA O SERVIDOR DA API
   Para importar libs ou arquivos, utiliza-se o comando require

   () executa um metodo

*/

//carrego a lib do express (servidor da aplicacao) - importou o objeto
const express = require('express') 

//importa as rotas
const routes = require('./routes')

//const Customer = require('./customers')
//const customers = []

//instanciando um novo servidor 
const app = express() /*estah startando o objeto express e foi atribuida numa variavel chamada app */
app.use(express.json())

app.use('/', routes) //isso eh necessario para o express entender que eh pra ser USADO o routes dentro de suas rotas

// crio uma constante para definir que porta o servidor rodarah 
const port = 3000 /* foi criada uma variavel chamada porta e adicionado o valor de 3000, mas poderia ser qualquer outro valor, menos 8080 pois eh a porta default da internet */
                  /* quando estamos trabalhando com APIs, sempre tem que ser direcionado para alguma porta. A porta vai influenciar na hora de subir o servidor */

/*ESSE BLOCO ABAIXO DO app.get FOI TODO COMENTADO POIS FOI COLOADO EM ROUTES PARA QUE FIQUE UM
CODIGO ORGANIZADO */
 //cria-se uma rotas com o endereco /
 //estah sendo utilizado o metodo GET, que eh uma consulta no servidor e ela serah acessada pela /
 
 /*app.get('/helloworld', (req, res) => {
    //call back (retorno de uma funcao)
    //entao o segundo parametro do GET, eh uma funcao com dois parametros que sao:
    //o req = request (que eh a requisicao) e 
    //o res = response (que eh a resposta do servidor) 
    //resposta do servidor serah "Hello World"
      res.send('Hello World!')
}) */

//listen = ouvir/escutar uma determinada porta que nesse caso serah a 3000
//entao nesse caso o servidor da aplicacao vai subir no localhost atendendo a porta 3000
app.listen(port, function() {
 
  //const MIMI = new Customer(1,"Michelle","22162741865","11031982")
  //console.log('Valor de customers:', MIMI)
  console.log(`Example app listening at http://localhost:${port}`)
})
