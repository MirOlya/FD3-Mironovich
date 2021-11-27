import { TestBed } from '@angular/core/testing';
import { SpriteComponent } from './sprite.component';

describe('SpriteComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpriteComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SpriteComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sprite'`, () => {
    const fixture = TestBed.createComponent(SpriteComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sprite');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SpriteComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'sprite app is running!'
    );
  });
});
