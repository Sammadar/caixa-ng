import { Component } from '@angular/core';
import { Produto } from '../../../models/produto';
import { FormsModule } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-cadastro-produto',
  imports: [FormsModule],
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.css'
})
export class CadastroProdutoComponent {
  proximoId: number = 0;
  idParaEditar?: number;

  nome: string = "";
  produtos: Array<Produto> = [];
  categoria: any;

  salvarProduto() {
    if (this.nome.length < 3) {
      alert("Nome deve conter no mínimo 3 caracteres")
      return;
    }
    if (this.nome.length > 30) {
      alert("Nome deve conter no máximo 30 caracteres")
    }

    if (this.idParaEditar == undefined) {
      this.cadastrarProduto();
    } else {
      this.editarProduto();
    }

    this.nome, this.categoria= "";
    
  }

  editarProduto() {
    let indiceProduto = this.produtos.findIndex(x => x.id == this.idParaEditar);
    this.produtos[indiceProduto].nome = this.nome;
    this.produtos[indiceProduto].categoria = this.categoria;
    this.idParaEditar = undefined;
  }

  cadastrarProduto() {
    this.proximoId++;
    let produto = new Produto(this.proximoId, this.nome, this.categoria);
// debugger
    this.produtos.push(produto);
    // alert(this.nome);
  }

  apagar(produto: Produto) {
    let confirmacao = confirm(`Deseja realmente apagar o produto '${produto.nome}'?`)
    // Buscando o indice da receita filtrando por id da receita que foi selecionada
    let indiceProduto = this.produtos.findIndex(x => x.id == produto.id);
    // removendo a receita da lista receitas utilizando indice, removendo 1 elemento da lista
    this.produtos.splice(indiceProduto, 1);
  }

  editar(produto: Produto) {
    this.nome = produto.nome;
    this.idParaEditar = produto.id;
    this.categoria = produto.categoria;
  }
}
