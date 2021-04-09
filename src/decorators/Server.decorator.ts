import { io, ManagerOptions, SocketOptions } from 'socket.io-client';

export function IoServer(opts?: Partial<ManagerOptions & SocketOptions> | string): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    target[propertyKey] = io(opts);
  }
}