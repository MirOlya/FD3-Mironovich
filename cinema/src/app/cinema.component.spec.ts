import { TestBed } from '@angular/core/testing';
import { Cinema } from './cinema.component';

describe('Cinema', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cinema],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Cinema);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'cinema'`, () => {
    const fixture = TestBed.createComponent(Cinema);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('cinema');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Cinema);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'cinema app is running!'
    );
  });
});
