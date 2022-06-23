import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-packets',
  templateUrl: './packets.component.html',
  styleUrls: ['./packets.component.css']
})
export class PacketsComponent implements OnInit {
  festivePackages: any;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts("FESTIVE_PACKAGE", 0).subscribe(item => {
      // @ts-ignore
      this.festivePackages = item['content'];
    });
  }
}
