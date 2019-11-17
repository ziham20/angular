import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  routes = [
    {linkName: 'profile', url:'profile'},
    {linkName: 'company', url:'company'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
