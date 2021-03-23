import {Injectable} from '@angular/core';
import {StorageService} from './storage.service';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ApiService {
   private headers = new HttpHeaders().set('Content-Type', 'application/json');
   private options: any;
   constructor(private http: HttpClient) {
     this.options = {headers: this.headers};
   }
   get(url: string): Observable<any> {
     return this.http.get(url);
   }
   getB(url: string, body): Observable<any> {
    return this.http.get(url,body);
  }
   put(url: string, body: any): Observable<any> {
     return this.http.put(url, body, this.options);
   }
   post(url: string, body: any): Observable<any> {
     return this.http.post(url, body, this.options);
   }
   delete(url: string): Observable<any> {
     return this.http.delete(url, this.options);
   }
}

@Injectable()
export class RawService {
   private headers = new HttpHeaders({'Content-Type': 'application/json'});
   private options: any;
   constructor(private http: HttpClient) {
    this.options = {headers: this.headers};
   }
   get(url: string): Observable<any> {
     return this.http.get(url, this.options).pipe(response => response);
   }
   put(url: string, body: any): Observable<any> {
     return this.http.put(url, body, this.options).pipe(response => response);
   }
   post(url: string, body: any): Observable<any> {
     return this.http.post(url, body, this.options).pipe(response => response);
   }
   delete(url: string): Observable<any> {
     return this.http.delete(url, this.options).pipe(response => response);
   }
}
