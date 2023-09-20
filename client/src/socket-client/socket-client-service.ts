import { Injectable, OnModuleInit } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';

@Injectable()
export class SocketClientService {
    public socketClient: Socket;

    constructor() {
        this.socketClient = io('http://localhost:3000');
    }

    onModuleInit() {
        this.registerConsumerEvents();
    }

    private registerConsumerEvents() {
        this.socketClient.on('connect', () => {
            console.log('Connected to Gateway');
            this.socketClient.emit('sayHello', `hello from the socket ${this.socketClient.id}`)
        });
        this.socketClient.on('onMessage', (payload: any) => {
            console.log('SocketClientClass!');
            console.log(payload);
        });

        this.socketClient.on('welcome', (payload: any) => {
            console.log(payload);
        });
    }
}
