import { Component, OnInit,Input } from '@angular/core';
import { User } from './user.model'
import { HttpClient } from '@angular/common/http'

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

  showUserValue: boolean = false;

  twoWayBinding: string = "Default Value"

  searchName : string;
  response : any;

  constructor(private http: HttpClient)
   {

    }

  ngOnInit() {
  }

  showUser()
  {     
    this.showUserValue = !this.showUserValue

  }

  getData(){

    this.http.get('https://api.github.com/users/'+ this.searchName).subscribe(
      (response)=>{
        this.response = response
        console.log(this.response)
      }
    )

  }

}
