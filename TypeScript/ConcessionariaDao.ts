import {DaoInterface} from './DaoInterface'
import Concessionaria from './Concessionaria'

export class ConcessionariaDao implements DaoInterface {
        nomeTabela: string = 'tb_concessionaria'
    
        inserir(object: Concessionaria): boolean{
            console.log('Lógica insert');
            return true
        }

        atualizar(object: any): boolean{
            console.log('Lógica Update')
            return true
        }

        remover(id: number): Concessionaria{
            console.log('Lógica Delete')
            return new Concessionaria('', [])
        }
        selecionar(id: number): Concessionaria{
            console.log('Lógica Select')
            return new Concessionaria('', [])
        }
        selecionarTodos(): [any]{
            console.log('Lógica getAll')
            return [new Concessionaria('', [])]
        }
}