import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {ProductsComponent} from "./products/products.component";
import {PacketsComponent} from "./products/packets/packets.component";
import {ProductpageComponent} from "./products/productpage/productpage.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {
    path:'',
    component: MainComponent
  },
  {
    path:'products',
    component: ProductsComponent
  },
  {
    path:'packets',
    component: PacketsComponent
  },
  {
    path:'product/:id',
    component: ProductpageComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: '404',
  },
  {
    path: '404',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // auto scroll-up
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
