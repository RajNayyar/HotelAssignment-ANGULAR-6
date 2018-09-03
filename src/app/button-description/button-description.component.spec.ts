import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDescriptionComponent } from './button-description.component';

describe('ButtonDescriptionComponent', () => {
  let component: ButtonDescriptionComponent;
  let fixture: ComponentFixture<ButtonDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
