import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { MailConfig } from './config/mail.config';

@Injectable()
export class Mail0AuthService {
  constructor(
    private mailerService: MailerService,
    private mailConfig: MailConfig,
  ) {}

  async sendMail0Auth(
    to: string,
    subject: string,
    template: string,
    context: any,
    attachments?: any[],
  ): Promise<void> {
    try {
      await this.mailerService.sendMail({
        to,
        from: this.mailConfig.senderGmailAddress,
        subject,
        template,
        context,
        attachments,
      });
    } catch (error) {
      Logger.error(error.message, error.stack, 'Mail0AuthService');
      throw error;
    }
  }
}
