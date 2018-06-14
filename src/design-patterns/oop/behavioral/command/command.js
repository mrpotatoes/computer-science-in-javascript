/* eslint-disable no-unused-vars */

export class Invoker {
  storeCommand = (command) => {
    this.command = command
  }
}

export class Command {
  // eslint-disable-next-line
  constructor () {
  }

  execute = () => {
  }
}

export class Receiver {
  // eslint-disable-next-line
  constructor() {
  }

  action = () => {
  }
}

export class ConcreteCommand extends Command {
  constructor (receiver, state) {
    super()
    this.receiver = receiver
  }

  execute = () => {
    this.receiver.action()
  }
}

export const initCommand = () => {
  const invoker = new Invoker()
  const receiver = new Receiver()
  const command = new ConcreteCommand(receiver)

  invoker.StoreCommand(command)
  invoker.command.Execute()
}
