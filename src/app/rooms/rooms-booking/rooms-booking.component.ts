import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit {

  id: number = 0;

  id$: Observable<number> = this.router.params.pipe(
      map(params => params['id'])
    );

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    // this.id$ = this.router.params.pipe(
    //   map(params => params['id'])
    // );
  }

}
