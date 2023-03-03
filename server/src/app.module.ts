import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [],
  controllers: [AppController, LoginController],
  providers: [AppService],
})
export class AppModule {}
ConfigModule.forRoot({
  envFilePath: '.env',
});
