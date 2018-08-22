/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AntixsrfService } from './antixsrf.service';

describe('Service: Antixsrf', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AntixsrfService]
    });
  });

  it('should ...', inject([AntixsrfService], (service: AntixsrfService) => {
    expect(service).toBeTruthy();
  }));
});
