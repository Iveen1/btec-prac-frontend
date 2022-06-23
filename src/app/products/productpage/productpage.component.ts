import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CreateOrderInfo} from "../../info/CreateOrderInfo";
import {OrdersService} from "../../services/orders.service";

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  id: number = 0;
  product: any;
  form: any = {};
  isSuccess = false;
  isSubmitted = false;
  // @ts-ignore
  private createOrderInfo: CreateOrderInfo;
  constructor(private productsService: ProductsService, private ordersService: OrdersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(item => {
      if (item['id'] == undefined) {
        this.router.navigate(['404'])
      } else {
        this.id = item['id']
      }
    })
    this.getProduct();
  }

  onSubmit() {
    this.isSubmitted = true;
    const product = [{
      "productId": this.id,
      "amount": this.form.amount
    }];
    this.createOrderInfo = new CreateOrderInfo(
      this.form.fcs,
      this.form.phone,
      // @ts-ignore
      product
    );
    this.ordersService.createOrder(this.createOrderInfo).subscribe(
      data => {
        // @ts-ignore
        if (data.status == 200) {
          this.isSuccess = true;
        };
      }
    )
  }

  getProduct() {
    this.productsService.getProductById(this.id).subscribe(item => {
      // @ts-ignore
      this.product = item;
      console.log(this.product);
    });
  }
}
