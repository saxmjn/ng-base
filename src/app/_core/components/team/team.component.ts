import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
// Project
import { RouterService } from 'src/app/_core/services/router.service';

@Component({
        selector: 'app-team',
        templateUrl: './team.component.html',
        styleUrls: ['./team.component.scss']
})

export class TeamComponent implements OnInit {
    directors = [
        {'name': 'Saksham Jain', src: 'https://pbs.twimg.com/profile_images/1139843963714564096/9L6hyr4n_400x400.jpg', email: 'sakshamjain.co@gmail.com', phone: '+919461515368', lastMessage: '', lastSeen: ''},
        {'name': 'Ayush Pranav', src: 'https://pbs.twimg.com/profile_images/573550170199064576/UTHkUppw_400x400.jpeg', email: '', phone: '', lastMessage: '', lastSeen: ''},
        {'name': 'Ayush Ranjan', src: 'https://pbs.twimg.com/profile_images/1370431028569903106/2O0eWzwN_400x400.jpg', email: '', phone: '', lastMessage: '', lastSeen: ''},
        {'name': 'Atul Priyadarshi', src: 'https://pbs.twimg.com/profile_images/1231816644592144384/2weVimj9_400x400.jpg', email: '', phone: '', lastMessage: '', lastSeen: ''}];
       
    members = [
        {'name': 'Clark Leyman', role: 'VP Engineering', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn0AjlLv_sp9U_tzA2B8h5lRJeQjocTbW43FCPyYnFjUi2eJXINW_bezibzUVLevVZQo4&usqp=CAU', email: 'sakshamjain.co@gmail.com', linkedin: '+919461515368', twitter: ''},
        {'name': 'Neena Bosh', role: 'VP Engineering', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoXnhBsUQW7YlFFEKF0ijb0jdAuXBYTTqgpA&usqp=CAU', email: 'sakshamjain.co@gmail.com', linkedin: '+919461515368', twitter: ''},
        {'name': 'Mark Vigri', role: 'VP Engineering', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxMFWspv7zFvUGbSMZLPyd8An3bhWRaIZEV_xHqeIyC97QzfdBgYG9ssry-pI1_JMVZk&usqp=CAU', email: 'sakshamjain.co@gmail.com', linkedin: '+919461515368', twitter: ''},
        {'name': 'Jonathan Col', role: 'VP Engineering', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOfhB3oPEuGxR9KpC0jwv-QH8CgAFo8wQ2Tur4az1dchcAuWjMLyECkPaArIxj32ZJGiU&usqp=CAU', email: 'sakshamjain.co@gmail.com', linkedin: '+919461515368', twitter: ''},
        {'name': 'Lupin Seb', role: 'VP Engineering', src: 'https://media1.s-nbcnews.com/i/newscms/2019_29/2936201/190619-joe_murphy-byline2436_341b585a5f99c3de69c34b262283c983.jpg', email: 'sakshamjain.co@gmail.com', linkedin: '+919461515368', twitter: ''},
        {'name': 'Amira Aluwhalia', role: 'VP Engineering', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7C_CzaxHicU7PSyHzV0E0wxeoUwre-XYkTHii1VzEygNgZSuQUE28A0MYbwbRejirD4&usqp=CAU', email: 'sakshamjain.co@gmail.com', linkedin: '+919461515368', twitter: ''},
        {'name': 'Neena Jain', role: 'VP Engineering', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn0AjlLv_sp9U_tzA2B8h5lRJeQjocTbW43FCPyYnFjUi2eJXINW_bezibzUVLevVZQo4&usqp=CAU', email: 'sakshamjain.co@gmail.com', linkedin: '+919461515368', twitter: ''},
        {'name': 'Ron Aghasti', role: 'VP Engineering', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10g2rTtpAHwynpVAMFRy0A0iBH26KBpoyUJ7P5_s8hFWvVmIq8iU7x8dY9d6qQAIhLQM&usqp=CAU', email: 'sakshamjain.co@gmail.com', linkedin: '+919461515368', twitter: ''},
        {'name': 'Sonia Fernandes', role: 'VP Engineering', src: 'https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2016/02/Headshot-Photography-London-1052.jpeg?fit=750%2C500&ssl=1', email: 'sakshamjain.co@gmail.com', linkedin: '+919461515368', twitter: ''},
        {'name': 'Monty Chadha', role: 'VP Engineering', src: 'https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-07.jpg', email: 'sakshamjain.co@gmail.com', linkedin: '+919461515368', twitter: ''},
    
    ];
        

    constructor(private router$:RouterService, private router: Router){
    }
    ngOnInit(): void {
    }
    goTo(route){
        this.router$.goto(route)
    }
}