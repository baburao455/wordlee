import { Injectable } from '@angular/core';
import{FormControl, FormGroup, Validators} from '@angular/forms';
import{AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(public firebase : AngularFireDatabase,public http: HttpClient) { }
  wordList : AngularFireList<any>;
  wordNikRandomUrl = 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=0d0b4a5ca13a59b563002073dc90c794a2efad5e3b00ece89';
  form = new FormGroup({
    $key : new FormControl(null),
    word: new FormControl('', Validators.required)
  })
  resp :any;
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
  getRandomWord(){
    console.log('randomWord')
    return this.http.get(this.wordNikRandomUrl).pipe(map(
      (res:any) =>{
        console.log(res)
        return res.string;
      }
    ));
  }
}
