import { ComponentInstance } from '@stencil/router/dist/types/stencil.core';
import { Socket } from 'socket.io-client';
import { getSocketKey } from '../utils/socketKey';

export function IoReceive(on: string): MethodDecorator {
  return (proto: ComponentInstance, methodName: string | symbol) => {
    const { componentDidLoad } = proto;

    proto.componentDidLoad = function() {
      const method = proto[methodName as string];
      const socketKey = getSocketKey(proto);
      const socket: Socket = proto[socketKey];
      socket.on(on, method);
      return componentDidLoad && componentDidLoad.call(this);
    }
  }
}
