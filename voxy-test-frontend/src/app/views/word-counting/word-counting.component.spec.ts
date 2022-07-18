import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCountingComponent } from './word-counting.component';

describe('WordCountingComponent', () => {
  let component: WordCountingComponent;
  let fixture: ComponentFixture<WordCountingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordCountingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
