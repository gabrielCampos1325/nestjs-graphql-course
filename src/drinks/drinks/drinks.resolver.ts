import { Query, ResolveField, Resolver } from '@nestjs/graphql';
import * as GraphQlTypes from '../../graphql';

@Resolver('DrinkResult')
export class DrinksResolver {
  @Query('drinks')
  async findAll(): Promise<GraphQlTypes.DrinkResult[]> {
    let coffee = new GraphQlTypes.Coffee();
    coffee = {
      id: 23,
      name: 'test 23c',
      brand: 'test 23d',
    };
    let tea = new GraphQlTypes.Tea();
    tea = {
      name: 'test 23t',
    };

    return [coffee, tea];
  }

  @ResolveField()
  __resolveType(value: GraphQlTypes.Drink) {
    /*if (value instanceof GraphQlTypes.Coffee) {
      return 'Coffee';
    } else {
      return 'Tea';
    }
    return null;*/
    if ('brand' in value) {
      return 'Coffee';
    }
    return 'Tea';
  }
}
