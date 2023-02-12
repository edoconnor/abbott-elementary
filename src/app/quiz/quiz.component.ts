import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { State } from '../state';
import { StateService } from '../state.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  @ViewChild('carouselControlNext', { static: false })
  carouselControlNext: ElementRef;

  allStates: any[];
  questionsPerQuiz: number;
  states: State[];
  currentQuestion: number;
  score: number;
  selectedChoice: string;
  btnStyle;
  btnMessage;

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.stateService.getStates().subscribe((states) => {
      this.states = this.selectRandomQuestions(states, 3);
      this.resetQuiz()
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
    const currentState = this.states[this.currentQuestion];
    if (choice.toLowerCase() === currentState.capital.toLowerCase()) {
      this.score++;
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
    this.carouselControlNext.nativeElement.click();
    this.currentQuestion++;
  }

  isQuizComplete() {
    return this.currentQuestion === this.states.length;
  }
  resetQuiz() {
    this.score = 0;
    this.currentQuestion = 0;
    this.stateService.getStates().subscribe((states) => {
      this.states = this.selectRandomQuestions(states, 5);
      console.log(this.states);
    });
  }
}
