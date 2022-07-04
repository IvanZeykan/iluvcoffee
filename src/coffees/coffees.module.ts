import { Module } from '@nestjs/common';
import { CoffeeesController } from './coffeees.controller';
import { CoffeesService } from './coffees.service';

@Module({controllers: [CoffeeesController], providers: [CoffeesService]})
export class CoffeesModule {}
