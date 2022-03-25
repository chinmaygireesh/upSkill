import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybyteLandingPageComponent } from './mybyte-landing-page.component';

describe('MybyteLandingPageComponent', () => {
  let component: MybyteLandingPageComponent;
  let fixture: ComponentFixture<MybyteLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MybyteLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MybyteLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
