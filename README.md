# inaba

[![Codecov](https://img.shields.io/codecov/c/github/shigma/inaba?style=flat-square)](https://codecov.io/gh/shigma/inaba)
[![downloads](https://img.shields.io/npm/dm/inaba?style=flat-square)](https://www.npmjs.com/package/inaba)
[![npm](https://img.shields.io/npm/v/inaba?style=flat-square)](https://www.npmjs.com/package/inaba)
[![GitHub](https://img.shields.io/github/license/shigma/inaba?style=flat-square)](https://github.com/shigma/inaba/blob/master/LICENSE)

A collection of random utilities.

## Usage

```ts
import Random from 'inaba'

Random.bool(0.8)                // gets a random boolean
Random.shuffle([5, 1, 4])       // randomly shuffles an array

// use custom random function
const random = new Random(() => Math.random())
random.int(0, 10)               // gets a random integer
random.pick([1, 2, 3])          // picks a random element from an array
```

## API

### new Random(callback)

- **callback:** a random function returning [0, 1)
- **returns:**

Creates a random generator with custom random function.

### Random.bool(probability)

- **probability:** `number`
- **returns:** `boolean`

Generates a random boolean value with `probability` chance of being `true`.

### Random.real(lower?, upper)

- **lower:** `number` lower bound, defaults to 0
- **upper:** `number` upper bound
- **returns:** `number`

Generates a random real number between `lower` (inclusive) and `upper` (exclusive).

### Random.int(lower?, upper)

- **lower:** `number` lower bound, defaults to 0
- **upper:** `number` upper bound
- **returns:** `number`

Generates a random integer between `lower` (inclusive) and `upper` (exclusive).

### Random.pick(array, count?)

- **array:** `readonly T[]`
- **count:** `number`
- **returns:** `T | T[]`

If `count` is not provided, returns a random element from `array`; otherwise returns an array of `count` random elements from `array`.

### Random.shuffle(array)

- **array:** `T[]`
- **returns:** `T[]`

Randomly shuffles an array. It is equivalent to `.pick(array, array.length)`.

### Random.weightedPick(weights)

- **weights:** `Record<T, number>`
- **returns:** `T`

Randomly picks a key from a dict, using corresponding value as weight.
