import { ComponentInstance } from '@stencil/router/dist/types/stencil.core';
import { Socket } from 'socket.io-client';
import { bind } from '../functions/bind';


export const Receive = (socket: Socket) => (on: string): MethodDecorator => {
  return (proto: ComponentInstance, methodName: string | symbol) => {
    const { connectedCallback, render } = proto;

    if (render) {
      proto.connectedCallback = function() {
        const method: VoidFunction = this[methodName as string];
        bind(socket, on, method, this);
        return connectedCallback?.call(this);
      }
    } else {
      const method: VoidFunction = proto[methodName as string];
      bind(socket, on, method, proto);
    }
  }
}
