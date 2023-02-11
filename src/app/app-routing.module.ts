import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateListComponent } from './state-list/state-list.component';
import { ScoreComponent } from './score/score.component';
 

const routes: Routes = [
  { path: '', redirectTo: 'states', pathMatch: 'full' },
  { path: 'states', component: StateListComponent },
  { path: 'results', component: ScoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
