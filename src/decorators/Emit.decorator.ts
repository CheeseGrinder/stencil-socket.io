import { Socket } from 'socket.io-client';
import { IoEmitter } from '../types'

export function IoEmit(on: string): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    const socketKey = Object.keys(target)[0];
    const socket = target[socketKey] as Socket;
    const emit: IoEmitter = {
      emit: (value: any) => socket.emit(on, value) 
    };

    target[propertyKey] = emit;
  }
}