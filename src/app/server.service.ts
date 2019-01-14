import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http) { }

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://ng-http-test-97e96.firebaseio.com/server_data.json',
      servers,
      {headers: headers});
  }

  getServers() {
    return this.http.get('https://ng-http-test-97e96.firebaseio.com/server_data.json');
  }
}
