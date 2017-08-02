import { Component, OnInit } from '@angular/core';

import { AccountDetailService } from '../service/account-detail/account-detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  accountDetails:Array<Object>;
  constructor(private accountDetailService: AccountDetailService) { }

  ngOnInit():void {
    this.accountDetailService.getAccountDetail()
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
