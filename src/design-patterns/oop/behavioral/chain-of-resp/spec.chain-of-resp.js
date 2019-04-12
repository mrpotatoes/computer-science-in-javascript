import chai, { expect } from 'chai'
import spies from 'chai-spies'

// import { ShoppingCart, Discount } from './chain-of-resp'
import {
  Handler,
  ConcreteHandler1,
  ConcreteHandler2,
} from './chain-of-resp'

chai.use(spies)

describe('./src/design-patterns/oop/behavioral/chain-of-resp', () => {
  describe('Class: Handler', () => {
    it('expects handleRequest() to be called', () => {
      const handler = new Handler()
      handler.handleRequest = chai.spy()
      handler.handleRequest()
      expect(handler.handleRequest).to.have.been.called()
    })
  })

  describe('Class: ConcreteHandler1', () => {
    it('setSuccessor()', () => {
      const handler = new ConcreteHandler1()
      handler.setSuccessor()
      expect(handler.successor).to.equal(undefined)
    })

    it('setSuccessor(something)', () => {
      const handler = new ConcreteHandler1()
      handler.setSuccessor('something')
      expect(handler.successor).to.equal('something')
    })

    it('handleRequest(null)', () => {
      const handler = new ConcreteHandler1()
      const message = handler.handleRequest()
      expect(message).to.equal('just go on forward')
    })

    it('handleRequest(\'lorem ipsum\')', () => {
      const handler = new ConcreteHandler1()
      const message = handler.handleRequest('lorem ipsum')
      expect(message).to.equal('just go on forward')
    })

    it('handleRequest(\'run\')', () => {
      const handler = new ConcreteHandler1()
      const message = handler.handleRequest('run')
      expect(message).to.equal('I do the thing')
    })

    it('setSuccessor() and handleRequest(\'run\')', () => {
      const handler = new ConcreteHandler1()
      handler.setSuccessor(new ConcreteHandler2())
      const message = handler.handleRequest()
      expect(message).to.equal('ConcreteHandler2: undefined')
    })

    it('setSuccessor() and handleRequest(\'run\')', () => {
      const handler = new ConcreteHandler1()
      handler.setSuccessor(new ConcreteHandler2())
      const message = handler.handleRequest('lorem ipsum')
      expect(message).to.equal('ConcreteHandler2: lorem ipsum')
    })
  })
})
