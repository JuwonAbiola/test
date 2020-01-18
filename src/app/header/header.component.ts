import { Component, OnInit } from '@angular/core';
import { faSearch,faBell,faChevronCircleLeft,faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faSearch = faSearch;
  faBell = faBell;
  faChevronCircleLeft = faChevronCircleLeft;
  faChevronDown=faChevronDown;

  constructor() { }

  ngOnInit() {
  }

}
