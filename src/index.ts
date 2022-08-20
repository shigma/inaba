interface Random {
  id(length?: number, radix?: number): string
  bool(probability: number): boolean
  /**
   * random real
   * @param lower lower bound (inclusive)
   * @param upper upper bound (exclusive)
   * @returns a random real in the interval [lower, upper)
   */
  real(upper: number): number
  real(lower: number, upper: number): number
  /**
   * random integer
   * @param lower lower bound (inclusive)
   * @param upper upper bound (exclusive)
   * @returns a random integer in the interval [lower, upper)
   */
  int(upper: number): number
  int(lower: number, upper: number): number
  splice<T>(source: T[]): T
  pick<T>(source: readonly T[]): T
  pick<T>(source: readonly T[], count: number): T[]
  shuffle<T>(source: readonly T[]): T[]
  weightedPick<T extends string>(weights: Readonly<Record<T, number>>): T
}

namespace Random {
  export interface Static extends Random {
    chars: string
    new (get?: () => number): Random
  }
}

class Random {
  static chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

  constructor(private get = Math.random) {}

  id(length = 8, radix = 16) {
    let result = ''
    for (let i = 0; i < length; ++i) {
      result += Random.chars[Math.floor(Math.random() * radix)]
    }
    return result
  }

  bool(probability: number) {
    if (probability >= 1) return true
    if (probability <= 0) return false
    return this.get() < probability
  }

  real(...args: [number, number?]): number {
    const lower = args.length > 1 ? args[0] : 0
    const upper = args[args.length - 1]
    return this.get() * (upper - lower) + lower
  }

  int(...args: [number, number?]): number {
    return Math.floor(this.real(...args))
  }

  splice<T>(source: T[]) {
    return source.splice(Math.floor(this.get() * source.length), 1)[0]
  }

  pick<T>(source: readonly T[], count?: number) {
    if (count === undefined) return this.pick(source, 1)[0]
    const copy = source.slice()
    const result: T[] = []
    count = Math.min(copy.length, count)
    for (let i = 0; i < count; i += 1) {
      result.push(this.splice(copy))
    }
    return result
  }

  shuffle<T>(source: readonly T[]) {
    return this.pick(source, source.length)
  }

  weightedPick<T extends string>(weights: Readonly<Record<T, number>>): T {
    const total = Object.entries(weights).reduce((prev, [, curr]) => prev + (curr as number), 0)
    const pointer = this.get() * total
    let counter = 0
    for (const key in weights) {
      counter += weights[key]
      if (pointer < counter) return key
    }
  }
}

const instance = new Random()

for (const key of ['id', 'bool', 'int', 'real', 'splice', 'pick', 'shuffle', 'weightedPick']) {
  Random[key] = instance[key].bind(instance)
}

export = Random as Random.Static
