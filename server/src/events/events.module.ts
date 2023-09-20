import { Module } from '@nestjs/common';
import { GatewayService } from './events.gateway';

@Module({
    providers: [GatewayService],
})
export class EventsModule { }