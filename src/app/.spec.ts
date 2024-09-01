import { TestBed } from '@angular/core/testing';
import { ComponentApp } from './.component';

describe('ComponentApp', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentApp],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ComponentApp);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'rick' title`, () => {
    const fixture = TestBed.createComponent(ComponentApp);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('rick');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ComponentApp);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, rick');
  });
});
