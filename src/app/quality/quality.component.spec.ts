import { TestBed } from '@angular/core/testing';

import { QualityComponent } from './quality.component';

describe('Gallery Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [QualityComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(QualityComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Quality Works!');
  });

});
