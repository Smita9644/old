import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-select-seat',
  templateUrl: './select-seat.component.html',
  styleUrls: ['./select-seat.component.css']
})
export class SelectSeatComponent implements OnInit {
Theater:any[];
screenId;
movieId
  constructor(private activerouter:ActivatedRoute,private router:Router,private service:MovieService) {
    activerouter.queryParams.subscribe((params)=>
    {
     this.screenId=params.screenid;
     this.movieId=params.movieid;
     alert(this.screenId);
     alert(this.movieId);
    })
this.getScreenDetailsById(this.screenId);

   }

  ngOnInit() {
  }

  getScreenDetailsById(id)
  {
    const Observable=this.service.getScrrenDetailsById(id);
    Observable.subscribe(Response=>{
      const result:any=Response;
      this.Theater=result.seats;
      console.log(this.Theater);
    })
  }
}
