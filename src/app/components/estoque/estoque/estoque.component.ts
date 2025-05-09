import { Component } from '@angular/core';
import { EstoqueCadastroComponent } from '../estoque-cadastro/estoque-cadastro.component';
import { Estoque } from '../../../models/estoque';
import { max, reduce } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  imports: [EstoqueCadastroComponent, FormsModule],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.css'
})
export class EstoqueComponent {
  estoque: Array<Estoque> = new Array();
  estoqueTable: Array<Estoque> = new Array();

  idAtual: number = 0;

  busca: string = "";

  estoque: Estoque;

  constructor() {
    this.estoque = new Estoque();
  }

  
  ngOnInit() {
    this.carregarEstoqueDoLocalStorage();
  }

  registrarEstoqueSalvo() {
    if (this.estoque.id === 0)
      this.cadastrar();
    else
      this.editar();

    this.estoque = new Estoque();
    this.salvarEmLocalStorage();
    this.listarEstoqueFiltrando();
  }

  private editar(){
    let indiceEstoque = this.estoque.findIndex(x => x.id == this.estoque.id);
    this.estoque[indiceEstoque].nome = this.estoque.nome;
    this.estoque[indiceEstoque].quantidade = this.estoque.quantidade;
    this.estoque[indiceEstoque].categoria = this.estoque.categoria;
  }

  private cadastrar() {
    this.idAtual++;

    this.estoque.id = this.idAtual;


    this.estoque.push(this.estoque);
  }

  listarEstoqueFiltrando(){
    if(!this.busca)
      this.estoqueTable = this.estoque;

    this.estoqueTable = this.estoque
      .filter(estoque => estoque.nome.toLowerCase().includes(this.busca.toLowerCase()) || estoque.categoria == this.busca);
  }

  salvarEmLocalStorage() {
    
    const estoqueString = JSON.stringify(this.estoque);
  
    localStorage.setItem("estoque", estoqueString);
  }

  carregarEstoqueDoLocalStorage() {
    
    const estoqueString = localStorage.getItem("estoque");
   
    if (estoqueString === null)
      
      return;
 
    this.estoque = JSON.parse(estoqueString);
    this.listarEstoqueFiltrando();
   
    Array.from(this.estoque).forEach(estoque => {
      if (estoque.id > this.idAtual) {
        this.idAtual = estoque.id
      }
    });
  }

  apagar(estoque: Estoque) {
    let confirmacao = confirm(`Deseja realmente apagar o estoque'${estoque.nome}'?`);
    if (confirmacao !== true)
      return;

    let indiceEstoque = this.estoque.findIndex(x => x.id == estoque.id);
    this.estoque.splice(indiceEstoque, 1);

    this.salvarEmLocalStorage();
    this.listarEstoqueFiltrando();
  }

  preencherCamposParaEditar(estoque: Estoque) {
    this.estoque = new Estoque();
    this.estoque.id = estoque.id;
    this.estoque.nome = estoque.nome;
    this.estoque.quantidade = estoque.quantidade;
    this.estoque.categoria = estoque.categoria;
  }
}
