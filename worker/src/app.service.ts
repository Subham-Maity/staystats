import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import axios from 'axios';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(private schedulerRegistry: SchedulerRegistry) {}

  getHello(): string {
    return 'Hello World!';
  }
  // Run this method every 3 minutes
  @Cron(CronExpression.EVERY_10_SECONDS)
  async keepServerWarm() {
    try {
      const serverUrl = `https://who-is-xam.onrender.com/`;
      await axios.get(serverUrl);
      this.logger.log(`Sent request to ${serverUrl} to keep the server warm`);
    } catch (error) {
      this.logger.error(
        'Error sending request to keep the server warm:',
        error,
      );
    }
  }
}
