import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/service/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LogData:any
  uemail:any
  upass:any
  userData:any
  user:any

  constructor(private service:GlobalService, private router:Router) {}  //Dependency Injection

  ngOnInit(): void {}

  getData(){
    this.service.getRecords("users").subscribe((res)=>{
      this.user=res
      
      console.log(this.user)
        this.userData=this.user.users
        console.log(this.userData)

        const data=this.userData.filter((value:any)=>{   
        return((value.email==this.uemail) && (value.pass==this.upass))
      })
      
      if(data.length > 0){
        this.service.signIn(this.uemail)
        this.router.navigate(['/MovieDescription'])
      }
      else{
        alert("Invalid Credentials")
        this.uemail=""
        this.upass=""
      }
    })
  }
}
