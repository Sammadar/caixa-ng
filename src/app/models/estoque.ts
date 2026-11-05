export class Estoque{
    id: number = 0;
    nome: string = "";
    quantidade:  number = 0;
    categoria: string = "";

    constructor(id: number = 0, nome: string = "", quantidade: number = 0, categoria: string = ""){
    this.id = id;
    this.nome = nome;
    this.quantidade = quantidade;
    this.categoria = categoria;  
    }
}