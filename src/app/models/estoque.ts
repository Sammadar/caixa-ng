export class Estoque{
    id: number = 0;
    nome: string = "";
    quantidade:  number = 0;
    categoria: string = "";

    constructor(id: number, nome:string, quantidade: number, categoria: string){
    this.id = id;
    this.nome = nome;
    this.quantidade = quantidade;
    this.categoria = categoria;  
    }
}