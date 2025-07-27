import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();

const getAppName = () => process.argv[process.argv.indexOf('--app') + 1];

// eslint-disable-next-line @typescript-eslint/no-floating-promises
definitionsFactory.generate({
  typePaths: ['./**/*.graphql'],
  path: join(process.cwd(), 'apps', getAppName(), 'src/graphql.ts'),
  outputAs: 'class',
  watch: true,
  skipResolverArgs: true,
});
