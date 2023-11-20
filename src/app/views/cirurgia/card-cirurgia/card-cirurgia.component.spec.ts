import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCirurgiaComponent } from './card-cirurgia.component';

describe('CardCirurgiaComponent', () => {
  let component: CardCirurgiaComponent;
  let fixture: ComponentFixture<CardCirurgiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCirurgiaComponent]
    });
    fixture = TestBed.createComponent(CardCirurgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
