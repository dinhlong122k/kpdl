import { TestBed } from '@angular/core/testing';

import { ImageGaleryService } from './image-galery.service';

describe('ImageGaleryService', () => {
  let service: ImageGaleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageGaleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
