import {DaoInterface} from './DaoInterface'
import Moto from './Moto'

export class MotoDao implements DaoInterface {
        nomeTabela: string = 'tb_moto'
    
        inserir(object: Moto): boolean{
            console.log('Lógica insert');
            return true
        }

        atualizar(object: Moto): boolean{
            console.log('Lógica Update')
            return true
        }

        remover(id: number): Moto{
            console.log('Lógica Delete')
            return new Moto()
        }
        selecionar(id: number): Moto{
            console.log('Lógica Select')
            return new Moto()
        }
        selecionarTodos(): [any]{
            console.log('Lógica getAll')
            return [new Moto()]
        }
}