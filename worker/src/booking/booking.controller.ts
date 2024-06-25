import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/booking.dto';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createBookings(@Body() bookings: CreateBookingDto[]) {
    const createdBookings = await this.bookingService.createBookings(bookings);
    return {
      message: 'Bookings received and saved successfully',
      count: createdBookings.length,
    };
  }
}
