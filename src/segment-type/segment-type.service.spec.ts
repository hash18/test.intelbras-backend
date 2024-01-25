import { Test, TestingModule } from '@nestjs/testing';
import { SegmentTypeService } from './segment-type.service';

describe('SegmentTypeService', () => {
  let service: SegmentTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SegmentTypeService],
    }).compile();

    service = module.get<SegmentTypeService>(SegmentTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
