import { io, ManagerOptions, Socket, SocketOptions } from 'socket.io-client';

let globalSocket: Socket;

export function IoServer(opts?: Partial<ManagerOptions & SocketOptions> | string, newConnection: boolean = false): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    if (!globalSocket) globalSocket = io(opts);

    target[propertyKey] = newConnection ? io(opts) : globalSocket;
  }
}
