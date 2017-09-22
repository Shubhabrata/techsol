import { TestBed } from '@angular/core/testing';

import { ServicesComponent } from './services.component';

describe('Products Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [ServicesComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(ServicesComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('About Works!');
  });

});
