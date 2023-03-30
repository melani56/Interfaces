import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FCierreComponent } from './f-cierre.component';

describe('FCierreComponent', () => {
  let component: FCierreComponent;
  let fixture: ComponentFixture<FCierreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FCierreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FCierreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
