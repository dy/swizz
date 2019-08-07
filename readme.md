# swizz [![Build Status](https://travis-ci.org/dy/swizz.svg?branch=master)](https://travis-ci.org/dy/swizz)

Provide swizzles for arrays, like GLSL.

 [![npm install swizz](https://nodei.co/npm/swizz.png?mini=true)](https://npmjs.org/package/swizz/)

```js
import swizzle from 'swizz'

let arr = swizzle([0, 1, 2, 3])

arr.zyx = arr.xyz

arr // [2, 1, 0, 3]
```

Supported swizzles: `xyzw`, `stpd`, `rgba`.
Uses _Proxy_ under the hood.

---

#### Related art

* [swizz](https://ghub.io/swizz)
* [known](https://ghub.io/known)
* [on-change](https://ghub.io/on-change)

#### Refs

* [Metaprogramming with proxies](https://exploringjs.com/es6/ch_proxies.html)

---

HK
