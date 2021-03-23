import { JwtHelperService } from "@auth0/angular-jwt";
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {BehaviorSubject} from 'rxjs';

// Project
import { StorageService } from './storage.service';
import {environment} from '../../../environments/environment.prod';
import { RawService, ApiService } from './api.service';
import { RouterService } from './router.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

const jwtHelper = new JwtHelperService();

@Injectable()

export class AuthService{
    // private bSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
    // AUTH_STATE: Observable<boolean> = this.bSubject.asObservable();

    AUTH_TOKEN: string;
    AUTH_URL = `${environment.baseUrl}/api`;
    currentURL:string = '/';

    constructor(private storageService: StorageService, private http: HttpClient, private raw: RawService, private router$: RouterService, private router: Router, private user$: UserService, private auth$:ApiService ){
        this.load();
    }

    load() {
        this.AUTH_TOKEN = this.storageService.get('token');
     }
    //
    verifyUserEmail(email) {
        return this.raw.get(`${this.AUTH_URL}/authe/auth/?email=${email}`);
    } 
    signupEmail(context) {
        return this.raw.put(`${this.AUTH_URL}/authe/email-auth/`, context)
    }
    signInEmail(context){
        return this.raw.post(`${this.AUTH_URL}/authe/email-auth/`, context);
    }
    getOTP(email){
        return this.raw.get(`${this.AUTH_URL}/general/otp/?email=${email}`);
    }
    //
    verifyUserWithPhone(phone) {
        return this.raw.get(`${this.AUTH_URL}/authe/auth/?phone=${phone}`);
    } 
    signUpPhoneOTP(context){
        return this.raw.put(`${this.AUTH_URL}/authe/phone-otp-auth/`, context);
    }
    signInPhoneOTP(context){
        return this.raw.post(`${this.AUTH_URL}/authe/phone-otp-auth/`, context);
    }
    getOTPPhone(phone){
        return this.raw.get(`${this.AUTH_URL}/general/otp/?phone=${phone}`);
    }
    //
    logout(value){
        this.storageService.remove('token');
        if (value == 'gomama') {
            this.router$.goto('');
        } else {
            this.router$.goto('shop', value)
        }
    }
    postSignIn(response, value){
        if (response['data']['token']) {
            this.storageService.set('token', response['data']['token']);
            this.AUTH_TOKEN = response['data']['token'];
            if(value == 'gomama'){
                this.router$.goto('auth');
                this.user$.load();
            } else {
                this.router$.goto('shop', value)
            }
            return true;
          } else { return false; }
    }
    redirect(){
        this.router$.goto('app-dashboard');
        this.user$.load();
    }
    passwordReset(context){
        return this.auth$.post(`${this.AUTH_URL}/authe/password-reset/`, JSON.stringify(context) );
    }
    passwordSet(context){
        return this.auth$.post(`${this.AUTH_URL}/authe/password-set/`, JSON.stringify(context));
    }
    passwordForgot(context) {
        return this.auth$.post(`${this.AUTH_URL}/authe/password-forgot/`, JSON.stringify(context));
    }
    sendAnyOTP(context){
        return this.auth$.put(`${this.AUTH_URL}/user/phone-verification/`, context)
    }
    verifyAnyOTP(context){
        return this.auth$.put(`${this.AUTH_URL}/user/phone-update/`, context)
    }
    //For Auth Guard
    isLoggedIn(){
        return !! this.storageService.get('token');
    }
}