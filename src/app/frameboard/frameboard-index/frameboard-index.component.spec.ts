import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameboardIndexComponent } from './frameboard-index.component';

describe('FrameboardIndexComponent', () => {
  let component: FrameboardIndexComponent;
  let fixture: ComponentFixture<FrameboardIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameboardIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameboardIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
