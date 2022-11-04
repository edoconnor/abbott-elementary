import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { State } from './state';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  next(state: State) {
    throw new Error('Method not implemented.');
  }
  private url = 'https://mysterious-caverns-84465.herokuapp.com';
  private states$: Subject<State[]> = new Subject();

  constructor(private httpClient: HttpClient) {}

  private refreshStates() {
    this.httpClient.get<State[]>(`${this.url}/states`).subscribe((states) => {
      this.states$.next(states);
    });
  }

  getStates(): Subject<State[]> {
    this.refreshStates();
    return this.states$;
  }

  getState(id: string): Observable<State> {
    return this.httpClient.get<State>(`${this.url}/states/${id}`);
  }

  createState(state: State): Observable<string> {
    return this.httpClient.post(`${this.url}/states`, state, {
      responseType: 'text',
    });
  }

  updateState(id: string, state: State): Observable<string> {
    return this.httpClient.put(`${this.url}/states/${id}`, state, {
      responseType: 'text',
    });
  }

  deleteState(id: string): Observable<string> {
    return this.httpClient.delete(`${this.url}/states/${id}`, {
      responseType: 'text',
    });
  }
}
