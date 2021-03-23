import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
// Project
import {StorageService} from '../services/storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private storage: StorageService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header from the service.
    let authHeader = null;
    if (this.storage.get('token')) {
      // authHeader = 'JWT <' + this.storage.get('token') + '>';
    }
    // Clone the request to add the new header.
    const authReq = req.clone({setHeaders: {Authorization: authHeader || 'abc'}});
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}
