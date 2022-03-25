import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherMbytesvideosComponent } from './other-mbytesvideos.component';

describe('OtherMbytesvideosComponent', () => {
  let component: OtherMbytesvideosComponent;
  let fixture: ComponentFixture<OtherMbytesvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherMbytesvideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherMbytesvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
