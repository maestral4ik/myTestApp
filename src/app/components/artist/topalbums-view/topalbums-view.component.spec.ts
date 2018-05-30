import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopalbumsViewComponent } from './topalbums-view.component';

describe('TopalbumsViewComponent', () => {
  let component: TopalbumsViewComponent;
  let fixture: ComponentFixture<TopalbumsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopalbumsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopalbumsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
