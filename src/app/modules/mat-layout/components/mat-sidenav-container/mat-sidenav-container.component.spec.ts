import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSidenavContainerComponent } from './mat-sidenav-container.component';

describe('MatSideNavComponent', () => {
  let component: MatSidenavContainerComponent;
  let fixture: ComponentFixture<MatSidenavContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatSidenavContainerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSidenavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
