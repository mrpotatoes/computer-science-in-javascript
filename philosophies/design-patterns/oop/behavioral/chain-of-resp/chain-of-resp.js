export class Handler {
  // Returns a string because returning is dope and makes testing easier. Why
  // don't all functions return? That's right Timmy, because those are bad
  // programmers and they should be removed from their keyboards.
  handleRequest () { }
}

export class ConcreteHandler1 { // extends Handler {
  hasSucessor = () => (this.successor === undefined)

  setSuccessor = (successor) => {
    this.successor = successor
  }

  handleRequest = (request) => {
    let handleMessage = ''

    // console.log('this.hasSucessor()', this.successor === undefined)

    if (request === 'run') {
      handleMessage = 'I do the thing'
    } else if (!this.hasSucessor()) {
      handleMessage = this.successor.handleRequest(request)
    } else {
      handleMessage = 'just go on forward'
    }

    return handleMessage
  }
}

// I'm not going to bother testing this.
export class ConcreteHandler2 extends Handler {
  handleRequest = (request) => (
    `ConcreteHandler2: ${request}`
  )
}

// This is how you know it works lol.
export function initChainofResponsibility () {
  const handle1 = new ConcreteHandler1()
  const handle2 = new ConcreteHandler2()

  // A better way would be to have this as loop.
  handle1.setSuccessor(handle2)
  handle1.handleRequest('run')
  handle1.handleRequest('stay')
}
