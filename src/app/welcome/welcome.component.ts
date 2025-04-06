import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  user:User={
    name:'Nikhil',
    email:'nikhil@gmail.com',
    age:25,
    mobile:9515139611,
  };

}
