import { TestBed } from '@angular/core/testing';
import { HomeApp } from './.component';

describe('HomeApp', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeApp],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomeApp);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'rick' title`, () => {
    const fixture = TestBed.createComponent(HomeApp);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('rick');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HomeApp);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, rick');
  });
});