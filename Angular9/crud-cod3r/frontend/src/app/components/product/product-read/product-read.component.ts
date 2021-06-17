import { ProductService } from './../product.service'; //importando os serviços 
import { Product } from './../product.model'; // importando os produtos que vão para o atributo do componente
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products!: Product[] //atributo do componente. Esse atributo é do tipo array de produtos
  displayedColumns = ['id', 'name', 'price', 'action'] // colunas da tabela 
  // inicializando o atributo product depois que receber uma resposta do backend
  
  constructor(private productService: ProductService) { } //primeiro passo é injetar o produto service dentro do componente, declarando ele no construtor

  
  ngOnInit(): void {
    //metodo read() está vindo o service
    this.productService.read().subscribe(products => {
     //como resposta a requisição de leitura, vem a lista de produtos
      this.products = products
      console.log(products)
    })
  }

}
