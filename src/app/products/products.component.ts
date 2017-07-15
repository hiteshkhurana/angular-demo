import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: Array<object>;
  constructor() { }

  ngOnInit() {
    this.productList = [{
      "id": "p1",
      "name": "Product 1"
    },
    {
      "id": "p2",
      "name": "Product 2"
    },
    {
      "id": "p3",
      "name": "Product 3"
    }
    ]
  }

}
