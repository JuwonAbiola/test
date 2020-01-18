import { Component, OnInit } from '@angular/core';
import  *  as  data  from  '../../assets/data/order.json';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  orders: any = data.default.data.data;

  constructor() { }

  ngOnInit() {
    console.log('opop',this.orders)

  }
  getTotalAmount(info) {
    return info.map(t => t["amount"]).reduce((sum, v) => (sum += v), 0);
  }
}
