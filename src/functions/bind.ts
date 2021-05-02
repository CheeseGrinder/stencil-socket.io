import { Socket } from 'socket.io-client';

export function bind(socket: Socket, event: string, method: VoidFunction, context: any, ...args: any[]) {
  socket.on(event, method.bind(context, ...args));
}