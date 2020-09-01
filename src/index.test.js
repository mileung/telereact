import { isObject, deepClone, deepMerge } from '.';

describe('isObject', () => {
  it('says arrays are objects', () => {
    expect(isObject([])).toBe(true);
  });
  it('says object literals are objects', () => {
    expect(isObject({})).toBe(true);
  });
  it('says numbers are not objects', () => {
    expect(isObject(0)).toBe(false);
  });
  it('says strings are not objects', () => {
    expect(isObject('Hello, world!')).toBe(false);
  });
  it('says booleans are not objects', () => {
    expect(isObject(true)).toBe(false);
  });
});

describe('deepClone', () => {
  it('recursively clones an object', () => {
    expect(
      deepClone({
        a: 1,
        b: 2,
        c: { d: 3, e: [1, 2, 3] },
        z: [{ y: 'not', x: { ray: 'man' } }, 'test', 'ing', false, true],
      }),
    ).toEqual({
      a: 1,
      b: 2,
      c: { d: 3, e: [1, 2, 3] },
      z: [{ y: 'not', x: { ray: 'man' } }, 'test', 'ing', false, true],
    });
  });
});

describe('deepMerge', () => {
  it('merges object properties', () => {
    expect(
      deepMerge(
        {
          a: 1,
          b: 2,
          c: {
            c: 'two',
            d: { e: 40 },
          },
          f: [1, 2, 3, 4, 5],
        },
        {
          b: 4,
          z: 4,
          f: ['a', 'b', 'c'],
          c: {
            g: 6,
            d: { h: 'h' },
          },
        },
      ),
    ).toEqual({
      a: 1,
      b: 4,
      c: {
        g: 6,
        d: {
          h: 'h',
          e: 40,
        },
        c: 'two',
      },
      f: ['a', 'b', 'c'], // arrays are not deep merged. I've found this to be ideal for all (of my) cases.
      z: 4,
    });
  });
});
