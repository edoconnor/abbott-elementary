import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../state';
import { StateService } from '../state.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [],
})
export class CarouselComponent implements OnInit {
  states$: Observable<State[]> = new Observable();

  constructor(private statesService: StateService) {}

  visible: any = {};

  ngOnInit(): void {
    this.fetchStates();
  }

  private fetchStates(): void {
    this.states$ = this.statesService.getStates();
  }
}
