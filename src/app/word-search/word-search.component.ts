import {
  Component,
  OnInit
 } from '@angular/core';
 import {
  WordService
 } from '../shared/word.service';
 import {
  isNgTemplate
 } from '@angular/compiler';
 import {
  HttpClient
 } from '@angular/common/http';
 
 @Component({
  selector: 'app-word-search',
  templateUrl: './word-search.component.html',
  styleUrls: ['./word-search.component.css']
 })
 export class WordSearchComponent implements OnInit {
  constructor(public wordService: WordService, public http: HttpClient) {}
  submitted: boolean;
  showSuccessMessage: boolean;
  //wordArray = [];
  formControls = this.wordService.form.controls;
  config: any;
  data: any;
  res: any
  wordNikRandomUrl = 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=0d0b4a5ca13a59b563002073dc90c794a2efad5e3b00ece89';
  websterUrl = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/';
  websterApi = '9334e7a0-d384-4e69-951d-dd5e8ce4b212'
  websterHost = ''
  webRes: any
  wordNikDef = ''
  webUrl = 'https://api.wordnik.com/v4/word.json/'
  webUrl2 = '/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key=0d0b4a5ca13a59b563002073dc90c794a2efad5e3b00ece89'
  wordNikHost = ''
  formWord: any;
  inputWord: any;
  ngOnInit() {
   //this.wordService.getWords();
  }
 
  keySubmit() {
   this.submitted = true;
   if (this.wordService.form.valid) {
    console.log('valid');
    this.formWord = this.wordService.form.value;
    this.inputWord = this.formWord.word;
    console.log(this.formWord.word)
    if (this.wordService.form.get('$key').value == null) {
     console.log(this.wordService.form.value)
     console.log('wordnik')
     //if(this.res.word !== ''){
     console.log('webres')
     this.websterHost = this.websterUrl + this.formWord.word + '?key=' + this.websterApi;
     this.http.get(this.websterHost).
     subscribe((res) => {
      this.webRes = res;
      console.log(res);
      if (this.webRes[0].hasOwnProperty('shortdef') === false) {
       this.wordNikHost = this.webUrl + this.formWord.word + this.webUrl2
       this.http.get(this.wordNikRandomUrl).
       subscribe((res) => {
        this.webRes = res[0].text
       });
 
      }
     });
     //}
     console.log('wordnik')
     this.wordService.insertWords(this.wordService.form.value)
 
    }
    this.showSuccessMessage = true;
    setTimeout(() => this.showSuccessMessage = false, 3000);
    this.submitted = false;
    this.wordService.form.reset();
   } else {
    console.log('not valid')
   }
  }
 
  onSubmit() {
   this.submitted = true;
   if (this.wordService.form.valid) {
    console.log('valid');
    if (this.wordService.form.get('$key').value == null) {
     console.log(this.wordService.form.value)
     console.log('wordnik')
     this.http.get(this.wordNikRandomUrl).
     subscribe((res) => {
      this.res = res;
      console.log(res);
      if (this.res.word !== '') {
       console.log('webres')
       this.websterHost = this.websterUrl + this.res.word + '?key=' + this.websterApi;
       this.http.get(this.websterHost).
       subscribe((res) => {
        this.webRes = res;
        console.log(res);
        if (this.webRes[0].hasOwnProperty('shortdef') === false) {
         this.wordNikHost = this.webUrl + this.res.word + this.webUrl2
         this.http.get(this.wordNikRandomUrl).
         subscribe((res) => {
          this.webRes = res[0].text
         });
 
        }
       });
      }
 
     });
     console.log('wordnik')
     this.wordService.insertWords(this.wordService.form.value)
 
    } else {
     console.log(this.wordService.form.value)
     this.wordService.updateWords(this.wordService.form.value)
    }
    this.showSuccessMessage = true;
    setTimeout(() => this.showSuccessMessage = false, 3000);
    this.submitted = false;
    this.wordService.form.reset();
   } else {
    console.log('not valid')
   }
  }
}