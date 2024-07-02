import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { MailConfig } from './config/mail.config';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private mailConfig: MailConfig,
  ) {}

  async sendMail(
    to: string,
    subject: string,
    template: string,
    context: any,
  ): Promise<void> {
    try {
      await this.mailerService.sendMail({
        to,
        from: this.mailConfig.senderGmail,
        subject,
        template,
        context,
      });
    } catch (error) {
      Logger.error(error.message, error.stack, 'MailService');
      throw error;
    }
  }
}
