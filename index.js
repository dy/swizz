'use strict';

// generate map
const map = {}

// singles
let swizzles = 'xyzwstpdrgba'.split('')
swizzles.forEach((c, i) => map[c] = i % 4)

// doubles
swizzles.forEach((c1, i1) => swizzles.forEach((c2, i2) => {
  i1 = i1 % 4, i2 = i2 % 4
  let key = c1 + c2
  if (map[key]) return
  map[key] = [i1, i2]
}))

// triples
swizzles.forEach((c1, i1) => swizzles.forEach((c2, i2) => swizzles.forEach((c3, i3) => {
  i1 = i1 % 4, i2 = i2 % 4, i3 = i3 % 4
  let key = c1 + c2 + c3
  if (map[key]) return
  map[key] = [i1, i2, i3]
})))

// quad
swizzles.forEach((c1, i1) => swizzles.forEach((c2, i2) => swizzles.forEach((c3, i3) => swizzles.forEach((c4, i4) => {
  i1 = i1 % 4, i2 = i2 % 4, i3 = i3 % 4, i4 = i4 % 4
  let key = c1 + c2 + c3 + c4
  if (map[key]) return
  map[key] = [i1, i2, i3, i4]
}))))


module.exports = function swizz (array) {
  return new Proxy(array, {
    get(target, name, receiver) {
      if (map.hasOwnProperty(name)) {
        let idx = map[name]
        return typeof idx === 'number' ? target[idx] : idx.map(id => target[id])
      }

      return Reflect.get(target, name, receiver);
    },
    set(target, name, value, receiver) {
      if (map.hasOwnProperty(name)) {
        let idx = map[name]
        if (typeof idx === 'number') return Reflect.set(target, idx, typeof value === 'object' ? value[0] : value, receiver)

        return typeof value === 'object' ? idx.map((id, i) => target[id] = value[i])
          : idx.map(id => target[id] = value)
      }

      return Reflect.set(target, name, value, receiver);
    }
  });
};
