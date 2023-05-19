import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUtilusationComponent } from './update-utilusation.component';

describe('UpdateUtilusationComponent', () => {
  let component: UpdateUtilusationComponent;
  let fixture: ComponentFixture<UpdateUtilusationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUtilusationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUtilusationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
