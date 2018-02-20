import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarrinhoDeComprasPage } from './carrinho-de-compras';

@NgModule({
  declarations: [
    CarrinhoDeComprasPage,
  ],
  imports: [
    IonicPageModule.forChild(CarrinhoDeComprasPage),
  ],
})
export class CarrinhoDeComprasPageModule {}
