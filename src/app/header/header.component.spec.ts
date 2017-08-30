import { TestBed, async } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('Component: Header', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.debugElement.componentInstance();
    expect(app).toBeTruthy();
  });

});
