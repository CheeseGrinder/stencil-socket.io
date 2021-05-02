import { ComponentInstance } from '@stencil/router/dist/types/stencil.core';
import { Socket } from 'socket.io-client';
import { bind } from '../functions/bind';


export const Connect = (socket: Socket) => (): MethodDecorator => {
  return (proto: ComponentInstance, methodName: string | symbol) => {
    const { connectedCallback, render } = proto;

    if (render) {
      proto.connectedCallback = function() {
        const method: VoidFunction = this[methodName as string];
        bind(socket, 'connect', method, this);
        return connectedCallback?.call(this);
      }
    } else {
      const method: VoidFunction = proto[methodName as string];
      bind(socket, 'connect', method, proto);
    }
  }
}

