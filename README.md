<div align="center">
  <img src="./assets/banner.png"/>
  <p>Helper to use socket.io on StencilJS</p>

  <a href="https://github.com/CheeseGrinder/stencil-socket.io">
    <img src="https://img.shields.io/github/license/CheeseGrinder/stencil-socket.io"/>
  </a>
  <a href="https://github.com/CheeseGrinder/stencil-socket.io">
    <img src="https://img.shields.io/npm/dm/stencil-socket.io"/>
  </a>
  <a href="https://github.com/CheeseGrinder/stencil-socket.io">
    <img src="https://github.com/CheeseGrinder/stencil-socket.io/actions/workflows/npm-publish.yml/badge.svg"/>
  </a>
  
</div>

## Description 📄
<p>Stencil-socket.io is a helper for using <a href="https://socket.io/">socket.io</a> with Stencil</p>

## Install 📦️
```bash
npm i stencil-socket.io
```

## How to use ✏️

In the shared directory, create a file with the following code :
```ts
// socket.ts
import { StencilSocket } from 'stencil-socket.io';

export const socket = StencilSocket('foo.bar');
```

In component:
```tsx
import { Component, h, State } from '@stencil/core';
import { Emmiter } from 'stencil-socket.io';
import { socket } from 'shared/socket';

@Component({
  tag: 'some-component'
})
export class SomeComponent {

  @State() data: number = 0;

  @socket.Emit('socket:event') emmiter: Emmiter<number>;

  @socket.Receive('socket:event') onReceive(data: number): void {
    this.data = data;
  }

  private emit() {
    this.emmiter.emit(this.data);
  }

  render() {
    // Render a beautiful component
  }
}
```
