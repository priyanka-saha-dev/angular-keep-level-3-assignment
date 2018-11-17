import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {
    console.log('Inside constructor for AuthenticationSvc');
  }

  authenticateUser(data) {
    console.log('In AuthenticationSvc authenticateUser : ', data);

    return this.httpClient.post('http://localhost:3000/auth/v1', data)
      .map(response => {
        console.log('response recieved in authenticateuser', response);
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

    console.log('In AuthenticationSvc isUserAuthenticated : ', token);
    const httpOptions = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };
    const resp = this.httpClient.post('http://localhost:3000/auth/v1/isAuthenticated', {}, httpOptions)
      .map(response => {
        console.log('response for isAuthenticatedUSer recieved', response);
        if (response) {
          return response['isAuthenticated'];
        }
        return false;
      });
    return resp.toPromise();

  }
}
