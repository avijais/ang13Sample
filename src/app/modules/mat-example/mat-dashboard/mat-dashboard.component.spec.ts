import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDashboardComponent } from './mat-dashboard.component';

describe('MatDashboardComponent', () => {
  let component: MatDashboardComponent;
  let fixture: ComponentFixture<MatDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
