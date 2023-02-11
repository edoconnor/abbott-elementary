import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateListComponent } from './state-list/state-list.component';
import { ScoreComponent } from './score/score.component';
import { QuizComponent } from './quiz/quiz.component';
 

const routes: Routes = [
  { path: '', redirectTo: 'quiz', pathMatch: 'full' },
  { path: 'quiz', component: QuizComponent },
  { path: 'states', component: StateListComponent },
  { path: 'results', component: ScoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
