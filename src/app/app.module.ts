import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TitleCasePipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AsyncPipe } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { InterceptorService } from './loader/interceptor.service';
import {MatButtonModule} from '@angular/material/button';
import { ScoreComponent } from './score/score.component';
import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
 
 
 

@NgModule({
  declarations: [AppComponent, ScoreComponent, QuizComponent, HomeComponent, NavbarComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatButtonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
