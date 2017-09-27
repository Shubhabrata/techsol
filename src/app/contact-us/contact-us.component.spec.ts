import { TestBed } from '@angular/core/testing';

import { GalleryComponent } from './contact-us.component';

describe('Contact Us Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [ContactUsComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(ContactUsComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('ContactUs Works!');
  });

});
