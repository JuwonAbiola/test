import { Component, OnInit } from '@angular/core';
import  *  as  data  from  '../../assets/data/buyer.json';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  buyer: any = data.default.data;

  constructor() { }

  ngOnInit() {
  }

}
