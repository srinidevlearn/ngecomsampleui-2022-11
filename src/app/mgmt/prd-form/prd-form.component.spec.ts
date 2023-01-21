import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdFormComponent } from './prd-form.component';

describe('PrdFormComponent', () => {
  let component: PrdFormComponent;
  let fixture: ComponentFixture<PrdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrdFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
