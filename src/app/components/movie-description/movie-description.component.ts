import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/service/global.service';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css']
})
export class MovieDescriptionComponent implements OnInit {
  userData:any
  tableName="movie"
  data:any

  constructor(private globalservice:GlobalService){}
  ngOnInit(): void {
    let a= this.globalservice.getRecords(this.tableName)
    a.subscribe((res)=>{
      console.log(res)
      this.data=res
      this.userData=this.data.movie

    })
    
  }
    
  }
  


