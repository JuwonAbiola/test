import { Component, OnInit } from '@angular/core';
import  *  as  orderitems  from  '../../assets/data/order_item.json';
import  *  as  orders  from  '../../assets/data/order.json';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderitems: any = orderitems.default.data;
  orders: any = orders.default.data.data;

  constructor() { }

  ngOnInit() {
    console.log('order_items',this.orderitems)
    console.log('orders',this.orders)
  }
  getTotalAmount(info) {
    return info.map(t => t["amount"]).reduce((sum, v) => (sum += v), 0);
  }
}
