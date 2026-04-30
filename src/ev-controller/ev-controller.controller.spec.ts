import { Test, TestingModule } from '@nestjs/testing';
import { EvControllerController } from './ev-controller.controller';

describe('EvControllerController', () => {
  let controller: EvControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvControllerController],
    }).compile();

    controller = module.get<EvControllerController>(EvControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
