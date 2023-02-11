import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  public score: number;
  public elapsedTime: number;

  constructor() { }
}
