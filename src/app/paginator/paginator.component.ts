import { Component, OnInit, Output, Input,EventEmitter } from '@angular/core';
import { BlogPost } from '../other/blog-post';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {


  @Input() pageCount : number
  @Output() pageClicked = new EventEmitter<number>();
  
  pages : number[]



  constructor() { }

  ngOnInit() {

    this.pages = new Array(this.pageCount);

 
  }

  updatePageClicked(pageNumber)
  {
    this.pageClicked.emit(pageNumber)
  }
  

}
