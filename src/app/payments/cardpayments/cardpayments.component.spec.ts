import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpaymentsComponent } from './cardpayments.component';

describe('CardpaymentsComponent', () => {
  let component: CardpaymentsComponent;
  let fixture: ComponentFixture<CardpaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardpaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
