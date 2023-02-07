import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State } from './state';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  url = 'https://mysterious-caverns-84465.herokuapp.com';

  constructor(private http: HttpClient) { }

  getStates() {
    return this.http.get<State[]>(`${this.url}/states`);
  }
}
