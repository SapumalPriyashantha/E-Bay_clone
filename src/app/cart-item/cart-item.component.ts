import { Component, OnInit } from '@angular/core';
import { Item } from '../dto/item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  item = new Item("Ioo1",
                  "https://i.ebayimg.com/thumbs/images/g/BPUAAOSwLbNk6M18/s-l300.webp",
                  "White Shirts",
                  4 ,
                  299,
                  5);

  constructor() { }

  ngOnInit(): void {
  }

}
