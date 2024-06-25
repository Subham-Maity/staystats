import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import axios from 'axios';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    return 'Hello World!';
  }

  @Cron(CronExpression.EVERY_10_SECONDS)
  async keepServer1Warm() {
    try {
      const serverUrl = `http://localhost:5000`;
      await axios.get(serverUrl);
      this.logger.log(`Sent request to ${serverUrl} to keep the server warm`);
    } catch (error) {
      this.logger.error(
        'Error sending request to keep the server warm:',
        error,
      );
    }
  }
  @Cron(CronExpression.EVERY_30_SECONDS)
  async keepServer2Warm() {
    try {
      const serverUrl = `http://localhost:3333`;
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
