import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService, RawService} from '../../_core/services/api.service';
import {environment} from '../../../environments/environment.prod';
// import { User } from '../models/user';

@Injectable()
export class UserService {
    //Broadcasting The User Info Across Application
   data = new BehaviorSubject<any>({});
   cast = this.data.asObservable();
    //
    
   private USER_URL = `${environment.baseUrl}/api/user/profile`;
   private MANAGER_URL = `${environment.baseUrl}/api/manager`;
   private INSTAGRAM_URL = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=IGQVJXRk1aRzVFTlk0bmotcmtKQXlhamdPVGVyYWxfaEthMVpVYkVGNS1Kb3VmRjBSVVRoaWpqQmJMOW90LVFCbGkxUTV3eVZAYSHJqSmJUeTkxSThJc3lwWVp5c3NOSWx2NmdZAY3E0aVlGVGlBNnZANMwZDZD`;

   constructor(private auth$: ApiService, private raw$: RawService, private http: HttpClient){
       this.load();
   }

   getUser(){
        return this.auth$.get(`${this.USER_URL}/private/`);
   }

   updateUser(context){
       return this.auth$.post(`${this.USER_URL}/private/`, JSON.stringify(context) );
   }

   load(){
        this.getUser().subscribe(res => {
            this.data.next(res['data']);
        }, err => {
            console.log(err)
        } )
   }
   updateEmail(context) {
    return this.auth$.put(`${this.USER_URL}/email-update/`, JSON.stringify(context) );
   }
   updatePhone(context) {
    return this.auth$.put(`${this.USER_URL}/phone-update/`, JSON.stringify(context) );
   }
   getInstagram(insta_username) {
    return this.http.get(`${this.INSTAGRAM_URL}`);
   }
   getApps(action) {
    return this.auth$.get(`${this.MANAGER_URL}/application-list/?action=${action}`);
   }
   toggleApps(context) {
    return this.raw$.post(`${this.MANAGER_URL}/application-list/`, JSON.stringify(context));
   }
   getApp(adminAccountID) {
    return this.raw$.get(`${this.MANAGER_URL}/application/${adminAccountID}/`);
   }
   updateApp(adminAccountID, context) {
    return this.raw$.post(`${this.MANAGER_URL}/application/${adminAccountID}/`, JSON.stringify(context))
   }
}
