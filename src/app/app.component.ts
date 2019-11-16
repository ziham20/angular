import { Component } from '@angular/core';
import { User } from './bindings/user.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics';

   user : User

  constructor()
  {
    this.user =  new User();
    this.user.name = "Ziham Zuhair"
    this.user.designation = "Software engineer"
    this.user.phone =  [ '0775772335', '0775502898']
  }

}
