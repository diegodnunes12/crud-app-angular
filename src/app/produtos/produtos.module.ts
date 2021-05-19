import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { CadastroComponent } from './cadastro/cadastro.component';



@NgModule({
  declarations: [ListaComponent, DetalhesComponent, CadastroComponent],
  imports: [
    CommonModule
  ]
})
export class ProdutosModule { }
