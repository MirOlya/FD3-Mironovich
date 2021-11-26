import { TestBed } from '@angular/core/testing';
import { NumwordComponent } from './numword.component';

describe('NumwordComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumwordComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NumwordComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'numword'`, () => {
    const fixture = TestBed.createComponent(NumwordComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('numword');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(NumwordComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'numword app is running!'
    );
  });
});
