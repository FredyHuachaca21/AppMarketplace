import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }


  goToCategory(){
    this.router.navigate(['dashboard','edit-cat']);
  }
}
