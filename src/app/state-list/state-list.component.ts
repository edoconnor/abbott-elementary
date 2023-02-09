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
  answered = false;
  selectedChoice: string;
  btnStyle: {};
  btnMessage: string;
  score = 0;
  timeLeft = 60;
  interval;

  constructor(
    private statesService: StateService,
    public loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.statesService.getStates().subscribe((states) => {
      this.states = this.selectRandomQuestions(states, 10);
    });
  }

  selectRandomQuestions(questions: any[], count: number): any[] {
    const randomQuestions = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * questions.length);
      randomQuestions.push(questions[randomIndex]);
      questions.splice(randomIndex, 1);
    }
    return randomQuestions;
  }

  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer(): void {
    clearInterval(this.interval);
  }

  compareSelection(choice: string, capital: string) {
    this.selectedChoice = choice;

    const currentState = this.states.find((state) => state.capital === capital);
    currentState.answered = true;

    if (this.selectedChoice.toLowerCase() === capital.toLowerCase()) {
      this.score += 10;
      this.btnStyle = {
        'background-color': 'green',
        color: 'white',
        'font-weight': 'bold',
      };
      this.btnMessage = 'Correct!';
    } else {
      this.btnStyle = {
        'background-color': 'red',
        color: 'white',
        'font-weight': 'bold',
      };
      this.btnMessage = 'Incorrect!';
    }
    if (this.states.every((state) => state.answered)) {
      this.stopTimer();
    }
  }
}
