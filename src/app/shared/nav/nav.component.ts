import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navItem: Array<object>;

  constructor() { }

  ngOnInit() {
    this.navItem = [{
      "id": "home",
      "name": "Home",
      "link": "../home"
    },
    {
      "id": "contact",
      "name": "Contact Us",
      "link": "../contact"
    }
    ]
  }

}
