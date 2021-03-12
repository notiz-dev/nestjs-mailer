import { MailModule } from './../mail/mail.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

@Module({
  providers: [AuthService],
  imports: [MailModule]
})
export class AuthModule {}
