import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/service/global.service';

@Component({
  selector: 'app-register-edit',
  templateUrl: './register-edit.component.html',
  styleUrls: ['./register-edit.component.css']
})
export class RegisterEditComponent implements OnInit{

  userObj:any
  id:any
  tableName="users"
  eregister:any
  

  constructor(private activatedRoute:ActivatedRoute,private globalService:GlobalService, private router:Router){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((para)=>{
      this.id=para.get('id')
      console.log(">>>>>>" +this.id)
    })

    this.globalService.getRecord(this.tableName, this.id).subscribe((res)=>{
      this.eregister={...res}
      this.userObj=this.eregister.users
      console.log(res)
    })
    
  }

  putData(data:any){
    const temp={
      id: this.id,
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      mobNo: data.mobNo,
      pass: data.pass,
      addr: data.addr
    }
    
    this.globalService.updateRecord(this.tableName, temp).subscribe(()=>{
      alert('Record Updated Successfully')
      this.router.navigate(['/dashboard'])
    })
  }


}
