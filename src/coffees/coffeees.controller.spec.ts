import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeesController } from './coffeees.controller';

describe('CoffeeesController', () => {
  let controller: CoffeeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeeesController],
    }).compile();

    controller = module.get<CoffeeesController>(CoffeeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
