import { TestBed } from '@angular/core/testing';

import { ProductRegistrationComponent } from './product-registration.component';

describe('Infrastructure Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [ProductRegistrationComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(ProductRegistrationComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Infrastructure Works!');
  });

});
