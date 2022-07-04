import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { response } from 'express';
import { CoffeesService } from 'src/coffees/coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-cofee.dto';



@Controller('coffees')
export class CoffeeesController {
    constructor(private readonly coffeeService: CoffeesService){}
    @Get()
    findAll(@Query() paginationQuery)  { 
        // const {limit, offset} = paginationQuery;
        return this.coffeeService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string){
        return this.coffeeService.findOne(id);
    }

    @Post()
    create(@Body() creareCoffeeDto: CreateCoffeeDto){
        return this.coffeeService.create(creareCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() updatecoffeeDto: UpdateCoffeeDto){
        return this.coffeeService.update(id, updatecoffeeDto);
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return this.coffeeService.remove(id);
    }
}

