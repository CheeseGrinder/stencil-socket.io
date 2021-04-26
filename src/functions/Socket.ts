import { io, ManagerOptions, SocketOptions } from 'socket.io-client';
import { Connect, Disconnect, Emit, Instance, Receive, Status } from '../decorators';


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

  /**
   * When a socket client is connected, a method decorated with `@Connect()` will be called.
   */
  Connect: () => MethodDecorator;

  /**
   * When a socket client is disconnected, a method decorated with `@Disconnect()` will be called.
   */
  Disconnect: () => MethodDecorator;

  /**
   * When a socket client is connected or disconnected, a method decorated with `@Status()` 
   * will be called with the current status of socket.
   */
  Status: () => MethodDecorator;
}

export function StencilSocket(uri?: string | Partial<ManagerOptions & SocketOptions>, opts?: Partial<ManagerOptions & SocketOptions>): StencilIoDecorator {
  const socket = io(uri, opts);
  return {
    Emit: Emit(socket),
    Receive: Receive(socket),
    Instance: Instance(socket),
    Connect: Connect(socket),
    Disconnect: Disconnect(socket),
    Status: Status(socket)
  }
}

/**
 * Alias for `StencilSocket`
 */
export const StencilIo = StencilSocket;