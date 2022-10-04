import { Test, TestingModule } from '@nestjs/testing';

import { FakersController } from './fakers.controller';

describe('FakersController', () => {
  let controller: FakersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FakersController],
    }).compile();

    controller = module.get<FakersController>(FakersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
