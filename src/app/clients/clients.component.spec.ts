import { TestBed } from '@angular/core/testing';

import { ClientsComponent } from './clients.component';

describe('Clients Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [ClientsComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(ClientsComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Clients Works!');
  });

});
