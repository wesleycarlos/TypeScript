import {DaoInterface} from './DaoInterface'
import Carro from './Carro'

export class CarroDao implements DaoInterface {
        nomeTabela: string = 'tb_carro'
    
        inserir(object: Carro): boolean{
            console.log('Lógica insert');
            return true
        }

        atualizar(object: Carro): boolean{
            console.log('Lógica Update')
            return true
        }

        remover(id: number): Carro{
            console.log('Lógica Delete')
            return new Carro('', 0)
        }
        selecionar(id: number): Carro{
            console.log('Lógica Select')
            return new Carro('', 0)
        }
        selecionarTodos(): [any]{
            console.log('Lógica getAll')
            return [new Carro('', 0)]
        }
}