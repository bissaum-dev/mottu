import { TestBed } from '@angular/core/testing';
import { EmptyComponent } from './.component';

describe('EmptyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyComponent],
    }).compileComponents();
  });

  it(`should have the 'Empty' text`, () => {
    const fixture = TestBed.createComponent(EmptyComponent);
    const app = fixture.componentInstance;
    expect(app.name).toEqual('Empty');
  });
});
