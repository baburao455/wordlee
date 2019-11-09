import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

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
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BackComponent } from './back/back.component';
import { WordOfDayComponent } from './word-of-day/word-of-day.component';
import { WordPuzzleComponent } from './word-puzzle/word-puzzle.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

const appRoutes: Routes = [
  { path: 'randomWord', component: RandomWordComponent },
  { path: 'wordSearch',      component: WordSearchComponent },
  {path: '',   component: HomeComponent},
  {path:'wordOfTheDay', component:WordOfDayComponent},
  {path:'wordPuzzle', component:WordPuzzleComponent}
  /*{
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  }*/
];
@NgModule({
  declarations: [
    AppComponent,
    RandomWordComponent,
    WordSearchComponent,
    WordListComponent,
    NavBarComponent,
    HomeComponent,
    BackComponent,
    WordOfDayComponent,
    WordPuzzleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AutocompleteLibModule
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
