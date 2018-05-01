import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMinComponent } from './book-min.component';

describe('BookMinComponent', () => {
  let component: BookMinComponent;
  let fixture: ComponentFixture<BookMinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookMinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
