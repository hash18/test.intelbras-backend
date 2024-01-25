import { Test, TestingModule } from '@nestjs/testing';
import { SegmentTypeController } from './segment-type.controller';
import { SegmentTypeService } from './segment-type.service';

describe('SegmentTypeController', () => {
  let controller: SegmentTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SegmentTypeController],
      providers: [SegmentTypeService],
    }).compile();

    controller = module.get<SegmentTypeController>(SegmentTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
