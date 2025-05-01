export class Produto{
    id: number;
   nome: string;
   categoria: string;
   quantidade: number;
   preco: number;

constructor(id: number, nome: string, categoria:  string, quantidade: number, preco: number){
        this.id= id;
        this.nome = nome;
        this.categoria = categoria;
        this.quantidade = quantidade;
        this.preco = preco;

    }
}
