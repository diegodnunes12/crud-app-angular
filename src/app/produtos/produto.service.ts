import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private produtos: Produto[] = [
    { codigo: "PR01", nome: "Smart TV Samsung", preco: 3000, descricao: "Descrição do produto Smart TV Samsung" },
    { codigo: "PR02", nome: "Celular Motorola", preco: 1999, descricao: "Descrição do produto Celular Motorola" },
    { codigo: "PR03", nome: "Notebook Dell", preco: 4750, descricao: "Descrição do produto Notebook Dell" },
    { codigo: "PR04", nome: "Monitor LG", preco: 800, descricao: "Descrição do produto Monitor LG" },
    { codigo: "PR05", nome: "iPad", preco: 3450, descricao: "Descrição do produto iPad" },
  ]

  constructor() { }

  public getProdutos(): Produto[] {
    return this.produtos;
  }

  public getProduto(produtoCodigo: string): Produto {
    return this.produtos.find(produto => produto.codigo === produtoCodigo);
  }

}
