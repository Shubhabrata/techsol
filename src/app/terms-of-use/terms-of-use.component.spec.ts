import { TestBed } from '@angular/core/testing';

import { TermsOfUseComponent } from './terms-of-use.component';

describe('faq Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [TermsOfUseComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(TermsOfUseComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Infrastructure Works!');
  });

});
