import { Component, OnInit,Input } from '@angular/core';
import { User } from './user.model'

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  firstName: string = "Ziham";

  @Input('name') lastName: string;

  @Input('test') test :string = "Test"  //default value is test and this will get replaced by the input value

  user : User;

  @Input('user')  userObject: User

  constructor()
   {

    }

  ngOnInit() {
  }

}
