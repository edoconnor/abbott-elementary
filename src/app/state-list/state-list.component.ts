import { Component, OnInit } from '@angular/core';
import { State } from '../state';
import { TitleCasePipe } from '@angular/common';
import { LoaderService } from '../loader/loader.service';
import { StateService } from '../state.service';
import { SharedDataService } from '../shared-data.service';
import { Router } from '@angular/router';

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
  timeLeft = 10;
  interval;
  answeredQuestions = 0;
  randomQuestions = [];
  currentIndex = 0;
  questionCount = 3;
  startTime: number;
 

  constructor(
    private statesService: StateService,
    public loaderService: LoaderService,
    private sharedDataService: SharedDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.statesService.getStates().subscribe((states) => {
      this.states = this.selectRandomQuestions(states, 3);
      console.log(this.states);
      
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

  compareSelection(choice: string, capital: string) {
    this.selectedChoice = choice;
    this.answeredQuestions++;

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

    const answeredQuestions = this.states.filter(
      (state) => state.answered === true
    );

    this.answeredQuestions = answeredQuestions.length;

    if (answeredQuestions.length === this.questionCount) {
      
       
      this.router.navigate(['/results']);
    } else {
 
      const nextLink = document.querySelector('.carousel-control-next');
      
      setTimeout(() => {
        nextLink.dispatchEvent(new MouseEvent('click'));
      }, 250);
    }
  }

  resetGame(): void {
    this.score = 0;
    this.timeLeft = 10;
    this.statesService.getStates().subscribe((states) => {
      this.states = this.selectRandomQuestions(states, 3);
      console.log(this.states);
    });
  
  }
}
