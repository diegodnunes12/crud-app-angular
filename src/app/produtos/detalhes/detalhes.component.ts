import { Produto } from './../../models/produto.interface';
import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  public produto: Produto;

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(request => 
      {
        this.produto = this.produtoService.getProduto(request.codigo);
      },
      error => console.log(error)
    );
  }

}
