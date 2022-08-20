# inaba

[![Codecov](https://img.shields.io/codecov/c/github/shigma/inaba?style=flat-square)](https://codecov.io/gh/shigma/inaba)
[![downloads](https://img.shields.io/npm/dm/inaba?style=flat-square)](https://www.npmjs.com/package/inaba)
[![npm](https://img.shields.io/npm/v/inaba?style=flat-square)](https://www.npmjs.com/package/inaba)
[![GitHub](https://img.shields.io/github/license/shigma/inaba?style=flat-square)](https://github.com/shigma/inaba/blob/master/LICENSE)

A collection of random utilities.

## Usage

```ts
import Random from 'inaba'

Random.int(0, 10)               // 5
```

## API

### Random.bool(prob)

- **prob:** `number`
- returns: `boolean`

Generates a random boolean value with `prob` chance of being `true`.

### Random.real(lower?, upper)

- **lower:** `number` lower bound, defaults to 0
- **upper:** `number` upper bound
- returns: `number`

Generates a random real number between `lower` (inclusive) and `upper` (exclusive).

### Random.int(lower?, upper)

- **lower:** `number` lower bound, defaults to 0
- **upper:** `number` upper bound
- returns: `number`

Generates a random integer between `lower` (inclusive) and `upper` (exclusive).

### Random.shuffle(array)

- **array:** `T[]`
- returns: `T[]`

Randomly shuffles an array.

### Random.pick(array)

- **array:** `readonly T[]`
- returns: `T`

Randomly picks an element from an array.

### Random.multiPick(array, count)

- **array:** `readonly T[]`
- **count:** `number`
- returns: `T[]`

Randomly picks `count` elements from an array.

### Random.weightedPick(weights)

- **weights:** `Record<T, number>`
- returns: `T`

Randomly picks an element from a dict with weights.
