import { TestBed } from '@angular/core/testing';
import { CardComponent } from './.component';

describe('CardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();
  });

  it(`should have the 'Card' text`, () => {
    const fixture = TestBed.createComponent(CardComponent);
    const app = fixture.componentInstance;
    expect(app.name).toEqual('Card');
  });
});
