import { AdapterService } from './../src/adapter.service';
import { ProxyService } from './../src/proxy.service';
import { HttpModule } from '@angular/http';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';

describe('AdapterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdapterService, ProxyService],
      imports: [HttpModule]
    });
  });

  it('should get users', inject([AdapterService], (service: AdapterService) => {
    expect(service).toBeTruthy();
    service.getUsers().subscribe(
      users => {
        expect(users).toBeDefined();
      }
    );
  }));
});
