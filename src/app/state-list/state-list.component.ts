import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../state';
import { StateService } from '../state.service';
import { MaterialDesignModule } from '../material-design/material-design.module';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css'],
})
export class StateListComponent implements OnInit {
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
