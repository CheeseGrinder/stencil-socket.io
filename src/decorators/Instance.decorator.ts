import { Socket } from 'socket.io-client';


export const Instance = (socket: Socket) => (): PropertyDecorator => {
  return (target: Object, propertyKey: string | symbol) => {
    target[propertyKey] = socket;
  }
}
