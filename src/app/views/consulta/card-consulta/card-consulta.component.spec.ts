import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConsultaComponent } from './card-consulta.component';

describe('CardConsultaComponent', () => {
  let component: CardConsultaComponent;
  let fixture: ComponentFixture<CardConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardConsultaComponent]
    });
    fixture = TestBed.createComponent(CardConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
