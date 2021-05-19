import { Component, OnInit } from '@angular/core';

export interface Produto {
  codigo: string;
  nome: string;
  preco: number;
  descricao: string;
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public produtos: Produto[] = [
    { codigo: "PR01", nome: "Smart TV Samsung", preco: 3000, descricao: "Descrição do produto Smart TV Samsung" },
    { codigo: "PR02", nome: "Celular Motorola", preco: 1999, descricao: "Descrição do produto Celular Motorola" },
    { codigo: "PR03", nome: "Notebook Dell", preco: 4750, descricao: "Descrição do produto Notebook Dell" },
    { codigo: "PR04", nome: "Monitor LG", preco: 800, descricao: "Descrição do produto Monitor LG" },
    { codigo: "PR05", nome: "iPad", preco: 3450, descricao: "Descrição do produto iPad" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
