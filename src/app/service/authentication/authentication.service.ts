import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { apiConstants } from '../../constants/core.constants';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  authenticate(username: string, password: string){
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.get(apiConstants.apiUrl + '/authentication', options)
        .map((response:Response) => {
          let user = response.json();
          
          if (user && user.token){
            sessionStorage.setItem('currentUser', user.token);
          }
        })
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}

