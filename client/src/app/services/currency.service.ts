import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  baseUrl: any = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCurrencies(): Observable<any> {
    return this.http.get(this.baseUrl + '/currency').pipe(map((res: any) => res));
  }
  
  getCurrenyData(code): Observable<any> {
    console.log(code)
    return this.http.get(`https://api.exchangeratesapi.io/latest?base=${code}`).pipe(map((res: any) => res));
  }
}
