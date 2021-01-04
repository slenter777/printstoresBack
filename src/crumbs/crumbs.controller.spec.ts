import { Test, TestingModule } from '@nestjs/testing';
import { CrumbsController } from './crumbs.controller';

describe('CrumbsController', () => {
  let controller: CrumbsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrumbsController],
    }).compile();

    controller = module.get<CrumbsController>(CrumbsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
