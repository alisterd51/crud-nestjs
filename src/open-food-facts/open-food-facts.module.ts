import { Module } from '@nestjs/common';
import { OpenFoodFactsService } from './open-food-facts.service';
import { OpenFoodFactsController } from './open-food-facts.controller';

@Module({
  controllers: [OpenFoodFactsController],
  providers: [OpenFoodFactsService]
})
export class OpenFoodFactsModule {}
