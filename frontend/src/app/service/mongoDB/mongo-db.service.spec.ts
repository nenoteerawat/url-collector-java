import { TestBed } from '@angular/core/testing';

import { MongoDBService } from './mongo-db.service';

describe('MongoDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MongoDBService = TestBed.get(MongoDBService);
    expect(service).toBeTruthy();
  });
});
