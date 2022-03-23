import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestaurentComponent } from './add-restaurent.component';

describe('AddRestaurentComponent', () => {
  let component: AddRestaurentComponent;
  let fixture: ComponentFixture<AddRestaurentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRestaurentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRestaurentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
