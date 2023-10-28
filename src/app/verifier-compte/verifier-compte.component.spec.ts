import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifierCompteComponent } from './verifier-compte.component';

describe('VerifierCompteComponent', () => {
  let component: VerifierCompteComponent;
  let fixture: ComponentFixture<VerifierCompteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifierCompteComponent]
    });
    fixture = TestBed.createComponent(VerifierCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
