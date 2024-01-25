import { Test, TestingModule } from '@nestjs/testing';
import { ComponentGroupController } from './component-group.controller';
import { ComponentGroupService } from './component-group.service';

describe('ComponentGroupController', () => {
  let controller: ComponentGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComponentGroupController],
      providers: [ComponentGroupService],
    }).compile();

    controller = module.get<ComponentGroupController>(ComponentGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
