import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { State } from './state';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  url = '/assets/states.json';

  constructor(private http: HttpClient) {}

  getStates(): Observable<State[]> {
    return this.http.get<State[]>(this.url).pipe(
      catchError(() => {
        return of([]);
      })
    );
  }
}

// <---------------------------------------------->
// The code above uses a local copy of data rather
// than making an API call. See below for API call:
// <---------------------------------------------->

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { State } from './state';

// @Injectable({
//   providedIn: 'root'
// })
// export class StateService {
//   url = 'https://state-backend.herokuapp.com';

//   constructor(private http: HttpClient) { }

//   getStates() {
//     return this.http.get<State[]>(`${this.url}/states`);
//   }
// }