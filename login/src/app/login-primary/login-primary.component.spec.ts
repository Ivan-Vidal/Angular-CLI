import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPrimaryComponent } from './login-primary.component';

describe('LoginPrimaryComponent', () => {
  let component: LoginPrimaryComponent;
  let fixture: ComponentFixture<LoginPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPrimaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
