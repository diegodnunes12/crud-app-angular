import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.interface';



@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  public produtos: Produto[]

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtos = this.produtoService.getProdutos();
  }

}
