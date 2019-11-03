import { Component, OnInit } from '@angular/core';
import {WordService} from '../shared/word.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-word-search',
  templateUrl: './word-search.component.html',
  styleUrls: ['./word-search.component.css']
})
export class WordSearchComponent implements OnInit {

  constructor(private wordService : WordService) { 
  }
  submitted: boolean;
  showSuccessMessage: boolean;
  //wordArray = [];
  formControls = this.wordService.form.controls;
  ngOnInit() {
    this.wordService.getWords();
  }

  onSubmit(){
    this.submitted = true;
    if(this.wordService.form.valid){
      console.log('valid');
      if(this.wordService.form.get('$key').value == null){
        console.log(this.wordService.form.value)
        this.wordService.insertWords(this.wordService.form.value)
        
      }else{
        console.log(this.wordService.form.value)
        this.wordService.updateWords(this.wordService.form.value)
      }
      this.showSuccessMessage = true;
        setTimeout(()=> this.showSuccessMessage = false, 3000);
        this.submitted = false;
        this.wordService.form.reset();
    }else{
      console.log('not valid')
    }
  }

}
