import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateHotelDto } from './dto/hotel.dto';
import { HotelService } from './hotels.service';

@Controller('hotels')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createHotels(@Body() hotels: CreateHotelDto[]) {
    const createdHotels = await this.hotelService.createHotels(hotels);
    return {
      message: 'Hotels received and saved successfully',
      count: createdHotels.length,
    };
  }
}
