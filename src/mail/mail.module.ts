import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MailerModule.forRoot({
      // transport: 'smtps://user@domain.com:pass@smtp.domain.com',
      // or
      transport: {
        host: 'smpt.example.com',
        port: '25',
        secure: 'false',
        auth: {
          user: 'user@example.com',
          pass: 'topsecret',
        },
      },
      defaults: {
        from: '"No Reply" <noreply@example.com>',
      },
    }),
  ],
})
export class MailModule {}
