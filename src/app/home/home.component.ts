import { Component, OnInit } from '@angular/core';

import { CoreService } from '../core/service/core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  accountDetails:Array<Object>;
  constructor(private coreService: CoreService) { }

  ngOnInit():void {
    this.coreService.getAccountDetail()
        .subscribe(
          accountDetails => {
            this.accountDetails = accountDetails;
          },
          err => {
            console.log(err);
          }
        )
  }

}
