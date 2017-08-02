import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { apiConstants } from '../../constants/core.constants';

@Injectable()
export class AccountDetailService {

  constructor(private http: Http) { }

  getAccountDetail(){
    let headers = new Headers(
      {'Content-type': 'application/json'}
    );
    let options = new RequestOptions({headers: headers});

    return this.http.get(apiConstants.apiUrl + '/accountDetail', options)
        .map((rs:Response) => rs.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
