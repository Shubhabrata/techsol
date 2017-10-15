import { TestBed } from '@angular/core/testing';

import { WhatWeDoComponent } from './what-we-do.component';

describe('WhatWeDo Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [WhatWeDoComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(WhatWeDoComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('WhatWeDo Works!');
  });

});
