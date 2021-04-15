import { Socket } from 'socket.io-client';
import { IoEmitter } from '../types';
import { getSocketKey } from '../utils/socketKey';

export function IoEmit(on: string): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    const socketKey = getSocketKey(target);
    const socket: Socket = target[socketKey];
    const emitter: IoEmitter = {
      emit: (value?: any) => socket.emit(on, value)
    };

    target[propertyKey] = emitter;
  }
}
