import { DetalhesComponent } from './produtos/detalhes/detalhes.component';
import { ListaComponent } from './produtos/lista/lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'produtos', 
    component: ListaComponent, 
    children: [
      { path: ':codigo', component: DetalhesComponent }
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
