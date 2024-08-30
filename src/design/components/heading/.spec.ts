import { TestBed } from '@angular/core/testing';
import { HeadingComponent } from './.component';

describe('HeadingComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingComponent],
    }).compileComponents();
  });

  it(`should have the 'Heading' text`, () => {
    const fixture = TestBed.createComponent(HeadingComponent);
    const app = fixture.componentInstance;
    expect(app.name).toEqual('Heading');
  });
});
