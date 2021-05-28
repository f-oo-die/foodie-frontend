import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTopNavigationComponent } from './admin-top-navigation.component';

describe('AdminTopNavigationComponent', () => {
  let component: AdminTopNavigationComponent;
  let fixture: ComponentFixture<AdminTopNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTopNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTopNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
