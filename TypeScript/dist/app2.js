"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Pessoa_1 = require("./Pessoa");
var Concessionaria_1 = require("./Concessionaria");
/* --- Criar carros --- */
var carroA = new Carro_1.default('Astra', 4);
var carroB = new Carro_1.default('Prisma', 4);
var carroC = new Carro_1.default('Uno', 2);
/* --- Montar a lista de carros da concessionaria  --- */
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Avenida Paulista', listaDeCarros);
/* --- Exibir a lista de carros --- */
//console.log(concessionaria.mostrarListaDeCarros())
/* --- Comprar o carro --- */
var cliente = new Pessoa_1.default('Wesley', 'Astra');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //Comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
