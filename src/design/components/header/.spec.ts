import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './.component';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();
  });

  it(`should have the 'header' text`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app.name).toEqual('Header');
  });
});
