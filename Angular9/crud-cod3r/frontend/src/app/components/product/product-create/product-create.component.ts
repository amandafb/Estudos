import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  // exemplo de binding de atributo
  // propLegal = 'qualquer' 

  product: Product = {
    name: '',
    price: null!,
  }

  constructor(
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      // com o método subscribe será notificado quando a resposta chegar
      // quando o produto for criado, exibirá a mensagem e redircionará para a página de produtos
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
  // exemplo de binding de evento
  // fazerAlgo(): void {
  //   console.log('Fez algo!')
  // }
}
