import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/service/global.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  userData:any
  tableName="users"

  constructor(private globalservice:GlobalService){}
  ngOnInit(): void {
    
    let a= this.globalservice.getRecords(this.tableName)
    a.subscribe((res)=>{
      console.log(res)
      this.userData=res
    })
      
  }

  delete(id:any){  
    this.globalservice.deleteRecord(this.tableName, id).subscribe(()=>{
      alert('Record deleted successfully')
      
    })
  }
  
}
