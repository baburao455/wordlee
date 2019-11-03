import { Injectable } from '@angular/core';
import{FormControl, FormGroup, Validators} from '@angular/forms';
import{AngularFireDatabase, AngularFireList} from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private firebase : AngularFireDatabase) { }
  wordList : AngularFireList<any>;
  form = new FormGroup({
    $key : new FormControl(null),
    word: new FormControl('', Validators.required)
  })

  getWords(){
    this.wordList = this.firebase.list('words');
    console.log(this.wordList)
    return this.wordList.snapshotChanges();
  }

  insertWords(wordObj){
    console.log(wordObj.word)
    this.wordList.push({
      word: wordObj.word
    });
  }

  populateForm(wordObj){
    this.form.setValue(wordObj);
  }

  updateWords(wordObj){
    console.log(wordObj.word)
    this.wordList.update(wordObj.$key, {
      word:wordObj.word
    });
  }

  deleteWords($key:string){
    this.wordList.remove($key);
  }
}
