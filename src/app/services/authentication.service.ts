import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticateUser(data) {

    return this.httpClient.post('http://localhost:3000/auth/v1/', data)
      .map(response => {
        let token;
        if (response.hasOwnProperty('token')) {
          token = response['token'];
        } else {
          token = null;
        }

        return token;
      });
  }

  setBearerToken(token) {
    localStorage.setItem('bearerToken', token);
  }

  getBearerToken() {
    return localStorage.getItem('bearerToken');
  }

  removeBearerToken() {
    localStorage.removeItem('bearerToken');
  }

  isUserAuthenticated(token): Promise<boolean> {

    const httpOptions = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };
    const resp = this.httpClient.post('http://localhost:3000/auth/v1/isAuthenticated', {}, httpOptions)
      .map(response => {
        if (response) {
          return response['isAuthenticated'];
        }
        return false;
      });
    return resp.toPromise();

  }
}
