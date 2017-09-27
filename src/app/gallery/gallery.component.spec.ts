import { TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';

describe('Gallery Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [GalleryComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(GalleryComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Gallery Works!');
  });

});
