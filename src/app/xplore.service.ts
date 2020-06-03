import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XploreService {

  constructor(private http: HttpClient) { }

  customerurl: string = 'http://localhost:8080/getcustomers';
  //proxycustomerurl = "https://cors-anywhere-eu.herokuapp.com/";
  getCustomers(): Observable<any> {
    return this.http.get(this.customerurl);
  }
}
