import { TestBed } from '@angular/core/testing';

import { FAQComponent } from './faq.component';

describe('faq Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [FAQComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(FAQComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Infrastructure Works!');
  });

});
