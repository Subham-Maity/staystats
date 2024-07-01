import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  private readonly mainServer: string;
  private readonly workerServer: string;
  constructor(private configService: ConfigService) {
    this.mainServer = this.configService.get<string>('MAIN_SERVER');
    this.workerServer = this.configService.get<string>('WORKER_SERVER');
  }

  getHello(): string {
    return 'Hello World!';
  }

  @Cron(CronExpression.EVERY_5_MINUTES)
  async keepServer1Warm() {
    try {
      const serverUrl = this.mainServer;
      await axios.get(serverUrl);
      this.logger.log(`Sent request to ${serverUrl} to keep the server warm`);
    } catch (error) {
      this.logger.error(
        'Error sending request to keep the server warm:',
        error,
      );
    }
  }
  @Cron(CronExpression.EVERY_10_SECONDS)
  async keepServer2Warm() {
    try {
      const serverUrl = this.workerServer;
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
