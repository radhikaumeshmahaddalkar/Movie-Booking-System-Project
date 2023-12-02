import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/service/global.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userData:any
  tableName="users"
  term:any
  order:string='id';
  reverse:boolean=false;
  register:any

  constructor(private globalservice:GlobalService){}
  ngOnInit(): void {
    let a= this.globalservice.getRecords(this.tableName)
    a.subscribe((res)=>{
      console.log(res)
      this.register=res
      this.userData=this.register.users

    })
  }

  delete(id:any){  
    this.globalservice.deleteRecord(this.tableName, id).subscribe(()=>{
      alert('Record deleted successfully')
    })
  }
  changeOrder(){
    this.reverse=! this.reverse;
  }

}
