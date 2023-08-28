import { Component } from '@angular/core';
import { Dummy_Data } from './dummy-class';
import { Item } from './dto/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = Dummy_Data;
  cartItems : Array<{code : String , qty : number}> = [];

  upDateCart(inCart : number, it : Item){
    const item = this.cartItems.find(i => i.code === it.code);

    if(item){
      item.qty = inCart;

      if(item.qty ===0){
        this.cartItems.splice(this.cartItems.indexOf(item),1);
      }

    }else{
      this.cartItems.push({code : it.code, qty : inCart});
    }
    console.log(this.cartItems);
  }

  getTotalItemCart(): number{
    let cartItemTotal = 0;
    this.cartItems.forEach(cartItem => cartItemTotal +=cartItem.qty);
    return cartItemTotal;
  }
}
