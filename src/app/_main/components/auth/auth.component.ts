import {Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/_core/services/user.service';
import { AuthService } from 'src/app/_core/services/auth.service';
import { RouterService } from 'src/app/_core/services/router.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
    state: string = 'register-phone';
    businessSlug: any;
    username: string;
    details = {'name': null, 'phone': '', otp: [null, null, null, null, null]};
    events =  {prompt: null, prompt_text: null, loader: null};
    constructor(private route: ActivatedRoute, private user$: UserService, private auth$: AuthService, private router$: RouterService){
    }
    ngOnInit() {
        this.businessSlug = this.route.snapshot.paramMap.get('businessSlug');
    }
    goTo(route, extra=null) {
        this.router$.goto(route, extra);
    }
    validate() {
        if (this.state == 'register-phone' && !this.details.name) {
            this.onError('Please enter your name')
            return false;
        } else if (this.state == 'register-phone' && this.details.phone.toString().length != 10) {
            this.onError('Please enter a valid 10 digit phone number')
            return false;
        }
        return true;
    }
    toggleState(action) {
        console.log(this.businessSlug);
        this.events = {prompt: null, prompt_text: null, loader: null};
        if (!this.validate()) {
            return;
          }
        if (action == 'goto-phone') {
            this.state = 'register-phone';
        }
        else if (action == 'register-get-otp') {
            this.events.loader = true;
            this.auth$.getOTPPhone(this.details.phone).subscribe(res => {
                this.verifyUserRegistration();
            }, err => {
                this.onError(err['message']);
            })
        } else if (action == 'register-confirm' && this.username) {
            this.events.loader = true;
            this.auth$.signInPhoneOTP({'phone_number': this.details.phone.toString(), 'otp': this.details.otp.join('')}).subscribe(res => {
                this.auth$.postSignIn(res, this.businessSlug);
            }, err => {
                this.onError('Authentication Error');
            });
        } else if (action == 'register-confirm' && !this.username) {
            this.events.loader = true;
            const context = {'phone_number': this.details.phone.toString(), 'otp':  this.details.otp.join('')};
            if (this.details.name) {
                const name = this.details.name.split(' ')
                context['first_name'] = name[0];
                context['last_name'] = name.slice(1).join(' ');
            }
            this.auth$.signUpPhoneOTP(context).subscribe(res => {
                this.auth$.postSignIn(res, this.businessSlug);
            }, err => {
                this.onError('Authentication Error');
            })
        }
    }
    verifyUserRegistration() {
        this.auth$.verifyUserWithPhone(this.details.phone).subscribe(res => {
            this.username = res['data']['username'];
            this.onEventReset();
            this.state = 'register-otp';
        }, err => {
            this.onError(err['message']);
        });
    }
    onError(msg) {
        this.events.prompt_text = msg;
        this.events.prompt = 'error';
        this.events.loader = false;
    }
    onEventReset() {
        this.events = {prompt: null, prompt_text: null, loader: false};
    }
}