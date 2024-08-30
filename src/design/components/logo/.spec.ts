import { TestBed } from '@angular/core/testing';
import { LogoComponent } from './.component';

describe('LogoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoComponent],
    }).compileComponents();
  });

  it(`should have the 'Logo' text`, () => {
    const fixture = TestBed.createComponent(LogoComponent);
    const app = fixture.componentInstance;
    expect(app.name).toEqual('Logo');
  });
});
