import { Test, TestingModule } from '@nestjs/testing';
import { OpenFoodFactsController } from './open-food-facts.controller';
import { OpenFoodFactsService } from './open-food-facts.service';
import { HttpModule } from '@nestjs/axios';

describe('OpenFoodFactsController', () => {
  let controller: OpenFoodFactsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpenFoodFactsController],
      providers: [OpenFoodFactsService],
    }).compile();

    controller = module.get<OpenFoodFactsController>(OpenFoodFactsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
