import { Injectable, OnModuleInit } from '@nestjs/common';
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io'

@Injectable()
@WebSocketGateway()
export class GatewayService implements OnModuleInit {

    @WebSocketServer()
    server: Server

    onModuleInit() {
        this.server.on('connect', (socket_client) => {
            console.log(socket_client.id)
            console.log('socket client connected')
            this.server.emit('welcome', `welcome socket client ${socket_client.id}`)
        })
    }

    @SubscribeMessage('newMessage')
    onNewMessage(@MessageBody() body: any) {
        console.log({ body })
        this.server.emit('onMessage', {
            msg: 'New Message',
            content: body
        })
    }
    @SubscribeMessage('sayHello')
    onsayHello(@MessageBody() body: any) {
        console.log({ body })
        this.server.emit('welcome', body)
    }
}
