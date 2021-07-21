export type KeyOf<T> = T extends infer A ? keyof A : string

export interface Service extends Function {
  new (...args: any[]): any
}

export type ServiceFrom<P extends Record<string, Service>> = {
  [K in KeyOf<P> as Uncapitalize<K>]: InstanceType<P[K]>
}
