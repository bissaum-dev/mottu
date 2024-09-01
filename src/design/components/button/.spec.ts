import { TestBed } from '@angular/core/testing';
import { ButtonComponent } from './.component';

describe('ButtonComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();
  });

  it(`should have the 'Button' text`, () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const app = fixture.componentInstance;
    expect(app.name).toEqual('Button');
  });
});
