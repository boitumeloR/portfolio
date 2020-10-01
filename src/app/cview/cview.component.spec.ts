import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CViewComponent } from './cview.component';

describe('CViewComponent', () => {
  let component: CViewComponent;
  let fixture: ComponentFixture<CViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
