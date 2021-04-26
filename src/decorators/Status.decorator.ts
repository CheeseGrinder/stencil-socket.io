import { ComponentInstance } from '@stencil/router/dist/types/stencil.core';
import { Socket } from 'socket.io-client';


export const Status = (socket: Socket) => (): MethodDecorator => {
  return (proto: ComponentInstance, methodName: string | symbol) => {
    const { connectedCallback } = proto;

    proto.connectedCallback = function() {
      const method = this[methodName as string] as () => any;
      socket.on('connect', method.bind(this, true));
      socket.on('disconnect', method.bind(this, false));
      return connectedCallback && connectedCallback.call(this);
    }
  }
}
