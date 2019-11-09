import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordPuzzleComponent } from './word-puzzle.component';

describe('WordPuzzleComponent', () => {
  let component: WordPuzzleComponent;
  let fixture: ComponentFixture<WordPuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordPuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordPuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
