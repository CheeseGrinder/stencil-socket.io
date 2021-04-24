import { Socket } from 'socket.io-client';
import { IoEmitter } from '../types';


export const Emit = (socket: Socket) => (on: string): PropertyDecorator => {
  return (target: Object, propertyKey: string | symbol) => {
    const emitter: IoEmitter = {
      emit: (value?: any) => socket.emit(on, value)
    };

    target[propertyKey] = emitter;
  }
}
