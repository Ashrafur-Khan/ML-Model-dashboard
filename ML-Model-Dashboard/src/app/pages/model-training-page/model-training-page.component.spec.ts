import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelTrainingPageComponent } from './model-training-page.component';

describe('ModelTrainingPageComponent', () => {
  let component: ModelTrainingPageComponent;
  let fixture: ComponentFixture<ModelTrainingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelTrainingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelTrainingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
