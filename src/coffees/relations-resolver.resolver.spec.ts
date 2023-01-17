import { Test, TestingModule } from '@nestjs/testing';
import { RelationsResolverResolver } from './relations-resolver.resolver';

describe('RelationsResolverResolver', () => {
  let resolver: RelationsResolverResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelationsResolverResolver],
    }).compile();

    resolver = module.get<RelationsResolverResolver>(RelationsResolverResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
