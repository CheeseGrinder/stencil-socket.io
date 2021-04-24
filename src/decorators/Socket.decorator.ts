import { io, ManagerOptions, SocketOptions } from 'socket.io-client';
import { Emit } from './Emit.decorator';
import { Receive } from './Receive.decorator';


interface StencilIoDecorator {
  Emit: (on: string) => PropertyDecorator;
  Receive: (on: string) => MethodDecorator;
}

export function StencilIo(opts?: Partial<ManagerOptions & SocketOptions> | string): StencilIoDecorator {
  const socket = io(opts);
  return {
    Emit: Emit(socket),
    Receive: Receive(socket)
  }
}
