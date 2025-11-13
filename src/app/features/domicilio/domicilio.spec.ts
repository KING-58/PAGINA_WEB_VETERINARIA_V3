import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Domicilio } from './domicilio';

describe('Domicilio', () => {
  let component: Domicilio;
  let fixture: ComponentFixture<Domicilio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Domicilio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Domicilio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
