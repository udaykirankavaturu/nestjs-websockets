import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketClientModule } from './socket-client/socket-client-module';

@Module({
  imports: [SocketClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
