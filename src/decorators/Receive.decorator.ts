import { ComponentInstance } from '@stencil/router/dist/types/stencil.core';
import { Socket } from 'socket.io-client';

export function IoReceive(on: string): MethodDecorator {
  return (proto: ComponentInstance, methodName: string | symbol) => {
    const { render } = proto;
    proto.render = function() {
      const renderResult = render.call(this);
      const method = proto[(methodName) as string];
      const socketKey = Object.keys(proto)[0];
      const socket = proto[socketKey] as Socket;
      socket.on(on, method);
      return renderResult;
    }
  }
}