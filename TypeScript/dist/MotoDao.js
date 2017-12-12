"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Moto_1 = require("./Moto");
var MotoDao = /** @class */ (function () {
    function MotoDao() {
        this.nomeTabela = 'tb_moto';
    }
    MotoDao.prototype.inserir = function (object) {
        console.log('Lógica insert');
        return true;
    };
    MotoDao.prototype.atualizar = function (object) {
        console.log('Lógica Update');
        return true;
    };
    MotoDao.prototype.remover = function (id) {
        console.log('Lógica Delete');
        return new Moto_1.default();
    };
    MotoDao.prototype.selecionar = function (id) {
        console.log('Lógica Select');
        return new Moto_1.default();
    };
    MotoDao.prototype.selecionarTodos = function () {
        console.log('Lógica getAll');
        return [new Moto_1.default()];
    };
    return MotoDao;
}());
exports.MotoDao = MotoDao;
