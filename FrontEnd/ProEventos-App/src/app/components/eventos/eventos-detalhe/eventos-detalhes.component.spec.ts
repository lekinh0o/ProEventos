import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosDetalhesComponent } from './eventos-detalhes.component';

describe('EventosDetalhesComponent', () => {
  let component: EventosDetalhesComponent;
  let fixture: ComponentFixture<EventosDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
