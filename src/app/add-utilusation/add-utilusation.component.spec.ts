import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUtilusationComponent } from './add-utilusation.component';

describe('AddUtilusationComponent', () => {
  let component: AddUtilusationComponent;
  let fixture: ComponentFixture<AddUtilusationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUtilusationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUtilusationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
