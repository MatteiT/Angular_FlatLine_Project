import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoVideoComponent } from './logo-video.component';

describe('LogoVideoComponent', () => {
  let component: LogoVideoComponent;
  let fixture: ComponentFixture<LogoVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoVideoComponent]
    });
    fixture = TestBed.createComponent(LogoVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
