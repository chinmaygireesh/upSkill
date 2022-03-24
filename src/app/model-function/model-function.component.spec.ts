import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelFunctionComponent } from './model-function.component';

describe('ModelFunctionComponent', () => {
  let component: ModelFunctionComponent;
  let fixture: ComponentFixture<ModelFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
