import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/service/global.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  tableName = "users"

  constructor(private service: GlobalService, private router: Router) { }
  ngOnInit(): void {
  }
  addData(data: any) {
    console.log(data)
    const userObj = {
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      mobNo: data.mobNo,
      pass: data.pass,
      addr: data.addr
    }

    this.service.addRecords(this.tableName, userObj).subscribe(() => {
      alert('Records added !')
    })
  }
}