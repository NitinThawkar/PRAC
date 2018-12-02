import { TestBed, inject } from '@angular/core/testing';

import { SubjectInterationService } from './subject-interation.service';

describe('SubjectInterationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjectInterationService]
    });
  });

  it('should be created', inject([SubjectInterationService], (service: SubjectInterationService) => {
    expect(service).toBeTruthy();
  }));
});
