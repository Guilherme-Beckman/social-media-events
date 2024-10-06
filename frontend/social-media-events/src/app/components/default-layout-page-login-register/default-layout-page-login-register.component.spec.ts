import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutPageLoginRegisterComponent } from './default-layout-page-login-register.component';

describe('DefaultLayoutPageLoginRegisterComponent', () => {
  let component: DefaultLayoutPageLoginRegisterComponent;
  let fixture: ComponentFixture<DefaultLayoutPageLoginRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultLayoutPageLoginRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultLayoutPageLoginRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
