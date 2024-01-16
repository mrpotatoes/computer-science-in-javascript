class Soldier {
  constructor (level) {
    this.level = level
  }

  attack () {
    return this.level * 1
  }
}

class Jedi {
  constructor (level) {
    this.level = level
  }

  attackWithSaber = () => (
    this.level * 100
  )
}

class JediAdapter {
  constructor (jedi) {
    this.jedi = jedi
  }

  attack = () => (
    this.jedi.attackWithSaber()
  )
}

export { Soldier, Jedi, JediAdapter }
