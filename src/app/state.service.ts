import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State } from './state';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  url = 'https://state-backend.herokuapp.com/states';

  constructor(private http: HttpClient) { }

  getStates() {
    return this.http.get<State[]>(`${this.url}/states`);
  }
}
