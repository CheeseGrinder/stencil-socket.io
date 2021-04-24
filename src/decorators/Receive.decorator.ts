import { ComponentInstance } from '@stencil/router/dist/types/stencil.core';
import { Socket } from 'socket.io-client';


export const Receive = (socket: Socket) => (on: string): MethodDecorator => {
  return (proto: ComponentInstance, methodName: string | symbol) => {
    const { componentDidLoad } = proto;

    proto.componentDidLoad = function() {
      const method = proto[methodName as string];
      socket.on(on, method);
      return componentDidLoad && componentDidLoad.call(this);
    }
  }
}
