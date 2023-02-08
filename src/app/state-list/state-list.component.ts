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

  selectedChoice: string;

  btnStyle: {};

  btnMessage: string;

  constructor(
    private statesService: StateService,
    public loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.statesService.getStates().subscribe((states) => {
      this.states = states;
    });
  }
  logSelection(choice: string) {
    console.log(choice);
  }
  compareSelection(choice: string, capital: string) {
    this.selectedChoice = choice;
    if (choice.toLowerCase() === capital.toLowerCase()) {
      this.btnStyle = {'background-color': 'green', 'color': 'white', 'font-weight': 'bold'};
      this.btnMessage = "Correct!";
    } else {
      this.btnStyle = {'background-color': 'red', 'color': 'white', 'font-weight': 'bold'};
      this.btnMessage = "Incorrect!";
    }
  }
}
