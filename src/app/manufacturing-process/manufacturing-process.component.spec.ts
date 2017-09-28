import { TestBed } from '@angular/core/testing';

import { ManufacturingProcessComponent } from './manufacturing-process.component';

describe('Manufacturing Process Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [ManufacturingProcessComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(ManufacturingProcessComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Infrastructure Works!');
  });

});
