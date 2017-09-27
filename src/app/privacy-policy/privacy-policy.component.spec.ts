import { TestBed } from '@angular/core/testing';

import { PrivacyPolicyComponent } from './privacy-policy.component';

describe('Privacy Policy Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [PrivacyPolicyComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(PrivacyPolicyComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Privacy Policy Works!');
  });

});
