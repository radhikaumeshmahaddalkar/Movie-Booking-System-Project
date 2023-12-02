import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/service/global.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  movieObj:any
  id:any
  tableName="movie"
  emovie:any

  constructor(private activateRoute:ActivatedRoute, private globalService:GlobalService, private router:Router){}

  ngOnInit(): void {

    this.activateRoute.paramMap.subscribe((para)=>{
      this.id=para.get('id')
      console.log(">>>>>>" +this.id)
    })

    this.globalService.getRecord(this.tableName, this.id).subscribe((res)=>{
      this.emovie={...res}
      this.movieObj=this.emovie.movie
      console.log(res)
    })
    
  }

  putData(data:any){
    const temp={
      id: this.id,
      mName: data.mName,
      desc: data.desc,
      gPrice: data.gPrice,
      sPrice: data.sPrice
    }
    
    this.globalService.updateRecord(this.tableName, temp).subscribe(()=>{
      alert('Record Updated Successfully')
      this.router.navigate(['crud/movie-dashboard'])
    })
  }

}
