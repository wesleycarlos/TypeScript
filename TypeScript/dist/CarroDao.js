"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var CarroDao = /** @class */ (function () {
    function CarroDao() {
        this.nomeTabela = 'tb_carro';
    }
    CarroDao.prototype.inserir = function (object) {
        console.log('Lógica insert');
        return true;
    };
    CarroDao.prototype.atualizar = function (object) {
        console.log('Lógica Update');
        return true;
    };
    CarroDao.prototype.remover = function (id) {
        console.log('Lógica Delete');
        return new Carro_1.default('', 0);
    };
    CarroDao.prototype.selecionar = function (id) {
        console.log('Lógica Select');
        return new Carro_1.default('', 0);
    };
    CarroDao.prototype.selecionarTodos = function () {
        console.log('Lógica getAll');
        return [new Carro_1.default('', 0)];
    };
    return CarroDao;
}());
exports.CarroDao = CarroDao;
