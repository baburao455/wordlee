import { Component, OnInit } from '@angular/core';
import {WordService} from '../shared/word.service';

@Component({
  selector: 'app-random-word',
  templateUrl: './random-word.component.html',
  styleUrls: ['./random-word.component.css']
})
export class RandomWordComponent implements OnInit {

  constructor(public wordService : WordService) { }

  ngOnInit() {
  }

}
