import { ProdutoService } from './produto.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ListaComponent, DetalhesComponent, CadastroComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [ProdutoService]
})
export class ProdutosModule { }
