import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/service/global.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private service:GlobalService, private router:Router){}
  ngOnInit(): void {
  }

  signOut(){
    if(confirm('Are you sure you want to sign out ?'))
    {
      this.service.signOut()
      this.router.navigate(['/'])
    }
  }

}
