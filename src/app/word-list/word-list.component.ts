import { Component, OnInit } from '@angular/core';
import {WordService} from '../shared/word.service';
@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {

  constructor(public wordService: WordService) { }
  wordArray = [];
  showDeletedMessage : boolean;
  searchText = "";
  ngOnInit() {
    this.wordService.getWords().subscribe(
      list=>{
        this.wordArray = list.map(
          item => {
            return{
            $key : item.key,
            ...item.payload.val()
            }
          }
        )
      }
    );
  }

  onDelete($key){
    if(confirm('Are you sure to delete this record?')){
      this.wordService.deleteWords($key);
      this.showDeletedMessage = true;
      setTimeout(()=> this.showDeletedMessage = false, 3000);
    }
  }

  filterCondition(wordObj){
    return wordObj.word.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

}
