import { Module } from '@nestjs/common';
import { OpenFoodFactsService } from './open-food-facts.service';
import { OpenFoodFactsController } from './open-food-facts.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [OpenFoodFactsController],
  providers: [OpenFoodFactsService]
})
export class OpenFoodFactsModule {}
