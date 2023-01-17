import { NotFoundException, ParseIntPipe } from '@nestjs/common';
import { Resolver, Query, Args, Mutation, Subscription } from '@nestjs/graphql';
import * as GraphQlTypes from '../graphql';
import { CoffeesService } from './coffees.service';
import { UpdateCoffeeInput } from './dto/update-coffee.input/update-coffee.input';
import { CreateCoffeeInput } from './dto/create-coffee.input/create-coffee.input';
import { Coffee } from './entities/coffee.entity/coffee.entity';
import { PubSub } from 'graphql-subscriptions';

@Resolver()
export class CoffeesResolver {
  constructor(
    private readonly coffeesService: CoffeesService,
    private readonly pubSub: PubSub,
  ) {}

  @Query('coffees')
  async findAll(): Promise<GraphQlTypes.Coffee[]> {
    return this.coffeesService.findAll();
  }

  @Query('coffee')
  async findById(
    @Args('id', ParseIntPipe) id: number,
  ): Promise<GraphQlTypes.Coffee> {
    return this.coffeesService.findById(id);
  }

  @Mutation('createCoffee')
  async createCoffee(
    @Args('createCoffeeInput')
    createCoffeeInput: CreateCoffeeInput,
  ): Promise<GraphQlTypes.Coffee> {
    return this.coffeesService.createCoffee(createCoffeeInput);
  }

  @Mutation('updateCoffee')
  async updateCoffee(
    @Args('id', ParseIntPipe) id: number,
    @Args('updateCoffeeInput') updateCoffeeInput: UpdateCoffeeInput,
  ) {
    return this.coffeesService.updateCoffee(id, updateCoffeeInput);
  }

  @Mutation('deleteCoffee')
  async deleteCoffee(@Args('id', ParseIntPipe) id: number) {
    return this.coffeesService.deleteCoffee(id);
  }

  @Subscription(() => Coffee)
  addedCoffee() {
    return this.pubSub.asyncIterator('addedCoffee');
  }
}
