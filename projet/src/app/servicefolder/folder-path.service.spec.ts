import { TestBed } from '@angular/core/testing';

import { FolderPathService } from './folder-path.service';

describe('FolderPathService', () => {
  let service: FolderPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FolderPathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
