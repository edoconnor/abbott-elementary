import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from '../shared-data.service';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  score: number;


  constructor(
    private router: Router,
    private sharedDataService: SharedDataService,
  ) { }

  ngOnInit() {
    this.score = this.sharedDataService.score;
}
}