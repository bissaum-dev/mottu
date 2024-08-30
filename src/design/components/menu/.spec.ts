import { TestBed } from '@angular/core/testing';
import { MenuComponent } from './.component';

describe('MenuComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent],
    }).compileComponents();
  });

  it(`should have the 'Menu' text`, () => {
    const fixture = TestBed.createComponent(MenuComponent);
    const app = fixture.componentInstance;
    expect(app.name).toEqual('Menu');
  });
});
