import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/service/global.service';
import { BookChildComponent } from '../book-child/book-child.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  movieObj:any

  id:any
  tableName="movie"
  counter:number=0
  total:any
  tableN="booking"
  bmovie:any

  date: string[] = ["10/02/2023", "11/02/2023", "12/02/2023"]
  time: string[] = ["9:00am - 11:30am", "12:00pm - 2:30pm", "3:00pm - 5:30pm", "6:00pm - 8:30pm", "9:00pm - 11:30pm"]
  seat:string[]=["1","2","3","4","5","6","7","8","9","10"]


  @ViewChild(BookChildComponent) book:BookChildComponent | undefined
  increment(){
    this.counter++
    }
  
  decrement(){
    this.counter--
  }

  constructor(private activatedRoute:ActivatedRoute,private globalService:GlobalService, private router:Router){}
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((para)=>{
      this.id=para.get('id')
      console.log(">>>>>>" +this.id)
    })

    this.globalService.getRecord(this.tableName, this.id).subscribe((res)=>{
     // this.movieObj={...res}
      this.bmovie={...res}
      this.movieObj=this.bmovie.movie
      console.log(res)
    })
    
  }

  addData(data: any) {
    const bookObj = {
      mName:data.mName,
      date: data.date,
      time:data.time,
      seats:data.seats,
      gPrice:data.gPrice,
      sPrice:data.sPrice
    
    }
    console.log(bookObj)

    this.globalService.addRecords(this.tableN, bookObj).subscribe(() => {
      alert('Record added !')
      //this.router.navigate(['/crud/movie-dashboard'])
    })
  }
   
  
  

}
