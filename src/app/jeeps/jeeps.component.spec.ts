import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeepsComponent } from './jeeps.component';

describe('JeepsComponent', () => {
  let component: JeepsComponent;
  let fixture: ComponentFixture<JeepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
