import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarArtistsViewComponent } from './similar-artists-view.component';

describe('SimilarArtistsViewComponent', () => {
  let component: SimilarArtistsViewComponent;
  let fixture: ComponentFixture<SimilarArtistsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarArtistsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarArtistsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
