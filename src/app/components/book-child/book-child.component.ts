import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-child',
  templateUrl: './book-child.component.html',
  styleUrls: ['./book-child.component.css']
})
export class BookChildComponent implements OnInit {
  

  counter:number=0
  counterMsg:string="0"

  constructor(){}
  ngOnInit(): void { }

  incrementCounter(){
    this.counter ++
    this.counterMsg='Seats: '+ this.counter
  }

  decrementCounter(){
    this.counter--
    this.counterMsg='Seats: ' +this.counter
  }
}
