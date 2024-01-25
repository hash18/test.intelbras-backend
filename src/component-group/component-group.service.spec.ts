import { Test, TestingModule } from '@nestjs/testing';
import { ComponentGroupService } from './component-group.service';

describe('ComponentGroupService', () => {
  let service: ComponentGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComponentGroupService],
    }).compile();

    service = module.get<ComponentGroupService>(ComponentGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
