import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/service/global.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  tableName = "movie"

  constructor(private globalService: GlobalService, private router: Router) { }
  ngOnInit(): void {
  }

  addData(data: any) {
    const movieObj = {
      mName:data.mName,
      desc: data.desc,
      gPrice:data.gPrice,
      sPrice:data.sPrice
    }

    this.globalService.addRecords(this.tableName, movieObj).subscribe(() => {
      alert('Record added !')
      this.router.navigate(['/crud/movie-dashboard'])
    })
  }

}
