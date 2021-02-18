import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  private REST_API_SERVER="http://localhost:3001/"

  constructor(private http: HttpClient) { }
      public sendGetRequest() {
        return this.http.get(this.REST_API_SERVER);
    }

}