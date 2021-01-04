import { Test, TestingModule } from '@nestjs/testing';
import { CrumbsService } from './crumbs.service';

describe('CrumbsService', () => {
  let service: CrumbsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrumbsService],
    }).compile();

    service = module.get<CrumbsService>(CrumbsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
