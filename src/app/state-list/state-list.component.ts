import { Component, OnInit } from '@angular/core';
import { State } from '../state';
import { TitleCasePipe } from '@angular/common';
import { LoaderService } from '../loader/loader.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css'],
  providers: [TitleCasePipe],
})
export class StateListComponent implements OnInit {

  states: State[];

  isLoading = false;

  correctAnswer = false;

  constructor(
    private statesService: StateService,
    public loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.statesService.getStates().subscribe(states => {
      this.states = states;
    });
  }
  logSelection(choice: string) {
    console.log(choice);
  }
  compareSelection(choice: string, capital: string) {
    if (choice.toLowerCase() === capital.toLowerCase()) {
     alert("Great job! The correct answer is " + capital)
    } else {
      alert("Incorrect. The correct answer is " + capital);
    }
  }
  
}
