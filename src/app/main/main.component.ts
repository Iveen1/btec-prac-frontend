import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  services: any;
  festivePackages: any;
  constructor(private productsService: ProductsService) { }


  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts("SERVICE", 0, 3).subscribe(item => {
      // @ts-ignore
      this.services = item['content'];
    });

    this.productsService.getProducts("FESTIVE_PACKAGE", 0, 3).subscribe(item => {
      // @ts-ignore
      this.festivePackages = item['content'];
    });
  }
}
