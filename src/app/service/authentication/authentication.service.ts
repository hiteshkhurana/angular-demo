import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { apiConstants } from '../../constants/core.constants';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http, private router: Router) { }

  authenticate(username: string, password: string){
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(apiConstants.baseUrl + '/login', options)
        .map((response:Response) => {
          let user = response.json();
          
          if (user && user.token){
            sessionStorage.setItem('accessToken', `OAuth${user.accessToken}`);
          }
        })
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  logout(){
    let token = sessionStorage.getItem('accessToken');
    let headers = new Headers(
      {'Content-type': 'application/json', 'Authorization': token}
    );
    let options = new RequestOptions({headers: headers});

    return this.http.post(apiConstants.baseUrl + apiConstants.userUrl + '/logout', options)
        .map(() => {
          sessionStorage.clear();
          //not authenticated then return to login
          this.router.navigate(['/login']);
        });
  }

}

