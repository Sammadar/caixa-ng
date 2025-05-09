import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Estoque } from '../../../models/estoque';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estoque-cadastro',
  imports: [FormsModule],
  templateUrl: './estoque-cadastro.component.html',
  styleUrl: './estoque-cadastro.component.css'
})
export class EstoqueCadastroComponent {
  @Output() salvarEvento = new EventEmitter<void>();

  @Input() estoque?: Estoque;
  
  salvar() {
    if(this.isFormValid() == false)
      return;

    this.salvarEvento.emit();
  }

  private isFormValid(){
    if (this.estoque?.nome.trim() == ""){
      alert("Nome deve ser preenchido")
      return false;
    }
    
    if(this.estoque?.nome.trim().length! < 3){
      alert("Nome deve conter no mínimo 3 caracateres")
      return false;
    }

    if (this.estoque?.quantidade.trim() == ""){
      alert("Quantidade deve ser preenchido")
      return false;
    }
    
    if (this.estoque?.categoria.trim() == ""){
      alert("Categoria deve ser selecionado!")
      return false;
    }
    return true
  }
}
