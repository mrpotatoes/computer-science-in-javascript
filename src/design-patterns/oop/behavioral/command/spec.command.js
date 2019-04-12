/* eslint-disable no-unused-vars */
import chai, { expect } from 'chai'
import { Invoker, Command, ConcreteCommand, Receiver, initCommand } from './command'

describe('./src/design-patterns/oop/behavioral/command', () => {
  describe('Class: Invoker', () => {
    it('command is null', () => {
      const invoker = new Invoker()
      expect(invoker.command).to.equal(undefined)
    })

    it('command equals "lorem ipsum"', () => {
      const invoker = new Invoker()
      invoker.storeCommand('lorem ipsum')
      expect(invoker.command).to.equal('lorem ipsum')
    })
  })

  describe('Class: Command', () => {
    it('expects command.execute() method to be called', () => {
      const command = new Command()
      command.execute = chai.spy()
      command.execute()
      expect(command.execute).to.have.been.called()
    })
  })

  describe('Class: Receiver', () => {
    it('expects reciever.action() to be called.', () => {
      const receiver = new Receiver()
      receiver.action = chai.spy()
      receiver.action()
      expect(receiver.action).to.have.been.called()
    })
  })

  describe('Class: ConcreteCommand', () => {
    it('', () => {
      // const cc = new ConcreteCommand()
      // handler.handleRequest = chai.spy()
      // handler.handleRequest()
      // expect(handler.handleRequest).to.have.been.called()
    })
  })

  describe('initCommand()', () => {
    it('', () => {
      // const handler = new Handler()
      // handler.handleRequest = chai.spy()
      // handler.handleRequest()
      // expect(handler.handleRequest).to.have.been.called()
    })
  })
})
