import Carro from "./Carro"
import Pessoa from "./Pessoa"
import Concessionaria from "./Concessionaria"


/* --- Criar carros --- */
let carroA = new Carro('Astra', 4);
let carroB = new Carro('Prisma', 4);
let carroC = new Carro('Uno', 2);

/* --- Montar a lista de carros da concessionaria  --- */
let listaDeCarros: Carro[] = [carroA, carroB, carroC]
let concessionaria = new Concessionaria('Avenida Paulista', listaDeCarros)

/* --- Exibir a lista de carros --- */
//console.log(concessionaria.mostrarListaDeCarros())

/* --- Comprar o carro --- */
let cliente = new Pessoa('Wesley', 'Astra')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        //Comprar o carro
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem());
