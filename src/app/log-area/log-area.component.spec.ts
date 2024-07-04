import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAreaComponent } from './log-area.component';

describe('LogAreaComponent', () => {
  let component: LogAreaComponent;
  let fixture: ComponentFixture<LogAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
