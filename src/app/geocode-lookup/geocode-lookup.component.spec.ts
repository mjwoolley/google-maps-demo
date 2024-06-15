import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocodeLookupComponent } from './geocode-lookup.component';

describe('GeocodeLookupComponent', () => {
  let component: GeocodeLookupComponent;
  let fixture: ComponentFixture<GeocodeLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeocodeLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeocodeLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
