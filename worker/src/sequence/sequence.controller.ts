// src/sequence/sequence.controller.ts

import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { SequenceService } from './sequence.service';
import { CreateSequenceDto } from './dto/sequence.dto';

@Controller('sequences')
export class SequenceController {
  constructor(private readonly sequenceService: SequenceService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createSequences(@Body() sequences: CreateSequenceDto[]) {
    const createdSequences =
      await this.sequenceService.createSequences(sequences);
    return {
      message: 'Sequences received and saved successfully',
      count: createdSequences.length,
    };
  }
}
