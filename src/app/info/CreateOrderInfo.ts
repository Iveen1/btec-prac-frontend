export class CreateOrderInfo {
  fcs: string;
  phoneNumber: string;
  products: any[];

  constructor(fcs: string, phoneNumber: string, products: any[]) {
    this.fcs = fcs;
    this.phoneNumber = phoneNumber;
    this.products = products;
  }
}
