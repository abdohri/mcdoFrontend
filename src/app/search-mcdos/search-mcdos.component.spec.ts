import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMcdosComponent } from './search-mcdos.component';

describe('SearchMcdosComponent', () => {
  let component: SearchMcdosComponent;
  let fixture: ComponentFixture<SearchMcdosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMcdosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMcdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
