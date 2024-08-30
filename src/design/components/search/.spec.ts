import { TestBed } from '@angular/core/testing';
import { SearchComponent } from './.component';

describe('SearchComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent],
    }).compileComponents();
  });

  it(`should have the 'Search' text`, () => {
    const fixture = TestBed.createComponent(SearchComponent);
    const app = fixture.componentInstance;
    expect(app.name).toEqual('Search');
  });
});
