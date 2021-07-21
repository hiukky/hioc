import { Service } from './types'

export class Container {
  private instances: Map<string, InstanceType<Service>> = new Map()

  register(service: Service): InstanceType<Service> {
    if (!this.instances.has(service.name)) {
      this.instances.set(service.name, new service())
    }

    return this.instances.get(service.name)
  }
}
