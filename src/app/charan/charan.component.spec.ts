import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharanComponent } from './charan.component';

describe('CharanComponent', () => {
  let component: CharanComponent;
  let fixture: ComponentFixture<CharanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharanComponent]
    });
    fixture = TestBed.createComponent(CharanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
