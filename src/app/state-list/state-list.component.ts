import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../state';
import { StateService } from '../state.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css'],
  providers: [TitleCasePipe],
})
export class StateListComponent implements OnInit {
  isLoading = false;
 
  states$: Observable<State[]> = new Observable();

  constructor(private statesService: StateService) {}

  visible: any = {};

  ngOnInit(): void {
    this.isLoading = true;
    this.fetchStates();
  }

  private fetchStates(): void {
    this.states$ = this.statesService.getStates();
    this.isLoading = false;
  }
 
}
