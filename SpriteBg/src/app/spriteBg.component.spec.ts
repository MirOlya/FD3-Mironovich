import { TestBed } from '@angular/core/testing';
import { SpriteBgComponent } from './spriteBg.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpriteBgComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SpriteBgComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SpriteBg'`, () => {
    const fixture = TestBed.createComponent(SpriteBgComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('SpriteBg');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SpriteBgComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'SpriteBg app is running!'
    );
  });
});
