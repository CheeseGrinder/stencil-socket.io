import { io, ManagerOptions, SocketOptions } from 'socket.io-client';
import { Emit, Instance, Receive } from '../decorators';


interface StencilIoDecorator {
  /**
   * The `@Emit()` decorator can be used to emit an event
   */
  Emit: (on: string) => PropertyDecorator;

  /**
   * When a socket client receive an event, a method decorated with `@Receive()` 
   * will be called and passed the received value.
   */
  Receive: (on: string) => MethodDecorator;

  /**
   * The `@Instance()` decorator can be used to access Socket client instance
   */
   Instance: () => PropertyDecorator;
}

export function StencilSocket(uri?: string | Partial<ManagerOptions & SocketOptions>, opts?: Partial<ManagerOptions & SocketOptions>): StencilIoDecorator {
  const socket = io(uri, opts);
  return {
    Emit: Emit(socket),
    Receive: Receive(socket),
    Instance: Instance(socket)
  }
}

/**
 * Alias for `StencilSocket`
 */
export const StencilIo = StencilSocket;