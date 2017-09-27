import { TestBed } from '@angular/core/testing';

import { SitemapComponent } from './sitemap.component';

describe('Gallery Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [SitemapComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(SitemapComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Sitemap Works!');
  });

});
