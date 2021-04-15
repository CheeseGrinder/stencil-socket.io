export type IoEmitter<T = any> = {
  emit: (value?: T) => void;
}
