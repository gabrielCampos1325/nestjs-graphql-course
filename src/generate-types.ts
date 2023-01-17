import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

export const definitionFactory = new GraphQLDefinitionsFactory();

definitionFactory.generate({
  typePaths: ['./**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.ts'),
  outputAs: 'class',
  watch: true,
  skipResolverArgs: true,
  defaultTypeMapping: {
    ID: 'number',
  },
});
