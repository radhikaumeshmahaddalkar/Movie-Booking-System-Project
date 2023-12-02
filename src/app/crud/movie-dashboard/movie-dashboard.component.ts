import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/service/global.service';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css']
})
export class MovieDashboardComponent implements OnInit {

  userData:any
  tableName="movie"
  term:any
  data:any
  order:string='mName';
  reverse:boolean=false;

  constructor(private globalService:GlobalService){}

  ngOnInit(): void {
    let a= this.globalService.getRecords(this.tableName)
    a.subscribe((res)=>{
      console.log(res)
      this.data=res
      this.userData=this.data.movie
    })
  }

  delete(id:any){  
    this.globalService.deleteRecord(this.tableName, id).subscribe(()=>{
      alert('Record deleted successfully')
      
    })
  }

  changeOrder(){
    this.reverse=! this.reverse;
  }

}
