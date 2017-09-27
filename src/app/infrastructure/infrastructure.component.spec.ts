import { TestBed } from '@angular/core/testing';

import { InfrastructureComponent } from './infrastructure.component';

describe('Infrastructure Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [InfrastructureComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(InfrastructureComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Infrastructure Works!');
  });

});
