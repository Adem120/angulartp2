import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLoadinComponent } from './modal-loadin.component';

describe('ModalLoadinComponent', () => {
  let component: ModalLoadinComponent;
  let fixture: ComponentFixture<ModalLoadinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalLoadinComponent]
    });
    fixture = TestBed.createComponent(ModalLoadinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
