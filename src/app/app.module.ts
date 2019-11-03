import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomWordComponent } from './random-word/random-word.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {WordService} from './shared/word.service';
import { WordSearchComponent } from './word-search/word-search.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import { WordListComponent } from './word-list/word-list.component';
@NgModule({
  declarations: [
    AppComponent,
    RandomWordComponent,
    WordSearchComponent,
    WordListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
