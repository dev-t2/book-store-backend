import { Test, TestingModule } from '@nestjs/testing';

import { FakersService } from './fakers.service';

describe('FakersService', () => {
  let service: FakersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FakersService],
    }).compile();

    service = module.get<FakersService>(FakersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
