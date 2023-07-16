import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatMainLayoutComponent } from './mat-main-layout.component';

describe('MatMainLayoutComponent', () => {
  let component: MatMainLayoutComponent;
  let fixture: ComponentFixture<MatMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatMainLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
